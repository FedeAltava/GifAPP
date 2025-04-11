/* eslint-disable no-undef */
import { render } from "@testing-library/react"
import { GifItem } from "../../src/componentes/GifItem"
describe('GiftItem component tests', () => {
    it('should throw an error if propTypes are missing', () => {
        render( <GifItem />)
    })
})