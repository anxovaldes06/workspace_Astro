import { n as createComponent, r as __exportAll, t as createAstro } from "./compiler_Bhs3Scci.mjs";
import { C as addAttribute, b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
import { t as $$Button } from "./Button_D2ZeB0Ug.mjs";
//#region src/components/Card.astro
createAstro("https://astro.build");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { titulo, descripcion, imagen } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="card" data-astro-cid-yk4hkwyg><img${addAttribute(imagen, "src")}${addAttribute(titulo, "alt")} data-astro-cid-yk4hkwyg><h2 data-astro-cid-yk4hkwyg>${titulo}</h2><p data-astro-cid-yk4hkwyg>${descripcion}</p></div>`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/Card.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const nombre = "Anxo";
	const favoritos = [
		"Beber",
		"Dormir",
		"Comer"
	];
	const valor = 20;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-lcdefpme": true }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 data-astro-cid-lcdefpme>Mi primera página de astro</h1><p data-astro-cid-lcdefpme>Mi nombre es ${nombre}</p><ul data-astro-cid-lcdefpme>${favoritos.map((fav) => renderTemplate`<li data-astro-cid-lcdefpme>${fav}</li>`)}</ul><p data-astro-cid-lcdefpme>Tengo ${valor} años</p>${renderComponent($$result, "Button", $$Button, {
		"title": "Tócame",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Card", $$Card, {
		"titulo": "Perro con mucha calle",
		"descripcion": "barrio de teis",
		"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJM4xNZ6C35n-1Aj9Lp01XjqcLT3mHtAkRdhhSR0kbtgbjs4McLB28m4&s=10",
		"data-astro-cid-lcdefpme": true
	})}` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/index.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
