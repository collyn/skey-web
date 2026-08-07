// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Copy to Clipboard
  const copyBtns = document.querySelectorAll('.copy-btn');
  
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Find the sibling pre code element
      const codeBlock = btn.closest('.code-block');
      if (codeBlock) {
        const codeElement = codeBlock.querySelector('pre code');
        if (codeElement) {
          const textToCopy = codeElement.textContent;
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.textContent;
            btn.textContent = 'Đã copy!';
            btn.classList.add('copied');
            
            setTimeout(() => {
              btn.textContent = originalText || 'Copy';
              btn.classList.remove('copied');
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
        }
      }
    });
  });

  // 2. Scroll Spy (Active Menu Item)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    rootMargin: '-20% 0px -70% 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to corresponding link
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 3. Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  if (hamburger && sidebar && sidebarOverlay) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      hamburger.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
    });
    
    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
    
    // Close sidebar on nav-link click (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          hamburger.classList.remove('active');
          sidebarOverlay.classList.remove('active');
        }
      });
    });
  }

  // 4. Distro Tabs — scoped per tab group
  const distroTabGroups = document.querySelectorAll('.distro-tabs');
  
  distroTabGroups.forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.distro-tab');
    // Find sibling .distro-content elements (following siblings of this tab group)
    const parentSection = tabGroup.closest('section') || tabGroup.parentElement;
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        
        // Only affect tabs and content within the same parent section
        const siblingContents = parentSection.querySelectorAll(
          `.distro-content`
        );
        const siblingTabs = tabGroup.querySelectorAll('.distro-tab');
        
        // Deactivate all sibling content and tabs
        siblingContents.forEach(content => {
          // Only reset content that belongs to this tab group
          const contentBelongsToGroup = Array.from(siblingTabs).some(
            t => t.getAttribute('data-target') === content.id
          );
          if (contentBelongsToGroup) {
            content.classList.remove('active');
          }
        });
        siblingTabs.forEach(t => t.classList.remove('active'));
        
        // Activate target
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add('active');
        }
        tab.classList.add('active');
      });
    });
  });

  // 5. Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Allow default behavior for external links or empty href
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href;
      if (targetId !== '#') {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 6. Image placeholder for missing screenshots
  // When images fail to load (user hasn't added them yet), show a
  // styled placeholder with the alt text instead of a broken icon.
  const screenshots = document.querySelectorAll('figure.screenshot img, figure.screenshot-inline img');
  
  screenshots.forEach(img => {
    img.addEventListener('error', () => {
      const placeholder = document.createElement('div');
      placeholder.className = 'img-placeholder';
      placeholder.textContent = img.alt || 'Screenshot';
      placeholder.style.cssText = `
        min-height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #e2e8f0;
        border-radius: 4px;
        background: #f8fafc;
        color: #94a3b8;
        font-size: 0.85rem;
        text-align: center;
        padding: 1.5rem;
      `;
      img.replaceWith(placeholder);
    });
  });

  // 7. Auto Fetch Latest Version from GitHub Releases API
  async function fetchLatestVersion() {
    try {
      const response = await fetch('https://api.github.com/repos/collyn/skey/releases/latest');
      if (!response.ok) return;
      const data = await response.json();
      const latestTag = data.tag_name;
      if (latestTag) {
        document.querySelectorAll('[data-skey-version]').forEach(el => {
          el.textContent = latestTag;
        });
      }
    } catch (error) {
      console.error('Failed to fetch latest version tag:', error);
    }
  }

  fetchLatestVersion();

  // 8. Auto Fetch Contributors from GitHub API
  async function fetchContributors() {
    const sidebarContainer = document.getElementById('sidebar-contributors');
    const gridContainer = document.getElementById('contributors-grid');

    try {
      const response = await fetch('https://api.github.com/repos/collyn/skey/contributors');
      if (!response.ok) return;
      const contributors = await response.json();

      if (Array.isArray(contributors) && contributors.length > 0) {
        // Populate Sidebar mini list
        if (sidebarContainer) {
          sidebarContainer.innerHTML = contributors.map(user => `
            <a href="${user.html_url}" target="_blank" rel="noopener" class="contributor-item">
              <img src="${user.avatar_url}" alt="${user.login}" class="contributor-avatar">
              <span class="contributor-name">${user.login}</span>
            </a>
          `).join('');
        }

        // Populate Main Content section grid
        if (gridContainer) {
          gridContainer.innerHTML = contributors.map(user => `
            <a href="${user.html_url}" target="_blank" rel="noopener" class="contributor-card">
              <img src="${user.avatar_url}" alt="${user.login}" class="contributor-card-avatar">
              <div class="contributor-card-info">
                <span class="contributor-card-name">${user.login}</span>
                <span class="contributor-card-contributions">${user.contributions} đóng góp (commits)</span>
              </div>
            </a>
          `).join('');
        }
      }
    } catch (error) {
      console.error('Failed to fetch contributors:', error);
    }
  }

  fetchContributors();
});


