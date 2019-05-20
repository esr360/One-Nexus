export default theme => ({
    "colors": {
        "brand": {
            "brand-1": "black",
            "brand-6": "green"
        }
    },
    "modules": {
        "Accordion": {
            "panel": {
                "modifier(active)": {
                    "title": {
                        "background": "blue"
                    }
                }
            }
        },
        "Alert": {
        },
        "Modal": {
        },
        "Button": {
            "border-palettes": ["brand", "alert"]
        },
        "core": {},
        "header": {
            "background": "gradient(brand)"
        },
        "Billboard": {
            "fullscreen": {
                "enabled": false
            },
            "overlay": {
                "enabled": true
            }
        },
        "Tables": {
            "background": "white",
            "padding": "0.5em 1em",
            "border": "1px solid rgba(0,0,0,0.1)",
            "-small": {
                "max-width": "450px"
            }
        }
    }
});