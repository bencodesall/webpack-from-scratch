import _ from "lodash";

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack","- Let's dive deep!",], " ");

    return element;
}

document.body.appendChild(component());