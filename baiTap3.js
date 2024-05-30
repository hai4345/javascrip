// Bài tập 3: Viết chương trình cho phép người dùng nhập điểm toán, lý, hóa yêu cần tính điểm trung bình 3 môn của học viên và in ra màn hình kết quả tương ứng.

let toan = +prompt('Nhập điểm toán: ');
let ly = +prompt('Nhập điểm ly: ');
let hoa = +prompt('Nhập điểm hoa: ');

let diemTrungBinh = 0;

diemTrungBinh = (toan + ly + hoa) / 3;
diemTrungBinh = diemTrungBinh.toFixed(2);

document.write(`Điểm Trung Bình = ${diemTrungBinh}`);