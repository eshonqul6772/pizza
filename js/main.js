const select = document.getElementById('select');
let paragrft = document.querySelector(".nameproduct")
let elLable = document.querySelector(".lable")
let productSize = document.querySelector(".productSize")

let arr = ["25sm", "30sm", "35sm"];





elLable.addEventListener('click', function () {
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
})


select.addEventListener('click', () => {
   paragrft.textContent = select.value;
})



let allInput = document.querySelector('.allInput')
let kindproduct = document.querySelector('kindproduct') 


allInput.addEventListener('click', function(evt){
   evt.preventDefault();
   kindproduct.textContent = allInput.value;

});



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

