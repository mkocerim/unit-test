import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";

test("Onaylama Buttonu tiklanabilir olur", async () => {
  const user = userEvent.setup();
  render(<Form />);

  //gerekli elemanlari alalim
  const termsCheck = screen.getByRole("checkbox", {
    name: /Kosullari okudum kabul ediyorum/i,
  });
  const orderBtn = screen.getByRole("button", { name: /siparisi onayla/i });

  //button inaktiftir ve unchecked tir

  expect(orderBtn).toBeDisabled();
  expect(termsCheck).not.toBeChecked();

  //sözlesmeleri kabul eder
  await user.click(termsCheck);
  expect(orderBtn).toBeEnabled();
  // tekrar inaktif olur
  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});

test("kosullarin üstüne mouse gelince bilgilendirme cikar", async () => {
  render(<Form />);
  const user = userEvent.setup();

  //gerekli elementler
  const buton = screen.getByRole("button", { name: /siparisi onayla/i });
  const termsCheck = screen.getByRole("checkbox", {
    name: /Kosullari okudum kabul ediyorum/i,
  });
  await user.click(termsCheck);

  //kosularin üzerine mouse getir
  await user.hover(buton);
  const popup = screen.getByText(/Size gercekten birsey teslim etmeyecegiz/i);
  expect(popup).not.toBeVisible();
  //mouse gittiginde kaybolur
  await user.unhover(buton);
  expect(popup).not.toBeVisible();
});
