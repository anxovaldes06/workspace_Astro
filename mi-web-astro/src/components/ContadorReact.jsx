import { useState } from "react";

export default function ContadorReact() {
	const [contador, setContador] = useState(0);

	return (
		<section aria-label="Contador React">
			<div className="counter">
				<button
					type="button"
					aria-label="Restar uno"
					onClick={() => setContador((valor) => valor - 1)}
				>
					−
				</button>
				<output aria-live="polite">{contador}</output>
				<button
					type="button"
					aria-label="Sumar uno"
					onClick={() => setContador((valor) => valor + 1)}
				>
					+
				</button>
			</div>
			<button type="button" onClick={() => setContador(0)}>
				Reiniciar
			</button>
			<style>{`
				.counter {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 1rem;
					margin: 2rem 0 1rem;
				}

				button {
					padding: 0.5rem 1rem;
					font: inherit;
					cursor: pointer;
				}

				output {
					min-width: 3ch;
					font-size: 2rem;
					font-weight: 700;
				}
			`}</style>
		</section>
	);
}