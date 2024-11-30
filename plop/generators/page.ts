/*=============================================== Generate Page ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("page", {
        description: "",
        prompts: [
            { type: "input", message: "Enter page's name", name: "name" },
        ],
        actions: [
            {
                type: "add",
                templateFile: "./templates/page.hbs",
                path: "../src/views/{{>pascalName}}View.vue",
            },
        ],
    })
}
