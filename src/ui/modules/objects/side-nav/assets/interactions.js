import { SideNav } from "../../..";

export default {
    init, toggle
}

export function init(element, config) {
    config = config || SideNav.config;
}

export function toggle(element, operator, config) {
    config = config || SideNav.config;
}