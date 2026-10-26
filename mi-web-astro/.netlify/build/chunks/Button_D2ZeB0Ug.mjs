import { n as createComponent, t as createAstro } from "./compiler_Bhs3Scci.mjs";
import { b as renderTemplate, x as maybeRenderHead } from "./jsx-runtime_CVlLtXKv.mjs";
//#region src/components/Button.astro
createAstro("https://astro.build");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const title = Astro.props.title;
	return renderTemplate`${maybeRenderHead($$result)}<button class="btn" data-astro-cid-ekguhzzh>${title}</button>`;
}, "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/Button.astro", void 0);
//#endregion
export { $$Button as t };
