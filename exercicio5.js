let yoshiIsland = 450;
let chocolateIsland = 330;
let cookieMountain = 340;
let yoshiAndChocolate = 200;
let yoshiAndCookie = 180;
let chocolateAndCookie = 100;
let allLocations = 30;
let allInterviewed = 1000;

let calc = [];

function onlyYoshiIsland(yoshiIsland, yoshiAndChocolate, yoshiAndCookie, allLocations){
    return onlyYoshi = yoshiIsland - (yoshiAndChocolate + yoshiAndCookie + allLocations);
}

function onlyChocolateIsland(chocolateIsland, yoshiAndChocolate, chocolateAndCookie, allLocations){
    return onlyChocolate = chocolateIsland - (yoshiAndChocolate + chocolateAndCookie + allLocations);
}

function onlyCookieMountain(cookieMountain, yoshiAndCookie, chocolateAndCookie, allLocations){
    return onlyCookie = cookieMountain - (yoshiAndCookie + chocolateAndCookie + allLocations);
}

function discoverNoLikeToLive(like){
    let likeToLive =  like.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
    return noLikeToLive =  allInterviewed - likeToLive;
}

onlyYoshiIsland(yoshiIsland, yoshiAndChocolate, yoshiAndCookie, allLocations);
onlyChocolateIsland(chocolateIsland, yoshiAndChocolate, chocolateAndCookie, allLocations);
onlyCookieMountain(cookieMountain, yoshiAndCookie, chocolateAndCookie, allLocations);

let like = [yoshiAndChocolate, yoshiAndCookie, chocolateAndCookie, allLocations, onlyYoshi, onlyChocolate, onlyCookie];

discoverNoLikeToLive(like);

const result = `Apenas em Yoshi's Island = ${onlyYoshi}, apenas Chocolate Island = ${onlyChocolate}, apenas em Cookie Mountain = ${onlyCookie},
E o número de Yoshis que não gostam de viver em nenhuma das três localidades é igual a ${noLikeToLive}.`;

console.log(result);

