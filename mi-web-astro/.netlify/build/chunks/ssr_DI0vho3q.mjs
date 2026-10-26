import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
//#region src/pages/ssr.astro
var ssr_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ssr,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Ssr = createComponent(($$result, $$props, $$slots) => {
	const fechahora = (/* @__PURE__ */ new Date()).toLocaleString("es-ES");
	const productos = [
		"manzanas",
		"peras",
		"plátanos"
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Lista de productos usando SSR</h1><p>Fecha y Hora :${fechahora}</p><ul>${productos.map((p) => renderTemplate`<li> ${p} </li>`)}</ul>` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/ssr.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/ssr.astro";
var $$url = "/ssr";
//#endregion
//#region \0virtual:astro:page:src/pages/ssr@_@astro
var page = () => ssr_exports;
//#endregion
export { page };
