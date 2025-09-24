import { ZenitsuContext } from "./zenitsu-context";

type Handler<P extends string> = (ctx: ZenitsuContext<P>) => Response | Promise<Response>;

export class Zenitsu {
    private _routes: Record<string, Bun.RouterTypes.RouteHandlerObject<string>>;

    constructor() {
        this._routes = {};
    }

    public start(port: number, callback?: (server: Bun.Server) => void) {
        const server = Bun.serve({
            port: port,
            reusePort: true,
            routes: this._routes,
        });

        callback?.(server);
    }

    public get<P extends string>(path: P, handler: Handler<P>) {
        this._routes[path] = {
            GET: (req: Bun.BunRequest<P>) => {
                return handler(new ZenitsuContext(req, path));
            },
        };
    }
}
