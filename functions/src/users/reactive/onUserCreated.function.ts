import * as functions from 'firebase-functions';

export default functions.firestore
    .document('users/{userId}')
    .onCreate((userSnapshot, context) => {
        const data = userSnapshot.data();
        console.log(`User Created | send an email to ${data.email}`);
    });