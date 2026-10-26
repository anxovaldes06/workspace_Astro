import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { n as renderScript, t as $$Layout } from "./Layout_AbNCx-oF.mjs";
//#region src/pages/csr.astro
var csr_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Csr,
	file: () => $$file,
	url: () => $$url
});
var $$Csr = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Lista de productos usando CSR</h1><p>Fecha y Hora : <span id="fechahora"></span></p><ul id="lista"></ul>` })}${renderScript($$result, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/csr.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/csr.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/csr.astro";
var $$url = "/csr";
//#endregion
//#region \0virtual:astro:page:src/pages/csr@_@astro
var page = () => csr_exports;
//#endregion
export { page };
