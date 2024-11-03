document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("Usuario").value;
    const password = document.querySelector("input[type='password']").value;

    localStorage.setItem("user", user);
    localStorage.setItem("password", password);

    console.log(user)
    console.log(password)

    window.location.href = "tela_inicial.html";
});
