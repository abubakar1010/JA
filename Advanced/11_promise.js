const myPromise = new Promise(function (resolve, reject) {
  //do an async task

  /**
   * DB call
   * network call
   */

  setTimeout(() => {
    console.log("Async tasked init");
    resolve();
  }, 1000);
});

myPromise.then(function () {
  console.log("promised consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");

    resolve();
  }, 1000);
}).then(function () {
  console.log("async resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ user: "Osman", email: "user@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "Omar", password: 125 });
    } else {
      reject("ERROR: nothing is wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (received) {
    console.log(received);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally( () => console.log('promise either resolved or rejected'))


  const promiseFive = new Promise( function (resolve, reject){

    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({user: "JSON", pass: "API"})
        } else {
            reject('ERROR: 404 API through this issue')
        }
    }, 1000);
  })

  async function asyncPromise(){

    try {
        const response = await promiseFive
        console.log(response.user);
    } catch (error) {
        console.log(error);
        
    }
  }

  asyncPromise()