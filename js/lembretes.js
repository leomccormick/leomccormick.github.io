window.onload = function () {
    const lembretes = JSON.parse(localStorage.getItem('lembretes')) || []; // Recupera os lembretes
    const lista = document.getElementById('lista-lembretes');

    lembretes.forEach(function (horario) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.className = 'horario-lembrete';
        p.textContent = horario;

        li.appendChild(p);
        lista.appendChild(li);
    });

    carregarHorariosSelecionados();
};

// Função que carrega os horários no Local Storage
function carregarHorariosSelecionados() {
    const selecionados = JSON.parse(localStorage.getItem('horariosSelecionados')) || [];
    const horarios = document.querySelectorAll('.horario-lembrete'); // Mova esta linha aqui
    horarios.forEach(horario => {
        if (selecionados.includes(horario.textContent)) {
            horario.classList.add('selecionado');
        }
        horario.addEventListener('click', toggleSelecionado);
    });
}

// Função que alterna a classe de selecionado no horário clicado e atualiza o Local Storage
function toggleSelecionado(event) {
    const horario = event.target;
    horario.classList.toggle('selecionado');
    atualizarLocalStorage();
}

// Função para atualizar o Local Storage com os horários selecionados
function atualizarLocalStorage() {
    const horarios = document.querySelectorAll('.horario-lembrete');
    const selecionados = Array.from(horarios)
        .filter(horario => horario.classList.contains('selecionado'))
        .map(horario => horario.textContent);
    localStorage.setItem('horariosSelecionados', JSON.stringify(selecionados));
}

// OBS: código feito com ajuda de AI por conta da alta complexidade,
// mas alterado manualmente em alguns trechos para funcionar melhor
// com o nosso app especificamente