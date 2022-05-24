import React from "react";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { CurrentUrlProvider } from "../../context/CurrentUrlContext";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

describe("render the nav bar", () => {
    it("shows that a user type of User has 4 menu items: Home, Propose Article, View Articles, and User Type Dropdown.", () => {
        render(
            <CurrentUserProvider>
                <CurrentUrlProvider>
                    <BrowserRouter>
                        <ResponsiveAppBar />
                    </BrowserRouter>
                </CurrentUrlProvider>
            </CurrentUserProvider>
        );
        const componentsUnderTest = within(
            screen.getByTestId("menu-items")
        ).getAllByRole("button");
        componentsUnderTest.forEach((child) =>
            expect(child).toHaveTextContent(
                /home|propose article|view articles|user/i
            )
        );
    });

    it("shows that a user type of Moderator has 5 menu items: Home, Propose Article, View Articles, Moderate Articles, and User Type Dropdown.", () => {
        render(
            <CurrentUserProvider defaultUser="Moderator">
                <CurrentUrlProvider>
                    <BrowserRouter>
                        <ResponsiveAppBar />
                    </BrowserRouter>
                </CurrentUrlProvider>
            </CurrentUserProvider>
        );
        const componentsUnderTest = within(
            screen.getByTestId("menu-items")
        ).getAllByRole("button");
        componentsUnderTest.forEach((child) =>
            expect(child).toHaveTextContent(
                /home|propose article|view articles|moderate articles|moderator/i
            )
        );
    });

    it("shows that a user type of Analyst has 5 menu items: Home, Propose Article, View Articles, Analyse Articles, and User Type Dropdown.", () => {
        render(
            <CurrentUserProvider defaultUser="Analyst">
                <CurrentUrlProvider>
                    <BrowserRouter>
                        <ResponsiveAppBar />
                    </BrowserRouter>
                </CurrentUrlProvider>
            </CurrentUserProvider>
        );
        const componentsUnderTest = within(
            screen.getByTestId("menu-items")
        ).getAllByRole("button");
        componentsUnderTest.forEach((child) =>
            expect(child).toHaveTextContent(
                /home|propose article|view articles|analyse articles|analyst/i
            )
        );
    });
});
