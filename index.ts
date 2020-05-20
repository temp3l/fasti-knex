import Fastify from 'fastify';
import UsersRouter from './routes/gpp_users';
import { Customer, Minimal } from './objection';
const fastify = Fastify({ logger: false });

fastify.register(UsersRouter, { prefix: '/gpp_users' });

fastify.get('/', async (req: any, res: any) => {
  res.send({ hello: 'world' });
});
fastify.listen(3000);

const main = async () => {
  console.log('\n\n');
  const customer = await Customer.query().findOne({ customerNumber: 357 });
  console.log(customer);
};

main();
