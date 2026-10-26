import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { C as addAttribute, b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
var estilos_module_default = { titulo3: "_titulo3_1yzqw_9" };
//#endregion
//#region src/pages/estilos.astro
var estilos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Estilos,
	file: () => $$file,
	url: () => $$url
});
var $$Estilos = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi página" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Titulo 1</h1><h2>Titulo 2</h2><h3${addAttribute(estilos_module_default.titulo3, "class")}>Titulo 3</h3>` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/estilos.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/estilos.astro";
var $$url = "/estilos";
//#endregion
//#region \0virtual:astro:page:src/pages/estilos@_@astro
var page = () => estilos_exports;
//#endregion
export { page };
