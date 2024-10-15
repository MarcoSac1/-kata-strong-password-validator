const inputText = document.getElementById('inputText');
const char = document.getElementById('char');
const upper = document.getElementById('upper');
const number = document.getElementById('number');
const special = document.getElementById('special');



inputText.onfocus = function() {
    document.getElementById("message").style.display = "block";
    }   

inputText.onkeyup = function(){
    
    // validate length
    if(inputText.value.length >= 9){
        char.classList.remove('invalid');
        char.classList.add('valid');
    }else{
        char.classList.remove('valid');
        char.classList.add('invalid');
    }

    // validate uppercase
    const upperCaseLetters = /[A-Z]/g;
    if(inputText.value.match(upperCaseLetters)){
        upper.classList.remove('invalid');
        upper.classList.add('valid');
    }else{
        upper.classList.remove('valid');
        upper.classList.add('invalid');
    }

    // validate numbers
    const numbers = /[0-9]/g;
    if (inputText.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // validate special
    const specials = /[!\-"#$%&'()*+,.\/:;<=>?@[\]\^_`{|}~\\]/g;
    if (inputText.value.match(specials)) {
        special.classList.remove('invalid');        
        special.classList.add('valid');
    }else{
        special.classList.remove('valid');
        special.classList.add('invalid');
    }
}




