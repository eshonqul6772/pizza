const select = document.getElementById('select');
let paragrft = document.querySelector(".nameproduct")
let elLable = document.querySelector(".lable")
let productSize = document.querySelector(".productSize")

let arr = ["25sm", "30sm", "35sm"];






for (let i = 0; i < arr.length; i++) {

   if (arr.length[0] == elLable.value) {
      productSize.textContent = "25sm"

   } else if (arr.length[1] == elLable.value) {
      productSize.textContent = "30sm"
   }
   else if (arr.length[3] == elLable.value) {
      productSize.textContent = "35sm"
   }
}

elLable.addEventListener('click', function () {
   
})


select.addEventListener('click', () => {
   paragrft.textContent = select.value;
})






//Modal 
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


btn.addEventListener('click', () => {
   modal.style.display = "block";
});

span.addEventListener('click', () => {
   modal.style.display = "none";
   alert("tanlovingiz uchun tashakur yoqimli ishtaha")
});

window.addEventListener('submit', function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
});

