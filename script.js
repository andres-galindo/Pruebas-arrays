let modal = document.querySelector(".modal");
let items = document.querySelectorAll(".items");
let inombre = document.querySelector(".inombre");
let bregistro = document.querySelector(".registro");
let bcancelar = document.querySelector(".cancelar");
let nombre = document.querySelectorAll(".nombre");
let bliberar = document.querySelectorAll(".liberar");
let bcrear = document.querySelectorAll(".crear");
let indice;

bcrear.forEach((crear, i)=>{
    bcrear[i].addEventListener("click", ()=>{
        modal.classList.toggle("activo");
        indice = i;
        items[i].style.background = "red";
    })
});
bregistro.addEventListener("click", ()=>{
    nombre[indice].innerText = inombre.value;
    inombre.value = "";
    modal.classList.toggle("activo");
});

bliberar.forEach((liberar, i)=>{
    bliberar[i].addEventListener("click", ()=>{
        nombre[i].innerText = "";
        items[i].style.background = "wheat";
    })
});

bcancelar.addEventListener("click", ()=>{
    modal.classList.toggle("activo");
    items[indice].style.background = "wheat";
})
