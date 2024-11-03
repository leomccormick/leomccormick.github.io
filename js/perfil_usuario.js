const user = localStorage.getItem("user");

if (user) {
    const tituloPerfil = document.querySelector("h1");
    tituloPerfil.textContent = `${user}`;
} else {
    console.warn("Usuário não encontrado no localStorage.");
}
