import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProposeArticle from "../../pages/ProposeArticle";
import { CurrentUrlProvider } from "../../context/CurrentUrlContext";

describe("render the propose article form", () => {
    it("shows all 5 textbox, 1 dropdown, and 1 button elements.", async () => {
        render(
            <CurrentUrlProvider>
                <ProposeArticle />
            </CurrentUrlProvider>
        );
        const textBoxes = screen.getAllByRole("textbox");
        const [dropdown, submitBtn] = screen.getAllByRole("button");
        expect(textBoxes.length).toBe(5);
        expect(dropdown).toBeTruthy();
        expect(submitBtn).toBeTruthy();
    });
});