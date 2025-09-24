import { type Prettify } from "./types";

export class ZenitsuRequest<P extends string> {
    public raw: Bun.BunRequest<P>;
    public path: P;
    public params: Prettify<Bun.RouterTypes.ExtractRouteParams<P>>;

    constructor(request: typeof this.raw, path: typeof this.path) {
        this.raw = request;
        this.path = path;
        this.params = request.params;
    }
}
