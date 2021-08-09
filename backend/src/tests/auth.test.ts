import supertest from 'supertest';
import { ExpressLoader } from '../loaders/express.loader';
import { testDatabase } from './db';

const agent = supertest.agent(ExpressLoader());

beforeAll(async () => await testDatabase.connect());
beforeEach(async () => await testDatabase.clear());
afterAll(async () => await testDatabase.close());

describe('test smthing', () => {
   test('It should do smthing', (done) => {
      agent.get('/api/sauces/').expect(200, done);
   });
});
