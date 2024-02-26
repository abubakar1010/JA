function validate (){
    const doc = document.getElementById("field")

    //default validation by JavaScript
    if(!doc.checkValidity()){
        //document.getElementById('demo').innerText = doc.validationMessage
    }

    // custom validation 

    if( doc.validity.rangeOverflow){
        doc.setCustomValidity("you have made rangeOverFlow error")
    }else if( doc.validity.rangeUnderflow){
        doc.setCustomValidity("you have made rangeUnderflow error")
    }else if( doc.validity.valueMissing){
        doc.setCustomValidity("you have made valueMissing error")
    }else if( doc.validity.valueMissing){
        doc.setCustomValidity("you have made valueMissing error")
    }

    if(!doc.checkValidity()){
        document.getElementById('demo').innerText = doc.validationMessage
    }
}