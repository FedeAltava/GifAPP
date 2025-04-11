/* eslint-disable no-undef */

import { getGifs } from "../../../src/helpers/getGifs";
describe('getGifs helper tests', () => {
    it('should return an array of gifs', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 );
    });
})