import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "../../components/CustomButton";

describe("render custom black button", () => {
    const label = "test";
    const mockCallBack = jest.fn();

    it("shows an enabled button with correct label", () => {
        render(
            <CustomButton
                label={label}
                onClick={mockCallBack}
                isLoading={false}
            />
        );
        const componentUnderTest = screen.getByRole("button", /test/i);
        expect(componentUnderTest).toHaveTextContent("test");
    });

    it("shows the correct css", () => {
        render(
            <CustomButton
                label={label}
                onClick={mockCallBack}
                isLoading={false}
            />
        );
        const componentUnderTest = screen.getByRole("button", /test/i);
        expect(componentUnderTest).toHaveStyle("background-color: #111");
    });

    it("shows an enabled button when not loading.", () => {
        render(
            <CustomButton
                label={label}
                onClick={mockCallBack}
                isLoading={false}
            />
        );
        const componentUnderTest = screen.getByRole("button", /test/i);
        expect(componentUnderTest).not.toBeDisabled();
    });

    it("shows a disabled button when loading.", () => {
        render(
            <CustomButton
                label={label}
                onClick={mockCallBack}
                isLoading={true}
            />
        );
        const componentUnderTest = screen.getByRole("button", /test/i);
        expect(componentUnderTest).toBeDisabled();
    });
});