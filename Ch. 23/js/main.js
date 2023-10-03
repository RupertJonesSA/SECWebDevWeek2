// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via global variable: window

// We do not have to type window. It is implied

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Sami",
    hobbies: ['eat', 'sleep', 'code'],
    logName: function(){
        console.log(this.name);
    }
};

// Set and stores data as JSON
// Local storage is persistant (storage lasts even when website closed).
// Session storage is temporary. 
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// or you can localStorage.clear();
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData = JSON.parse(sessionStorage.getItem("myLocalStore"));

console.log(storeLength);