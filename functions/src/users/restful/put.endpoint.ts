import { Request, Response } from 'express';
import { Put } from 'firebase-backend'
import { UserService } from '../user.service';

export default new Put(async (request: Request, response: Response) => {
    await UserService.getInstance().update(request.body);
    return response.status(200).json({ success: true });
});