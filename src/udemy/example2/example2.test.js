/* eslint-disable testing-library/prefer-presence-queries */
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

    test('get input by role', () => {
        renderApp();
        const gettingInputByRole = screen.getByRole('textbox')
        expect(gettingInputByRole).toBeInTheDocument();
    })

    test("get element by label text", () => {
        renderApp();
        const getElementByLabelText = screen.getByLabelText("test");
        expect(getElementByLabelText).toBeInTheDocument();
    })

    test("get by placeholder", () => {
        renderApp();
        const getByPlaceholder = screen.getByPlaceholderText('test');
        expect(getByPlaceholder).toBeInTheDocument();

    })
})


describe("testing with queryBy selector", () => {

    test("get input by queryBy text", () => {
        renderApp();
        expect(screen.queryByText('test')).toBeInTheDocument();
    })

    test("should get null if element not found", () => {
        renderApp();
        expect(screen.queryByRole('whatever')).toBeNull();
        //note : queryBy selector gives null if no element is found
    })

    test("should get by role with queryBy", () => {
        renderApp();
        expect(screen.queryByRole('textbox')).toBeDefined();
    })
})