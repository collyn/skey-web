# Changelog

## [1.0.0] - 2026-08-07

### Added
- Created [package.json](file:///media/voidthrum/nvme1n1p1/code/skey-web/package.json) with Vite support for local development, hot reload, and preview.
- Added [.gitignore](file:///media/voidthrum/nvme1n1p1/code/skey-web/.gitignore) to exclude `node_modules` and build output `dist`.
- Added dynamic version fetching from GitHub Releases API (`https://api.github.com/repos/collyn/skey/releases/latest`) in [script.js](file:///media/voidthrum/nvme1n1p1/code/skey-web/script.js).
- Added `data-skey-version` attribute to version badges in [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html) so all version displays update automatically.
- Added 5 screenshots of SKey Settings GUI to the end of the settings section in [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html).
- Added dynamic **Contributors** section in sidebar navigation fetching contributors list from `https://api.github.com/repos/collyn/skey/contributors`.
- Added Schema.org `SoftwareApplication` JSON-LD structured data in [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html).

### Fixed & Updated
- Updated code block/terminal block styling in [style.css](file:///media/voidthrum/nvme1n1p1/code/skey-web/style.css) from heavy dark black to a modern soft light gray (`#f8fafc` content, `#e2e8f0` header) to reduce harsh visual contrast.
- Optimized On-Page SEO in [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html) for primary keywords `SKey bộ gõ Tiếng Việt tốt nhất cho Linux` and `gõ tiếng Việt không gạch chân cho Linux`.
- Removed `max-width` constraint on `.main-content` in [style.css](file:///media/voidthrum/nvme1n1p1/code/skey-web/style.css) to restore full-width fluid layout.
- Renamed all image files in [images/](file:///media/voidthrum/nvme1n1p1/code/skey-web/images/) and references in [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html) to include SEO prefix `skey-bo-go-tieng-viet-linux-tot-nhat-`.
- Redesigned entire CSS design system in [style.css](file:///media/voidthrum/nvme1n1p1/code/skey-web/style.css) to Modern Flat UI aesthetics matching royal blue palette (`#1d68d8`).

### Logic Flow & Dependencies
- Style tokens: [style.css](file:///media/voidthrum/nvme1n1p1/code/skey-web/style.css) (Modern Flat UI, `#1d68d8` primary brand color, soft gray terminal blocks)
- SEO & Schema: [index.html](file:///media/voidthrum/nvme1n1p1/code/skey-web/index.html)
- Images directory: [images/](file:///media/voidthrum/nvme1n1p1/code/skey-web/images/)
- Sidebar: `#sidebar-contributors` element populated by `fetchContributors()` in [script.js](file:///media/voidthrum/nvme1n1p1/code/skey-web/script.js).
- Dynamic version: `data-skey-version` elements updated by `fetchLatestVersion()` in [script.js](file:///media/voidthrum/nvme1n1p1/code/skey-web/script.js).
