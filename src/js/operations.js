// Funciones

export function listWithInnerHTML(coders, tbody) {
    coders.forEach(coder => {
        tbody.innerHTML += (`
        
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
        </tr>
        
        `);
    });
};
