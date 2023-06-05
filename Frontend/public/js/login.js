const form = document.getElementById('login');
let login_btn = document.getElementById('loginBtn');
console.log("OAS")
login_btn.addEventListener('click', () =>{
    console.log("WWWT")
    const formData = new FormData(form)
    const data = {usename: formData.get('usename'),
                password: formData.get('password')
            }
    
    fetch("http://127.0.0.1:5004/post_login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    // console.log(response.json())
})