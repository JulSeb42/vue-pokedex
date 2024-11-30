/*=============================================== Plopfile ===============================================*/

import welcome from "cli-welcome"
import { runCommand } from "./actions"
import {
    generateGenerator,
    generateComponent,
    generatePage,
    generateType,
	/* Prepend import - DO NOT REMOVE */
} from "./generators"
import { kebabName, pascalName } from "./partials"
import { addClosingBrackets, addOpenBrackets, surroundBrackets } from "./utils"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { load } = plop

    /*====================== Welcome ======================*/

    welcome({
        title: "Julseb CLI",
        tagLine: "A tool to generate Vue with TS apps",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "1.0.0",
    })

    /*====================== Actions ======================*/

    runCommand(plop)

    /*====================== Partials ======================*/

    pascalName(plop)
    kebabName(plop)

    /*====================== Utils ======================*/

    addClosingBrackets(plop)
    addOpenBrackets(plop)
    surroundBrackets(plop)

    /*====================== Generators ======================*/

    generateGenerator(plop) // yarn plop:g
    generateComponent(plop) // yarn plop:c
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:t
	/* Prepend function - DO NOT REMOVE */

    // ? type
}
