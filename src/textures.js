import {Assets} from 'pixi.js';
import {PATH_TEXTURES_DIR} from './constants';


export const Textures = {};


async function load_texture( name, file_extension = '.png' ) {
    const path = `${PATH_TEXTURES_DIR}${name}${file_extension}`;
    const texture = await Assets.load( path );
    console.log(`TEX. name[${name}] path[${path}]`);
    Textures[name] = texture;
}



load_texture( 'road' );
console.log( Textures );