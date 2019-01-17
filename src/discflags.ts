const enum DiscFlags {
    None = 0,
    Drive = 1,
    Influence = 2,
    Steadiness = 4,
    Conscientiousness = 8,
}


function discPrice(option: (number | string)): number {
    if (option == DiscFlags.None || option == "None") {
        return 0;
    }
    if (option == DiscFlags.Drive || option == "Drive") {
        return 13.1;
    }
    if (option == (DiscFlags.Drive | DiscFlags.Influence)) {
        return 26.2;
    }
    if (option == (DiscFlags.Drive | DiscFlags.Conscientiousness)) {
        return 27.2;
    }
    return 33.9;
}

