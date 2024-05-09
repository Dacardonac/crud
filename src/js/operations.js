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
            <td><button type="reset" data-id="${coder.id}" class="btn btn-danger" id="btn-cancel">Delete</button></td>
        </tr>
        
        `);
    });
};

export function create(coders, name, lastName, email) {
    const tempCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    };
    coders.push(tempCoder);
};