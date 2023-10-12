const coeficientes = {
    2: 0.1782,
    3: 0.2375,
    4: 0.2988,
    5: 0.3619,
    6: 0.1695,
    9: 0.6741,
    12: 0.9121,
    18: 1.4350,
};

const cuotasInput = document.getElementById("cuotas");

cuotasInput.addEventListener("change", () => {
    // Obtén el valor de cuotas seleccionado
    const cuotas = parseInt(cuotasInput.value);

    // Valida que la cantidad de cuotas sea válida (entre 2 y 18)
    if (cuotas >= 2 && cuotas <= 18) {
        // Emitir un evento personalizado para notificar el cambio de cuotas
        const eventoCambioCuotas = new CustomEvent("cambioCuotas", { detail: cuotas });
        document.dispatchEvent(eventoCambioCuotas);
    } else {
        // Muestra un mensaje de error si la cantidad de cuotas no es válida
        alert("La cantidad de cuotas debe estar entre 2 y 18.");
    }
});

function calcularPrecioTotal(precio, cuotas) {
    if (cuotas === 1) {
        return precio; // Precio de contado
    } else {
        const coeficiente = coeficientes[cuotas];
        return precio + precio * coeficiente;
    }
}

export { calcularPrecioTotal };
