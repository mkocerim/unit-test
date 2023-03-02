import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from "../Toppings";

test("Sos verilerinin sepet state üzerinde yaptigi degisim", async () => {
  render(<Toppings />);
  const user = userEvent;

  // gerekli elementlerin cekilmesi

  const toplamH1 = screen.getByRole("heading", { name: /Soslar Ücreti/i });
  const mochiCheck = await screen.findByRole("checkbox", { name: /mochi/i });
  const cherryCheck = await screen.findByRole("checkbox", {
    name: /cherries/i,
  });

  //sosun eklenmesi ve sepetin toplami degismesi

  await user.click(mochiCheck);
  expect(toplamH1).toHaveTextContent("2");

  // yeni sos ekleme
  await user.click(cherryCheck);
  expect(toplamH1).toHaveTextContent("4");

  //eklenen sosun cikarilmasi

  await user.click(mochiCheck);
  expect(toplamH1).toHaveTextContent("2");
});
