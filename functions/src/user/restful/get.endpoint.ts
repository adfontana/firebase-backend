import { Request, Response } from 'express';
import { Get } from 'firebase-backend'
import { UserService } from '../user.service';

export default new Get(async (request: Request, response: Response) => {
    const user = await UserService.getInstance().get(String(request.query.id));
    return response.status(200).json({ success: true, user });
});

