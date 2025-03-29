function alterarStatus(numbJogo){
    let jogo = document.getElementById(`game-${numbJogo}`);
    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let botaoJogo = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
    console.log(`Selecionado jogo ${nomeJogo.textContent}`);
    console.log(botaoJogo.textContent);
    console.log(`Selecionado jogo ${numbJogo}`);

    if(botaoJogo.classList.contains('dashboard__item__button--return')){
        botaoJogo.classList.remove('dashboard__item__button--return');
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.textContent='Alugar';
        console.log('Desativado');
    }else{
        botaoJogo.classList.add('dashboard__item__button--return');
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.textContent='Devolver';
        console.log('Ativado');
    }
    
}

// class Botao Apagado = '.dashboard__item__button dashboard__item__button--return'
// class Botao Aceso = '.dashboard__item__button'
// class Jogo Apagado = '.dashboard__item__img dashboard__item__img--rented'
// Class Jogo Aceso = '.dashboard__item__img'