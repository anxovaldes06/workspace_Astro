import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
//#region src/pages/vanilla.astro
var vanilla_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Vanilla,
	file: () => $$file,
	url: () => $$url
});
var $$Vanilla = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Contador usando vanilla js/ts</h1><button id="btn">Pulsame</button><p id="cont">0</p><script src="/public/scripts/contador.ts" defer><\/script>` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/vanilla.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/vanilla.astro";
var $$url = "/vanilla";
//#endregion
//#region \0virtual:astro:page:src/pages/vanilla@_@astro
var page = () => vanilla_exports;
//#endregion
export { page };
