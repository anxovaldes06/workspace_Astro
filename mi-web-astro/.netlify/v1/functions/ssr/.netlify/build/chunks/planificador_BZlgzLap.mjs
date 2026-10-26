import { m as Fragment, n as createVNode, r as __astro_tag_component__ } from "./jsx-runtime_CVlLtXKv.mjs";
import { t as ValoracionReact } from "./ValoracionReact_DlihtoLK.mjs";
//#region src/content/proyectos/planificador.mdx
function _createMdxContent(props) {
	const _components = Object.assign({
		a: "a",
		p: "p",
		strong: "strong"
	}, props.components);
	return createVNode(Fragment, { children: [
		createVNode(_components.p, { children: "Añade tus tareas y el tiempo que tardas en realizarlas" }),
		"\n",
		createVNode("div", {
			class: "project-gallery",
			"aria-label": "Imágenes del planificador",
			children: [createVNode("img", {
				src: "/images/projects/planificador-tareas.svg",
				alt: "Vista ilustrada de una lista de tareas organizada por horarios"
			}), createVNode("img", {
				src: "/images/projects/planificador-tiempo.svg",
				alt: "Vista ilustrada de un calendario semanal con bloques de tiempo"
			})]
		}),
		"\n",
		createVNode(_components.p, { children: [
			"🔗 ",
			createVNode(_components.strong, { children: "ENLACE" }),
			" ",
			createVNode(_components.a, {
				href: "https://newplanificador.netlify.app/",
				children: "Ver página"
			})
		] }),
		"\n",
		createVNode(ValoracionReact, {
			"client:load": true,
			"client:component-path": "C:/Users/anxov/workspaceAstro/mi-web-astro/src/components/ValoracionReact.jsx",
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
	"titulo": "Planificador de tareas",
	"autor": "Anxo Valdés"
};
function getHeadings() {
	return [];
}
var url = "src/content/proyectos/planificador.mdx";
var file = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/content/proyectos/planificador.mdx";
var Content = (props = {}) => MDXContent({
	...props,
	components: {
		Fragment,
		...props.components
	}
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/anxov/workspaceAstro/mi-web-astro/src/content/proyectos/planificador.mdx";
__astro_tag_component__(Content, "astro:jsx");
//#endregion
export { Content, Content as default, file, frontmatter, getHeadings, url };
