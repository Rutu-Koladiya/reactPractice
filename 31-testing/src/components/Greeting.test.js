// we import the componnet that we do want to test
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // ARRANGE
    render(<Greeting />);

    // ACT
    // no action needed...

    //ASSERT
    // we get functions, find functions and query functions.The main difference is when these functions throw errors and if they return a promise or not.Get functions, will for example, throw an error if an element is not found,query functions won't do that and find functions will return a promise.
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);

    // ACT
    // aslo we can select it with getByText
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {

    render(<Greeting />)

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // we used query here coz if we used get it'll throw error if it didn't find the text
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });
});

// writing Tests -- The Three 'A's
// ARRANGE --> Set up the data, test condition and test enviornment
// ACT --> Run logic that should be tested (e.g. execute function)
// ASSERT --> Compare execution results with expected results
