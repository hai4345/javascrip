/*
        Try xuất đến thẻ thông qua id thẻ
        Cú pháp: document.getElementById('id_Thẻ')
 */

//.innerHTML; Phần nội dung giữa 2 thẻ dống mở

// document.getElementById('txt').innerHTML = 'Hello cybersoft';

let tagP = document.getElementById('txt');
tagP.innerHTML = 'abc';

//.className: phần class trên thẻ
tagP.className = 'bg-dark text-white p-3';

//.value(đối với các thẻ input): lấy giá trị hoặc gán giá trị.
let tagInput = document.getElementById('input-text');
console.log(tagInput.value)

tagInput.value = 'Ahihi'

//.src
let tagImg = document.getElementById('hinh');
tagImg.src = '/img/2560x1440.jpg'

//.style (css): thay đổi css của thẻ = js
let tagDiv = document.getElementById('content');
tagDiv.style.background = 'red';
tagDiv.style.fontSize = '30px';
tagDiv.style.padding = '15px 30px';