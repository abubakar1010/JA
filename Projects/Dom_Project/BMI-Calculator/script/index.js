const form = document.getElementById('input-form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#result')

    console.log(height, weight, result);

    if( height <= 0 || height === "" || isNaN(height)){
        result.innerHTML = 'Please provide a valid height'
    }else if(weight <= 0 || weight === "" || isNaN(weight)){
        result.innerHTML = 'Please provide a valid weight'
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `your bmi is${bmi}`
    }
})