import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

// test('renders learn react link', () => {
//   /*const app =*/ render(<App />);
//   //const linkElement =  screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   //expect(app).toMatchSnapshot() -snapshot test-  refer jest 
//   // @ts-ignore

  
  
// });

//Exception checking --- refer to jest docs 
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
