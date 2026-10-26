import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ContadorReact.jsx
function ContadorReact() {
	const [contador, setContador] = useState(0);
	let incrementar = () => {
		setContador(contador + 1);
	};
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("button", {
		onClick: incrementar,
		children: "Pulsame"
	}), /* @__PURE__ */ jsx("p", { children: contador })] });
}
//#endregion
export { ContadorReact as t };
