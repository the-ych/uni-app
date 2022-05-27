export default function openURL(link) {
// #ifdef APP-PLUS
    plus.runtime.openURL(link)
// #endif
// #ifdef H5
    window.open(link)
// #endif
}