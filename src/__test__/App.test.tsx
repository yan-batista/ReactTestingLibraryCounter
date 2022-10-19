import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Contador", () => {
  test("deve iniciar zerado", () => {
    // given
    render(<App />);

    // when
    const counterValue = screen.getByTestId("counter_value");

    // then
    expect(counterValue).toHaveTextContent("0");
  });

  test("deve ser capaz de aumentar caso o botão de incremetar seja apertado", () => {
    // given
    render(<App />);
    const counterValue = screen.getByTestId("counter_value");

    // when
    fireEvent.click(screen.getByTestId("increase"));

    // then
    expect(counterValue).toHaveTextContent("1");
  });

  test("deve ser capaz de voltar para o valor inicial quando o botão de reiniciar for apertado", () => {
    // given
    render(<App />);
    const counterValue = screen.getByTestId("counter_value");

    // when
    fireEvent.click(screen.getByTestId("increase")); // 1
    fireEvent.click(screen.getByTestId("increase")); // 2
    fireEvent.click(screen.getByTestId("increase")); // 3
    fireEvent.click(screen.getByTestId("reset")); // volta para 0

    // then
    expect(counterValue).toHaveTextContent("0");
  });
});
