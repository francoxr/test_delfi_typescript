import { Context, APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';
import { cardToken, GetDataCardByToken } from '../../index';
import {describe, expect, test, it} from '@jest/globals'

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayEvent = {
            body: null,
            cookies: [],
            headers: {
                authorization: 'Bearer ugv',
                'content-type': 'application/json',
                'user-agent': 'PostmanRuntime/7.26.8',
                accept: '*/*',
                'postman-token': '4e489cec-a1bb-4dc7-acea-62db95f49f3e',
                host: 'localhost:3000',
                'accept-encoding': 'gzip, deflate, br',
                connection: 'keep-alive',
                'content-length': '153'
            },
            isBase64Encoded: false,
            pathParameters: null,
            queryStringParameters: { token: 'ad12' },
            rawPath: '/tokens',
            rawQueryString: 'token=ad12',
            requestContext: {
                accountId: 'offlineContext_accountId',
                apiId: 'offlineContext_apiId',
                authorizer: { jwt: [Object] },
                domainName: 'offlineContext_domainName',
                domainPrefix: 'offlineContext_domainPrefix',
                http: {
                    method: 'GET',
                    path: '/tokens',
                    protocol: 'HTTP/1.1',
                    sourceIp: '127.0.0.1',
                    userAgent: 'PostmanRuntime/7.26.8'
                },
                operationName: undefined,
                requestId: 'offlineContext_resourceId',
                routeKey: 'GET /tokens',
                stage: '$default',
                time: '26/Sep/2022:22:04:28 -0500',
                timeEpoch: 1664247868010
            },
            routeKey: 'GET /tokens',
            stageVariables: null,
            version: '2.0'
            
        };
        const context: Context = {
            awsRequestId: '80ab463d-d514-42ed-9273-41e62a248d25',
            callbackWaitsForEmptyEventLoop: true,
            clientContext: null,
            functionName: 'cardToken-dev-GetDataCardByToken',
            functionVersion: '$LATEST',
            identity: undefined,
            invokedFunctionArn: 'offline_invokedFunctionArn_for_cardToken-dev-GetDataCardByToken',
            logGroupName: 'offline_logGroupName_for_cardToken-dev-GetDataCardByToken',
            logStreamName: 'offline_logStreamName_for_cardToken-dev-GetDataCardByToken',
            memoryLimitInMB: '1024',
            done: [Function: done],
            fail: [Function: fail],
            getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],
            succeed: [Function: succeed]
        };
        
        const result: APIGatewayProxyResult = await GetDataCardByToken(event, context);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(
            JSON.stringify({
                message: 'hello world',
            }),
        );
    });
});
