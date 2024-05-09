// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { coders } from '../../public/data/database.js'
import { index, create } from './operations.js'

const tbody = document.querySelector("tbody");
const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

form.addEventListener('submit', function (event) {
    create(coders, name, lastName, email);
    form.reset();
    event.preventDefault();
    index(coders, tbody);
});

index(coders, tbody);

// //eliminar coder por el id
// coders.forEach(coder => {
//     if (coder.id == 2) {
//         coders.splice(coders.indexOf(coder), 1)
//     }
// })
// //mostrar en consola 
// console.log(coders);

// //mostrar en html
// index(coders, tbody)

