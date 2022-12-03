import { Router } from "express"

const router = Router();
let count: number = 0;

router.get('/', (req, res) => {
  res.send(count);
});

router.post('/', (req, res) => {
  count++;
  res.sendStatus(200);
});

export default router;
