import { Request, Response } from 'express';
import { Get } from 'firebase-backend'
import { UserService } from '../../modules/user/user.service';

export default new Get(async (request: Request, response: Response) => {
    const user = await UserService.getInstance().get(request.query.id ? String(request.query.id) : undefined);
    return response.status(200).json(user);
});
