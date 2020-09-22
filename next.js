let trackLength;
let turns;
let refueling;
let fuelConsumption;

function calculate(trackLength, turns, refueling, fuelConsumption){
    const runLength = trackLength * turns; //Calcula o tamanho de toda a corrida.
    const consumeLiters = fuelConsumption*1000; //Transorma o consumo de KM/L para M/L.
    const runConsumeFuel = runLength/consumeLiters; //Calcula a quantidade de combustível necessária para terminar a corrida.
    return consumeFirstRefueling = runConsumeFuel/refueling; //Calcula a quantidade de combustível para cada ir a cada reabastecimento.
}

calculate(10000, 30, 15 ,5);

console.log(`O número minímo de litros necessários para percorrer até o primeiro reabastecimento é de ${consumeFirstRefueling} litros.`);