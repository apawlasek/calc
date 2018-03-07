// function clickHandler(event){
//     console.log('click', event.target.innerText);
//     document.querySelector('.input').innerText = event.target.innerText;
// }

    var firstNum = ''
    var secondNum = ''
    var operator = ''
    var operation = []
    var result
    var output = document.querySelector('.output').innerText
   
function clickHandler(event) {
    var operators = ['*', '/', '+', '-', '=']
    if (!operators.includes(event.target.innerText) && operator === '') {
        firstNum = firstNum.concat(event.target.innerText);
        document.querySelector('.input').innerText = firstNum;
        output = output + firstNum;
        
    }
    else if (operators.includes(event.target.innerText) && event.target.innerText !== '='&& firstNum !== '') {
        operator = event.target.innerText;
    }
    else if (!operators.includes(event.target.innerText) && operator !== '') {
            secondNum = secondNum.concat(event.target.innerText);
        document.querySelector('.input').innerText = secondNum;
    }
    else if (event.target.innerText === '=') {
        operation.push(firstNum, operator, secondNum);
        result = eval(operation.join(''));
        document.querySelector('.input').innerText = result;
        firstNum=result;
        operator='';
        secondNum='';
        operation=[];

    }
}



document.querySelector('#b7').addEventListener('click', clickHandler)
document.querySelector('#b8').addEventListener('click', clickHandler)
document.querySelector('#b9').addEventListener('click', clickHandler)
document.querySelector('#bmulti').addEventListener('click', clickHandler)
document.querySelector('#bdiv').addEventListener('click', clickHandler)
document.querySelector('#b4').addEventListener('click', clickHandler)
document.querySelector('#b5').addEventListener('click', clickHandler)
document.querySelector('#b6').addEventListener('click', clickHandler)
document.querySelector('#badd').addEventListener('click', clickHandler)
document.querySelector('#bsub').addEventListener('click', clickHandler)
document.querySelector('#b1').addEventListener('click', clickHandler)
document.querySelector('#b2').addEventListener('click', clickHandler)
document.querySelector('#b3').addEventListener('click', clickHandler)
document.querySelector('#b0').addEventListener('click', clickHandler)
document.querySelector('#bis').addEventListener('click', clickHandler)