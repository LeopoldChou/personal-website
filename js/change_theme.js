const themeColors = {
    "bgc": {
        "light": {
            "box": {
                "purple": "#ddd5f7",
                "blue": "#c5daf6",
                "green": "#bbe9e5",
                "yellow": "#f6e3b9",
                "orange": "#f7cdbb",
                "red": "#f7c9ca",
                "grey": "#cdd3dd",
            },
        },
        "dark": {
            "box": {
                "purple": "#514080",
                "blue": "#07608e",
                "green": "#00676d",
                "yellow": "#8e6531",
                "orange": "#94432c",
                "red": "#803137",
                "grey": "#5f6467",
            },
        },
    },
}

function changeTheme(color, element) {
    if (!color || !element) return;
    let lightBgimgPath = color + "-light.jpg";
    let darkBgimgPath = color + "-dark.jpg";
    let themeVariables = "--theme-bg-light: url('../img/bgimg/" + lightBgimgPath + "');" +
        "--theme-bg-dark: url('../img/bgimg/" + darkBgimgPath + "');" +
        "--bgc-light-box: " + themeColors.bgc.light.box[color] + ";" +
        "--bgc-dark-box: " + themeColors.bgc.dark.box[color] + ";";
    document.getElementsByTagName("body")[0].setAttribute("style", themeVariables);

    let optElements = document.getElementsByClassName("theme-option-border");
    for (let i = 0; i < optElements.length; ++i) optElements[i].className = "theme-option-border";
    element.className += " theme-option-border-selected";
}
