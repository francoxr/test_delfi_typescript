import { Context, APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';
import CardModel from "./models/card";
import {connect} from "mongoose";
import luhn from "luhn";

function makeToken(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   return result;
}

async function validateCardToken(event: APIGatewayEvent){
    const authHeader = String(event.headers['authorization'] || '');

    if(!authHeader){
        return {
            statusCode: 404,
            body: JSON.stringify({
                message: 'Necesita parametros de autorizacion',
            }),
        }
    }

    if (authHeader.startsWith('Bearer ')) {
        console.log('adas')
        const token = authHeader.substring(7, authHeader.length);
        console.log(token)

        if (!token){
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Pk invalida',
                }),
            };  
        }
    }

    if (event.body !== null){
        const body = JSON.parse(event.body);
        const is_valid = luhn.validate(body["card_number"]);
        
        if (!is_valid){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: 'El numero de la tarjeta no es Valida',
                }),
            };
        }

        body.token = makeToken(16);
        const card = new CardModel(body);
        await card.save();
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Created',
                token: card.token
            }),
        };
    }
    return {
        statusCode: 404,
        body: JSON.stringify({
            message: 'No se envio ningun parametro',
        }),
    };
}

// create token(post)
export const cardToken = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(event)
    return await validateCardToken(event)
};


async function DataCardByToken(event: APIGatewayEvent){

    const authHeader = String(event.headers['authorization'] || '');

    if(!authHeader){
        return {
            statusCode: 404,
            body: JSON.stringify({
                message: 'Necesita parametros de autorizacion',
            }),
        }
    }

    if (authHeader.startsWith('Bearer ')) {
        console.log('adas')
        const token = authHeader.substring(7, authHeader.length);
        console.log(token)

        if (!token){
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: 'Pk invalida',
                }),
            };  
        }
    }

    if (event.queryStringParameters !== null){
        const card = await CardModel.findOne({token: event.queryStringParameters.token}, {_id: 0, __v:0, cvv: 0});
        if (card) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: card,
                }),
            };
        }   
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'El token no se encuentra o expiro',
            }),
        };     
    }
    return {
        statusCode: 404,
        body: JSON.stringify({
            message: 'No se envio ningun parametro',
        }),
    };  
}

// get data from card
export const GetDataCardByToken = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(event)
    console.log(context)
    return await DataCardByToken(event)
};


async function connectDB() {
    const uri = "mongodb+srv://mongots:6nU2vqM2DXd3m5V@cluster0.ydbgolq.mongodb.net/?retryWrites=true&w=majority";
    const db = await connect(uri);
    console.log('Databaseise connected to ',db.connection.db.databaseName);
} 

connectDB();