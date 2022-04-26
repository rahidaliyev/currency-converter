let btn1=document.querySelectorAll("#btn-div-1 button");
let btn2=document.querySelectorAll("#btn-div-2 button");

btn1.forEach(item=>{
    item.addEventListener("click",_=>{
        btn1.forEach(item=>{
            item.style.backgroundColor="#E5E5E5";
        })
        item.style.backgroundColor="#833ae0";
    })
   
})
btn2.forEach(item=>{
    item.addEventListener("click",_=>{
        btn2.forEach(item=>{
            item.style.backgroundColor="#E5E5E5";
        })
        item.style.backgroundColor="#833ae0";
    })
   
})
