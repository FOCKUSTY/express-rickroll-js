import { Router } from "express";
import { REDIRECT_URL } from "../env";

const router: Router = Router();

router.get("{/*path}", (_request, response) => {
  response.redirect(REDIRECT_URL);
});

export {
  router as rootRouter
}

export default router;
