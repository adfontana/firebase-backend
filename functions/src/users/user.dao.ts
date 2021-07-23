import { Dao } from "../lib/dao";
import { User } from "./user";

export class UserDao extends Dao<User>{

    private static instance: UserDao;

    // --------------------------------------------------------------------------------------------
    // Public static methods
    // --------------------------------------------------------------------------------------------

    static getInstance(): UserDao {
        if (!UserDao.instance) {
            UserDao.instance = new UserDao();
        }
        return UserDao.instance;
    }

    // --------------------------------------------------------------------------------------------
    // Protected methods
    // --------------------------------------------------------------------------------------------

    protected getColPath() {
        return `user`;
    }

}
