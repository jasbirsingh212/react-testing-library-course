import App from './../../App';
import { render, screen} from '@testing-library/react';

const renderApp = () => render(<App />);
//beforeEach(() => renderApp()); ===> wrong use of render with beforeEach

describe('Testing Input', () =>  {

    test('should have input', () => {

        renderApp()
        //render(<App />);
        const input = screen.getByText('test')
        expect(input).toBeInTheDocument()

    })

    // test("check for falsy or empty value", () => {

    //     const input = screen.getByText('text:')
    //     // @ts-ignore
    //     console.log(input)
    //     //expect(input.value).toBeFalsy();

    // })

    test("testing for custom input with label", () => {

        renderApp();
//        render(<App />);

        const CustomInput = screen.getByText('test');
        const CustomInput1 = screen.getByText(/test/);
        const CustomInput2 = screen.getByText(/test/i)
        expect(CustomInput).toBeInTheDocument();
        expect(CustomInput1).toBeInTheDocument();
        expect(CustomInput2).toBeInTheDocument();
    })
})