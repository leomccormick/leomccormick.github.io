window.onload = function () {
    const lembretes = JSON.parse(localStorage.getItem('lembretes')) || []; // Recupera os lembretes
    const lista = document.getElementById('lista-lembretes');

    lembretes.forEach(function (horario) {
        const li = document.createElement('li'); // Cria um novo elemento li
        const p = document.createElement('p'); // Cria um novo elemento p
        p.className = 'horario-lembrete'; // Adiciona a classe apropriada
        p.textContent = horario; // Define o texto do p como o horário

        li.appendChild(p); // Adiciona o p ao li
        lista.appendChild(li); // Adiciona o li à lista
    });

    // Carrega os horários selecionados ao carregar a página
    carregarHorariosSelecionados();
};

// Função para carregar os horários selecionados do Local Storage
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

// Função que alterna a classe 'selecionado' no horário clicado e atualiza o Local Storage
function toggleSelecionado(event) {
    const horario = event.target;
    horario.classList.toggle('selecionado');
    atualizarLocalStorage();
}

// Função para atualizar o Local Storage com os horários selecionados
function atualizarLocalStorage() {
    const horarios = document.querySelectorAll('.horario-lembrete'); // Obtenha os horários novamente
    const selecionados = Array.from(horarios)
        .filter(horario => horario.classList.contains('selecionado'))
        .map(horario => horario.textContent);
    localStorage.setItem('horariosSelecionados', JSON.stringify(selecionados));
}
