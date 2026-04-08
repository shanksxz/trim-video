(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-ffmpeg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FfmpegProvider,
    "useFfmpeg",
    ()=>useFfmpeg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const FfmpegContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function FfmpegProvider({ children }) {
    _s();
    const ffmpegRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFmpeg"]());
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FfmpegProvider.useEffect": ()=>{
            ({
                "FfmpegProvider.useEffect": async ()=>{
                    console.log("loading ffmpeg");
                    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";
                    const ffmpeg = ffmpegRef.current;
                    ffmpeg.on("log", {
                        "FfmpegProvider.useEffect": ({ message })=>{
                            console.log(message);
                        }
                    }["FfmpegProvider.useEffect"]);
                    await ffmpeg.load({
                        coreURL: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
                        wasmURL: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.wasm`, "application/wasm")
                    });
                    console.log("ffmpeg loaded");
                    setLoaded(true);
                }
            })["FfmpegProvider.useEffect"]();
        }
    }["FfmpegProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FfmpegContext.Provider, {
        value: {
            ffmpeg: ffmpegRef.current,
            loaded
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/use-ffmpeg.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this);
}
_s(FfmpegProvider, "F/LAci6WyXYCmxCXJtQBL+1CPbU=");
_c = FfmpegProvider;
function useFfmpeg() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FfmpegContext);
    if (!context) {
        throw new Error("useFfmpeg must be used within a FfmpegProvider");
    }
    return context;
}
_s1(useFfmpeg, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FfmpegProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-ffmpeg.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/hooks/use-ffmpeg.tsx [app-client] (ecmascript)"));
}),
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
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate an unique message ID.
 */ __turbopack_context__.s([
    "getMessageID",
    ()=>getMessageID
]);
const getMessageID = (()=>{
    let messageID = 0;
    return ()=>messageID++;
})();
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
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/worker.0_quke8v7qnww.js");}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js [app-client] (ecmascript, worker loader)", ((__turbopack_context__) => {

__turbopack_context__.v(function(Ctor, opts) {
    return __turbopack_context__.b(Ctor, "static/chunks/turbopack-worker-[client-fs]__next_static_chunks_12ee_mp._.js", ["static/chunks/0lw4_@ffmpeg_ffmpeg_dist_esm_05pq-yq._.js","static/chunks/0lw4_@ffmpeg_ffmpeg_dist_esm_worker_0u_uju3.js","static/chunks/11vc_@ffmpeg_ffmpeg_dist_esm_worker_0h6u5be.js"], opts);
});
}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FFmpeg",
    ()=>FFmpeg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
class FFmpeg {
    #worker = null;
    /**
     * #resolves and #rejects tracks Promise resolves and rejects to
     * be called when we receive message from web worker.
     */ #resolves = {};
    #rejects = {};
    #logEventCallbacks = [];
    #progressEventCallbacks = [];
    loaded = false;
    /**
     * register worker message event handlers.
     */ #registerHandlers = ()=>{
        if (this.#worker) {
            this.#worker.onmessage = ({ data: { id, type, data } })=>{
                switch(type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD:
                        this.loaded = true;
                        this.#resolves[id](data);
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].MOUNT:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].UNMOUNT:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].EXEC:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].FFPROBE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].WRITE_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].READ_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].RENAME:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].CREATE_DIR:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LIST_DIR:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_DIR:
                        this.#resolves[id](data);
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOG:
                        this.#logEventCallbacks.forEach((f)=>f(data));
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].PROGRESS:
                        this.#progressEventCallbacks.forEach((f)=>f(data));
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].ERROR:
                        this.#rejects[id](data);
                        break;
                }
                delete this.#resolves[id];
                delete this.#rejects[id];
            };
        }
    };
    /**
     * Generic function to send messages to web worker.
     */ #send = ({ type, data }, trans = [], signal)=>{
        if (!this.#worker) {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_NOT_LOADED"]);
        }
        return new Promise((resolve, reject)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessageID"])();
            this.#worker && this.#worker.postMessage({
                id,
                type,
                data
            }, trans);
            this.#resolves[id] = resolve;
            this.#rejects[id] = reject;
            signal?.addEventListener("abort", ()=>{
                reject(new DOMException(`Message # ${id} was aborted`, "AbortError"));
            }, {
                once: true
            });
        });
    };
    on(event, callback) {
        if (event === "log") {
            this.#logEventCallbacks.push(callback);
        } else if (event === "progress") {
            this.#progressEventCallbacks.push(callback);
        }
    }
    off(event, callback) {
        if (event === "log") {
            this.#logEventCallbacks = this.#logEventCallbacks.filter((f)=>f !== callback);
        } else if (event === "progress") {
            this.#progressEventCallbacks = this.#progressEventCallbacks.filter((f)=>f !== callback);
        }
    }
    /**
     * Loads ffmpeg-core inside web worker. It is required to call this method first
     * as it initializes WebAssembly and other essential variables.
     *
     * @category FFmpeg
     * @returns `true` if ffmpeg core is loaded for the first time.
     */ load = ({ classWorkerURL, ...config } = {}, { signal } = {})=>{
        if (!this.#worker) {
            this.#worker = classWorkerURL ? new Worker(new URL(classWorkerURL, __TURBOPACK__import$2e$meta__.url), {
                type: "module"
            }) : // We need to duplicated the code here to enable webpack
            // to bundle worekr.js here.
            __turbopack_context__.r("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js [app-client] (ecmascript, worker loader)")(Worker, {
                type: "module"
            });
            this.#registerHandlers();
        }
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD,
            data: config
        }, undefined, signal);
    };
    /**
     * Execute ffmpeg command.
     *
     * @remarks
     * To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
     * by default.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // ffmpeg -i video.avi video.mp4
     * await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
     * const data = ffmpeg.readFile("video.mp4");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */ exec = (/** ffmpeg command line args */ args, /**
     * milliseconds to wait before stopping the command execution.
     *
     * @defaultValue -1
     */ timeout = -1, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].EXEC,
            data: {
                args,
                timeout
            }
        }, undefined, signal);
    /**
     * Execute ffprobe command.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // Getting duration of a video in seconds: ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.avi -o output.txt
     * await ffmpeg.ffprobe(["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", "video.avi", "-o", "output.txt"]);
     * const data = ffmpeg.readFile("output.txt");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */ ffprobe = (/** ffprobe command line args */ args, /**
     * milliseconds to wait before stopping the command execution.
     *
     * @defaultValue -1
     */ timeout = -1, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].FFPROBE,
            data: {
                args,
                timeout
            }
        }, undefined, signal);
    /**
     * Terminate all ongoing API calls and terminate web worker.
     * `FFmpeg.load()` must be called again before calling any other APIs.
     *
     * @category FFmpeg
     */ terminate = ()=>{
        const ids = Object.keys(this.#rejects);
        // rejects all incomplete Promises.
        for (const id of ids){
            this.#rejects[id](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_TERMINATED"]);
            delete this.#rejects[id];
            delete this.#resolves[id];
        }
        if (this.#worker) {
            this.#worker.terminate();
            this.#worker = null;
            this.loaded = false;
        }
    };
    /**
     * Write data to ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
     * await ffmpeg.writeFile("text.txt", "hello world");
     * ```
     *
     * @category File System
     */ writeFile = (path, data, { signal } = {})=>{
        const trans = [];
        if (data instanceof Uint8Array) {
            trans.push(data.buffer);
        }
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].WRITE_FILE,
            data: {
                path,
                data
            }
        }, trans, signal);
    };
    mount = (fsType, options, mountPoint)=>{
        const trans = [];
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].MOUNT,
            data: {
                fsType,
                options,
                mountPoint
            }
        }, trans);
    };
    unmount = (mountPoint)=>{
        const trans = [];
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].UNMOUNT,
            data: {
                mountPoint
            }
        }, trans);
    };
    /**
     * Read data from ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * const data = await ffmpeg.readFile("video.mp4");
     * ```
     *
     * @category File System
     */ readFile = (path, /**
     * File content encoding, supports two encodings:
     * - utf8: read file as text file, return data in string type.
     * - binary: read file as binary file, return data in Uint8Array type.
     *
     * @defaultValue binary
     */ encoding = "binary", { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].READ_FILE,
            data: {
                path,
                encoding
            }
        }, undefined, signal);
    /**
     * Delete a file.
     *
     * @category File System
     */ deleteFile = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_FILE,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * Rename a file or directory.
     *
     * @category File System
     */ rename = (oldPath, newPath, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].RENAME,
            data: {
                oldPath,
                newPath
            }
        }, undefined, signal);
    /**
     * Create a directory.
     *
     * @category File System
     */ createDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].CREATE_DIR,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * List directory contents.
     *
     * @category File System
     */ listDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LIST_DIR,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * Delete an empty directory.
     *
     * @category File System
     */ deleteDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_DIR,
            data: {
                path
            }
        }, undefined, signal);
}
}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FFFSType",
    ()=>FFFSType
]);
var FFFSType;
(function(FFFSType) {
    FFFSType["MEMFS"] = "MEMFS";
    FFFSType["NODEFS"] = "NODEFS";
    FFFSType["NODERAWFS"] = "NODERAWFS";
    FFFSType["IDBFS"] = "IDBFS";
    FFFSType["WORKERFS"] = "WORKERFS";
    FFFSType["PROXYFS"] = "PROXYFS";
})(FFFSType || (FFFSType = {}));
}),
"[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/types.js [app-client] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_INCOMPLETED_DOWNLOAD",
    ()=>ERROR_INCOMPLETED_DOWNLOAD,
    "ERROR_RESPONSE_BODY_READER",
    ()=>ERROR_RESPONSE_BODY_READER
]);
const ERROR_RESPONSE_BODY_READER = new Error("failed to get response body reader");
const ERROR_INCOMPLETED_DOWNLOAD = new Error("failed to complete download");
}),
"[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderContentLength",
    ()=>HeaderContentLength
]);
const HeaderContentLength = "Content-Length";
}),
"[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadWithProgress",
    ()=>downloadWithProgress,
    "fetchFile",
    ()=>fetchFile,
    "importScript",
    ()=>importScript,
    "toBlobURL",
    ()=>toBlobURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ffmpeg+util@0.12.2/node_modules/@ffmpeg/util/dist/esm/const.js [app-client] (ecmascript)");
