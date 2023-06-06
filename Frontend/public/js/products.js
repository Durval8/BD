const form = document.getElementById('addProduct')
console.log(localStorage.getItem("employeeID"))
// const roomSelect = document.getElementById('room');
const roomSelect = document.getElementById('room')
const productSelect = document.getElementById('product')
const add_btn = document.getElementById('add')
let selectedRoom = 0
fetch("http://127.0.0.1:5004/rooms", {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({employee: localStorage.getItem('employeeID')})
}).then(response => response.json()).then(rooms =>{

rooms.forEach(room => {
    const option = document.createElement('option');
    option.value = room.id
    option.textContent = room.IName
    roomSelect.appendChild(option)
})
})

roomSelect.addEventListener('click', () => {
    selectedRoom = roomSelect.value
    productSelect.innerHTML = ""
    if(roomSelect.value != 0){
        console.log(selectedRoom)
        fetch("http://127.0.0.1:5004/products", {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({room: selectedRoom})
        }).then(response => response.json()).then(products =>{

        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.CodeProduct
            option.textContent = product.IName
            productSelect.appendChild(option)
})
})
    }
})

add_btn.addEventListener('click', () => {
    console.log(productSelect.value + "   W WWWW   " + roomSelect.value)
    const data = {
        productCode: productSelect.value,
        roomCode: roomSelect.value
    };
    console.log(data)
    fetch("http://127.0.0.1:5004/has", {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })
})