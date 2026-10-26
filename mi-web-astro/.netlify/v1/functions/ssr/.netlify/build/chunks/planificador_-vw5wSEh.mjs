//#region src/content/proyectos/planificador.mdx?astroPropagatedAssets
async function getMod() {
	return import("./planificador_BZlgzLap.mjs");
}
var defaultMod = {
	__astroPropagation: true,
	getMod,
	collectedLinks: [],
	collectedStyles: [],
	collectedScripts: []
};
//#endregion
export { defaultMod as default };