;
;
const readFromBlobOrFile = (blob)=>new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            const { result } = fileReader;
            if (result instanceof ArrayBuffer) {
                resolve(new Uint8Array(result));
            } else {
                resolve(new Uint8Array());
            }
        };
        fileReader.onerror = (event)=>{
            reject(Error(`File could not be read! Code=${event?.target?.error?.code || -1}`));
        };
        fileReader.readAsArrayBuffer(blob);
    });
const fetchFile = async (file)=>{
    let data;
    if (typeof file === "string") {
        /* From base64 format */ if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(file)) {
            data = atob(file.split(",")[1]).split("").map((c)=>c.charCodeAt(0));
        /* From remote server/URL */ } else {
            data = await (await fetch(file)).arrayBuffer();
        }
    } else if (file instanceof URL) {
        data = await (await fetch(file)).arrayBuffer();
    } else if (file instanceof File || file instanceof Blob) {
        data = await readFromBlobOrFile(file);
    } else {
        return new Uint8Array();
    }
    return new Uint8Array(data);
};
const importScript = async (url)=>new Promise((resolve)=>{
        const script = document.createElement("script");
        const eventHandler = ()=>{
            script.removeEventListener("load", eventHandler);
            resolve();
        };
        script.src = url;
        script.type = "text/javascript";
        script.addEventListener("load", eventHandler);
        document.getElementsByTagName("head")[0].appendChild(script);
    });
