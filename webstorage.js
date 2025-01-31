let password=document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gen =document.getElementsByName("gender");

check.addEventListener("click" ,event=>{
    if(event.target.checked == true){
        password.setAttribute("type", "text");
        show.innerText = "hide password" ;
    }else{
        password.setAttribute("type", "password");
        show.innerText = "show password";
    }
})

FormData.addEventListener("submit",event=>{
    event.preventDefault();
    letun
})