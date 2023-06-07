var selectedRoom = null;
// // const form = document.getElementById('addProduct')
// console.log(localStorage.getItem("employeeID"))
// // const roomSelect = document.getElementById('room');
// const roomSelect = document.getElementById('room')
// const productSelect = document.getElementById('product')
// const add_btn = document.getElementById('add')
// let selectedRoom = 0
// fetch("http://127.0.0.1:5004/rooms", {
//     method: 'POST',
//     headers: {
//             'Content-Type': 'application/json'
//         },
//     body: JSON.stringify({employee: localStorage.getItem('employeeID')})
// }).then(response => response.json()).then(rooms =>{

// rooms.forEach(room => {
//     const option = document.createElement('option');
//     option.value = room.id
//     option.textContent = room.IName
//     roomSelect.appendChild(option)
// })
// })

// roomSelect.addEventListener('click', () => {
//     selectedRoom = roomSelect.value
//     productSelect.innerHTML = ""
//     if(roomSelect.value != 0){
//         console.log(selectedRoom)
//         fetch("http://127.0.0.1:5004/products", {
//             method: 'POST',
//             headers: {
//                     'Content-Type': 'application/json'
//                 },
//             body: JSON.stringify({room: selectedRoom})
//         }).then(response => response.json()).then(products =>{

//         products.forEach(product => {
//             const option = document.createElement('option');
//             option.value = product.CodeProduct
//             option.textContent = product.IName
//             productSelect.appendChild(option)
// })
// })
//     }
// })

// add_btn.addEventListener('click', () => {
//     console.log(productSelect.value + "   W WWWW   " + roomSelect.value)
//     const data = {
//         productCode: productSelect.value,
//         roomCode: roomSelect.value
//     };
//     console.log(data)
//     fetch("http://127.0.0.1:5004/has", {
//         method: 'POST',
//         headers: {
//                 'Content-Type': 'application/json'
//             },
//         body: JSON.stringify(data)
//     })
// })

function selectRoom(roomId) {
    if (selectedRoom === roomId) {
      selectedRoom = null;
    } else {
      selectedRoom = roomId;
    }
  
    // Highlight the selected room (apply styling or any other visual indication)
    var roomButtons = document.getElementsByTagName("button");
    for (var i = 0; i < roomButtons.length; i++) {
      var button = roomButtons[i];
      if (button.innerText.startsWith(selectedRoom)) {
        button.style.backgroundColor = selectedRoom ? "lightblue" : "";
      } else {
        button.style.backgroundColor = "";
      }
    }
  }
  
fetch("http://127.0.0.1:5004/rooms", {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({employee: localStorage.getItem('employeeID')})
}).then(response => response.json())
.then(data => {
  displayRoomList(data);
})
.catch(error => {
  console.error("Error:", error);
});

function displayRoomList(rooms) {
    var roomList = document.getElementById("roomList");
    roomList.innerHTML = "";
  
    if (rooms.length === 0) {
      roomList.innerText = "No rooms available.";
      return;
    }
  
    rooms.forEach(function(room) {
      var li = document.createElement("li");
  
      var button = document.createElement("button");
      button.innerText = room.IName
      button.addEventListener("click", function() {
        selectRoom(room.id);
      });
  
      li.appendChild(button);
      roomList.appendChild(li);
    });
  }