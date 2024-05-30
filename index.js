// //Bên trong sẽ là code javascript
// //Các lệnh nhâp xuất
// //Lệnh xuất
// console.log("hello cybersoft");
// console.error("lỗi cú pháp !");
// console.warn("cảnh báo bảo mật !");
// console.info("thông tin website");
// //Lệnh nhập
// // prompt('Nhập vào họ tên: ');
// //Biến: Dùng để lưu trữ giá trí và tái sử dụng
// //Cách đặt tên biến: tên biến phải có y nghĩa
// /* 
// Cách đặt tên biến:
//     +  Tên biến phải có ý nghĩa
//     +  Tên biến không được bắt đầu từ số hay ký tự đặt biệt hoặc từ khóa javascript
//     +  Đặt tên biến dạng camelCase : tienBien
// */
// let titleHeader = "Bootcamp frontEnd 70";
// console.log(titleHeader);
// console.log(titleHeader);
// console.log(titleHeader);
// console.log(titleHeader);
// /*
// Kiểu dữ liệu: 
//     + string (chuỗi): Chứa các giá trị không tính toán (họ tên, email, số điện thoại, ...)
//     + number (số): Chứa các giá trrij tính toán (Lương, điểm số, mã đơn vị, ...)
// ngoài ra còn có boolean, null, undefine
// */
// let hoTen = "Nguyễn Văn A";
// let luong = 1000000;
// //typeof dùng để xem kiểu dữ liệu của biến
// console.log(typeof hoTen);
// console.log(typeof luong);
// /*
// Toán tử trong javascript
//     + Toán tử số học (+ - * / %)
// */
// let luong1Ngay = 10;
// let soNgayLamViec = 30;
// let tongLuong = luong1Ngay * soNgayLamViec;
// // let a = 1, b=2;
// //a,b = 1,2
// //a = 1
// //b = 2

// console.log('Tổng tiền lương: ', tongLuong, "USD");
// let result = 10 % 3;
// console.log(result);
// // var result = 10 * 3;
// // console.log(result);

// let soHang1 = 5;
// let soHang2 = 10;
// console.log('Tổng =',soHang1 + soHang2);
// console.log('Hiệu =',soHang1 - soHang2);
// console.log('Tích =',soHang1 * soHang2);
// console.log('Thương =', soHang1 / soHang2);
// console.log('Dư =', soHang1 % soHang2);
// //Các phép tính tiền tố hậu tố
// // soHang1 = soHang1 + 1
// // console.log(soHang1)
// console.log(++soHang1) // Tính tồi mới log

// // console.log(soHang2);
// // soHang2 = soHang2 + 1
// console.log(soHang2++); // log rồi mới tính
// // console.log(soHang2);

// soHang1 += 5;  //tương đương: soHang1 = soHang1 + 5
// soHang2 -= 5;  //tương đương: soHang2 = soHang1 - 5
// soHang2 *= 5;  //tương đương: soHang2 = soHang1 * 5
// soHang2 /= 5;  //tương đương: soHang2 = soHang1 / 5

// //Phép xử lý trên chuỗi
// let fullName = 'Nguyễn Văn Tèo';
// let mess = 'Hello ' + fullName; //Phép nối chuỗi
// let mess2 = 'Hello '.concat(fullName);
// console.log(mess2);
// console.log(mess);
// let mess3 = `Hello ${fullName} đã đến với cybersoft !`; //template string
// console.log(mess3)

// //Phép ép kiểu
// let res = Number('5') + Number('5'); // '5' => 5
// console.log(res)

// //Lệnh nhập:

// let hoTenNguoiNhap = prompt('Nhập vào họ tên:');
// // console.log(`Chào bạn ${hoTenNguoiNhap} đã đến với hệ thống dữ liệu của chúng tôi !`)

// //Lệnh xuất:

// document.write(`Chào bạn ${hoTenNguoiNhap} đã đến với hệ thống dữ liệu của chúng tôi !`)