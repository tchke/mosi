export function deriveTypesForMedicine(medicineName, medicines) {
    const dict = medicines
        .filter((m) => m.nhsDrugName === medicineName)
        .reduce((accum, mv) => {
            if (!accum[mv.productType]) {
                accum[mv.productType] = 0
            }
            ++accum[mv.productType];
            return accum;
        }, {});

    return Object.keys(dict).sort();
}

export function deriveStrengthsForMedicineAndType(medicineName, type, medicines) {
    const dict = medicines
        .filter((m) => m.nhsDrugName === medicineName && m.productType === type)
        .reduce((accum, mv) => {
            if (!accum[mv.strength]) {
                accum[mv.strength] = 0
            }
            ++accum[mv.strength];
            return accum;
        }, {});

    return Object.keys(dict).sort();
}

export default {
    deriveTypesForMedicine,
    deriveStrengthsForMedicineAndType
};