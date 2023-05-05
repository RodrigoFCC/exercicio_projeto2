const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];


let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})
    
function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado`);
    }else if (telefones.includes(parseInt(inputNumeroContato.value))) {
        alert(`O número de telefone: ${inputNumeroContato.value} já foi cadastrado`);
    }else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseInt(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha +=`<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

