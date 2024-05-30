//Bài tập 2: Viết chương trình cho phép người dùng nhập vào luong1NgayLamViec và soNgayLamViec. Yêu cầu tính tổng lương và in ra màn hình. Ví dụ: lương 1 ngày là 10 đồng làm 28 ngày => in ra màn hình Tổng lương = 280 đồng


//Tất cả giá trị lấy từ input chương trinh sẽ hiểu là chuỗi -> cần phải ép kiểu về số để tính toán

let luong1NgayLam = Number( prompt('Nhập lương 1 ngày làm việc: '));
let soNgayLamViec = Number( prompt('Số ngày làm việc')) ;

let tongLuong = 0;

tongLuong = luong1NgayLam * soNgayLamViec // có đươc input

document.write(`Tổng lương = ${tongLuong} `);