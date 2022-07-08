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
    'A pressa é sua inimiga? Por que ouvi que a pressa é inimiga da perfeição',
    'Me joga na panela, me chama de miojo, espera 3 minutos, vem que tá gostoso.',
    'Gata, casando comigo você nunca vai pegar na enxada! Só vai ter que fazer amor desde a manhã até a madrugada!',
    'Você é o ovo que faltava na minha marmita.',
    'Não sou o pé grande, mas tenho uma grande pegada.',
    'Gata não sou Michel Teló, mais tô doido pra dá uma fugidinha com você.',
    'Gata, você não é Sandy, mas se quiser te mostro meu Júnior.',
    'Gata, se beleza brotasse em ovos você seria dona da granja inteira!',
    'Gata, você é sempre gostosa assim ou hoje tá fantasiada de lasanha?',
    'Gata, você foi feita com velas, mel, fitinhas vermelhas e rosas? Porque te achei uma simpatia.',
    'Gata, você não é a Garota de Ipanema, mas é a coisa mais linda e cheia de graça que já vi.',
    'Seu pai é advogado? Não? Porque ele fez direito',
    'Oi, tenho uma nova loja de casacos chamada MIGO. Quer CASACO MIGO?',
    'Gata não sou gandula mais vem que eu to te dando bola.',
    'Você não é cesta básica, mas tem tudo que eu preciso!',
    'Gata me chama de papel e vamos fazer um amasso.',
    'Não sou a lâmpada mágica do Aladim, mas realizo todos seus desejos!',
    'Eu sei que você não é dengue nem gripe, mas se te pego vou direto pra cama.',
    'Gata, eu rezo 1/3, para achar 1/2 De te levar pra 1/4, sua linda!',
    'Gata, me chama de capeta e deixa te possuir.',
    'Você não é colesterol, mas afetou meu coração.',
    'Gata me chama de Mc Lanche, e vem me fazer Feliz.',
    'Gata, eu não sou o Luciano Huck, Mas eu quero você no meu lar doce lar!',
    'Se felicidade fosse dinheiro, você seria o Banco Central e eu seria o maior investidor.',
    'Não sou carro, mas sou Para ti.',
    'Se você fosse um sanduíche teu nome seria X-Princesa.',
    'Você não é piso molhado mas eu já tô pronto pra te passar o rodo',
    'Chuchu, você é tão gostosa que eu poderia ter uma plantação toda sua, sabia? Colheita exclusiva.',
    'Moça, eu vou ter que te dizer. Essa roupa que você tá me parece ter um toque de ‘nossa’, um toque de ‘eita’ e um jeito de ‘humm’. Desculpa se não entendeu, não entendo de moda.',
    'Meu bem, acho que vi seu nome em algum lugar… verdade, foi no dicionário bem do lado de DELÍCIA',
    'Meu bem, me chama de bronquite asmática que eu posso te deixar sem ar.',
    'Gata você não é churrasco mas pode ter certeza de que tá no ponto.'
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
