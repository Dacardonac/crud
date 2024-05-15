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
let idParaActualizar

index(coders, tbody);

form.addEventListener("submit", function (event) {

    if (idParaActualizar === undefined) {
        createCoderForm(nameCoder, lastNameCoder, emailCoder, coders)
        showSmallAlertSUcces("Saved")
    } else {
        for (const coder of coders) {
            if (coder.id == idParaActualizar) {
                coder.name = nameCoder.value 
                coder.lastName = lastNameCoder.value 
                coder.email = emailCoder.value 
            }
        }

        showSmallAlertSUcces("update")
    }

    index(coders, tbody)
    event.preventDefault()
    form.reset()
})

form.addEventListener('submit', function (event) {

    if (form.checkValidity()) {
        create(name, lastName, email, coders);
        showSmallAlertSuccess("Saved");

    };
    form.reset();
    index(coders, tbody);
    event.preventDefault();
});

table.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-danger')) {
        let idDelete = Number(event.target.getAttribute('data-id'))
        deleteItem(coders, idDelete)
        showSmallAlertSUcces("Eliminado correctamente")
        index(coders, tbody)

    }
    if (event.target.classList.contains("btn-warning")) {
        idParaActualizar = event.target.getAttribute('data-id')
        //vamos a buscar el usuario en la base de datos de manera declarativa
        let userFound = coders.find(coder => coder.id == idParaActualizar)


        //pintar los datos nuevamente en el formulario
        nameCoder.value = userFound.name
        lastNameCoder.value = userFound.lastName
        emailCoder.value = userFound.email
        console.log(userFound);
    }
})