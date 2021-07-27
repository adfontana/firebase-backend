import * as functions from 'firebase-functions';
import { DashboardService } from '../../dashboard/dashboard.service';

export default functions.firestore
    .document('user/{userId}')
    .onCreate((userSnapshot, context) => {
        const data = userSnapshot.data();
        return DashboardService.getInstance().save(1, data.email);
    })
