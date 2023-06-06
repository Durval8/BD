let t_btn = document.getElementById('nextPage');
const form = document.getElementById("newRoom")
let create_btn = document.getElementById('createRoom')
const clientSelect = document.getElementById('client');
const typeSelect = document.getElementById('typeProduct');
const styleSelect = document.getElementById('style');
// console.log(localStorage.getItem('employeeID'))
let id = localStorage.getItem("employeeID")
fetch("http://127.0.0.1:5004/clients", {
    method: 'POST',
    headers: {
              'Content-Type': 'application/json'
          },
    body: JSON.stringify({employee: id})
}).then(response => response.json()).then(clients =>{
    
  clients.forEach(client => {
    const option = document.createElement('option');
    option.value = client.Person_NIF
    option.textContent = client.IName
    clientSelect.appendChild(option)
  })
})

    fetch("http://127.0.0.1:5004/styles", {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({employee: localStorage.getItem('employeeID')})
    }).then(response => response.json()).then(styles =>{

    styles.forEach(style => {
        const option = document.createElement('option');
        option.value = style.Style_Code
        option.textContent = style.IName
        styleSelect.appendChild(option)
    })
    })

    fetch("http://127.0.0.1:5004/typeProduct", {
        method: 'GET',
    }).then(response => response.json()).then(ts =>{

    ts.forEach(t => {
        const option = document.createElement('option');
        option.value = t.CodeType
        option.textContent = t.TypeName
        typeSelect.appendChild(option)
    })
    })

create_btn.addEventListener('click', () => {
    const formData = new FormData(form)
    const data = {
        name: '\'' + formData.get('name') + '\'',
        area: formData.get('area'),
        height: formData.get('height'),
        style: styleSelect.value,
        client: clientSelect.value,
        designer: id,
        type: typeSelect.value
    }
    fetch("http://127.0.0.1:5004/post_room", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
})

// t_btn.addEventListener('click', () => {
//     window.location.href = "addProductsRoom.html"
//   })
  
