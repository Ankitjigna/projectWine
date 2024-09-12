let btn=document.querySelector("button");
// btn.addEventListener(("Onclick"),()=>{
//     console.log("button was clicked");
    
// })

btn.addEventListener(("click"),redirect);
function redirect(){
    window.location="login.html";
}
let loginBtn=document.querySelector("#loginBtn");
// loginBtn.addEventListener(("click"),redirect(()=>{
//     window.location="lgn.html";
// }))
loginBtn.addEventListener(("click"),()=>{
    console.log("button was clicked!!")
    window.location="lgn.html"
})

let signBtn=document.querySelector("#signBtn");
signBtn.addEventListener(("click"),()=>{
    console.log("button was clicked!!")
    window.location="sign.html"
})