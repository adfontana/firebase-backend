import { firestore } from "firebase-admin";
import { Dao } from "./dao";

class DaoClass extends Dao<Object> {

    getColPath() {
        return 'col_name'
    }

}

describe('Dao', () => {

    let dao: DaoClass;

    beforeAll(() => {
        dao = new DaoClass();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('convertDate()', () => {

        it('Convert firestore timestamp field in Date', () => {
            // Setup
            const data = { date: firestore.Timestamp.now() };

            // Execute
            const covertedData = (dao as any).convertDate(data);

            // Validate
            expect(covertedData.date).toBeInstanceOf(Date);
        });

    });

});
