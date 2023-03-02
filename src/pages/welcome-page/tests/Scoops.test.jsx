import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/types/setup";
import Scoops from "../Scoops";

/*!SECICILER

!komut >
get:element DOM var ise
find:elementleri ne zaman gelecegi belli degil--async  
query:elementler DOM yok ve y+klenip yüklenmeyecegi belli degilse
komut+[all]+secici

*/

test("API den gelen veri her cesit ekrana basiliyor", async () => {
  render(<Scoops />);
  // cesitlerde resimler cek
  const resimler = await screen.findAllByRole("img", { name: "cesit" }); //selectors
  expect(resimler).toHaveLength(4);
});

test("Dondurma cesitlerinde ekleme ve sifirlama islemi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  //gerekli elemanlari alim
  const toplamH1 = screen.getByRole("heading", { name: /Cesitler Ucreti/i });

  //ekte buttonlarini cekme

  const ekleBtns = await screen.findAllByRole("button", { name: /ekle/i });

  //Sifirlama butonlarini cekme
  const delBtns = await screen.findAllByRole("button", { name: /Sifirla/i });

  //Ekleme islemlei ve kontrolü
  await user.click(ekleBtns[0]);
  expect(toplamH1).toHaveTextContent("3");
  await user.dblClick(ekleBtns[1]);
  expect(toplamH1).toHaveTextContent("9");

  //Sifirlama islemleri
  await user.click(delBtns[1]);
  expect(toplamH1).toHaveTextContent("3");
});
