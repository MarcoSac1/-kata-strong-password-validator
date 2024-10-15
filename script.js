const inputText = document.getElementById('inputText');
const char = document.getElementById('char');
const  upper = document.getElementById('upper');
const  number = document.getElementById('number');
const  special = document.getElementById('special');



inputText.onfocus = function() {
    document.getElementById("message").style.display = "block";
    }   

inputText.onkeyup = function(){
    
    if(inputText.value.length >= 9){
        char.classList.remove('invalid');
        char.classList.add('valid');
    }else{
        char.classList.remove('valid');
        char.classList.add('invalid');
    }

    const lowerCaseLetters = /[A-Z]/g;
    
    if(inputText.value.match(lowerCaseLetters)){
        upper.classList.remove('invalid');
        upper.classList.add('valid');
    }else{
        upper.classList.remove('valid');
        upper.classList.add('invalid');
    }

    cons
}




