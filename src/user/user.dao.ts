import { Dao } from "../lib/dao";
import { User } from "./user";

export class UserDao extends Dao<User> {

    private static instance: UserDao;

    // --------------------------------------------------------------------------------------------
    // Public static methods
    // --------------------------------------------------------------------------------------------

    static getInstance(): UserDao {
        if (!this.instance) {
            this.instance = new UserDao();
        }
        return this.instance;
    }

    // --------------------------------------------------------------------------------------------
    // Protected methods
    // --------------------------------------------------------------------------------------------

    protected getColPath() {
        return `user`;
    }

}
