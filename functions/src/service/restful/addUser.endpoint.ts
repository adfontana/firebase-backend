import { Request, Response } from 'express';
import { Post } from 'firebase-backend'
import { UserService } from '../../user/user.service';

// Create new user
export default new Post(async (request: Request, response: Response) => {
    await UserService.getInstance().create(request.body);
    return response.status(201).json({ success: true });
});
