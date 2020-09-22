let firstPin;
let secondPin;
let thirdPin;
let disks = 5;
let movements = 0;

function moveDisks(disks, firstPin, secondPin, thirdPin){
    if(disks >= 1){
        moveDisks(disks - 1, firstPin, thirdPin, secondPin);
        movements += 1;
        moveDisks(disks - 1, secondPin, firstPin, thirdPin);
    }
}

moveDisks(disks, firstPin, secondPin, thirdPin);
const result = `O número de movimentos mínimos necessários para que o desafio seja concluído é de ${movements} movimentos.`
console.log(result);

//Descobri que existe recursividade e que poderia ter usado em outros exercícios