function tryFastp(x) {
    console.log('trying fastp')
    window.electronAPI.fastp(x);
}

window.electronAPI.onFastpData((value) => {
    let event = new CustomEvent("fastp-data", { detail: value })
    window.dispatchEvent(event)
})