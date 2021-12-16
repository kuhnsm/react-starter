import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
test("renders learn react link", () => {
  const component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toBeTruthy();
});
