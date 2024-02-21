import { IncomingMessage, ServerResponse } from "http";
import httpProxy from "http-proxy"
const API_URL = process.env.NEXT_API_BASE_URL
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const Proxy = (req: IncomingMessage, res: ServerResponse) => {
  proxy.web(req, res, { target: API_URL, changeOrigin: true });
};

export default Proxy;