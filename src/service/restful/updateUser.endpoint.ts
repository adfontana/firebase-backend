import { Request, Response } from 'express';
import { Put } from 'firebase-backend'
import { UserService } from '../../modules/user/user.service';

export default new Put(async (request: Request, response: Response) => {
    await UserService.getInstance().update(request.body, request.query.id ? String(request.query.id) : undefined);
    return response.status(200).json({ success: true });
});