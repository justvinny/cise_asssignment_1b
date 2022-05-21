import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { CurrentUrlProvider } from "../../context/CurrentUrlContext";

describe("render the nav bar", () => {
    it("shows that is has 3 buttons for home, propose article, and view articles.", () => {
        render(
            <CurrentUrlProvider>
                <BrowserRouter>
                    <ResponsiveAppBar />
                </BrowserRouter>
            </CurrentUrlProvider>
        );
        const componentsUnderTest = within(
            screen.getByTestId("menu-items")
        ).getAllByRole("button");
        componentsUnderTest.forEach((child) =>
            expect(child).toHaveTextContent(
                /home|propose article|view articles/i
            )
        );
    });
});