const cardNumber = document.getElementById('number')
const numberInp = document.getElementById('card_number')

const cardName = document.getElementById('name')
const nameInp = document.getElementById('card_name')

const cardMonth = document.getElementById('month')
const monthInp = document.getElementById('card_month')

const cardYear = document.getElementById('year')
const yearInp = document.getElementById('card_year')

const cardCvc = document.getElementById('cvc')
const cvcInp = document.getElementById('card_cvc')

const submit = document.getElementById('submit')

const complet = document.querySelector('.thank')
const form = document.querySelector('form')

const end = document.getElementById('finalizado')

function setcardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setcardName(e) {
    cardName.innerText = e.target.value;
}
function setcardMonth(e) {
    cardMonth.innerText = e.target.value;
}
function setcardYear(e) {
    cardYear.innerText = e.target.value;
}
function setcardCvc(e) {
    cardCvc.innerText = e.target.value;
}
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g,"$&")
}

function handleSubmit(e) {
    e.preventDefault()
    if (!nameInp.value){
        nameInp.classList.add('error')
        nameInp.parentElement.classList.add('error_message')
    }
    else {
        nameInp.classList.remove('error')
        nameInp.parentElement.classList.remove('error_message')
    }
    if (!numberInp.value){
        numberInp.classList.add('error')
        numberInp.parentElement.classList.add('error_message')
    }
    else {
        numberInp.classList.remove('error')
        numberInp.parentElement.classList.remove('error_message')
    }
    if (!monthInp.value){
        monthInp.classList.add('error')
        monthInp.parentElement.classList.add('error_message')
    }
    else {
        monthInp.classList.remove('error')
        monthInp.parentElement.classList.remove('error_message')
    }
    if (!yearInp.value){
        yearInp.classList.add('error')
        yearInp.parentElement.classList.add('error_message')
    }
    else {
        yearInp.classList.remove('error')
        yearInp.parentElement.classList.remove('error_message')
    }
    if (!cvcInp.value){
        cvcInp.classList.add('error')
        cvcInp.parentElement.classList.add('error_message')
    }
    else {
        cvcInp.classList.remove('error')
        cvcInp.parentElement.classList.remove('error_message')
    }
    if(nameInp.value&&numberInp.value&&monthInp.value&&yearInp.value&&cvcInp.value){
        complet.classList.remove('hidden')
        form.classList.add('hidden')
    }
}

function voltar() {
    location.href = 'index.html';
}

numberInp.addEventListener('keyup', setcardNumber)
nameInp.addEventListener('keyup', setcardName)
monthInp.addEventListener('keyup', setcardMonth)
yearInp.addEventListener('keyup', setcardYear)
cvcInp.addEventListener('keyup', setcardCvc)
submit.addEventListener('click', handleSubmit)
end.addEventListener('click', voltar)