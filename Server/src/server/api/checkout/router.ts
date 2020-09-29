import * as express from 'express';
import { getCheckout, postCheckout } from "./checkout"

var router = express.Router();

router.route('/:checkout_id').get((req: express.Request, res: express.Response) => {
  (async () => {
    const checkout_id = req.params.checkout_id;
    if (!checkout_id) {
      return res.sendStatus(400);
    }

    try {
      return res.send(await getCheckout(checkout_id));
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })();
});

router.route('/').post(({ body }, res: express.Response) => {
  (async () => {
    try {
      return res.send(await postCheckout(body));
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })();
});

export default router;