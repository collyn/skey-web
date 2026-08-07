# skey-web

Mã nguồn trang web giới thiệu và hướng dẫn sử dụng cho [Skey - bộ gõ tiếng Việt tốt nhất cho Linux](https://github.com/collyn/skey).

## Giới thiệu

Trang web giúp người dùng dễ dàng tra cứu cách cài đặt, cấu hình và xem hướng dẫn chi tiết các tính năng của Skey trên các hệ điều hành Linux (Ubuntu, Arch, Fedora...).

- Trang web: https://collyn.github.io/skey-web/
- Bộ gõ chính (Skey): https://github.com/collyn/skey

## Chạy dự án ở local

Yêu cầu đã cài đặt [Bun](https://bun.sh/).

Khởi chạy web server ở máy local:

```bash
bun x serve .
```

## Cấu trúc thư mục

```text
.
├── index.html    # Trang chủ
├── style.css     # CSS
├── script.js     # Script xử lý giao diện
└── README.md
```

## License

Dự án sử dụng chung giấy phép mã nguồn mở với [skey](https://github.com/collyn/skey).
