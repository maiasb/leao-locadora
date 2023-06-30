


function sendCar() {

const placa = document.getElementById('placa').value;
const renavam = document.getElementById('renavam').value;
const chassi = document.getElementById('chassi').value;
const marca = document.getElementById('marca').value;
const modelo = document.getElementById('modelo').value;
const anoFabricacao = document.getElementById('ano_fabricacao').value;
const anoModelo = document.getElementById('ano_modelo').value;
const cor = document.getElementById('cor').value;
const tipoCombustivel = document.getElementById('tipo_combustivel').value;

  const body = JSON.stringify({
    placa: placa,
    renavam: renavam,
    chassi: chassi,
    marca: marca,
    modelo: modelo,
    ano_fabricacao: anoFabricacao,
    ano_modelo: anoModelo,
    cor: cor,
    tipo_combustivel: tipoCombustivel
 });

const options = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
  body: body
 };

 fetch('http://127.0.0.1:8000/api/carros', options)
 .then(response => response.json())
 .then(response => {
  alert('Cadastrado!')
  location.reload()})
 .catch(err => console.error(err));//
}
