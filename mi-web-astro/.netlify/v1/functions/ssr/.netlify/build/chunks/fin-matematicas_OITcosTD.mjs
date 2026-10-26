import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as ContadorReact } from "./ContadorReact_DPorLl8q.mjs";
//#region src/content/posts/fin-matematicas.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		h1: "h1",
		p: "p"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.h1, {
			id: "la-ia-se-ha-apoderado-de-las-matemáticas",
			children: "La IA se ha apoderado de las matemáticas"
		}),
		"\n",
		createVNode(_components.p, { children: "Según declaran posibles investigadores del MIT, es posible que las matemáticas se hayan extinguido para siempre" }),
		"\n",
		createVNode(ContadorReact, {
			"client:load": true,
			"client:component-path": "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/ContadorReact.jsx",
			"client:component-export": "default",
			"client:component-hydration": ""
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? createVNode(MDXLayout, Object.assign({}, props, { children: createVNode(_createMdxContent, props) })) : _createMdxContent(props);
}
var frontmatter = {
	"titulo": "se acerca el fin de las matemáticas",
	"autor": "anxo",
	"fecha": "2026-12-25",
	"tags": ["crisis", "matemáticas"]
};
function getHeadings() {
	return [{
		"depth": 1,
		"slug": "la-ia-se-ha-apoderado-de-las-matemáticas",
		"text": "La IA se ha apoderado de las matemáticas"
	}];
}
var url = "src/content/posts/fin-matematicas.mdx";
var file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/content/posts/fin-matematicas.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/content/posts/fin-matematicas.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
