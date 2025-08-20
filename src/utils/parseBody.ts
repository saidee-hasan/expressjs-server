import { IncomingMessage } from "http";

export const parseBody = (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parsed = body ? JSON.parse(body) : {};
        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};
