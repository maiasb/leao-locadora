document.addEventListener("DOMContentLoaded", function() {
  function createCustomersOptions(data) {
    var select = document.getElementById("select-customers");
    console.log(data)

    select.innerHTML = "";

    var selectOption = document.createElement("option");
    selectOption.value = "";
    selectOption.text = "Selecione";
    select.appendChild(selectOption);

    data.forEach(function(item) {
      var option = document.createElement("option");
      option.value = item.id;
      option.text = item.nome;
      select.appendChild(option);
    });
  }

  function createCarOptions(data) {
    var select = document.getElementById("select-cars");

    select.innerHTML = "";

    var selectOption = document.createElement("option");
    selectOption.value = "";
    selectOption.text = "Selecione";
    select.appendChild(selectOption);

    data.forEach(function(item) {
      var option = document.createElement("option");
      option.value = item.id;
      option.text = item.modelo;
      select.appendChild(option);
    });
}

  function getDataCustomers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8000/api/clientes", true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        createCustomersOptions(data);
      }
    };

    xhr.send();
  }

  function getDataCars() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8000/api/carros", true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        createCarOptions(data);
      }
    };

    xhr.send();
  }

  getDataCustomers();
  getDataCars();
});



function sendLocation() {

  const tipoLocacao = document.getElementById("tipo_locacao").value;
  const seguro = document.getElementById("seguro").checked;
  const dataRetirada = document.getElementById("data_retirada").value;
  const periciaRetirada = document.getElementById("pericia_retirada").value;
  const litrosCombustivelRetirada = document.getElementById("litros_combustivel_retirada").value;
  const limpoRetirada = document.getElementById("limpo_retirada").checked;
  const preco = document.getElementById("preco").value;
  const customerSelected = document.getElementById("select-customers").value;
  const carSelected = document.getElementById("select-cars").value;

    const body = JSON.stringify({
      tipo_locacao: tipoLocacao,
      seguro: seguro,
      data_retirada: dataRetirada,
      pericia_retirada: periciaRetirada,
      litros_combustivel_retirada: litrosCombustivelRetirada,
      limpo_retirada: limpoRetirada,
      preco: preco,
      id_cliente: customerSelected,
      id_carro: carSelected
   });

  const options = {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
    body: body
   };

   fetch('http://127.0.0.1:8000/api/locacoes', options)
   .then(response => response.json())
   .then(() => {
    alert('Cadastrado!')
    location.reload()
   })
   .catch(err => console.error(err));
  }
