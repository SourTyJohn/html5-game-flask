import {Textures} from './textures';
import {Sprite} from 'pixi.js'


export function create_sprite( texture_name, x, y, anchor = 0.5 ) {
    const sprite = new Sprite( Textures[ texture_name ] );
    sprite.x = x; 
    sprite.y = y;
    sprite.anchor.set( anchor );

    return sprite;
}
