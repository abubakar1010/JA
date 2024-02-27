// fetch try catch syntax

async function fetching(){

    try {
        const url = await fetch('https://api.github.com/users/abubakar1010')
        const data = await url.json()
        console.log(data);
    } catch (error) {
        console.log("ERROR!");
    }
}

fetching()

//fetch .then .catch syntax

fetch('https://api.github.com/users/abubakar1010/repos')

.then( function(response){
    // console.log(response);
    return response.json()
})
.then( (dataReceivedFromThen) => {
    console.log(dataReceivedFromThen);
})
.catch( (error) => {
    console.log(error);
})
.finally( () => {
    console.log("Data Received");
})