let botão = document.querySelector('input[type=button]');
let poemas = document.querySelector('#poema')
let frases = [
    'Gata eu tô perdido, eu queria saber qual é o ônibus que eu pego para ir ao encontro da sua boca',
    'Me chama de água do sertão que eu venho acabar com a sua seca',
    'Moça fique a vontade para beber um copo de água, pois quando cheguei certeza que te sequei',
    'Posso te pegar pelo braço? porque tudo que é perfeito a gente pega pelo braço',
    'Os peixes nascem pra nadar, o rei pra reinar, o arco-iris pra brilhar e o homem pra amar',
    'Gatinha me joga no Google, me chame de pesquisa e me diz que eu era tudo que você procurava'
]

botão.addEventListener('click', gerarPoema);

function gerarPoema(){
    var aleatorio = Math.floor(Math.random() * (frases.length));
    poemas.innerHTML = frases[aleatorio];
}