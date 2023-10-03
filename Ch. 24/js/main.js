// Modules
// import playGuitar from "./guitars.js"; //"./" is a reletive path
// import {shredding as shred, plucking as fingerpicking} from "./guitars.js";
import * as Guitars from "./guitars.js";
import User from "./user.js";
const me = new User("email@email.com", "Sami");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
