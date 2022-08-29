const select = document.getElementById('select');
let paragrft = document.querySelector(".nameproduct")

select.addEventListener('click', () => {
   paragrft.textContent = select.value;
})



let elLable1 = document.querySelector('.lable1');
let elLable2 = document.querySelector('.lable2');
let elLable3 = document.querySelector('.lable3');
let elLableResult = document.querySelector('.productSize');


elLable1.addEventListener('click', () => {
   elLable1.classList.toggle('active');
   elLable2.classList.remove('active');
   elLable3.classList.remove('active');
   elLableResult.textContent = elLable1.textContent.trim();
});

elLable2.addEventListener('click', () => {
   elLable2.classList.toggle('active');
   elLable1.classList.remove('active');
   elLable3.classList.remove('active');
   elLableResult.textContent = elLable2.textContent.trim();
});



elLable3.addEventListener('click', () => {
   elLable3.classList.toggle('active');
   elLable1.classList.remove('active');
   elLable2.classList.remove('active');
   elLableResult.textContent = elLable3.textContent.trim();
});

let elCheckbox = document.querySelector('#chekd');
let chekdone = document.querySelector('#chekdone');
let chekdtwo = document.querySelector('#chekdtwo');
let chekdthree = document.querySelector('#chekdthree');
let chekdfour = document.querySelector('#chekdfour');
let chekdfive = document.querySelector('#chekdfive');
let chekdsix = document.querySelector('#chekdsix');
let chekdsevn = document.querySelector('#chekdsevn');
let elOnTop = document.querySelector('.onTop');
let elustigam = document.querySelector('.addition');



elCheckbox.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "pomidor";
   newLi.classList.toggle('activee')
   console.log(newLi.textContent);
});



chekdone.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "Kutka go'sht";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});


chekdtwo.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "Zaytun";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});


chekdthree.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "Tuzlangab bodring";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});


chekdfour.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "Qo'ziqorin";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});


chekdfive.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elOnTop.appendChild(newLi);
   newLi.textContent = "Qazi";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});

chekdsix.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elustigam.appendChild(newLi);
   newLi.textContent = "Achiq";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});

chekdsevn.addEventListener('click', () => {
   let newLi = document.createElement('li');
   elustigam.appendChild(newLi);
   newLi.textContent = "sosiskali";
   newLi.classList.toggle('activee');
   console.log(newLi.textContent);
});


//Modal 
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.querySelector(".close");


btn.addEventListener('click', () => {
   modal.style.display = "block";
});

span.addEventListener

span.addEventListener('click', () => {
   modal.style.display = "none";
   alert("tanlovingiz uchun tashakur yoqimli ishtaha")
});



window.addEventListener('submit', function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
});