import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { coders } from '../../public/data/database.js'
import { index, create } from './operations.js'
import { showSmallAlertSuccess } from './alerts.js'

const tbody = document.querySelector("tbody");
const table = document.querySelector("table");
const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

index(coders, tbody);

form.addEventListener('submit', function (event) {

    if (form.checkValidity()) {
        create(name, lastName, email, coders);
        showSmallAlertSuccess("Saved");

    };
    form.reset();
    index(coders, tbody);
    event.preventDefault();
});

table.addEventListener('click', function () {
    
});

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

