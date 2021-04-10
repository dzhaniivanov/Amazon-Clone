import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Product from './Product';
import { StateProvider } from './StateProvider';
import { reducer, initialState } from './reducer';



describe('product component', () => {
    it('are the componnent visuals the price', () => {
        render(
            <StateProvider initialState={initialState} reducer={reducer}>
                <BrowserRouter>
                    <Product price={22} />
                </BrowserRouter>
            </StateProvider>
        );

        expect(document.querySelector('strong').textContent).toBe('22')

    })

    it('are the componnent visuals the title', () => {
        render(
            <StateProvider initialState={initialState} reducer={reducer}>
                <BrowserRouter>
                    <Product title={"Pesho"} />
                </BrowserRouter>
            </StateProvider>
        );

        expect(document.querySelector('.product__info p').textContent).toBe('Pesho')

    })

})