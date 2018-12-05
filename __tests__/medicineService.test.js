import { deriveTypesForMedicine, deriveStrengthsForMedicineAndType } from '../src/client/services/medicine';

const medicines = [
    {
      "nhsDrugName": "Amoxicillin",
      "strength": "strength1",
      "productType": "Tablets"
    },
    {
      "nhsDrugName": "Amoxicillin",
      "strength": "strength2",
      "productType": "Syrup"
    }
  ]

describe('Medicine service', () => {
    it('Should derive types from list of medicines', () => {
        const types = deriveTypesForMedicine("Amoxicillin", medicines);
        expect(types).toHaveLength(2);
    });

    it('Should derive strengths from list of medicines', () => {
        const types = deriveStrengthsForMedicineAndType("Amoxicillin", "Tablets", medicines);
        expect(types).toHaveLength(1);
    });
});