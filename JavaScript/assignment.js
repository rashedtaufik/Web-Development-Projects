// Problem 1:

function anaToVori(ana) {
    const vori = ana * 0.0625;
    return vori;
}
const voriQuantity = anaToVori(48);
console.log(voriQuantity);


// Problem 2:

function pandaCost(SingaraQuantity, samuchaQuantity, jilapiQuantity) {
    // Food price list:
    const perSingaraPrice = 7;
    const perSamuchaPrice = 10;
    const perJilapiPrice = 15;

    const singaraCost = SingaraQuantity * perSingaraPrice;
    const samuchaCost = samuchaQuantity * perSamuchaPrice;
    const jilapiCost = jilapiQuantity * perJilapiPrice;

    const totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}
const TotalFoodCost = pandaCost(5, 5, 2);
console.log(TotalFoodCost);


// Problem 3:

function picnicBudget(numberOfPerson) {
    // Per person picnic budget:
    // const 100 = 5000;
    // const 200 = 4000;
    // const 300 = 3000;
    if (numberOfPerson > 200) {
        const first100PerPicnicBudget = 100 * 5000;
        const secondPicnicBudget = 100 * 4000;
        const remainingPicnicBudget = (numberOfPerson - 200) * 3000;
        perPicnicBudget = first100PerPicnicBudget + secondPicnicBudget + remainingPicnicBudget;

    } else if (numberOfPerson > 100) {
        const firstPicnicBudget = 100 * 5000;
        const remainingPicnicBudget = (numberOfPerson - 100) * 4000;

        perPicnicBudget = firstPicnicBudget + remainingPicnicBudget

    } else if (numberOfPerson <= 100) {
        perPicnicBudget = numberOfPerson * 5000;
    }
    return perPicnicBudget;
}

console.log(picnicBudget(300));


// Problem 4:

const myFriendList = ['noyona', 'fatema', 'shifat', 'sarika', 'rashed', 'rahim', 'kajols', 'sipra'];

function oddFriend(myFriendList) {
    for (let i = 0; i < myFriendList.length; i++) {
        if (myFriendList[i].length % 2 != 0) {
            return myFriendList[i];
        }
    }
}
const myFriend = oddFriend(myFriendList);
console.log(myFriend);