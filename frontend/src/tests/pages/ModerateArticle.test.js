import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModerateArticle from "../../pages/ModerateArticle";
import { CurrentUrlProvider } from "../../context/CurrentUrlContext";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

describe("render the moderate articles page", () => {
  it("table should be rendered", async () => {
    render(
      <CurrentUrlProvider>
        <CurrentUserProvider>
          <ModerateArticle />
        </CurrentUserProvider>
      </CurrentUrlProvider>
    );
    const table = await screen.findByRole("table");
    expect(table).toBeTruthy();
  });

  it("shows that there should only be two unmoderated test articles present by checking for 2 accept buttons.", async () => {
    render(
      <CurrentUrlProvider>
        <CurrentUserProvider>
          <ModerateArticle />
        </CurrentUserProvider>
      </CurrentUrlProvider>
    );
    const table = await screen.findByRole("table");
    const buttons = within(table).getAllByRole("button", { name: "Accept" });
    expect(buttons.length).toBe(2);
  });
});
