/* eslint-disable no-undef */

import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/componentes/AddCategory"


describe('AddCategory Component Tests', ()=>{
    const onNewCategory = jest.fn();
    it('should change the value of the text box',()=>{
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama'}});
        expect( input.value).toBe('Saitama');
    })
})