import Express from 'express';

const exampleRoute = (req: Express.Request, res: Express.Response): Express.Response => {
  return res.status(200).send({ example: true });
};

export { exampleRoute };
