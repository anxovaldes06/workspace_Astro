import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
//#region src/pages/ssg.astro
var ssg_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ssg,
	file: () => $$file,
	url: () => $$url
});
var $$Ssg = createComponent(($$result, $$props, $$slots) => {
	const fechahora = (/* @__PURE__ */ new Date()).toLocaleString("es-ES");
	const productos = [
		"manzanas",
		"peras",
		"plátanos"
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Lista de productos usando SSG</h1><p>Fecha y Hora de compilación: ${fechahora}</p><ul>${productos.map((p) => renderTemplate`<li>${p}</li>`)}</ul>` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/ssg.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/ssg.astro";
var $$url = "/ssg";
//#endregion
//#region \0virtual:astro:page:src/pages/ssg@_@astro
var page = () => ssg_exports;
//#endregion
export { page };
