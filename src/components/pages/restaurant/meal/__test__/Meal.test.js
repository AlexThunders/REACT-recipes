import { render, screen, fireEvent } from '../../../../../test-utils';
import Meal from '../index';
// import {toBeInTheDocument} from '@testing-library/react'


it("remove meal when delete clicked", async () => {
  render(<Meal />);
  const mealCard = screen.getByTestId("mealCard")
  const deleteBtn = screen.queryByTestId("deleteMealTestID")
  if(deleteBtn) {
    fireEvent.click(deleteBtn)
  }
  expect(deleteBtn).toBeNull()
})

