const btnToggle = document.querySelector('.cabecalho-hamnav')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const navegacao = document.querySelector('.cabecalho-navegacao')

btnToggle.addEventListener('click', () => {
    bar1.classList.toggle('open');
    bar2.classList.toggle('open');
    bar3.classList.toggle('open');
    navegacao.classList.toggle('open');
})


