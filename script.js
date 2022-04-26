let fromCurrency=document.querySelectorAll('#input_amount')
let toCurrency=document.querySelectorAll('#output_amount')
let result1=document.querySelector('#result-1');
let result2=document.querySelector('#result-2');
let btnDiv1=document.querySelector('#btn-div-1');
let btnDiv2=document.querySelector('#btn-div-2');
let val1='RUB';
let val2='USD';
let dotChange1=fromCurrency.value;
let dotChange2=toCurrency.value;
let kurs1,kurs2;
updateRates()

async function updateRates(){
try{
    if(val1===val2){
        toCurrency.addEventListener("input",_=>{
            fromCurrency.value=toCurrency.value;
        });
        fromCurrency.addEventListener("input",_=>{
            toCurrency.value=fromCurrency.value;
        });
        result1.innerText=`1 ${val1}=1.000 ${val2}`;
        result2.innerText=result1.innerText;
        toCurrency.value=fromCurrency.value;
    }else{ 
        const val1ToVal2 = await fetch(`https://api.exchangerate.host/latest?base=${val1}&symbols=${val2}`); 
        const val1ToVal2Json = await val1ToVal2.json(); 
         
        kurs1 = val1ToVal2Json.rates[val2]; 
        result1.innerText = `1 ${val1} = ${kurs1} ${val2}`; 
         
        const val2ToVal1 = await fetch(`https://api.exchangerate.host/latest?base=${val2}&symbols=${val1}`); 
        const val2ToVal1Json = await val2ToVal1.json(); 
        kurs2 = val2ToVal1Json.rates[val1].toFixed(4); 
        result2.innerText = `1 ${val2} = ${kurs1} ${val1}`; 

        toCurrency.value = (kurs1 * fromCurrency.value).toFixed(4); 
        fromCurrency.addEventListener("input",_=>{ 
            toCurrency.value = (kurs1 * fromCurrency.value).toFixed(4); 
        }); 
        toCurrency.addEventListener("input",_=>{ 
            fromCurrency.value = (kurs2 * toCurrency.value).toFixed(4); 
        }) 
     
    }
}
catch(err){
console.log(err)
}
}

btnDiv1.querySelectorAll("button").forEach(item=>{
    item.addEventListener("click", _=>{
        val1=item.innerText;
        updateRates();
    })
})
btnDiv2.querySelectorAll("button").forEach(item=>{
    item.addEventListener("click", _=>{
        val2=item.innerText;
        updateRates();
    })
})

fetch(`https://api.exchangerate.host/latest?base`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    dotChange1=dotChange1.replaceAll(',','.')
Object.keys(data.rates)
});
