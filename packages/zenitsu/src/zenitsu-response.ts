export class ZenitsuResponse {
    private _send(data: Bun.BodyInit) {
        return new Response(data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    constructor() {}

    public toJSON<D>(data: D) {
        return this._send(JSON.stringify(data));
    }
}
