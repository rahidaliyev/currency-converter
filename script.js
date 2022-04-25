let fromCurrency=document.querySelectorAll('#btn-div-1')
let toCurrency=document.querySelectorAll('#btn-div-2')
console.log(btn1.value)
async function myFunc(){
   inputValue.forEach(element => {
       element
   });
   
   const outputValue=btn2[1];
   fetch(`https://api.exchangerate.host/latest?base=${inputValue}&symbols=${outputValue}`)
   .then(res => res.json())
   .then(res=>{
    const new_rate = res.rates[outputValue];
    rate.innerText = `1 ${inputValue} = ${new_rate} ${outputValue}`
   })
}


myFunc()
