
let btn = document.querySelector("#btn");
let copyBtn = document.querySelector("#copyBtn");
let colorCode = document.querySelector("#colorCode");
let colorBox = document.querySelector("#colorBox");

// CSS standard named colours
let colors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine",
    "azure", "beige", "bisque", "black", "blanchedalmond",
    "blue", "blueviolet", "brown", "burlywood", "cadetblue",
    "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan",
    "darkgoldenrod", "darkgray", "darkgreen", "darkgrey",
    "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
    "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkslategrey",
    "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro",
    "ghostwhite", "gold", "goldenrod", "gray", "green",
    "greenyellow", "grey", "honeydew", "hotpink",
    "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow",
    "lightgray", "lightgreen", "lightgrey", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue",
    "lightslategray", "lightslategrey", "lightsteelblue",
    "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue",
    "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream",
    "mistyrose", "moccasin", "navajowhite", "navy",
    "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise",
    "palevioletred", "papayawhip", "peachpuff", "peru",
    "pink", "plum", "powderblue", "purple", "rebeccapurple",
    "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell",
    "sienna", "silver", "skyblue", "slateblue", "slategray",
    "slategrey", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet",
    "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

// Generate random colour
btn.addEventListener("click", function () {

    let randomColor;

    if (Math.random() < 0.5) {
        // Generate random HEX colour
        randomColor =
            "#" +
            Math.floor(Math.random() * 16777216)
                .toString(16)
                .padStart(6, "0");
    } else {
        // Generate CSS named colour
        let randomIndex = Math.floor(
            Math.random() * colors.length
        );

        randomColor = colors[randomIndex];
    }

    // Change background and colour box
    document.body.style.backgroundColor = randomColor;
    colorBox.style.backgroundColor = randomColor;

    // Display colour code/name
    colorCode.innerText = randomColor;
});

// Copy colour code
copyBtn.addEventListener("click", async function () {

    try {
        await navigator.clipboard.writeText(colorCode.innerText);
        copyBtn.innerText = "Copied!";

        setTimeout(function () {
            copyBtn.innerText = "Copy Colour Code";
        }, 1500);

    } catch (error) {
        alert("Copy failed. Please copy manually: " + colorCode.innerText);
    }
});