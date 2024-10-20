import { Application } from "pixi.js";

(async () =>
{
    const app = new Application();
    await app.init({ background: '#109900', resizeTo: window });
    document.body.appendChild(app.canvas);
})();
