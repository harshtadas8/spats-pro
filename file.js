let upload= document.querySelector(".up");

upload.onclick= ()=>{
    console.log("Hello");
}

upload.addEventListener("click", ()=>{
    upload.innerText= "Congratulations, your data is uploaded";

})