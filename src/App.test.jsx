import { render, screen } from "@testing-library/react";
import App from "./App";

describe("LN Digital landing page", () => {
  it("renders the preserved landing page structure and content", () => {
    const { container } = render(<App />);

    expect(screen.getAllByText("LN Digital")).toHaveLength(3);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Soluções digitais para empresas em evolução.",
    );
    expect(screen.getByText("Estratégia digital para empresas em evolução")).toBeInTheDocument();
    expect(screen.getByText("Um ecossistema digital feito para sua empresa evoluir.")).toBeInTheDocument();
    expect(screen.getByText("Escolha o ponto de partida ideal.")).toBeInTheDocument();
    expect(screen.getByText("Falar com a LN Digital")).toHaveAttribute(
      "href",
      "https://wa.me/5561999223003?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20LN%20Digital.",
    );

    expect(container.querySelector(".site-shell")).toBeInTheDocument();
    expect(container.querySelector(".topbar")).toBeInTheDocument();
    expect(container.querySelector(".hero-visual .orbit-three .icon-6")).toHaveTextContent("WEB");
    expect(container.querySelector(".price-card.featured")).toHaveTextContent("Business");
    expect(container.querySelectorAll(".feature-card")).toHaveLength(3);
    expect(container.querySelectorAll(".quote-card")).toHaveLength(5);
  });
});
