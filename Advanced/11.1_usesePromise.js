// using .this and .catch method

const FirstPromise = new Promise( function (resolve, reject){

    setTimeout(function(){

        const error = false;
        if (!error) {
            resolve({
                user: "Omar",
                id: 122887,
                isLoggedIn: false,
                solution: [ 'Array', 'Sorting', 'Destructuring', 'Class', 'Closure','Promise'],
                classMates: {
                    college:[ 'shawon',"sohel"],
                    school:['Abdullah', 'Emon', "Mahedy"]
                }
            })
        } else {
            reject("ERROR: User is delete his account")
        }
    },1000)
})

FirstPromise
.then( function(response){

    console.log(response);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('either through resolved or rejected');
})

// handle using async await and try cath process 

 const SecondPromise = new Promise( function (resolve, reject){

   setTimeout(function(){

        const error = true;

        if (!error) {
            resolve({user: "xyz", pass: 124})
        } else {
            reject('ERROR')
        }
    })
 },2200)

// async function anotherApproach(){

async function check(){

    try {
        const responses = await SecondPromise
        console.log(responses);
    } catch (error) {
        console.log(error);
    }
}

check()