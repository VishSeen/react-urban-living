import { render } from "@testing-library/react";
import Header from "../header";

test("Renders Header Component.", () => {
    const element = <Header />
    render(element);

    expect(element).toBeTruthy();
});
