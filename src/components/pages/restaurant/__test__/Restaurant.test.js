import { render, screen, fireEvent } from '../../../../test-utils';
import SearchMeal from '../searchMeal';

describe("serachMeal", () => {

  it("search input works correctly", async () => {
    render(<SearchMeal />);
    const searchInput = screen.getByTestId("searchInpID")
    fireEvent.change(searchInput, {target: {value: "Chocolate"}})
    expect(searchInput.value).toBe("Chocolate")
  })

})
