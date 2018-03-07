function clickHandler(event) {
    var operators = ['*', '/', '+', '-', '=']
    // console.log('click', event.target.innerText);
    var visibleNum
    if (!operators.includes(event.target.innerText)) {
        document.querySelector('.input').innerText = visibleNum + event.target.innerText;
    }
    else { Number(visibleNum);
        eval(event.target.innerText);
        
        }





    }





function handleNumber(str) {
    var clickedNum



}

function handleOperator()








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
document.querySelector('#b7').addEventListener('click', clickHandler)
document.querySelector('#b2').addEventListener('click', clickHandler)
document.querySelector('#b3').addEventListener('click', clickHandler)
document.querySelector('#b0').addEventListener('click', clickHandler)
document.querySelector('#bis').addEventListener('click', clickHandler)