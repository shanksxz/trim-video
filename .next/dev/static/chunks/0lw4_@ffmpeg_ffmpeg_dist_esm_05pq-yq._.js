(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_URL",
    ()=>CORE_URL,
    "CORE_VERSION",
    ()=>CORE_VERSION,
    "FFMessageType",
    ()=>FFMessageType,
    "MIME_TYPE_JAVASCRIPT",
    ()=>MIME_TYPE_JAVASCRIPT,
    "MIME_TYPE_WASM",
    ()=>MIME_TYPE_WASM
]);
const MIME_TYPE_JAVASCRIPT = "text/javascript";
const MIME_TYPE_WASM = "application/wasm";
const CORE_VERSION = "0.12.9";
const CORE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/umd/ffmpeg-core.js`;
var FFMessageType;
(function(FFMessageType) {
    FFMessageType["LOAD"] = "LOAD";
    FFMessageType["EXEC"] = "EXEC";
    FFMessageType["FFPROBE"] = "FFPROBE";
    FFMessageType["WRITE_FILE"] = "WRITE_FILE";
    FFMessageType["READ_FILE"] = "READ_FILE";
    FFMessageType["DELETE_FILE"] = "DELETE_FILE";
    FFMessageType["RENAME"] = "RENAME";
    FFMessageType["CREATE_DIR"] = "CREATE_DIR";
    FFMessageType["LIST_DIR"] = "LIST_DIR";
    FFMessageType["DELETE_DIR"] = "DELETE_DIR";
    FFMessageType["ERROR"] = "ERROR";
    FFMessageType["DOWNLOAD"] = "DOWNLOAD";
    FFMessageType["PROGRESS"] = "PROGRESS";
    FFMessageType["LOG"] = "LOG";
    FFMessageType["MOUNT"] = "MOUNT";
    FFMessageType["UNMOUNT"] = "UNMOUNT";
})(FFMessageType || (FFMessageType = {}));
}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_IMPORT_FAILURE",
    ()=>ERROR_IMPORT_FAILURE,
    "ERROR_NOT_LOADED",
    ()=>ERROR_NOT_LOADED,
    "ERROR_TERMINATED",
    ()=>ERROR_TERMINATED,
    "ERROR_UNKNOWN_MESSAGE_TYPE",
    ()=>ERROR_UNKNOWN_MESSAGE_TYPE
]);
const ERROR_UNKNOWN_MESSAGE_TYPE = new Error("unknown message type");
const ERROR_NOT_LOADED = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");
const ERROR_TERMINATED = new Error("called FFmpeg.terminate()");
const ERROR_IMPORT_FAILURE = new Error("failed to import ffmpeg-core.js");
}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="webworker" />
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js [app-client] (ecmascript)");
;
;
let ffmpeg;
const load = async ({ coreURL: _coreURL, wasmURL: _wasmURL, workerURL: _workerURL })=>{
    const first = !ffmpeg;
    try {
        if (!_coreURL) _coreURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_URL"];
        // when web worker type is `classic`.
        importScripts(_coreURL);
    } catch  {
        if (!_coreURL || _coreURL === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_URL"]) _coreURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORE_URL"].replace('/umd/', '/esm/');
        // when web worker type is `module`.
        self.createFFmpegCore = (await Promise.resolve().then(()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })).default;
        if (!self.createFFmpegCore) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_IMPORT_FAILURE"];
        }
    }
    const coreURL = _coreURL;
    const wasmURL = _wasmURL ? _wasmURL : _coreURL.replace(/.js$/g, ".wasm");
    const workerURL = _workerURL ? _workerURL : _coreURL.replace(/.js$/g, ".worker.js");
    ffmpeg = await self.createFFmpegCore({
        // Fix `Overload resolution failed.` when using multi-threaded ffmpeg-core.
        // Encoded wasmURL and workerURL in the URL as a hack to fix locateFile issue.
        mainScriptUrlOrBlob: `${coreURL}#${btoa(JSON.stringify({
            wasmURL,
            workerURL
        }))}`
    });
    ffmpeg.setLogger((data)=>self.postMessage({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOG,
            data
        }));
    ffmpeg.setProgress((data)=>self.postMessage({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].PROGRESS,
            data
        }));
    return first;
};
const exec = ({ args, timeout = -1 })=>{
    ffmpeg.setTimeout(timeout);
    ffmpeg.exec(...args);
    const ret = ffmpeg.ret;
    ffmpeg.reset();
    return ret;
};
const ffprobe = ({ args, timeout = -1 })=>{
    ffmpeg.setTimeout(timeout);
    ffmpeg.ffprobe(...args);
    const ret = ffmpeg.ret;
    ffmpeg.reset();
    return ret;
};
const writeFile = ({ path, data })=>{
    ffmpeg.FS.writeFile(path, data);
    return true;
};
const readFile = ({ path, encoding })=>ffmpeg.FS.readFile(path, {
        encoding
    });
// TODO: check if deletion works.
const deleteFile = ({ path })=>{
    ffmpeg.FS.unlink(path);
    return true;
};
const rename = ({ oldPath, newPath })=>{
    ffmpeg.FS.rename(oldPath, newPath);
    return true;
};
// TODO: check if creation works.
const createDir = ({ path })=>{
    ffmpeg.FS.mkdir(path);
    return true;
};
const listDir = ({ path })=>{
    const names = ffmpeg.FS.readdir(path);
    const nodes = [];
    for (const name of names){
        const stat = ffmpeg.FS.stat(`${path}/${name}`);
        const isDir = ffmpeg.FS.isDir(stat.mode);
        nodes.push({
            name,
            isDir
        });
    }
    return nodes;
};
// TODO: check if deletion works.
const deleteDir = ({ path })=>{
    ffmpeg.FS.rmdir(path);
    return true;
};
const mount = ({ fsType, options, mountPoint })=>{
    const str = fsType;
    const fs = ffmpeg.FS.filesystems[str];
    if (!fs) return false;
    ffmpeg.FS.mount(fs, options, mountPoint);
    return true;
};
const unmount = ({ mountPoint })=>{
    ffmpeg.FS.unmount(mountPoint);
    return true;
};
self.onmessage = async ({ data: { id, type, data: _data } })=>{
    const trans = [];
    let data;
    try {
        if (type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD && !ffmpeg) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_NOT_LOADED"]; // eslint-disable-line
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD:
                data = await load(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].EXEC:
                data = exec(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].FFPROBE:
                data = ffprobe(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].WRITE_FILE:
                data = writeFile(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].READ_FILE:
                data = readFile(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_FILE:
                data = deleteFile(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].RENAME:
                data = rename(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].CREATE_DIR:
                data = createDir(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LIST_DIR:
                data = listDir(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_DIR:
                data = deleteDir(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].MOUNT:
                data = mount(_data);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].UNMOUNT:
                data = unmount(_data);
                break;
            default:
                throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_UNKNOWN_MESSAGE_TYPE"];
        }
    } catch (e) {
        self.postMessage({
            id,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].ERROR,
            data: e.toString()
        });
        return;
    }
    if (data instanceof Uint8Array) {
        trans.push(data.buffer);
    }
    self.postMessage({
        id,
        type,
        data
    }, trans);
};
}),
]);

//# sourceMappingURL=0lw4_%40ffmpeg_ffmpeg_dist_esm_05pq-yq._.js.map