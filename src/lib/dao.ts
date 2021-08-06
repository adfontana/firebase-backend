import { firestore } from 'firebase-admin';
import { DB } from './db';

export abstract class Dao<T> {

    private firestore: FirebaseFirestore.Firestore;

    constructor() {
        this.firestore = DB.getInstance();
    }

    // --------------------------------------------------------------------------------------------
    // Public methods
    // --------------------------------------------------------------------------------------------

    delete(id: string) {
        return this.getDoc(id).delete();
    }

    async get(id: string) {
        const doc = await this.getDoc(id).get();
        if (doc.exists) {
            return this.convertDate(doc.data()) as T;
        }
        return
    }

    async getList() {
        const snapshot = await this.getCol().get()
        // Prosseguir somente se retornou algum regitro
        if (!snapshot.empty) {
            // Mapear os documentos retornando lista
            return snapshot.docs.map(doc => {
                const dados: T = this.convertDate(doc.data()) as T
                (dados as any).id = doc.id
                return dados
            })
        }
        // Não há registros
        return []
    }

    async set(data: T, id: string = '', batch?: FirebaseFirestore.WriteBatch, merge: boolean = false) {
        // Get DOC
        const doc = id ? this.getCol().doc(id) : this.getCol().doc();
        // Add the set to the batch to be commited after
        if (batch) {
            batch.set(doc, data, { merge });
        } else { // Commit the doc
            await doc.set(data, { merge });
        }
    }

    async update(data: any, id: string, batch?: FirebaseFirestore.WriteBatch) {
        const doc = this.getDoc(id);
        if (batch) {
            await batch.update(doc, data)
        }
        await doc.update(data);
    }

    // --------------------------------------------------------------------------------------------
    // Protected methods
    // --------------------------------------------------------------------------------------------

    protected convertDate(firebaseObject: any) {
        if (!firebaseObject) {
            return null;
        }
        for (const [key, value] of Object.entries(firebaseObject)) {
            // covert items inside array
            if (value && Array.isArray(value))
                firebaseObject[key] = value.map(item => this.convertDate(item));
            // Convert inner objects
            if (value && typeof value === 'object') {
                // Convert simple properties
                if (value && (value as any).hasOwnProperty('_seconds')) {
                    firebaseObject[key] = (value as firestore.Timestamp).toDate();
                } else {
                    firebaseObject[key] = this.convertDate(value);
                }
            }
        }
        return firebaseObject;
    }

    protected getCol() {
        return this.firestore.collection(this.getColPath());
    }

    protected abstract getColPath(): string;

    protected getDoc(id: string) {
        return this.firestore.doc(this.getDocPath(id))
    }

    // --------------------------------------------------------------------------------------------
    // Private methods
    // --------------------------------------------------------------------------------------------

    private getDocPath(id: string) {
        return `${this.getColPath()}/${id}`
    }

}
