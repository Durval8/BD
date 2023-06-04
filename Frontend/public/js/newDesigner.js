const form = document.getElementById('newDesigner');
let register_btn = document.getElementById('register');

const firmSelect = document.getElementById('firm');

firmSelect.addEventListener('click', () => {
    selectedFirm = firmSelect.value;  // Get the selected value of the firm
    // Use the selected value as needed
});

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

register_btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        phone: formData.get('phone'),
        nif: formData.get('nif'),
        budget: formData.get('salary'),
        firm: selectedFirm,
        employee: formData.get('code')
        // style: styleSelect.value
    };

    fetch("http://127.0.0.1:5004/post_register_designer", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
})
    