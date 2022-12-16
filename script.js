
const btn = document.getElementById("button");


btn.addEventListener('click', ()=> {
    let height_status = false
    let weight_status = false
    const bodymass = document.getElementById("bodymass");
    const status = document.getElementById("status");
    var height =  parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);


    if (height === '' || isNaN(height) || (height <= 0)) {
        document.querySelector('.height_error').innerHTML = "Enter a valid height!"

    }else {
        height_status = true;
        document.querySelector('.height_error').innerHTML = ""
    }

    if (weight === '' || isNaN(weight) || (weight <= 0)) {
        document.querySelector('.weight_error').innerHTML = "Enter a valid weight!"

    }else {
        weight_status = true;
        document.querySelector('.weight_error').innerHTML = ""
    }

    if (height_status && weight_status) {
        const answer = (weight / ((height * height) / 10000)).toFixed(2)
        
         if(answer < 18.6){
            bodymass.innerHTML =  answer
            document.querySelector("#status").innerHTML = "You are Under Weight😳"
         }else if (answer >= 18.6 && answer < 24.9){
            bodymass.innerHTML =  answer
            document.querySelector("#status").innerHTML = "Your weight is Normal😍"
         }else {
            bodymass.innerHTML =  answer
            document.querySelector("#status").innerHTML = "You are Over Weight😱"
         }
    }else{
        alert("Enter a valid value")
    }
    
})
