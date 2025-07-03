// Dom - Document object modeling
// Bom - Brouser object modeling

// selection html{
// 1) Tag 
// 2) Class
// 3) Id
// }

// selectorlarga ulanish
// Dom va Bom


// let wrapper = document.querySelector('.wrapper')

// wrapper.innerHTML = `
// <div class="flex items-center justify-between w-2/4 border border-primary  rounded-md px-4 py-2" >
//     <img class=" w-20 h-20 rounded-full"  src="https://pikuco.ru/upload/test_stable/9f0/9f0d0ee7b1460eda2914688fa7d52a77.webp" alt="">
//     <h2 class="text-lg text-primary">Odil</h2>
//     <p  class="text-lg text-primary">Figmachi</p>
//     <p  class="text-lg text-success">active</p>

// </div>
// `

let userName = prompt('Ismingizni kiriting')
let userSurname = prompt('Familiyangizni kiriting')
let userNickname = prompt('Taxalusingizni kiriting')
let userAge = prompt('Yoshingizni kiriting')

let userInfo = document.querySelector('.user_info')

userInfo.innerHTML = `
    <h3>Ism: ${userName}</h3>
    <h3>Familiya: ${userSurname}</h3>
    <h3>Taxalusi: ${userNickname}</h3>
    <h3>Yoshi: ${userAge}</h3>

`
 