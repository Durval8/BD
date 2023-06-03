window.addEventListener('DOMContentLoaded', () => {
  const firmSelect = document.getElementById('firm');
  const employeeSelect = document.getElementById('employee');
  const styleSelect = document.getElementById('style');

  // Function to fetch designers and styles based on selected firm
  const fetchDesignersAndStyles = (selectedFirm) => {
    fetch(`/data?firm=${selectedFirm}`)
      .then(response => response.json())
      .then(data => {
        // Clear previous options
        employeeSelect.innerHTML = '';
        styleSelect.innerHTML = '';

        // Populate employee options
        const defaultEmployeeOption = document.createElement('option');
        defaultEmployeeOption.value = '';
        defaultEmployeeOption.textContent = 'Select Employee';
        employeeSelect.appendChild(defaultEmployeeOption);

        data.forEach(item => {
          const employeeOption = document.createElement('option');
          employeeOption.value = item.employee;
          employeeOption.textContent = item.employee;
          employeeSelect.appendChild(employeeOption);
        });

        // Populate style options
        const defaultStyleOption = document.createElement('option');
        defaultStyleOption.value = '';
        defaultStyleOption.textContent = 'Select Style';
        styleSelect.appendChild(defaultStyleOption);

        data.forEach(item => {
          const styleOption = document.createElement('option');
          styleOption.value = item.style;
          styleOption.textContent = item.style;
          styleSelect.appendChild(styleOption);
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Add event listener to firm select box
  firmSelect.addEventListener('change', () => {
    const selectedFirm = firmSelect.value;
    fetchDesignersAndStyles(selectedFirm);
  });
});