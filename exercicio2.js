let prime = [];

function checkPrimeNumbers(lastNumber){
  for (let i = 2; i <= lastNumber; i++){
    let check = true;
    for (let j = 2; j < i; j++){
      if(i % j === 0 ){
        check = false;
        break;
      }
    }
    if(check === true){
      prime.push(i);
    }
  }
  return prime;
}

console.log(prime);

checkPrimeNumbers(120);