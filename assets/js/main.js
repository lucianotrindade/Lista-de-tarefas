const input = document.querySelector('.input-tarefas');
const button = document.querySelector('.enviar-tarefa');
const tarefas = document.querySelector('.tarefas');
const excluir = document.querySelector('.btn-excluir');
const qtdTarefas = document.querySelector('.result-qtd');
const textTarefas = document.querySelector('.text-tarefas');

let qtd = `0`;


// função criadora dos <li>
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//Criado um botão de excluir
function excluirTarefa(){
  const botao = document.createElement('button');
  botao.innerText += 'Excluir';
  botao.setAttribute('class', 'btn-excluir');  
  return botao; 
}

//Criado um botão de Tarefa Realizada
/*function tarefaRealizada(){
    const botao = document.createElement('button');
    botao.innerText += 'Feito';
    botao.setAttribute('class', 'btn-realizado');  
    return botao; 
  }*/

// Função que inclui as tarefas.
function incluirTarefas(tarefa){
    const lis = criaLi();
    lis.innerText = tarefa;
       
    const botao = excluirTarefa(lis);

    //const realizado = tarefaRealizada();
       
    tarefas.appendChild(lis);
    lis.appendChild(botao);
    //lis.appendChild(realizado); 
}

// Aqui limpa o input e faz um focus para digitar.
function limparInput(){
    input.value = ' ';
    input.focus();
}

function contadorDeTarefas () {
   qtd++;
}

function incluirQuantidadeTarefas () {
  textTarefas.innerText = 'Qtd de tarefas:';
  qtdTarefas.innerHTML = qtd;
}

// Pegando o envendo do botão incluir e parando o evento de atualizar a pagina.
button.addEventListener('click', function(e){
e.preventDefault();
  if(!input.value) return;
 
  incluirTarefas(input.value);
  limparInput();
  contadorDeTarefas();
  incluirQuantidadeTarefas ();

});

document.addEventListener('click', function(e){
   const elemento = e.target;

   if(elemento.classList.contains('btn-excluir')) {
      elemento.parentElement.remove();
      qtd--;
      incluirQuantidadeTarefas();
      if( qtd === 0){
        textTarefas.innerText = 'Você não possui tarefas!';
        qtdTarefas.innerHTML = ' ';  
      }
    };

   if(elemento.classList.contains('btn-realizado')) {
    console.log('realizado');
    };

});

if( qtd === undefined){
  textTarefas.innerText = 'Você Ainda não possui tarefas!';
  qtdTarefas.innerHTML = ' ';  
};
