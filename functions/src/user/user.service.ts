import { User } from "./user";
import { UserDao } from "./user.dao";

export class UserService {

    private static instance: UserService;

    // --------------------------------------------------------------------------------------------
    // Public static mehods
    // --------------------------------------------------------------------------------------------

    static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    // --------------------------------------------------------------------------------------------
    // Public methods
    // --------------------------------------------------------------------------------------------

    create(user: User) {
        return this.getDao().set(user);
    }

    delete(id: string) {
        return this.getDao().delete(id);
    }

    get(id?: string) {
        if (id) {
            return this.getDao().get(id);
        }
        return this.getDao().getList()
    }

    update(user: User) {
        return this.getDao().update(user, user.id);
    }

    // --------------------------------------------------------------------------------------------
    // Private methods
    // --------------------------------------------------------------------------------------------

    private getDao() {
        return UserDao.getInstance();
    }

}