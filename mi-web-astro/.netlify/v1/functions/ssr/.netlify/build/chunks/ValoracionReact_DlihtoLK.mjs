import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ValoracionReact.jsx
var STAR_PATH = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
function ValoracionReact({ valorInicial = 0, onChange }) {
	const [rating, setRating] = useState(valorInicial);
	const selectRating = (value) => {
		setRating(value);
		onChange?.(value);
	};
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			gap: "8px"
		},
		children: [/* @__PURE__ */ jsx("div", {
			role: "group",
			"aria-label": "Valorar aplicación",
			style: {
				display: "flex",
				gap: "4px"
			},
			children: [
				0,
				1,
				2,
				3,
				4
			].map((index) => {
				const value = index + 1;
				const fill = rating >= value ? "#F59E0B" : rating >= value - .5 ? `url(#half-star-${index})` : "#D1D5DB";
				return /* @__PURE__ */ jsxs("span", {
					style: {
						position: "relative",
						display: "block",
						width: "32px",
						height: "32px"
					},
					children: [/* @__PURE__ */ jsxs("svg", {
						"aria-hidden": "true",
						viewBox: "0 0 24 24",
						style: {
							width: "100%",
							height: "100%"
						},
						children: [/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
							id: `half-star-${index}`,
							children: [/* @__PURE__ */ jsx("stop", {
								offset: "50%",
								stopColor: "#F59E0B"
							}), /* @__PURE__ */ jsx("stop", {
								offset: "50%",
								stopColor: "#D1D5DB"
							})]
						}) }), /* @__PURE__ */ jsx("path", {
							d: STAR_PATH,
							fill
						})]
					}), [.5, 1].map((fraction) => {
						const selectedValue = index + fraction;
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": `Valorar ${selectedValue} ${selectedValue === 1 ? "estrella" : "estrellas"}`,
							"aria-pressed": rating === selectedValue,
							onClick: () => selectRating(selectedValue),
							style: {
								position: "absolute",
								top: 0,
								bottom: 0,
								left: fraction === .5 ? 0 : "50%",
								width: "50%",
								padding: 0,
								border: 0,
								background: "transparent",
								cursor: "pointer"
							}
						}, fraction);
					})]
				}, index);
			})
		}), /* @__PURE__ */ jsxs("p", {
			"aria-live": "polite",
			style: {
				margin: 0,
				fontSize: "14px",
				fontWeight: "500",
				color: "#374151",
				fontFamily: "sans-serif"
			},
			children: ["Valoración: ", /* @__PURE__ */ jsx("strong", { children: rating > 0 ? `${rating} / 5` : "Sin valorar" })]
		})]
	});
}
//#endregion
export { ValoracionReact as t };
