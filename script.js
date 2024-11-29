let display = document.getElementById("Display")

function appedToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){

       display.style.fontSize="40px" 
       display.value = "Mawa Chusi Kottu";
    }
    
}

