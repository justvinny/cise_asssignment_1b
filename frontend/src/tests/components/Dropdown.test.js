import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "../../components/Dropdown";

describe("render dropdown menu.", () => {
    const menuItemsMock = ["TDD", "Mob Programming"];
    const selectedPracticeMock = "TDD";
    const setSelectedPracticeMock = jest.fn();

    it("shows the correct placeholder.", () => {
        render(
            <Dropdown
                menuItems={menuItemsMock}
                selected={selectedPracticeMock}
                setSelected={setSelectedPracticeMock}
                isLoading={false}
                label="SE Practice"
            />
        );
        const componentUnderTest = screen.getByTestId("dropdown-selector");
        expect(componentUnderTest).toHaveTextContent("SE Practice");
    });

    it("shows the correct first value.", () => {
        render(
            <Dropdown
                menuItems={menuItemsMock}
                selected={selectedPracticeMock}
                setSelected={setSelectedPracticeMock}
                isLoading={false}
            />
        );
        const componentUnderTest = screen.getByTestId("dropdown-selector");
        expect(componentUnderTest).toHaveTextContent("TDD");
    });

    it("an enabled dropdown when not loading.", () => {
        render(
            <Dropdown
                menuItems={menuItemsMock}
                selected={selectedPracticeMock}
                setSelected={setSelectedPracticeMock}
                isLoading={false}
            />
        );
        const componentUnderTest = screen.getByTestId("dropdown-selector");
        expect(componentUnderTest).not.toBeDisabled();
    });

    it("a disabled dropdown when loading.", () => {
        render(
            <Dropdown
                menuItems={menuItemsMock}
                selected={selectedPracticeMock}
                setSelected={setSelectedPracticeMock}
                isLoading={true}
            />
        );
        const componentUnderTest = within(
            screen.getByTestId("dropdown-selector")
        ).getByRole("button", "TDD");
        expect(componentUnderTest).toHaveAttribute("aria-disabled", "true");
    });
});
