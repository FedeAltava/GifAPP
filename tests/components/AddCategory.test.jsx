/* eslint-disable no-undef */

import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/componentes/AddCategory"


describe('AddCategory Component Tests', ()=>{

    const onNewCategory = jest.fn();
    const inputValue = 'Saitama';
    beforeEach(() => jest.clearAllMocks());

    it('should change the value of the text box',()=>{
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama'}});
        expect( input.value).toBe('Saitama');
    });

    it('should call onNewCategory if value input exists',()=>{
        render(<AddCategory onNewCategory={onNewCategory} />);
         const input = screen.getByRole('textbox');
         const form = screen.getByRole('form');
         fireEvent.input( input, { target: { value : inputValue } } );
         fireEvent.submit( form );
         expect(input.value).toBe('')
         expect( onNewCategory ).toHaveBeenCalledTimes(1);
    });

    it('should not call onNewCategory if value is empty',()=>{
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
         fireEvent.submit( form );
         expect( onNewCategory ).not.toHaveBeenCalled();
    });
    
})