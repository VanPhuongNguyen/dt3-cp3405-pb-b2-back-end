import { APIGatewayProxyHandler } from 'aws-lambda';
import { echo } from '@queries/exampleQuery';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: echo('Module aliasing is really the a a a best'),
    input: event,
  }),
});
