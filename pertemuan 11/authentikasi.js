// buat fungsi
// nilai username
// nilai password
// cek username dan password
// benar peri alert berhasil
// username dan password kosong diberikan alert
// username dan password salah maka beri alert

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'admin' && password == '1234') {
        alert('Login berhasil');
        window.location.href = "index.html";
        return false;
    } 
    else if (username == '' || password == '') {
        alert('Username dan Password harus diisi');
    }
    else {
        alert('Username dan Password salah');
    }    
} 