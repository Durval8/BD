const clientSelect = document.getElementById('client');
let delete_btn = document.getElementById('delete');


fetch("http://127.0.0.1:5004/getclients", {
    method: 'GET',
    }).then(response => response.json()).then(clients =>{

    clients.forEach(client => {
    const option = document.createElement('option');
    option.value = client.Person_NIF
    option.textContent = client.IName
    clientSelect.appendChild(option)
    })
})

function deleteClient(){
    console.log("FFFFF")
    const data = {client: clientSelect.value}
    console.log(data)
    fetch("http://127.0.0.1:5004/deleteClient", {
       method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    });
}

// delete_btn.addEventListener('click', () => {
//     console.log("FEWPK*")
//     fetch("http://127.0.0.1:5004/deleteClient", {
//         method: 'POST',
//         headers: {
//                 'Content-Type': 'application/json'
//             },
//         body: JSON.stringify({client: clientSelect.value})
//     })
// })