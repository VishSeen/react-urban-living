import { render, screen } from "@testing-library/react";
import Header from "../header/header";

test("Renders Header Component.", () => {
  render(<Header />);

  expected("Has text");
});
