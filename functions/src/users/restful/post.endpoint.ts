import { Request, Response } from 'express';
import { Post } from 'firebase-backend' // Get, Post, Put, Update, Delete available

// Use the `Post` class which is extended from the `Endpoint` class.
export default new Post((request: Request, response: Response) => {
    // Read the values out of the body
    const cardNumber = request.body['card_number'];
    const cardHolder = request.body['card_holder'];

    // Do your thing with the values
    var paymentToken = `${cardNumber}_${cardHolder}`;

    // Send your response. 201 to indicate the creation of a new resource
    return response.status(201).send({
        token: paymentToken,
    });
});
