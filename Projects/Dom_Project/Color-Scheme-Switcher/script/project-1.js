const button = document.querySelectorAll(".button")

// console.log(button);

const body = document.querySelector("body")

// console.log(body);

button.forEach( function(button){
    button.addEventListener("click", function(changeBg){
        switch (changeBg.target.id) {
            case "hotpink":

            body.style.backgroundColor = changeBg.target.id
                
                break;
            case "green":

            body.style.backgroundColor = changeBg.target.id
                
                break;
            case "yellow":

            body.style.backgroundColor = changeBg.target.id
                
                break;
            case "blue":

            body.style.backgroundColor = changeBg.target.id
                
                break;


        
            default:  body.style.backgroundColor = "white"
                break;
        }
    })
})