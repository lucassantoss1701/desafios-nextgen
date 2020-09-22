let distance = 149_600_000;
let speed = 28_440;


// função que calcula o tempo em dias.
function calculate(distance, speed){
    const time = distance/speed;
    const timeDays =(time/24).toFixed(2);
    return timeDays;
}

const result = `O tempo em dias que Samus Aran levará para chegar ao planeta Zebes é de ${calculate(distance, speed)} dias.`;
console.log(result);