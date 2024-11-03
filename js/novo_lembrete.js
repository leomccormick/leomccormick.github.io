const dias = document.querySelectorAll('form ul li');

function toggleSelecionado(event) {
    event.target.classList.toggle('selected-day');
    event.target.classList.toggle('non-selected-day');
}

dias.forEach(dia => {
    dia.addEventListener('click', toggleSelecionado);
});


document.getElementById('form-lembrete').addEventListener('submit', function (event) {
    event.preventDefault();

    const horario = document.getElementById('horario').value;
    if (horario) {
        const lembretes = JSON.parse(localStorage.getItem('lembretes')) || [];
        lembretes.push(horario);
        localStorage.setItem('lembretes', JSON.stringify(lembretes));
        window.location.href = 'lembretes.html';
    }
});
