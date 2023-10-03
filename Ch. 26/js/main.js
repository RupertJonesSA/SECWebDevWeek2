// Fetch API requires a discussion of...
// Callbacks, promises, thenables, and async/await

// Promises

// 3 states: pending, fullfilled, rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = true
//     if (error){
//         resolve("Yes! resolved the promise");
//     }else{
//         reject("No! rejected the promise");
//     }
// });

// const myNextPromise = new Promise((resolve, reject) => {
// setTimeout(function() {
//         resolve("myNextPromise resolved");
//     }, 3000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
//  });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// // pending
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         })
//     });

// console.log(users);

// Asnc / Await

// 2nd parameter of Fetch is an object

// maybe from a form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstname=${requestData.firstName}&
    lastName=${requestData.lastName}&limitTo=${requestData.catergories}`
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postToWebPage(joke);
}

const postToWebPage = (data) => {
    console.log(data);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl); 
    console.log("finished");
}

processJokeRequest();