const downloadWithProgress = async (url, cb)=>{
    const resp = await fetch(url);
    let buf;
    try {
        // Set total to -1 to indicate that there is not Content-Type Header.
        const total = parseInt(resp.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderContentLength"]) || "-1");
        const reader = resp.body?.getReader();
        if (!reader) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_RESPONSE_BODY_READER"];
        const chunks = [];
        let received = 0;
        for(;;){
            const { done, value } = await reader.read();
            const delta = value ? value.length : 0;
            if (done) {
                if (total != -1 && total !== received) throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ffmpeg$2b$util$40$0$2e$12$2e$2$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_INCOMPLETED_DOWNLOAD"];
                cb && cb({
                    url,
                    total,
                    received,
                    delta,
                    done
                });
                break;
            }
            chunks.push(value);
            received += delta;
            cb && cb({
                url,
                total,
                received,
                delta,
                done
            });
        }
        const data = new Uint8Array(received);
        let position = 0;
        for (const chunk of chunks){
            data.set(chunk, position);
            position += chunk.length;
        }
        buf = data.buffer;
    } catch (e) {
        console.log(`failed to send download progress event: `, e);
        // Fetch arrayBuffer directly when it is not possible to get progress.
        buf = await resp.arrayBuffer();
        cb && cb({
            url,
            total: buf.byteLength,
            received: buf.byteLength,
            delta: 0,
            done: true
        });
    }
    return buf;
};
const toBlobURL = async (url, mimeType, progress = false, cb)=>{
    const buf = progress ? await downloadWithProgress(url, cb) : await (await fetch(url)).arrayBuffer();
    const blob = new Blob([
        buf
    ], {
        type: mimeType
    });
    return URL.createObjectURL(blob);
};
}),
]);

//# sourceMappingURL=_08xei4n._.js.map