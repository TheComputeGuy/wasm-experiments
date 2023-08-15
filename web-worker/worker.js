var g_importObject = {
    'env': {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({ initial: 256 }),
        'table': new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

var objInstance = null;

onmessage = (e) => {
    var eventType = e.data.eventType;

    if (eventType == "CompiledModule") {
        console.log("Compiled");
        WebAssembly.instantiate(e.data.module, g_importObject).then(instance => objInstance = instance);
    } else {
        console.log("Calculating");
        postMessage(objInstance.exports.fibonacci(e.data.number));
    }
}