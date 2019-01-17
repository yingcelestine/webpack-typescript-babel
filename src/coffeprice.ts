// export enum CoffeeType {
//     Black,
//     Latte,
//     Cappucino
// }

// export function coffeePrice(coffeeType: CoffeeType) {
//     if (coffeeType == CoffeeType.Black) {
//         return 1.0;
//     }
//     if (coffeeType == CoffeeType.Latte) {
//         return 2.1;
//     }
//     return 3.2;
// }

type CoffeeType = "Black" | "Latte" | "Cappucino";

export function coffeePrice(coffeeType: CoffeeType) {
    if (coffeeType == "Black") {
        return 1.0;
    }
    if (coffeeType == "Latte") {
        return 2.1;
    }
    return 3.2;
}

export type DayOfTheWeek = 1 | 2 | 3 | 4 | 5 | 6 | 0;


// export function coffeeOfTheDay(n: DayOfTheWeek) {
//     let i = n % 3;
//     let result: [CoffeeType, number];
//     switch (i) {
//         case 0:
//             result = ["Black", coffeePrice("Black")];
//             break;
//         case 1:
//             result = ["Latte", coffeePrice("Latte")];
//             break;
//         default:
//             result = ["Cappucino", coffeePrice("Cappucino")];
//             break;
//     }
//     return result;
// }

export interface CoffeeInfo {
    name: string;
    price: number;
}

export function coffeeOfTheDay(n: DayOfTheWeek): CoffeeInfo {
    let i = n % 3;
    let result: CoffeeInfo;
    switch (i) {
        case 0:
            result = { name: "Black", price: coffeePrice("Black") };
            break;
        case 1:
            result = { name: "Latte", price: coffeePrice("Latte") };
            break;
        default:
            result = { name: "Cappucino", price: coffeePrice("Cappucino") };
            break;
    }
    return result;
}

export interface CoffeeDict {
    [index: string]: CoffeeType
}

let coffeeDict: CoffeeDict = {};
coffeeDict["b"] = "Black";
coffeeDict["l"] = "Latte";
coffeeDict["c"] = "Cappucino";
coffeeDict["d"] = "Cappucino";
delete coffeeDict["d"];
