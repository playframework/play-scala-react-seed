import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

import App from "./App";
import Client from "./Client";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const render = () => {
  act(() => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<App />);
  });
};

jest.mock("../src/Client");

describe("App tests", () => {
  it("renders without crashing", () => {
    render();
  });

  it("getSummary function should called exactly once", () => {
    render();
    expect(Client.getSummary.mock.calls.length).toBe(1);
  });
});
