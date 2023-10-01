// DOM - Document Object Model
// Selecting elements on a page
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

// Changing css properties 
view1.style.display = "flex";
view2.style.display = "none";

// Select by class name (HTMLCollection)
const views = document.getElementsByClassName("view");
console.log(views);
// Select by class name (node list)
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

// Select all divs in view1 element 
const divs = view1.querySelectorAll("div");
console.log(divs);
// Samething but with HTMLCollection rather than 
// nodelist
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

// Select just the even divs in view1 element
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
// Altering elements via selection and css modification
for (let i = 0; i < evenDivs.length; ++i){
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
// Insert/alter HTML via .innerHTML()
navbar.innerHTML = '<h1>Hello!</h1> <p>This should align right</p>';
console.log(navbar);
navbar.style.justifyContent = "space-between";

// Navigating the DOM/HTML tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

// Removing and adding elements to the DOM
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
// Removing all children (including nodes) from views
while (view2.lastChild){
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};

//createDivs(view2, 10);
for (let i = 1; i <= 12; ++i){
    createDivs(view2, i);
}