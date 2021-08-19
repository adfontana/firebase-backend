import { Request, Response } from 'express';
import { Post } from 'firebase-backend'
import { UserService } from '../../modules/user/user.service';

export default new Post(async (request: Request, response: Response) => {
    await UserService.getInstance().create(request.body);
    return response.status(201).json({ success: true });
});
