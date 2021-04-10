/* import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';


describe('login test', () => {
    it('calls onClick when hitting button', () => {
        const handleClick = jest.fn();
        render(
            <BrowserRouter>
                <Login>
                    <button onClick={handleClick}>Sign In</button>
                </Login>
            </BrowserRouter>
        )
        fireEvent.click(getByTestId('test'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
 */