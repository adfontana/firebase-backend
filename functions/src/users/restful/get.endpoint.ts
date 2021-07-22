import { Request, Response } from 'express';
import { Get } from 'firebase-backend' // Get, Post, Put, Update, Delete available

// Use the `Get` class which is extended from the `Endpoint` class.
export default new Get((request: Request, response: Response) => {
    // Send your response. 201 to indicate the creation of a new resource
    return response.status(200).json({ success: true });
});
