import { app } from "../main";

export const Exchanges = {
  list(limit = 10000000, offset = 0) {
    const resp = app.config.globalProperties.$http
      .get("exchange/?limit=" + limit + "&offset=" + offset)
      .then((promise) => {
        return promise;
      });
    return resp;
  },
};
