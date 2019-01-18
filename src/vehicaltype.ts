type NumberOfWheels = 1 | 2 | 3 | 4;
// enumeration
enum VehicalType {
    Unicycle = 1,
    Bike, // 2: "Bike"
    Tricycle, // 3: "Tricycle"
    Car, // 4: "Car"
}

function getVehicalType(nWheels: NumberOfWheels): VehicalType {
    if (nWheels == 1) {
        return VehicalType.Unicycle;
    }
    if (nWheels == 2) {
        return VehicalType.Bike;
    }
    if (nWheels == 3) {
        return VehicalType.Tricycle;
    }
    return VehicalType.Car;
}

export { VehicalType, NumberOfWheels, getVehicalType };