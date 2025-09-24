import { ZenitsuRequest } from "./zenitsu-request";
import { ZenitsuResponse } from "./zenitsu-response";

export class ZenitsuContext<P extends string> {
    public req: ZenitsuRequest<P>;
    public res: ZenitsuResponse;

    constructor(request: Bun.BunRequest<P>, path: P) {
        this.req = new ZenitsuRequest(request, path);
        this.res = new ZenitsuResponse();
    }
}
