import { render, screen } from "@testing-library/react";
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
  const resimler = await screen.findAllByRole("img", { name: "cesit" });
});
