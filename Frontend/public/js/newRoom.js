let t_btn = document.getElementById('nextPage');
const form = document.getElementById("newRoom")
let create_btn = document.getElementById('createRoom')
const clientSelect = document.getElementById('client');
const typeSelect = document.getElementById('typeProductButtons');
const styleSelect = document.getElementById('styleButtons');
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
    })
    .then(response => response.json())
    .then(styles =>{
        styles.forEach(style => {
            let child = document.createElement('div');
            child.innerHTML = `<div>
                <div onclick="window.location.href='/pocaralho'">
                    ${style.IName} - ${style.Style_Code}
                </div>
            </div>`
            styleButtons.appendChild(child);
        })
    })

    fetch("http://127.0.0.1:5004/typeProduct", {
        method: 'GET',
    }).then(response => response.json()).then(ts =>{

    ts.forEach(t => {
        const option = document.createElement('button');
        option.value = t.CodeType
        option.innerText = t.TypeName
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

document.getElementById("ww").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  console.log("WWW")
    // Get the search term from the input field
    var searchTerm = document.getElementById("searchInputStyle").value;
    const data = {
        table: Design_Style,
        input: searchTerm,
        id: localStorage.getItem('employeeID')
    }
    fetch("http://127.0.0.1:5004/search", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(styles =>{

    styles.forEach(style => {
        const option = document.createElement('button');
        option.value = style.Style_Code
        option.innerText = style.IName
        styleSelect.appendChild(option)
    }) 
});
})
// t_btn.addEventListener('click', () => {
//     window.location.href = "addProductsRoom.html"
//   })
  
