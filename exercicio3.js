function calculateDistance(speedKmH, time, angle){
    const speedMS = speedKmH/3.6
    let distanceRow = (speedMS*time).toFixed(2);
    calculateDistanceHorizontal(angle, distanceRow);
}

function calculateDistanceHorizontal(angle, distanceRow){
    if(angle === 45){
        angle = (Math.sqrt(2)/2);
        const distanceHorizontal = (angle * distanceRow).toFixed(2);
        const result = `A distância horizontal que a banana pecorrerá em metros é de ${distanceHorizontal}m. `
        console.log(result);
    }
}

calculateDistance(80, 5, 45);