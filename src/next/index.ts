import type { NextApiRequest, NextApiResponse } from "next"

let count: number = 0;

const counterRoute = () => (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method) {
    case 'GET':
      res.send(count);
      break;

    case 'POST':
      count++;
      res.send("Ok");
      break;

    default:
      res.status(405).send('Method Not Allowed');
  }
}

export default counterRoute;
