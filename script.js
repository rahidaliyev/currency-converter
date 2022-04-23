
let fromRubl = document.querySelector("#btn1");
let fromUsd = document.querySelector("#btn2");
let fromEur = document.querySelector("#btn3");
let fromGbp = document.querySelector("btn4");
let toRubl = document.querySelector("#btn5");
let toUsd = document.querySelector("#btn6");
let toEur = document.querySelector("#btn7");
let toGbp = document.querySelector("btn8");

fromRubl.addEventListener("click",myFunc);
fromUsd.addEventListener("click",myFunc);
fromEur.addEventListener("click",myFunc);
fromGbp.addEventListener("click",myFunc);
toRubl.addEventListener("click",myFunc);
toUsd.addEventListener("click",myFunc);
toEur.addEventListener("click",myFunc);
toGbp.addEventListener("click",myFunc);
console.log(btn1.value)
function myFunc(){
   const inputValue=btn1[0];
   const outputValue=btn2[1];
   fetch(`https://api.exchangerate.host/latest?base=${inputValue}&symbols=${outputValue}`)
   .then(res => res.json())
   .then(res=>{
    const new_rate = res.rates[outputValue];
    rate.innerText = `1 ${inputValue} = ${new_rate} ${outputValue}`
   })
}


myFunc()
