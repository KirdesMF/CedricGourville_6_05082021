import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import express from 'express';

const schema = buildSchema(`
   type Query {
      hello: String
   }
`);

const root = {
   hello: () => `Hello World`,
};

const app = express();

app.use(
   '/',
   graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
   })
);

app.listen(4000);
