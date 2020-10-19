
const dollarInput = document.getElementById("dollars");

console.log(dollarInput)

dollarInput.addEventListener("input", convertToEuros);

function convertToEuros(){

    const dollarValue = document.getElementById("dollars").value;
    let euroValue = dollarValue * 0.85;
    document.getElementById("euros").value = euroValue

}