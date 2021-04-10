/* import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Order from './Order';
import { StateProvider } from './StateProvider';
import { reducer, initialState } from './reducer';

describe('order component', () => {
    it('displays correct value', () => {
        render(
            <StateProvider initialState={initialState} reducer={reducer}>
                <BrowserRouter>
                    <Order props={...order} value={44} />
                </BrowserRouter>
            </StateProvider>
        )

        expect(document.querySelector('h3').textContent).toBe(44)
    })
}) */