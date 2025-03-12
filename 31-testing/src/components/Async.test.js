import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeds",async () => {
    // It creat mock(dummy) function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: 'p1', title: 'First post' }]
    })
    render(<Async />);

    // find coz it returns promise and reevaluate the screen a couple of times until this succeeds. if we use get it'll provide error coz we are fetching items that can take some time and initially [] so

    // defaul time out period 1sec
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
