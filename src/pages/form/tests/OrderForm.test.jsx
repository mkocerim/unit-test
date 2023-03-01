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
