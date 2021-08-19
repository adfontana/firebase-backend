import { Request, Response } from 'express';
import { Get } from 'firebase-backend'
import { DashboardService } from '../../modules/dashboard/dashboard.service';

export default new Get(async (request: Request, response: Response) => {
    const data = await DashboardService.getInstance().get();
    return response.status(200).json(data);
});
