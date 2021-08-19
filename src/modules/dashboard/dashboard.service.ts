import { Dashboard } from "./dashboard";
import { DashboardDao } from "./dashboard.dao";

export class DashboardService {

    private static instance: DashboardService;

    // --------------------------------------------------------------------------------------------
    // Public static methods
    // --------------------------------------------------------------------------------------------

    static getInstance(): DashboardService {
        if (!this.instance) {
            this.instance = new DashboardService();
        }
        return this.instance;
    }

    // --------------------------------------------------------------------------------------------
    // Public methods
    // --------------------------------------------------------------------------------------------

    get() {
        return this.getDao().get('data');
    }

    /**
     * Save dashboad data
     * 
     * @param increment increment or decrement total users
     * @param email Email of the last user added
    */
    save(increment: 1 | -1, email?: string) {
        // Set email of the last user added
        if (email) {
            const data: Dashboard = {
                lastUser: {
                    createdAt: new Date(),
                    email
                }
            }
            return this.getDao().save(increment, data);
        }
        return this.getDao().save(increment);
    }

    // --------------------------------------------------------------------------------------------
    // Private methods
    // --------------------------------------------------------------------------------------------

    private getDao() {
        return DashboardDao.getInstance();
    }

}