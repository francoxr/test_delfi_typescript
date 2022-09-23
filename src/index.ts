import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

import { ObjectId } from "mongodb";
import { collections,connectToDatabase } from "./services/database.service";
import Token from "./models/token";


// create token(post)
export const cardToken = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    // validations

    // Create Token

    // create index about of expiration

    // Create data 

    // response
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Created',
        }),
    };
};

// get data from card
export const GetDataCard = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    // validations

    // query for Table Token

    // response
    return {
        statusCode: 200,
        body: JSON.stringify({
            //    Card Data without cvv
        }),
    };
};
