let botão = document.querySelector('#gerarPoema');
let poemas = document.querySelector('#poema')
let frases = [
    'Gata eu tô perdido, eu queria saber qual é o ônibus que eu pego para ir ao encontro da sua boca',
    'Me chama de água do sertão que eu venho acabar com a sua seca',
    'Moça fique a vontade para beber um copo de água, pois quando cheguei certeza que te sequei',
    'Posso te pegar pelo braço? porque tudo que é perfeito a gente pega pelo braço',
    'Os peixes nascem pra nadar, o rei pra reinar, o arco-iris pra brilhar e o homem pra amar',
    'Gatinha me joga no Google, me chame de pesquisa e me diz que eu era tudo que você procurava',
    'Tirei carta recentemente de habilitação, eu queria poder dirigir minha moto nas suas curvas',
    'Não sou Shakira mas eu vou deixar você louca louca louca',
    'Você é o sol e eu sou a lua, num eclipse de amor minha boca beija a sua',
    'Tô pensando numa coisa que na verdade eu não sei mas se você vier aqui eu te conto',
    'Me chama de cheque especial e me segura por alguns dias',
    ''
]

botão.addEventListener('click', gerarPoema);

function gerarPoema(){
    var aleatorio = Math.floor(Math.random() * (frases.length));
    poemas.innerHTML = frases[aleatorio];
}

function tocaSom (idTagAudio){
    document.querySelector(idTagAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (c = 0; c < ListaDeTeclas.length; c++){

    const tecla = ListaDeTeclas[c];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;
    
    tecla.onclick = function (){
        tocaSom(idAudio); 
    } 
}
