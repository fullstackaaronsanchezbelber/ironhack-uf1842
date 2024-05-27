// ¿En tu páis de origen es normal dejar propina?

document.getElementById('calculate').addEventListener('click', function() {
    // Paso 1: Obtener el valor que pone el usuario en el campo Bill Amount
    const billAmount = parseFloat(document.getElementById('bill-amount').value);

    console.log('Bill Amount:', billAmount);

    // Paso 2: Obtener el valor que pone el usuario en el campo Percentage Tip
    const percentageTip = parseFloat(document.getElementById('percentage-tip').value);
    console.log('Percentage Tip:', percentageTip);

    // Paso 3: Calcular el total de la propina en Tip Amount.
    const tipAmount = (billAmount * percentageTip) / 100;
    
    console.log('Tip Amount:', tipAmount);

    // Paso 4: Calcular el total de la cuenta en el campo Total
    const total = billAmount + tipAmount;
    console.log('Total:', total.toFixed(2));

    // Visualizar el valor de la propina otorgada en el campo Tip Amount
    document.getElementById('tip-amount').value = tipAmount.toFixed(2);

    // Visualizar el valor total de la cuenta en el campo Total
    document.getElementById('total').value = total.toFixed(2);
});
