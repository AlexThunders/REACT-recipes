import { render, screen } from '../../../../test-utils';
import Main from '../index'
import {toBeInTheDocument} from '@testing-library/jest-dom'


it('should be one year', () => {
  render(<Main />);
  const footerElement = screen.getByTitle("Alex_Thunders");
  expect(footerElement).toBeInTheDocument()
});
