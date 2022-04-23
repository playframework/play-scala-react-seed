import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Client from "./Client";

jest.mock("../src/Client");

describe("App tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
  });

  it("getSummary function should called exactly once", () => {
    expect(Client.getSummary.mock.calls.length).toBe(1);
  });
});
