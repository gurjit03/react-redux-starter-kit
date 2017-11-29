import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "Helvetica Neue, Helvetica, sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block",
        "position": "absolute",
        "top": 15,
        "left": 15,
        "right": 15,
        "bottom": 15,
        "overflowY": "scroll",
        "backgroundColor": "rgba(220, 220, 220, .8)",
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30,
        "borderRadius": 5,
        "minWidth": 1400
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "flex",
        "zIndex": 10,
        "position": "fixed",
        "alignItems": "center",
        "justifyContent": "space-between",
        "textAlign": "center",
        "top": 0,
        "left": 0,
        "width": "100%",
        "overflow": "hidden",
        "backgroundColor": "#fafafa",
        "paddingTop": 8,
        "paddingRight": 30,
        "paddingBottom": 8,
        "paddingLeft": 30
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent"
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": 0.67,
        "marginRight": 0,
        "marginBottom": 0.67,
        "marginLeft": 0
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 0
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "monospace, monospace",
        "fontSize": 1,
        "textAlign": "left"
    },
    "code": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "boxSizing": "content-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "boxSizing": "border-box"
    },
    "app": {
        "position": "relative",
        "width": "100%",
        "height": 100 * vh,
        "backgroundImage": "url(/public/img/3.jpg)",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "textAlign": "center",
        "color": "#333"
    },
    "app > h1": {
        "color": "white"
    },
    "landing": {
        "backgroundColor": "rgba(220, 220, 220, .7)",
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30,
        "borderRadius": 5
    },
    "landing > h1": {
        "color": "#B10DC9",
        "fontFamily": "Skia",
        "fontWeight": "normal"
    },
    "landing > input": {
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRadius": 4
    },
    "landing > form > input": {
        "width": "100%",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderRadius": 4
    },
    "landing > form": {
        "width": "100%",
        "minWidth": 300
    },
    "landing > a": {
        "marginTop": 15,
        "paddingTop": 10,
        "paddingRight": 40,
        "paddingBottom": 10,
        "paddingLeft": 40,
        "backgroundColor": "#333",
        "color": "#fafafa",
        "borderColor": "transparent",
        "display": "inline-block",
        "textDecoration": "none",
        "borderRadius": 4
    },
    "landing > a:hover": {
        "backgroundColor": "#666"
    },
    "landing > a:focus": {
        "backgroundColor": "#666"
    },
    "landing > a:active": {
        "backgroundColor": "#fafafa",
        "color": "#333",
        "borderColor": "#333"
    },
    "search": {
        "position": "absolute",
        "top": 15,
        "left": 15,
        "right": 15,
        "bottom": 15,
        "overflowY": "scroll",
        "backgroundColor": "rgba(220, 220, 220, .8)",
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30,
        "borderRadius": 5,
        "minWidth": 1400
    },
    "search > div": {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "space-around",
        "alignItems": "center"
    },
    "search > header + div": {
        "marginTop": 25
    },
    "header > h1": {
        "fontFamily": "Skia",
        "fontWeight": "normal",
        "color": "#B10DC9",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header > h1 > a": {
        "color": "#B10DC9",
        "textDecoration": "none"
    },
    "header > h2": {
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header > h2 > a": {
        "color": "#aaa",
        "textDecoration": "none"
    },
    "details > div": {
        "width": "100%",
        "height": 0,
        "paddingBottom": "56.25%",
        "position": "relative"
    },
    "details > div > iframe": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%"
    },
    "header > input": {
        "minWidth": 250,
        "maxWidth": 350,
        "width": "33%",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "border": "2px solid #ccc",
        "borderRadius": 4
    },
    "details > section > img": {
        "width": "8%"
    },
    "details > section > h3": {
        "width": "8%"
    },
    "details > section > imgspinner": {
        "WebkitAnimation": "spin 4s infinite linear",
        "MozAnimation": "spin 4s infinite linear",
        "animation": "spin 4s infinite linear"
    },
    "details > section > *": {
        "marginTop": 0,
        "marginRight": "1%",
        "marginBottom": 0,
        "marginLeft": "1%"
    },
    "details > section": {
        "display": "flex",
        "justifyContent": "space-around",
        "alignItems": "center",
        "marginBottom": 25
    },
    "details > header + section": {
        "marginTop": 25
    }
});