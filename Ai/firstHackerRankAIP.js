const fs = require("fs");

//Read the  training data
const data = fs.readFileSync("./trainigdata.txt","utf8");

//Separate charging times (X) and battery life (Y)
const lines = data.trim().split(/\r?\n/);
const xValues = [];
const yValues = [];

for(const line of lines) {
    const values = line.split(",");

    const x = Number(values[0]);
    const y = Number(values[1]);

    //Exclude records where the battert already reached 8 hours
    if(y < 8) {
        xValues.push(x);
        yValues.push(y);
    }
}
//Calculate the mean 
function calculateMean(values) {
    let sum = 0;
    for(const value of values) {
        sum += value;
    }
    return sum / values.length;
}
//Calculate the slope
function calculateSlope(xValues, yValues, meanX, meanY) {
    let numerator = 0;
    let denumerator = 0;

    for(let i = 0; i < xValues.length; i++) {
        numerator += (xValues[i] - meanX) * (yValues[i] - meanY);
        denumerator += Math.pow(xValues[i] - meanX, 2);
    }
    return numerator / denumerator;
}

//calculate the intercept 
function calculateIntercept(meanX, meanY, slope) {
    return meanY - (slope * meanX);

}
//Predict the battery life 
function predictBatteryLife(xValues, yValues, chargingTime ) {
    const meanX = calculateMean(xValues);
    const meanY= calculateMean(yValues);

    const slope = calculateSlope(xValues, yValues, meanX, meanY);
    const intercept = calculateIntercept(meanX, meanY, slope);

    return slope * chargingTime + intercept;
}
//Read the new carging time the termianal
const input = fs.readFileSync(0, "utf8").trim();
const charingTime = Number(input);
//Make the prediction
const prediction = predictBatteryLife(
    xValues,
    yValues,
    charingTime
);

//Battery life cannot exceed 8 hours
const result = Math.min(prediction, 8);

// Print the result to 2 decimal places
console.log(result.toFixed(2));