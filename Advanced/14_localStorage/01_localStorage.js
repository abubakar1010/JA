console.log(localStorage.getItem('hello'))

//note: this is not allow without browser

const user = {
    name: 'omar',
    age: 18,
    title:'Chief of Kingdom'
}


document.getElementById('btn').addEventListener('click',function(){

    localStorage.setItem('language','C Sharp')
    localStorage.setItem('User Details',JSON.stringify(user))
})

