import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo listo');
});

app.use('/graphql', graphqlHTTP({
    // schema que se va a utilizar
    schema,
    // usar graphicql
    graphiql: true
}));

app.listen(8000, () => {
    console.log('server in port ', 8000);
});