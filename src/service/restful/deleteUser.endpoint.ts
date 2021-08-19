import { Request, Response } from 'express';
import { Delete } from 'firebase-backend'
import { UserService } from '../../modules/user/user.service';

export default new Delete(async (request: Request, response: Response) => {
    await UserService.getInstance().delete(String(request.query.id))
    return response.status(200).json({ success: true });
});