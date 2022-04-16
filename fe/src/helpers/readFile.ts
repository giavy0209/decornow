const readFile = (file) => new Promise(r => {
    const reader = new FileReader();
        reader.onload = e => {
            const buffer = e.target?.result
            const blob = new Blob([new Uint8Array(buffer as ArrayBuffer)])
            const url = window.URL.createObjectURL(blob);
            r(url)
        }
        reader.readAsArrayBuffer(file);
})

export default readFile