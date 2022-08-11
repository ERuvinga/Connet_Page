let btn_login = document.querySelector("#btn_login");
let btn_singup = document.querySelector("#btn_singup");
let btn = document.querySelector("#btn");

const Form_login = document.querySelector("#login");
const Form_singup = document.querySelector("#singup");
    

btn_login.onclick = ()=>{
    btn.style.left="0px";
   //pour les blocs
   Form_login.style.left= "20px";
   Form_singup.style.left= "420px";


}
btn_singup.onclick= ()=>{
    btn.style.left="50%";
    // pour le bloc
    Form_login.style.left= "-400px";
    Form_singup.style.left= "20px";
}