/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/componentes/GifItem"
describe('GiftItem component tests', () => {
    const title = 'Ramonet';
    const url = 'https://one-punch.com/saitama.jpg';

    it('should throw an error if propTypes are missing', () => {
        render( <GifItem />);
    });

    it('should match with snapshot', () => {
       const  {container} = render( <GifItem title ={title} url={url}/>);

        expect(container).toMatchSnapshot();
    });

    it('should render the image with URL and ALT', () => {
        render( <GifItem title ={title} url={url}/>);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
     });

     it('should render the title properly', () => {
        render( <GifItem title ={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();

     });
})