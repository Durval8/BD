const form = document.getElementById('newClient');
let register_btn = document.getElementById('register');
let t_btn = document.getElementById('nextPage');
const firmSelect = document.getElementById('firm');
const employeeSelect = document.getElementById('employee');
let selectedFirm = 0;
let selectedEmployee = 0;
firmSelect.innerHTML = ""


// Add event listener to the firm select element
firmSelect.addEventListener('click', () => {
  selectedFirm = firmSelect.value;  // Get the selected value of the firm
  // Use the selected value as needed
  employeeSelect.innerHTML=""
  if(selectedFirm != 0){
    const data = {firm: selectedFirm}
    console.log(JSON.stringify(data))

    fetch("http://127.0.0.1:5004/employees", {
      method: 'POST',
      headers: {
				'Content-Type': 'application/json'
			},
      body: JSON.stringify({firm: selectedFirm})
  }).then(response => response.json()).then(employees =>{
    console.log(employees)

    employees.forEach(employee => {
      const option = document.createElement('option');
      option.value = employee.EmployeeCode
      option.textContent = employee.IName
      employeeSelect.appendChild(option)
    })
  })
  }
  console.log('Selected firm:', selectedFirm);
});

register_btn.addEventListener('click', (event) => {
    event.preventDefault();
    selectedEmployee = employeeSelect.value
    const formData = new FormData(form);
    console.log(selectedEmployee)
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      phone: formData.get('phone'),
      nif: formData.get('nif'),
      budget: formData.get('budget'),
      firm: selectedFirm,
      employee: selectedEmployee
      // style: styleSelect.value
    };
    fetch("http://127.0.0.1:5004/post_register_client", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
      localStorage.clear()
      console.log("CLELEL")
      localStorage.setItem("employeeID", selectedEmployee)
      console.log(localStorage.getItem('employeeID'))
      console.log("EKEKRKRK")
      
    })
    .catch(error => console.error('An error occurred while registering:', error));
})

t_btn.addEventListener('click', () => {
  window.location.href = "createRoom.html"
})

fetch("http://127.0.0.1:5004/firms", {
        method: "GET"
    }).then(response =>response.json()).then(firms =>{
      
      console.log(firms)
      // const firmSelect = document.getElementById('firm');
    // Populate the select element with the fetched firms
      firms.forEach(firm => {
        const option = document.createElement('option');
        option.value = firm.NIF;  // Assuming each firm has an 'id' property
        option.textContent = firm.IName;  // Assuming each firm has a 'name' property
        firmSelect.appendChild(option);
      });
    });

  
// styleSelect.addEventListener('click', async() => {
//   console.log(selectedFirm)
//   styleSelect.innerHTML=""
//   if(selectedFirm != 0){
//     const data = {firm: selectedFirm}
//     console.log(JSON.stringify(data))

//     let response = await fetch("http://127.0.0.1:5004/styles", {
//       method: 'POST',
//       headers: {
// 				'Content-Type': 'application/json'
// 			},
//       body: JSON.stringify({firm: selectedFirm})
//   }).then(response => response.json()).then(styles =>{
//     console.log(styles)

//     styles.forEach(style => {
//       const option = document.createElement('option');
//       option.value = style.Style_Code
//       option.textContent = style.IName
//       styleSelect.appendChild(option)
//     })
//   })
//   }
// });

employeeSelect.addEventListener('click', async() => {
  console.log(selectedEmployee)
  // employeeSelect.innerHTML=""
  selectedEmployee = employeeSelect.value
 
});
// const firms = r.json();
// console.log(firms)