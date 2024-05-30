//Yêu cầu: Viết chương trình nhập vào username vaf password bất kì, hiển thị trên trình duyệt = document.write với nội dung sau: Chào mừng username là đến với hẹ thống học tập cybersoft.

// input: iserName(str), password(str)
let userName = prompt('Nhập tên vào userName: ');
let passWord = prompt('Nhập vào password:');
//output: ketQua(str)
let ketQua = '';
//process:
ketQua = `Chào mừng ${userName} đã đến với hệ thống học tập cybersoft `;
//In output ra màn hình
document.write(ketQua);