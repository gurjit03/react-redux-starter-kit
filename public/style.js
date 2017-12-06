import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "sans-serif",
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
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block"
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
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
    }
});