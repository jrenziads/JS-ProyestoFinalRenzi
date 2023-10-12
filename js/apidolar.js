const url = 'https://dolarapi.com/v1/dolares/blue';
const options = { method: 'GET', headers: { Accept: 'application/json' } };

async function fetchDataAndDisplay() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

   
    const compra = data.compra;
    const venta = data.venta;
    const fechaActualizacion = data.fechaActualizacion;

    const dolarInfoElement = document.getElementById('dolar-info');
    dolarInfoElement.textContent = `Dolar Compra: $${compra} | Dolar Venta: $${venta} | FechaActualizacion: ${fechaActualizacion}`;

  } catch (error) {
    console.error(error);
  }
}

fetchDataAndDisplay();
setInterval(fetchDataAndDisplay, 3600000);

