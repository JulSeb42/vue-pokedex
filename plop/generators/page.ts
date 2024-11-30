/*=============================================== Generate Page ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("page", {
        description: "Creates a page",
        prompts: [
            { type: "input", message: "Enter page's name", name: "name" },
            {
                type: "input",
                message: "Enter path",
                name: "path",
                default: data => `/${data.name.toLowerCase()}`,
            },
        ],
        actions: [
            {
                type: "add",
                templateFile: "./templates/page.hbs",
                path: "../src/views/{{>pascalName}}View.vue",
            },
            {
                type: "modify",
                path: "../src/router/index.ts",
                template: `import {{>pascalName}}View from "@/views/{{>pascalName}}View.vue"\n$1`,
                pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: "../src/router/index.ts",
                template: `{\n\t\t\tpath: "{{ path }}",\n\t\t\tname: "{{>pascalName}}",\n\t\t\tcomponent: {{>pascalName}}View,\n\t\t\tmeta: { title: SITE_DATA.PAGE_TITLE("{{>pascalName}}") },\n\t\t},\n\t\t$1`,
                pattern: /(\/\* Prepend route - DO NOT REMOVE \*\/)/g,
            },
        ],
    })
}
