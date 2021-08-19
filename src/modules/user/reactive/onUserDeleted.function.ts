import * as functions from 'firebase-functions';
import { DashboardService } from '../../dashboard/dashboard.service';

export const onUserDeleted = functions.firestore
    .document('user/{userId}')
    .onDelete(() => DashboardService.getInstance().save(-1));
