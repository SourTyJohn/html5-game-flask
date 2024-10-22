import { Application } from "pixi.js";
import * as Sprite from "./sprites"


(async () =>
{
    const app = new Application();
    await app.init({ background: '#109900', resizeTo: window });
    document.body.appendChild(app.canvas);

    const road = Sprite.create_sprite( 'road', 200, 200 );
    app.stage.addChild( road );

})();
