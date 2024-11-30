/*=============================================== Generate Type ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("type", {
        description: "",
        prompts: [
            { type: "input", message: "Enter type's name", name: "name" },
            {
                type: "confirm",
                message: "Is it an interface?",
                default: false,
                name: "interface",
            },
        ],
        actions: [
            {
                type: "add",
                templateFile: "./templates/type.hbs",
                path: "../src/types/{{>pascalName}}.ts",
            },
            {
                type: "modify",
                path: "../src/types/index.ts",
                template: 'export * from "./{{>pascalName}}"\n$1',
                pattern: /(\/\* Prepend export here - DO NOT REMOVE \*\/)/g,
            },
        ],
    })
}
