import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnalyseArticle from "../../pages/AnalyseArticle";
import { CurrentUrlProvider } from "../../context/CurrentUrlContext";
import { CurrentUserProvider } from "../../context/CurrentUserContext";

describe("render the analyse articles page", () => {
  it("table should be rendered", async () => {
    render(
      <CurrentUrlProvider>
        <CurrentUserProvider>
          <AnalyseArticle />
        </CurrentUserProvider>
      </CurrentUrlProvider>
    );
    const table = await screen.findByRole("table");
    expect(table).toBeTruthy();
  });

  it("shows that there should only be one row of test article present by checking for view buttons.", async () => {
    render(
      <CurrentUrlProvider>
        <CurrentUserProvider>
          <AnalyseArticle />
        </CurrentUserProvider>
      </CurrentUrlProvider>
    );
    const table = await screen.findByRole("table");
    const buttons = within(table).getAllByRole("button", { name: "View" });
    expect(buttons.length).toBe(1);
  });
});
