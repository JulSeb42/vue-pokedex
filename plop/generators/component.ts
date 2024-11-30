/*=============================================== Generate Component ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("component", {
        description: "Generates a Vue component",
        prompts: [
            { type: "input", message: "Enter component's name", name: "name" },
        ],
        actions: [
            {
                type: "add",
                templateFile: "./templates/component.hbs",
                path: "../src/components/{{>pascalName}}.vue",
            },
        ],
    })
}
