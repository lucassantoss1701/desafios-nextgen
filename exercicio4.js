let total = 0;
let list = [];

let areaOneVariation;
let areaTwoVariation;
let areaThreeVariation;
let areaFourVariation;

// 1 = variação A, 2 = variação B, 3 = variação C.

function calculateAllPossibilities(areaOne, areaTwo, areaThree, areaFour) {
    for (areaOne = 1; areaOne <= 1; areaOne++) {
        areaOneVariation = " A";

        for (areaTwo = 1; areaTwo <= 3; areaTwo++) {

            if (areaTwo === 1) {
                areaTwoVariation = "A";
            } else if (areaTwo === 2) {
                areaTwoVariation = "B";
            } else {
                areaTwoVariation = "C";
            }

            for (areaThree = 1; areaThree <= 3; areaThree++) {
                if (areaThree === 1) {
                    areaThreeVariation = "A";
                    list.push(areaOneVariation + areaTwoVariation + areaThreeVariation);
                    total += 1;
                    continue;

                } else if (areaThree === 2) {
                    areaThreeVariation = "B";
                } else {
                    areaThreeVariation = "C";
                }


                for (areaFour = 1; areaFour <= 2; areaFour++) {
                    if (areaFour === 1) {
                        areaFourVariation = "A";
                    } else {
                        areaFourVariation = "B";
                    }
                    list.push(areaOneVariation + areaTwoVariation + areaThreeVariation + areaFourVariation);
                    total += 1;
                }
            }
        }

    }
    return total, list;
}

calculateAllPossibilities(1, 1, 1, 1);
const result = `O número de possibilidades é ${total}, e as possibilidades são ${list} `;

console.log(result);




