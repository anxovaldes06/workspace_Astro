import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
import { t as $$Button } from "./Button_D2ZeB0Ug.mjs";
//#region src/pages/index2.astro
var index2_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index2,
	file: () => $$file,
	url: () => $$url
});
var $$Index2 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-hjeyadqy": true }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1 data-astro-cid-hjeyadqy>Mi segunda página</h1><p data-astro-cid-hjeyadqy>Esta es la segunda página</p>${renderComponent($$result, "Button", $$Button, {
		"title": "Púlsame",
		"data-astro-cid-hjeyadqy": true
	})}` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/index2.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/index2.astro";
var $$url = "/index2";
//#endregion
//#region \0virtual:astro:page:src/pages/index2@_@astro
var page = () => index2_exports;
//#endregion
export { page };
