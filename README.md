# skey-web

Đây là trang web hướng dẫn sử dụng và giới thiệu cho [Skey bộ gõ tiếng Việt tốt nhất cho Linux](https://github.com/collyn/skey).

## 📌 Giới thiệu

`skey-web` là dự án web giúp người dùng trải nghiệm, tra cứu cú pháp và xem hướng dẫn cài đặt / cấu hình cho công cụ gõ tiếng Việt `skey`.

- **Mã nguồn bộ gõ chính (Core Engine):** [https://github.com/collyn/skey](https://github.com/collyn/skey)
- **Trang web chính thức:** [https://collyn.github.io/skey-web/](https://collyn.github.io/skey-web/)

---

## 🚀 Tính năng của Web Hướng Dẫn

- **Hướng dẫn cài đặt & cấu hình:** Chi tiết các bước thiết lập `skey` trên các hệ điều hành.
- **Tra cứu phím tắt & tính năng:** Danh sách đầy đủ các phím tắt, bảng mã và tùy chọn của `skey`.

---

## 🛠 Cấu trúc dự án Web

```text
.
├── index.html        # Trang giao diện chính
├── style.css         # Styling giao diện
├── script.js         # Logic tương tác và xử lý gõ demo trên web
└── README.md         # Tài liệu dự án
```

---

## 💻 Phát triển cục bộ (Local Development)

Yêu cầu đã cài đặt [Bun](https://bun.sh/).

Bạn có thể chạy server phát triển cục bộ bằng Bun:

```bash
# Chạy static server bằng Bun
bun x serve .
```

---

## 📜 Giấy phép (License)

Dự án tuân theo giấy phép mã nguồn mở của [skey](https://github.com/collyn/skey).
