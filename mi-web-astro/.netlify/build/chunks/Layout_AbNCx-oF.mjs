import { n as createComponent, t as createAstro } from "./compiler_Bhs3Scci.mjs";
import { C as addAttribute, S as renderHead, _ as renderSlot, a as renderTransition, b as renderTemplate, f as renderComponent, w as createRenderInstruction, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/astro/components/ClientRouter.astro
createAstro("https://astro.build");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/anxov/workspaceAstro/mi-web-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region src/components/Nav.astro
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<nav data-astro-cid-wpvy4v7s><a href="/" data-astro-cid-wpvy4v7s>Inicio</a><a href="/index2" data-astro-cid-wpvy4v7s>Index 2 </a><a href="/ssg" data-astro-cid-wpvy4v7s>SSG</a><a href="/ssr" data-astro-cid-wpvy4v7s>SSR</a><a href="/csr" data-astro-cid-wpvy4v7s>CSR</a><a href="/vanilla" data-astro-cid-wpvy4v7s>VANILLA</a><a href="react" data-astro-cid-wpvy4v7s>REACT</a><a href="/estilos" data-astro-cid-wpvy4v7s>ESTILOS</a><a href="/blog" data-astro-cid-wpvy4v7s>BLOG</a><a href="/proyectos" data-astro-cid-wpvy4v7s>PROYECTOS</a></nav>`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/Nav.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Document" } = Astro.props;
	return renderTemplate`<html lang="en" data-astro-cid-ju4pidww><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {
		"data-astro-transition-scope": renderTransition($$result, "yztbsuuz", "fade", ""),
		"data-astro-cid-ju4pidww": true
	})}${renderHead($$result)}</head><body data-astro-cid-ju4pidww><header data-astro-cid-ju4pidww>${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-ju4pidww": true })}</header>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/layouts/Layout.astro", "self");
//#endregion
export { renderScript as n, $$Layout as t };
