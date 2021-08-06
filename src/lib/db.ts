import * as admin from 'firebase-admin';

export class DB {
    private static instance: FirebaseFirestore.Firestore;

    static getInstance(): FirebaseFirestore.Firestore {
        if (!this.instance) {
            admin.initializeApp();
            this.instance = admin.firestore();
        }
        return this.instance;
    }
}
