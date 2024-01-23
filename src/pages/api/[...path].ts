import httpProxy from "http-proxy";
import { IncomingMessage, ServerResponse } from "http";


const API_URL = process.env.NEXT_APP_API_URL;

console.log({ API_URL });

const proxy = httpProxy.createProxyServer();
export const config = {
  api: {
      bodyParser: false,
      externalResolver: true,
  },
};
const Proxy = (req: any, res: any) => {
  proxy.web(req, res, { target: API_URL, changeOrigin: true });
};

export default Proxy;