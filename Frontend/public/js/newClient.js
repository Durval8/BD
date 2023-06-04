const form = document.getElementById('newClient');
let login_btn = document.getElementById('login');

const firmSelect = document.getElementById('firm');

// Add event listener to the firm select element
firmSelect.addEventListener('click', () => {
  const selectedFirm = firmSelect.value;  // Get the selected value of the firm
  // Use the selected value as needed
  console.log('Selected firm:', selectedFirm);
});

login_btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.get('firm'))
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      phone: formData.get('phone'),
      nif: formData.get('nif'),
      budget: formData.get('budget'),
      firm: formData.get('firm')
    };

    fetch("http://127.0.0.1:5004/post_login", {
        method: "POST",
        body: JSON.stringify(data)
    });
})

fetch("http://127.0.0.1:5004/firms", {
        method: "GET"
    }).then(response =>response.json()).then(firms =>{
      const firmSelect = document.getElementById('firm');
      console.log(firms)
    // Populate the select element with the fetched firms
      firms.forEach(firm => {
        const option = document.createElement('option');
        option.value = firm.NIF;  // Assuming each firm has an 'id' property
        option.textContent = firm.IName;  // Assuming each firm has a 'name' property
        firmSelect.appendChild(option);
      });
    });

// const firms = r.json();
// console.log(firms)