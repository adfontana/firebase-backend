import { firestore } from "firebase-admin";
import { Dao } from "../lib/dao";
import { Dashboard } from "./dashboard";

export class DashboardDao extends Dao<Dashboard>{

    private static instance: DashboardDao;

    // --------------------------------------------------------------------------------------------
    // Public static methods
    // --------------------------------------------------------------------------------------------

    static getInstance(): DashboardDao {
        if (!this.instance) {
            this.instance = new DashboardDao();
        }
        return this.instance;
    }

    save(increment: 1 | -1, data?: Dashboard) {
        // Increment or decrement the total of users in the database
        const totalUsers = firestore.FieldValue.increment(increment);
        return this.getDoc('data').set({ ...data, totalUsers }, { merge: true })
    }

    // --------------------------------------------------------------------------------------------
    // Protected methods
    // --------------------------------------------------------------------------------------------

    protected getColPath() {
        return `dashboard`;
    }

}
