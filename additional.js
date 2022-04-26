let btn1=document.querySelectorAll("#btn-div-1 input");
let btn2=document.querySelectorAll("#btn-div-2 input");

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
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
