const view1 = document.querySelector("#view1");
view1.style.display = "none";

// Syntax: addEventListener(event , function, useCapture)
// If useCapture is set to true, then it works from the outer
// to the inner most event.

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        // Would launch app/website when web page fully loaded
        initApp();
    }
});

// const initApp = () => {
//     // JavaScript Event Listeners
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");
//     view.style.display = "flex";

//     // Anonymous functions cannot be removed
//     // event.target is the element that the event is acting on
//     view.addEventListener("click", (event) => {
//         // classList changes the elements class pertaining to its
//         // css code.
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");
//     });

//     div.addEventListener("click", (event) => {
//         div.classList.toggle("blue");
//         div.classList.toggle("black");
//     });

//     h2.addEventListener("click", (event) => {
//         const myText = event.target.textContent;
//         myText === "My 2nd View" 
//             ? event.target.textContent = "Clicked"
//             : event.target.textContent = "My 2nd View";
//     });

//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) =>{
//         event.target.classList.add("height100");
//     });
//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100");
//     });
// };

const initApp = () => {
    const view3 = document.querySelector("#view3");
    view3.style.display = "flex";
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        // Prevents reload of page
        event.preventDefault();
        console.log("submit event");
    });
}