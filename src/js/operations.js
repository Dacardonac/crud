// Funciones

export function index(coders, tbody) {
    tbody.innerHTML = ``;
    coders.forEach(coder => {
        tbody.innerHTML += (`
        
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td>
                <button type="button" data-id="${coder.id}" class="btn btn-warning">Detalles</button>
                <button type="button" data-id="${coder.id}" class="btn btn-primary">Editar</button>
                <button type="reset"  data-id="${coder.id}" class="btn btn-danger" id="btn-cancel">Delete</button>
            </td>
        </tr>
        
        `);
    });
};

export function create(name, lastName, email, coders) {
    const tempCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    };

    coders.push(tempCoder);
};