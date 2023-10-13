const firstNumber = window.prompt("Enter first number", 1);
const secondNumber = window.prompt("Enter second number", 1);

alert(`${firstNumber} + ${secondNumber} = ${Number(firstNumber) + Number(secondNumber)};\n
${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber};\n
${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber};\n 
${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber};`);