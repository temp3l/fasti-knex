//import Fastify from 'fastify';

export default (fastify: any, opts: any, done: any) => {
  fastify.get('/:user', (req: any, res: any) => {
    const user = req.params.user;
    res.send({ hello: 'world ' + user });
  });
  done();
};
