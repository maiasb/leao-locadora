
function sendClient (){
  
const nome = document.getElementById('nome').value;
const cpf = document.getElementById('cpf').value;
const nascimento = document.getElementById('data-nasc').value;
const telefone = document.getElementById('telefone').value;
const whatsapp = document.getElementById('whatsapp').value;
const cep = document.getElementById('cep').value;
const cidade = document.getElementById('cidade').value;
const bairro = document.getElementById('bairro').value;
const rua = document.getElementById('rua').value;
const complemento = document.getElementById('complemento').value;
const numero = document.getElementById('numero').value;
const dataProvisoria = document.getElementById('data-habilitacao').value;
const categoria = document.getElementById('categoria').value;
const numRegistro = document.getElementById('num-registro').value;


const body = JSON.stringify({
  nome: nome,
  cpf: cpf,
  nascimento: nascimento,
  telefone: telefone,
  whatsapp: whatsapp,
  cep: cep,
  municipio: cidade,
  bairro: bairro,
  rua: rua,
  complemento: complemento,
  numero: numero,
  data_provisoria: dataProvisoria,
  categoria: categoria,
  numero:numRegistro
});

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: body
};

fetch('http://127.0.0.1:8000/api/clientes', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}