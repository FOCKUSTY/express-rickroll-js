import type { Express } from "express";
import expressLib from "express";

import { rootRouter } from "./routes/root.route";
import { PORT } from "./env";

export class App {
  public constructor(public readonly experess: Express = expressLib()) {
    this.initialize();
  }

  public execute() {
    return this.experess.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }

  private initialize() {
    this.experess.use("{/*path}", rootRouter);
  }
}

export default App;
