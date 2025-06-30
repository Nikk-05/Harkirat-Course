/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		// GET /
		if (request.method === "GET" && pathname === "/") {
			return new Response("Hello World", { status: 200 });
		}

		// GET /user/:id
		if (request.method === "GET" && pathname.startsWith("/user/")) {
			const id = pathname.split("/")[2];
			return new Response(`User ID is ${id}`, { status: 200 });
		}

		// POST /data
		if (request.method === "POST" && pathname === "/data") {
			const body = await request.json();
			return new Response(JSON.stringify({ message: "Data received" }), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response("Not Found", { status: 404 });
	}
};


