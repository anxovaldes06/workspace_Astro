export default class Contador {
	private valor = 0;

	constructor(
		private readonly output: HTMLOutputElement,
		private readonly decrementButton: HTMLButtonElement,
		private readonly incrementButton: HTMLButtonElement,
		private readonly resetButton: HTMLButtonElement,
	) {
		this.decrementButton.onclick = () => this.actualizar(this.valor - 1);
		this.incrementButton.onclick = () => this.actualizar(this.valor + 1);
		this.resetButton.onclick = () => this.actualizar(0);
	}

	private actualizar(valor: number): void {
		this.valor = valor;
		this.output.value = String(valor);
		this.output.textContent = String(valor);
	}
}
