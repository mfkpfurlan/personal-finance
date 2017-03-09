module.exports = {
	compoundInterest,
    returnOnInvestment,
    simpleInterest
}

function compoundInterest(original, rate, years) {
    // http://moneychimp.com/articles/finworks/fmfutval.htm
    var FV = original * Math.pow(1 + (rate / 12), years * 12);

    return parseFloat(parseFloat(FV).toFixed(2));
}

function simpleInterest(original, rate, years) {
    var A = original * (1 + (rate * years));

    return parseFloat(parseFloat(A).toFixed(2));  
}

function returnOnInvestment(original, current) {
    return parseFloat((parseFloat((current - original) / original * 100)).toFixed(2));
}