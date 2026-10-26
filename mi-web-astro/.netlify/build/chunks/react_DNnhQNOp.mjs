import { n as createComponent, r as __exportAll } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, f as renderComponent, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as $$Layout } from "./Layout_AbNCx-oF.mjs";
import { t as ContadorReact } from "./ContadorReact_DPorLl8q.mjs";
//#region src/pages/react.astro
var react_exports = /* @__PURE__ */ __exportAll({
	default: () => $$React,
	file: () => $$file,
	url: () => $$url
});
var $$React = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Contador usando React</h1>${renderComponent($$result, "ContadorReact", ContadorReact, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/ContadorReact.jsx",
		"client:component-export": "default"
	})}` })}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/react.astro", void 0);
var $$file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/pages/react.astro";
var $$url = "/react";
//#endregion
//#region \0virtual:astro:page:src/pages/react@_@astro
var page = () => react_exports;
//#endregion
export { page };
