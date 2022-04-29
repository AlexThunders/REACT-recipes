import {screen, render } from '../../../test-utils';
import Header from '../index'
import {toBeInTheDocument} from '@testing-library/jest-dom'

it("show backbutton", () => {
  render(<Header />);
  const btn = screen.getByTestId('gobacktestID')
  expect(btn).toBeInTheDocument()
})