// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3RK8R":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "849c5c5b728b5326";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _appScss = require("./scss/app.scss");
var _urlRouterJs = require("../utils/urlRouter.js");
var _dropdownJs = require("./components/dropdown.js");

},{"./scss/app.scss":"3M9oe","../utils/urlRouter.js":"2rgTs","./components/dropdown.js":"1W6Ki"}],"3M9oe":[function() {},{}],"2rgTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _startsWith = require("@babel/runtime-corejs3/core-js-stable/instance/starts-with");
var _startsWithDefault = parcelHelpers.interopDefault(_startsWith);
var _404Js = require("../src/components/404.js");
var _404JsDefault = parcelHelpers.interopDefault(_404Js);
var _aboutJs = require("../src/components/About.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _homeJs = require("../src/components/Home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _resumeJs = require("../src/components/Resume.js");
var _resumeJsDefault = parcelHelpers.interopDefault(_resumeJs);
var _weblogalJs = require("../src/components/projects/Weblogal.js");
var _weblogalJsDefault = parcelHelpers.interopDefault(_weblogalJs);
var _coursesJs = require("../src/components/projects/Courses.js");
var _coursesJsDefault = parcelHelpers.interopDefault(_coursesJs);
var _employeesJs = require("../src/components/projects/Employees.js");
var _employeesJsDefault = parcelHelpers.interopDefault(_employeesJs);
var _fsconferenceJs = require("../src/components/projects/Fsconference.js");
var _fsconferenceJsDefault = parcelHelpers.interopDefault(_fsconferenceJs);
var _phraseJs = require("../src/components/projects/Phrase.js");
var _phraseJsDefault = parcelHelpers.interopDefault(_phraseJs);
var _circleJs = require("../src/components/projects/Circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _galleryJs = require("../src/components/projects/Gallery.js");
var _galleryJsDefault = parcelHelpers.interopDefault(_galleryJs);
var _webappJs = require("../src/components/projects/Webapp.js");
var _webappJsDefault = parcelHelpers.interopDefault(_webappJs);
var _authLibraryJs = require("../src/components/projects/AuthLibrary.js");
var _authLibraryJsDefault = parcelHelpers.interopDefault(_authLibraryJs);
document.addEventListener("DOMContentLoaded", initApp);
function initApp() {
    document.addEventListener("click", handleNavClick);
    window.addEventListener("hashchange", handleHashChange); // Listen for hash changes
    handleHashChange(); // Manually trigger routing on page load
}
// function handleNavClick(e) {
//   const { target } = e;
//   if (target.matches("nav a")) {
//     e.preventDefault();
//     const href = target.getAttribute("href");
//     if (href) {
//       // Update the hash based on the href
//       window.location.hash = href;
//     }
//   }
// }
function handleNavClick(e) {
    const { target } = e;
    if (target.matches("nav a")) {
        const href = target.getAttribute("href");
        // Check if the link is external
        if ((0, _startsWithDefault.default)(href).call(href, "http://") || (0, _startsWithDefault.default)(href).call(href, "https://")) // It's an external link, so let the browser handle it normally
        return;
        // It's an internal link, so handle it with custom logic
        e.preventDefault();
        if (href) window.location.hash = href;
    }
}
const pages = {
    404: (0, _404JsDefault.default),
    "#/": (0, _homeJsDefault.default),
    "#/about": (0, _aboutJsDefault.default),
    "#/resume": (0, _resumeJsDefault.default),
    "#/weblogal": (0, _weblogalJsDefault.default),
    "#/courses": (0, _coursesJsDefault.default),
    "#/employees": (0, _employeesJsDefault.default),
    "#/fsconference": (0, _fsconferenceJsDefault.default),
    "#/phrase-hunter": (0, _phraseJsDefault.default),
    "#/circle": (0, _circleJsDefault.default),
    "#/gallery": (0, _galleryJsDefault.default),
    "#/webapp": (0, _webappJsDefault.default),
    "#/auth-library": (0, _authLibraryJsDefault.default)
};
function handleHashChange() {
    const hash = window.location.hash;
    const route = hash || "#/"; // Default to "#/" if no hash
    const PageClass = pages[route] || pages["404"];
    const pageInstance = new PageClass();
    document.getElementById("content").innerHTML = pageInstance.render();
}
exports.default = {
    initApp,
    routeLocation: handleHashChange,
    handleNavClick,
    handlePopState: handleHashChange
};

},{"@babel/runtime-corejs3/core-js-stable/instance/starts-with":"3GorF","../src/components/404.js":"eXFBg","../src/components/About.js":"9R1Eu","../src/components/Home.js":"hcu4N","../src/components/Resume.js":"4aT7V","../src/components/projects/Weblogal.js":"flhIS","../src/components/projects/Courses.js":"iFYQq","../src/components/projects/Employees.js":"jtl1H","../src/components/projects/Fsconference.js":"70aAJ","../src/components/projects/Phrase.js":"ki3a3","../src/components/projects/Circle.js":"14NQe","../src/components/projects/Gallery.js":"rDWWZ","../src/components/projects/Webapp.js":"XKC9S","../src/components/projects/AuthLibrary.js":"hnfmQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GorF":[function(require,module,exports) {
module.exports = require("123c87bb818b2cf1");

},{"123c87bb818b2cf1":"j3uZl"}],"j3uZl":[function(require,module,exports) {
"use strict";
var parent = require("a381dbc5c266357a");
module.exports = parent;

},{"a381dbc5c266357a":"1vya4"}],"1vya4":[function(require,module,exports) {
"use strict";
var isPrototypeOf = require("b2de5a895eaef175");
var method = require("9dd629752c3915e1");
var StringPrototype = String.prototype;
module.exports = function(it) {
    var own = it.startsWith;
    return typeof it == "string" || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.startsWith ? method : own;
};

},{"b2de5a895eaef175":"qlM4L","9dd629752c3915e1":"4QJld"}],"qlM4L":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92a0229526dc8825");
module.exports = uncurryThis({}.isPrototypeOf);

},{"92a0229526dc8825":"5P4uT"}],"5P4uT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("15a325d6cc49c31a");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"15a325d6cc49c31a":"bFMAq"}],"bFMAq":[function(require,module,exports) {
"use strict";
var fails = require("ece43f21edf242ad");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"ece43f21edf242ad":"luPpk"}],"luPpk":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"4QJld":[function(require,module,exports) {
"use strict";
require("d015cf9e119f4972");
var getBuiltInPrototypeMethod = require("f710b7c77c330308");
module.exports = getBuiltInPrototypeMethod("String", "startsWith");

},{"d015cf9e119f4972":"1iecH","f710b7c77c330308":"h4S1q"}],"1iecH":[function(require,module,exports) {
"use strict";
var $ = require("df238677b30b8322");
var uncurryThis = require("de5555e169faf0a8");
var getOwnPropertyDescriptor = require("ddc5b0e17b3f5f33").f;
var toLength = require("379c4dd758d370");
var toString = require("255263f8faf7c4a1");
var notARegExp = require("e9891f5a8aa45718");
var requireObjectCoercible = require("f1a517c248d4b452");
var correctIsRegExpLogic = require("7a4cf6c9e9160d1d");
var IS_PURE = require("61c912a0fe314cfc");
// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis("".startsWith);
var stringSlice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
    return descriptor && !descriptor.writable;
}();
// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({
    target: "String",
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
    startsWith: function startsWith(searchString /* , position = 0 */ ) {
        var that = toString(requireObjectCoercible(this));
        notARegExp(searchString);
        var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = toString(searchString);
        return nativeStartsWith ? nativeStartsWith(that, search, index) : stringSlice(that, index, index + search.length) === search;
    }
});

},{"df238677b30b8322":"jjems","de5555e169faf0a8":"4LaES","ddc5b0e17b3f5f33":"bs1FJ","379c4dd758d370":"9kM19","255263f8faf7c4a1":"3DQpG","e9891f5a8aa45718":"k4sfl","f1a517c248d4b452":"3XBjA","7a4cf6c9e9160d1d":"8BDoZ","61c912a0fe314cfc":"k905C"}],"jjems":[function(require,module,exports) {
"use strict";
var global = require("7d044f98fc1861d6");
var apply = require("6de292810f3a9cd7");
var uncurryThis = require("9a8bbec352e29b2f");
var isCallable = require("4d1326db4592c739");
var getOwnPropertyDescriptor = require("f64d770b5171c2d1").f;
var isForced = require("98299f18395dc362");
var path = require("9ab8ed42f2c4f65c");
var bind = require("3b4b22cc90130557");
var createNonEnumerableProperty = require("f2423250b2ddae23");
var hasOwn = require("15522871b02febaf");
var wrapConstructor = function(NativeConstructor) {
    var Wrapper = function(a, b, c) {
        if (this instanceof Wrapper) {
            switch(arguments.length){
                case 0:
                    return new NativeConstructor();
                case 1:
                    return new NativeConstructor(a);
                case 2:
                    return new NativeConstructor(a, b);
            }
            return new NativeConstructor(a, b, c);
        }
        return apply(NativeConstructor, this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
};
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;
    var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;
    var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;
    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
    for(key in source){
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contains in native
        USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE) {
            if (options.dontCallGetSet) {
                descriptor = getOwnPropertyDescriptor(nativeSource, key);
                nativeProperty = descriptor && descriptor.value;
            } else nativeProperty = nativeSource[key];
        }
        // export native or implementation
        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
        // bind methods to global for calling from export context
        if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
        else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
        else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
        else resultProperty = sourceProperty;
        // add a flag to not completely full polyfills
        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(resultProperty, "sham", true);
        createNonEnumerableProperty(target, key, resultProperty);
        if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + "Prototype";
            if (!hasOwn(path, VIRTUAL_PROTOTYPE)) createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
            // export virtual prototype methods
            createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
            // export real prototype methods
            if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) createNonEnumerableProperty(targetPrototype, key, sourceProperty);
        }
    }
};

},{"7d044f98fc1861d6":"avqB7","6de292810f3a9cd7":"kLBNq","9a8bbec352e29b2f":"4LaES","4d1326db4592c739":"fqYwo","f64d770b5171c2d1":"bs1FJ","98299f18395dc362":"1D6eY","9ab8ed42f2c4f65c":"8QO0z","3b4b22cc90130557":"jZFzY","f2423250b2ddae23":"2bHDS","15522871b02febaf":"lacXY"}],"avqB7":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"kLBNq":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d5957747272d351b");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d5957747272d351b":"bFMAq"}],"4LaES":[function(require,module,exports) {
"use strict";
var classofRaw = require("9beae915cec6700a");
var uncurryThis = require("ba2e97345298e1a4");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"9beae915cec6700a":"fZmv0","ba2e97345298e1a4":"5P4uT"}],"fZmv0":[function(require,module,exports) {
"use strict";
var uncurryThis = require("3bfb3d079df6cddf");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"3bfb3d079df6cddf":"5P4uT"}],"fqYwo":[function(require,module,exports) {
"use strict";
var $documentAll = require("9f95b17debe8ffb4");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"9f95b17debe8ffb4":"lPFRS"}],"lPFRS":[function(require,module,exports) {
"use strict";
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"bs1FJ":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("5cc9c247fabaebfc");
var call = require("1cb196f47cbd4941");
var propertyIsEnumerableModule = require("b931dc9f5ea526c0");
var createPropertyDescriptor = require("8baaeeff4cdea512");
var toIndexedObject = require("335dcc484b2eb15f");
var toPropertyKey = require("52e07c32afa1a22f");
var hasOwn = require("8660aa38b55bbcc4");
var IE8_DOM_DEFINE = require("3d39b0c7d6fe2f54");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"5cc9c247fabaebfc":"87WOB","1cb196f47cbd4941":"acNwo","b931dc9f5ea526c0":"lvpvk","8baaeeff4cdea512":"1E79z","335dcc484b2eb15f":"kvdfV","52e07c32afa1a22f":"2GDiT","8660aa38b55bbcc4":"lacXY","3d39b0c7d6fe2f54":"451hU"}],"87WOB":[function(require,module,exports) {
"use strict";
var fails = require("f63d4a80622d6205");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"f63d4a80622d6205":"luPpk"}],"acNwo":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("986ec29e81511db3");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"986ec29e81511db3":"bFMAq"}],"lvpvk":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1E79z":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"kvdfV":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("a7551b28df49764a");
var requireObjectCoercible = require("b1b2e1578196acf2");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"a7551b28df49764a":"6NkN4","b1b2e1578196acf2":"3XBjA"}],"6NkN4":[function(require,module,exports) {
"use strict";
var uncurryThis = require("e762c482860574dd");
var fails = require("9e77e6d6ee040f3b");
var classof = require("f2c7c7b17b75bb9");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"e762c482860574dd":"5P4uT","9e77e6d6ee040f3b":"luPpk","f2c7c7b17b75bb9":"fZmv0"}],"3XBjA":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("4c5c65c250aff1b8");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"4c5c65c250aff1b8":"xVj2k"}],"xVj2k":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"2GDiT":[function(require,module,exports) {
"use strict";
var toPrimitive = require("d9395d21fb152065");
var isSymbol = require("ca9fd052b0588c48");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"d9395d21fb152065":"e0Xko","ca9fd052b0588c48":"58L3i"}],"e0Xko":[function(require,module,exports) {
"use strict";
var call = require("2d04628a2bad11f2");
var isObject = require("f01a02de95d2a2f7");
var isSymbol = require("e82424bb8538de63");
var getMethod = require("9331c17879bf09f7");
var ordinaryToPrimitive = require("9729d6b0ccef3efa");
var wellKnownSymbol = require("679fae1fbb0e8cab");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"2d04628a2bad11f2":"acNwo","f01a02de95d2a2f7":"fRYFX","e82424bb8538de63":"58L3i","9331c17879bf09f7":"goREb","9729d6b0ccef3efa":"iTXKY","679fae1fbb0e8cab":"cSGfj"}],"fRYFX":[function(require,module,exports) {
"use strict";
var isCallable = require("560fcd15b556338a");
var $documentAll = require("fef41b578fd71492");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"560fcd15b556338a":"fqYwo","fef41b578fd71492":"lPFRS"}],"58L3i":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("c802cdce083f08de");
var isCallable = require("ae1b35d7829f17f7");
var isPrototypeOf = require("f14b984e44c778c3");
var USE_SYMBOL_AS_UID = require("4009d9192ed8bb81");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"c802cdce083f08de":"6wm25","ae1b35d7829f17f7":"fqYwo","f14b984e44c778c3":"qlM4L","4009d9192ed8bb81":"aDtCm"}],"6wm25":[function(require,module,exports) {
"use strict";
var path = require("1642fcc922bafa53");
var global = require("5e0f0a5159b9d2b2");
var isCallable = require("c04a19d1e96f50bb");
var aFunction = function(variable) {
    return isCallable(variable) ? variable : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"1642fcc922bafa53":"8QO0z","5e0f0a5159b9d2b2":"avqB7","c04a19d1e96f50bb":"fqYwo"}],"8QO0z":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"aDtCm":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("b66b793a435f7bae");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"b66b793a435f7bae":"hdbC4"}],"hdbC4":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("68700f673320a22a");
var fails = require("428e95488da0e54e");
var global = require("eb1f1f7f7de97ce0");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"68700f673320a22a":"diVIs","428e95488da0e54e":"luPpk","eb1f1f7f7de97ce0":"avqB7"}],"diVIs":[function(require,module,exports) {
"use strict";
var global = require("dc37f58b80d99c1e");
var userAgent = require("e124e75481a7e505");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"dc37f58b80d99c1e":"avqB7","e124e75481a7e505":"jumDW"}],"jumDW":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"goREb":[function(require,module,exports) {
"use strict";
var aCallable = require("d22489f7446fc8fb");
var isNullOrUndefined = require("fd4a4ca6f921c6ca");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"d22489f7446fc8fb":"7r1lP","fd4a4ca6f921c6ca":"xVj2k"}],"7r1lP":[function(require,module,exports) {
"use strict";
var isCallable = require("8c4d67abd1d747ee");
var tryToString = require("c12152a1f2dfe9f4");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"8c4d67abd1d747ee":"fqYwo","c12152a1f2dfe9f4":"c7C3w"}],"c7C3w":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"iTXKY":[function(require,module,exports) {
"use strict";
var call = require("77074cd10c6e491d");
var isCallable = require("865510c544cceb0c");
var isObject = require("63ce2d975f867fdb");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"77074cd10c6e491d":"acNwo","865510c544cceb0c":"fqYwo","63ce2d975f867fdb":"fRYFX"}],"cSGfj":[function(require,module,exports) {
"use strict";
var global = require("7ca9fc36c62b1b25");
var shared = require("572b05fc0c453f80");
var hasOwn = require("6dbac8e7fa5c32d6");
var uid = require("1b8547440158a21b");
var NATIVE_SYMBOL = require("72a2b70ca66375de");
var USE_SYMBOL_AS_UID = require("ac7bf6a1019cebe6");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"7ca9fc36c62b1b25":"avqB7","572b05fc0c453f80":"9VSA0","6dbac8e7fa5c32d6":"lacXY","1b8547440158a21b":"cLNyV","72a2b70ca66375de":"hdbC4","ac7bf6a1019cebe6":"aDtCm"}],"9VSA0":[function(require,module,exports) {
"use strict";
var IS_PURE = require("2fa88bc738326cc0");
var store = require("b833e17679ad2ed1");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.33.3",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"2fa88bc738326cc0":"k905C","b833e17679ad2ed1":"4KS55"}],"k905C":[function(require,module,exports) {
"use strict";
module.exports = true;

},{}],"4KS55":[function(require,module,exports) {
"use strict";
var global = require("f80f118fb59b58");
var defineGlobalProperty = require("c876c9e4ed7104e8");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"f80f118fb59b58":"avqB7","c876c9e4ed7104e8":"4kJdN"}],"4kJdN":[function(require,module,exports) {
"use strict";
var global = require("6ff5aca7b1539d8a");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"6ff5aca7b1539d8a":"avqB7"}],"lacXY":[function(require,module,exports) {
"use strict";
var uncurryThis = require("3cf56701fc9c38e9");
var toObject = require("8ecdc5b2a0f6b18d");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"3cf56701fc9c38e9":"5P4uT","8ecdc5b2a0f6b18d":"70Utf"}],"70Utf":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("1a54b2fc5414b42");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"1a54b2fc5414b42":"3XBjA"}],"cLNyV":[function(require,module,exports) {
"use strict";
var uncurryThis = require("deb3c44f049c7ae1");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"deb3c44f049c7ae1":"5P4uT"}],"451hU":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("e8c3543ef241e39");
var fails = require("d54cb53030dde16f");
var createElement = require("84559b61bbd09714");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"e8c3543ef241e39":"87WOB","d54cb53030dde16f":"luPpk","84559b61bbd09714":"Ioo8t"}],"Ioo8t":[function(require,module,exports) {
"use strict";
var global = require("798a08d02e0187b5");
var isObject = require("d3a6b57614738655");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"798a08d02e0187b5":"avqB7","d3a6b57614738655":"fRYFX"}],"1D6eY":[function(require,module,exports) {
"use strict";
var fails = require("e0650ac81afce64d");
var isCallable = require("11203b8abdab027a");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"e0650ac81afce64d":"luPpk","11203b8abdab027a":"fqYwo"}],"jZFzY":[function(require,module,exports) {
"use strict";
var uncurryThis = require("a49e75ca3c37abfe");
var aCallable = require("d3b2e0b141bf3a63");
var NATIVE_BIND = require("db6aaf31b65a915f");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"a49e75ca3c37abfe":"4LaES","d3b2e0b141bf3a63":"7r1lP","db6aaf31b65a915f":"bFMAq"}],"2bHDS":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("6a41151e417e0d5a");
var definePropertyModule = require("a43a9e7f4954e8f9");
var createPropertyDescriptor = require("6317956bbcb935d5");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"6a41151e417e0d5a":"87WOB","a43a9e7f4954e8f9":"gbIb1","6317956bbcb935d5":"1E79z"}],"gbIb1":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("e87c552c95d47417");
var IE8_DOM_DEFINE = require("1d0d25e398c9097b");
var V8_PROTOTYPE_DEFINE_BUG = require("1bc2387b228f52a8");
var anObject = require("699c471765c95452");
var toPropertyKey = require("158df1570926fb43");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"e87c552c95d47417":"87WOB","1d0d25e398c9097b":"451hU","1bc2387b228f52a8":"fElse","699c471765c95452":"bTNyr","158df1570926fb43":"2GDiT"}],"fElse":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("2e2d7866bde3eb99");
var fails = require("fb0cae9e30301d29");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"2e2d7866bde3eb99":"87WOB","fb0cae9e30301d29":"luPpk"}],"bTNyr":[function(require,module,exports) {
"use strict";
var isObject = require("a722fbb49aeb9bcf");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"a722fbb49aeb9bcf":"fRYFX"}],"9kM19":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("a2c4d3a5374513c3");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"a2c4d3a5374513c3":"dQ2Uo"}],"dQ2Uo":[function(require,module,exports) {
"use strict";
var trunc = require("ee47284a9a53d2d4");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"ee47284a9a53d2d4":"3ItwT"}],"3ItwT":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"3DQpG":[function(require,module,exports) {
"use strict";
var classof = require("3d4d7e741c7538b9");
var $String = String;
module.exports = function(argument) {
    if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
};

},{"3d4d7e741c7538b9":"5J26j"}],"5J26j":[function(require,module,exports) {
"use strict";
var TO_STRING_TAG_SUPPORT = require("ca80980ca8828ed9");
var isCallable = require("b0a3d999017d786");
var classofRaw = require("547575657d0eac4a");
var wellKnownSymbol = require("d0d3a571c672065f");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"ca80980ca8828ed9":"7vtNP","b0a3d999017d786":"fqYwo","547575657d0eac4a":"fZmv0","d0d3a571c672065f":"cSGfj"}],"7vtNP":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("ba0a343f3b18fcdd");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"ba0a343f3b18fcdd":"cSGfj"}],"k4sfl":[function(require,module,exports) {
"use strict";
var isRegExp = require("9277bcef2ccea3bd");
var $TypeError = TypeError;
module.exports = function(it) {
    if (isRegExp(it)) throw new $TypeError("The method doesn't accept regular expressions");
    return it;
};

},{"9277bcef2ccea3bd":"b5BOS"}],"b5BOS":[function(require,module,exports) {
"use strict";
var isObject = require("902db636f358f09a");
var classof = require("ecc27a50e50b3af0");
var wellKnownSymbol = require("87b2e86435177b40");
var MATCH = wellKnownSymbol("match");
// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === "RegExp");
};

},{"902db636f358f09a":"fRYFX","ecc27a50e50b3af0":"fZmv0","87b2e86435177b40":"cSGfj"}],"8BDoZ":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("4f104d638fc62174");
var MATCH = wellKnownSymbol("match");
module.exports = function(METHOD_NAME) {
    var regexp = /./;
    try {
        "/./"[METHOD_NAME](regexp);
    } catch (error1) {
        try {
            regexp[MATCH] = false;
            return "/./"[METHOD_NAME](regexp);
        } catch (error2) {}
    }
    return false;
};

},{"4f104d638fc62174":"cSGfj"}],"h4S1q":[function(require,module,exports) {
"use strict";
var global = require("e469178461fc0d3");
var path = require("e59872e3f015cd14");
module.exports = function(CONSTRUCTOR, METHOD) {
    var Namespace = path[CONSTRUCTOR + "Prototype"];
    var pureMethod = Namespace && Namespace[METHOD];
    if (pureMethod) return pureMethod;
    var NativeConstructor = global[CONSTRUCTOR];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    return NativePrototype && NativePrototype[METHOD];
};

},{"e469178461fc0d3":"avqB7","e59872e3f015cd14":"8QO0z"}],"eXFBg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotFound {
    render() {
        return `<h1>Not Found</h1>`;
    }
}
exports.default = NotFound;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9R1Eu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _profileJpg = require("../../public/images/profile.jpg");
var _profileJpgDefault = parcelHelpers.interopDefault(_profileJpg);
class About {
    render() {
        return `
    <div class='check'>
    <div class="heroContainer">
      <section class="hero">
        <figure class="figure aboutFigure">
          <img src="${0, _profileJpgDefault.default}" alt="my profile picture" loading='lazzy'>
          <figcaption class="offscreen">Gal Parselani</figcaption>
        </figure>
      <h2 class='whiteText'>About Me</h2>
      <p class='whiteText'>Hello! My name is Gal Parselani, a 33-year-old, Jewish, happily married, and a proud resident of Tel Aviv, Israel. Originally from Ra'anana, I cherish the strong bonds with my family, including my wife Hamutal, my brothers, and my adored nephews, who are central to my world.</p>
      <p class='whiteText'>Passionate about gaming, I've been an avid player of Counter-Strike, GTA V, Destiny 2, and Football Manager for over two decades. Beyond the digital realm, I'm a culinary enthusiast, often crafting "Mama Meals" dinners for my wife and me.</p>
      <p class='whiteText'>Staying active is crucial for me. I engage in football, Muay Thai, and functional training, and I'm an enthusiastic sports fan, enjoying everything from Footbal through UFC to tennis. My social life revolves around my close-knit group of friends from school, with whom I regularly catch up.</p>
      <p class='whiteText'>Family time is sacred, particularly during Friday evenings and Saturdays. I believe in giving back and find volunteering deeply rewarding, as it resonates with my life's philosophy of helping others.</p>
      <p class='whiteText'>In every aspect, whether it's through sports, gaming, cooking, or volunteering, I strive to bring joy and positivity to both my life and those around me.</p>
  </section>
  </div>
  </div>
      `;
    }
}
exports.default = About;

},{"../../public/images/profile.jpg":"g3d43","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3d43":[function(require,module,exports) {
module.exports = require("89892c7bc39d964").getBundleURL("bnSOs") + "profile.16c6010e.jpg" + "?" + Date.now();

},{"89892c7bc39d964":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hcu4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _map = require("@babel/runtime-corejs3/core-js-stable/instance/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
var _aqua3Png = require("../../public/images/aqua3.png");
var _aqua3PngDefault = parcelHelpers.interopDefault(_aqua3Png);
var _2311Png = require("../../public/images/2311.png");
var _2311PngDefault = parcelHelpers.interopDefault(_2311Png);
var _aqua1Png = require("../../public/images/aqua1.png");
var _aqua1PngDefault = parcelHelpers.interopDefault(_aqua1Png);
var _aqua2Png = require("../../public/images/aqua2.png");
var _aqua2PngDefault = parcelHelpers.interopDefault(_aqua2Png);
var _circlePng = require("../../public/images/circle.png");
var _circlePngDefault = parcelHelpers.interopDefault(_circlePng);
var _coursesPng = require("../../public/images/courses.png");
var _coursesPngDefault = parcelHelpers.interopDefault(_coursesPng);
var _fsconfPng = require("../../public/images/fsconf.png");
var _fsconfPngDefault = parcelHelpers.interopDefault(_fsconfPng);
var _galleryPng = require("../../public/images/gallery.png");
var _galleryPngDefault = parcelHelpers.interopDefault(_galleryPng);
var _weblogalPng = require("../../public/images/weblogal.png");
var _weblogalPngDefault = parcelHelpers.interopDefault(_weblogalPng);
class Home {
    constructor(){
        this.cardsData = [
            {
                title: "Web Blog",
                description: `In this project, I focused primarily on enhancing my JavaScript skills. While I did work with CSS and HTML, the CSS portion remains incomplete as my main objective was to refine my JavaScript expertise. I utilized Vanilla JavaScript, CSS, HTML, MongoDB (via Mongoose), and the Express framework. This was my initial full-stack project, undertaken after a considerable period of self-study and practice.`,
                url: "https://weblogal.com",
                href: "#/weblogal",
                image: (0, _aqua3PngDefault.default)
            },
            {
                title: "Courses List",
                description: `In this project, I focused primarily on enchancing my React skills. While i also did work with Bootstrap, again the CSS part wasnt the main part of the project, but the react. I utilized React, css-Bootstrap, Express framework, Sequelize, SQLite3. this was my initial React Full Stack Project, undertaken after a considerable period of self-study practice. `,
                url: "https://react2.online",
                href: "#/courses",
                image: (0, _2311PngDefault.default)
            },
            {
                title: "Employees API",
                description: `This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students. It is a quintessential example of dynamic and responsive design, employing the foundational trio of web development: HTML, CSS, and JavaScript, to create a seamless user experience.`,
                url: "https://parselinho.github.io/employees/",
                href: "#/employees",
                image: (0, _aqua1PngDefault.default)
            },
            {
                title: "FSConference",
                description: `This project showcases a comprehensive registration form for a Full Stack Conference, where I honed my skills in creating dynamic and interactive web forms. The core of the project lies in JavaScript's interactivity and form validation logic, alongside building a responsive layout using CSS. Key technologies include HTML CSS and JavaScript.`,
                url: "https://parselinho.github.io/FSConference/",
                href: "#/fsconference",
                image: (0, _aqua2PngDefault.default)
            },
            {
                title: "Phrase",
                description: `In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.`,
                url: "https://parselinho.github.io/Phrase-Hunter/",
                href: "#/phrase-hunter",
                image: (0, _circlePngDefault.default)
            },
            {
                title: "Circle",
                description: `In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies.`,
                url: "https://parselinho.github.io/circleProject/",
                href: "#/circle",
                image: (0, _coursesPngDefault.default)
            },
            {
                title: "Gallery",
                description: `A visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption.`,
                url: "https://parselinho.github.io/galleryProject/",
                href: "#/gallery",
                image: (0, _fsconfPngDefault.default)
            },
            {
                title: "WebApp",
                description: `The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics.`,
                url: "https://parselinho.github.io/webApp/",
                href: "#/webapp",
                image: (0, _galleryPngDefault.default)
            },
            {
                title: "Auth Library",
                description: `AuthenticRealm is a comprehensive solution for handling user authentication and authorization in Node.js applications. It simplifies the process of implementing user registration, login, email verification, password reset, and role-based access control, making it ideal for rapid development.`,
                url: "https://www.npmjs.com/package/authenticrealm",
                href: "#/auth-library",
                image: (0, _weblogalPngDefault.default)
            }
        ];
    }
    createCard(card) {
        return `
      <li class="card">
        <img src="${card.image}" alt='description' loading="lazy"/>
        <div class='cardContainer'>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <div class="cardLinks">
          <a href="${card.href}" title="navigate to the project page">More Info</a>
          <a href='${card.url}' target='_blank' rel="noopener" title="navigate to the project website">Visit Website</a>
          <div>
        </div>
      </li>
    `;
    }
    setCardData() {
        var _context;
        return (0, _mapDefault.default)(_context = this.cardsData).call(_context, this.createCard).join("");
    }
    render() {
        return `
    <div class="homeContainer">
    <h2>Home Page</h2>
    <div class="homeDiv">
    <p>In my professional journey, Experienced in Sales Operations and CRM analysis, I excel in optimizing CRM and lead management systems within the tech industry, enhancing efficiency and sales conversion rates. Alongside my professional role, I've pursued a passion for full-stack development over the past 1.5 years, enriching my technical and problem-solving skills. This unique combination of strategic CRM management, sales operations expertise, and technical proficiency drives my approach to creating innovative solutions in fast-paced environments.</p>
    <aside>
          <p>
            <b>**</b> I'd like to extend my gratitude to
            <a
              href="https://www.youtube.com/@DaveGrayTeachesCode"
              target="_blank"
              rel="noopener"
              title="visit dave youtube channel"
              >Dave Gray</a
            >
            for his youtube video about css, that helped me style this project.
          </p>
        </aside>  
      </div>

    </div>

      <ul class="ul">${this.setCardData()}  </ul>

      `;
    }
}
exports.default = Home;

},{"@babel/runtime-corejs3/core-js-stable/instance/map":"j5741","../../public/images/aqua3.png":"2HjTb","../../public/images/2311.png":"lp3Jq","../../public/images/aqua1.png":"aDtLk","../../public/images/aqua2.png":"fTMap","../../public/images/circle.png":"3D1e4","../../public/images/courses.png":"dj39I","../../public/images/fsconf.png":"71J5i","../../public/images/gallery.png":"fAenf","../../public/images/weblogal.png":"lgf1H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5741":[function(require,module,exports) {
module.exports = require("8c63fc6e063f0de6");

},{"8c63fc6e063f0de6":"14NOZ"}],"14NOZ":[function(require,module,exports) {
"use strict";
var parent = require("16a35389f12f96b2");
module.exports = parent;

},{"16a35389f12f96b2":"l0IjZ"}],"l0IjZ":[function(require,module,exports) {
"use strict";
var isPrototypeOf = require("3382ec7f564049f5");
var method = require("cb7c1bfeb1e53e76");
var ArrayPrototype = Array.prototype;
module.exports = function(it) {
    var own = it.map;
    return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map ? method : own;
};

},{"3382ec7f564049f5":"qlM4L","cb7c1bfeb1e53e76":"lhLzf"}],"lhLzf":[function(require,module,exports) {
"use strict";
require("a676114b4f15f1a1");
var getBuiltInPrototypeMethod = require("5ed8dc7fd7117884");
module.exports = getBuiltInPrototypeMethod("Array", "map");

},{"a676114b4f15f1a1":"4mWs8","5ed8dc7fd7117884":"h4S1q"}],"4mWs8":[function(require,module,exports) {
"use strict";
var $ = require("3caa6d712ddde9ae");
var $map = require("6711f039fbff2cc1").map;
var arrayMethodHasSpeciesSupport = require("26e299e2ac0c82fa");
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
    target: "Array",
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
}, {
    map: function map(callbackfn /* , thisArg */ ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});

},{"3caa6d712ddde9ae":"jjems","6711f039fbff2cc1":"8g5by","26e299e2ac0c82fa":"4n6gw"}],"8g5by":[function(require,module,exports) {
"use strict";
var bind = require("2653ed84f7edc016");
var uncurryThis = require("1b2682d0d79a3ebb");
var IndexedObject = require("d8aea3d95dff18af");
var toObject = require("85ca73267bbdf2de");
var lengthOfArrayLike = require("5dad56a0add9d157");
var arraySpeciesCreate = require("5a177f6b8e7d490e");
var push = uncurryThis([].push);
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function(TYPE) {
    var IS_MAP = TYPE === 1;
    var IS_FILTER = TYPE === 2;
    var IS_SOME = TYPE === 3;
    var IS_EVERY = TYPE === 4;
    var IS_FIND_INDEX = TYPE === 6;
    var IS_FILTER_REJECT = TYPE === 7;
    var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;
        for(; length > index; index++)if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch(TYPE){
                    case 3:
                        return true; // some
                    case 5:
                        return value; // find
                    case 6:
                        return index; // findIndex
                    case 2:
                        push(target, value); // filter
                }
                else switch(TYPE){
                    case 4:
                        return false; // every
                    case 7:
                        push(target, value); // filterReject
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
module.exports = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod(7)
};

},{"2653ed84f7edc016":"jZFzY","1b2682d0d79a3ebb":"5P4uT","d8aea3d95dff18af":"6NkN4","85ca73267bbdf2de":"70Utf","5dad56a0add9d157":"icIfm","5a177f6b8e7d490e":"jQr4t"}],"icIfm":[function(require,module,exports) {
"use strict";
var toLength = require("80b24ea6763f6d60");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"80b24ea6763f6d60":"9kM19"}],"jQr4t":[function(require,module,exports) {
"use strict";
var arraySpeciesConstructor = require("174f142cf036cc7c");
// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

},{"174f142cf036cc7c":"cVDs2"}],"cVDs2":[function(require,module,exports) {
"use strict";
var isArray = require("440a9fd73b314ec5");
var isConstructor = require("d4cc1460749e0545");
var isObject = require("1c29775ba90cde37");
var wellKnownSymbol = require("3720933caec924ac");
var SPECIES = wellKnownSymbol("species");
var $Array = Array;
// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function(originalArray) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
        }
    }
    return C === undefined ? $Array : C;
};

},{"440a9fd73b314ec5":"byYNs","d4cc1460749e0545":"15Sn8","1c29775ba90cde37":"fRYFX","3720933caec924ac":"cSGfj"}],"byYNs":[function(require,module,exports) {
"use strict";
var classof = require("5d49968008849969");
// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) === "Array";
};

},{"5d49968008849969":"fZmv0"}],"15Sn8":[function(require,module,exports) {
"use strict";
var uncurryThis = require("593efac18ede3666");
var fails = require("5a0c3746e01d7358");
var isCallable = require("e130ade161aa0df");
var classof = require("e9e20de2bed4e467");
var getBuiltIn = require("f959f837ef140e61");
var inspectSource = require("39e31a122d1ff603");
var noop = function() {};
var empty = [];
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
        construct(noop, empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch(classof(argument)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
        return true;
    }
};
isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
    }) || called;
}) ? isConstructorLegacy : isConstructorModern;

},{"593efac18ede3666":"5P4uT","5a0c3746e01d7358":"luPpk","e130ade161aa0df":"fqYwo","e9e20de2bed4e467":"5J26j","f959f837ef140e61":"6wm25","39e31a122d1ff603":"17BO4"}],"17BO4":[function(require,module,exports) {
"use strict";
var uncurryThis = require("9b2808ae2f1b93ca");
var isCallable = require("2665e08ce7390c36");
var store = require("42eb5fda20c53450");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"9b2808ae2f1b93ca":"5P4uT","2665e08ce7390c36":"fqYwo","42eb5fda20c53450":"4KS55"}],"4n6gw":[function(require,module,exports) {
"use strict";
var fails = require("d8785124a95e89b2");
var wellKnownSymbol = require("541a277c7497a716");
var V8_VERSION = require("9dc718a0fef21212");
var SPECIES = wellKnownSymbol("species");
module.exports = function(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES] = function() {
            return {
                foo: 1
            };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};

},{"d8785124a95e89b2":"luPpk","541a277c7497a716":"cSGfj","9dc718a0fef21212":"diVIs"}],"2HjTb":[function(require,module,exports) {
module.exports = require("f95bff4f07c358a9").getBundleURL("bnSOs") + "aqua3.872efce2.png" + "?" + Date.now();

},{"f95bff4f07c358a9":"lgJ39"}],"lp3Jq":[function(require,module,exports) {
module.exports = require("f361abc0b7787b23").getBundleURL("bnSOs") + "2311.86b9f421.png" + "?" + Date.now();

},{"f361abc0b7787b23":"lgJ39"}],"aDtLk":[function(require,module,exports) {
module.exports = require("b7b05c55b7468d46").getBundleURL("bnSOs") + "aqua1.6bcc3bb1.png" + "?" + Date.now();

},{"b7b05c55b7468d46":"lgJ39"}],"fTMap":[function(require,module,exports) {
module.exports = require("f2ef97d3ee7ae60").getBundleURL("bnSOs") + "aqua2.b15e1a8e.png" + "?" + Date.now();

},{"f2ef97d3ee7ae60":"lgJ39"}],"3D1e4":[function(require,module,exports) {
module.exports = require("60a7ecc0db9bf3").getBundleURL("bnSOs") + "circle.ad484b71.png" + "?" + Date.now();

},{"60a7ecc0db9bf3":"lgJ39"}],"dj39I":[function(require,module,exports) {
module.exports = require("562328454007341c").getBundleURL("bnSOs") + "courses.500a6bf5.png" + "?" + Date.now();

},{"562328454007341c":"lgJ39"}],"71J5i":[function(require,module,exports) {
module.exports = require("63907702e4386633").getBundleURL("bnSOs") + "fsconf.413129e5.png" + "?" + Date.now();

},{"63907702e4386633":"lgJ39"}],"fAenf":[function(require,module,exports) {
module.exports = require("a384ebd9a709c1").getBundleURL("bnSOs") + "gallery.bbe2e2fb.png" + "?" + Date.now();

},{"a384ebd9a709c1":"lgJ39"}],"lgf1H":[function(require,module,exports) {
module.exports = require("c5d93611b0859765").getBundleURL("bnSOs") + "weblogal.9e165cb3.png" + "?" + Date.now();

},{"c5d93611b0859765":"lgJ39"}],"4aT7V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _profile2Jpg = require("../../public/images/profile2.jpg");
var _profile2JpgDefault = parcelHelpers.interopDefault(_profile2Jpg);
var _treehouseSvg = require("../../public/svg/treehouse.svg");
var _treehouseSvgDefault = parcelHelpers.interopDefault(_treehouseSvg);
var _udemy3Svg = require("../../public/svg/udemy-3.svg");
var _udemy3SvgDefault = parcelHelpers.interopDefault(_udemy3Svg);
class Resume {
    render() {
        return `
        <div class="resumeMainContainer">
            <div class="resumeAndExperience">
          <section class="resumeHeader">

          <figure class="figureResume">
            <img src="${0, _profile2JpgDefault.default}" alt="Gals Picture" loading="lazy">
            <figcaption class="offscreen">Gal Parselani</figcaption>
          </figure>

            <h2>Gal Parselani Profile Summary</h2>
            <p>Experienced in Sales Operations and CRM analysis, I excel in optimizing CRM and lead management systems within the tech industry, enhancing efficiency and sales conversion rates. Alongside my professional role, I've pursued a passion for full-stack development over the past 1.5 years, enriching my technical and problem-solving skills. This unique combination of strategic CRM management, sales operations expertise, and technical proficiency drives my approach to creating innovative solutions in fast-paced environments.</p>
          </section>

          <section class="resumeExperience">
            <h3>Professional Experience:</h3>
            <h4>\u{1F680} CRM Analyst & Sales Operations Analyst</h4>
            <div class='resumeTime'>
              <h5>360 Affiliate LTD, Tel-Aviv</h5>
              <p class='year'>March 2018 - Present</p>
            </div>
            <p>In my role at a leading crypto-currency trading firm, I have been pivotal in orchestrating and refining the lead management and sales operation strategies. My contributions have been instrumental in scaling the company's lead handling capacities and optimizing conversion rates, directly impacting our market presence and profitability.</p>
            <p><b>Key Responsibilities:</b></p>
            <ul>
                <li>    
                    <b>Strategic Lead Management:</b> Spearheaded the optimization of lead distribution, managing a complex system handling thousands of leads daily. Ensured leads were effectively routed to the most suitable call centers, enhancing conversion opportunities.
                </li>
                <li>    
                    <b>Data-Driven Decision Making:</b> Utilized advanced analytics to monitor lead traffic and conversion rates across diverse geographic markets. My insights and strategies led to substantial improvements in operational efficiency and sales results.
                </li>
                <li>    
                    <b>Market Analysis and Growth Strategy:</b> Identified key market trends and potential growth areas. Developed and implemented targeted strategies to boost company performance in underperforming regions, leading to significant increases in customer acquisition.
                </li>
                <li>    
                    <b>Sales Operations Optimization:</b> Collaborated with sales teams to refine lead distribution strategies within the internal system. Adapted lead allocation in real-time based on performance data, ensuring optimal engagement and conversion rates.
                </li>
                <li>    
                    <b>Demand and Supply Management:</b> Addressed gaps where demand exceeded supply by guiding sales teams to acquire additional customers and call centers, particularly in high-potential markets.
                </li>
            </ul>
            <p><b>Achievements:</b><br>Successfully managed an increase in lead handling capacity by approximately 700%.
            Achieved a growth in deposit conversions by about 300%.
            Played a pivotal role in expanding the company\u{2019}s reach in strategic markets, contributing to a substantial increase in daily deposits, notably in previously underperforming regions.
            Recognized for implementing innovative strategies and technological solutions that kept pace with the rapidly evolving crypto-currency market, bolstering the company's competitive edge.            
            </p>
            <p><b>Summary:</b><br>My tenure at 360 Affiliate LTD has been marked by a relentless pursuit of excellence in lead management and sales operations. I have driven significant improvements in operational efficiency and market penetration, proving myself as a vital asset in navigating the complexities of the crypto-currency trading sector.</p>
          </section>
          </div>
          <div class="bordersolid"></div>

          <section class="resumeSide">
            <h3>Education</h3>
  
            <h4><a href="https://www.ariel.ac.il/university/minisite/" target='_blank' rel="noopener" title="visit ariel website">Ariel University</a></h4>
            <p>Bachelor's Degree in Criminology and Middle Eastern Studies (Specialization in Terrorism)
            2016-2019</p>

            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${0, _treehouseSvgDefault.default}" alt="treehouse logo" loading="lazy">
            <h4><a href="https://teamtreehouse.com" target='_blank' rel="noopener" title="visit treehouse website">teamTreeHouse</a></h4>
            </div>
            <p>TechDegree in Full Stack JavaScript, and Front End Web Development. 2022-2023</p>
            <div class="certDiv">
                <a href='https://www.credential.net/7a967360-dd18-4c50-ba1b-0bb865c6b2cc#gs.0q0eho' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for FSJS</a>
                <a href='https://www.credential.net/1c3e2d8f-a879-46c6-a466-4b1eb0c9fc72#gs.0q0i5i' target='_blank' rel="noopener" title="navigate to the front end certification">certification for FEWD</a>
            </div>
            </div>
            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${0, _udemy3SvgDefault.default}" alt="udemy logo" loading="lazy">
            <h4><a href="https://udemy.com" target='_blank' rel="noopener" title="visit udemy website">Udemy</a></h4>
            </div>
            <p>TechDegree in NodeJS and Express. 2023</p>
            <div class="certDiv">
                <a href='https://www.udemy.com/certificate/UC-d36709d8-6208-4206-bf7b-5be6b8086342/' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for NodeJs and Express</a>
            </div>
            </div>


            <div class="border"></div>

            <div class='logoAndHeading'>
            <h3 class='skillsHeading'>Skills</h3>
            </div>
            <ul class='skills'>
                <li><b>Strategic Lead Management & Optimization:</b> Highly skilled in managing and optimizing complex lead distribution systems. Proficient in maximizing efficiency and improving conversion rates across diverse markets.</li>
                <li><b>Data Analysis & Strategic Insight Generation:</b> Expertise in analyzing large datasets to derive actionable insights, significantly impacting lead routing strategies and sales performance.</li>
                <li><b>Operational Efficiency Enhancement:</b> Adept at identifying and addressing inefficiencies within lead management systems, implementing solutions that boost overall performance and productivity.</li>
                <li><b>Adaptability & Continuous Learning:</b> Demonstrates flexibility in adapting to industry trends and new technologies, with a dedicated focus on continuous improvement in lead management and data analysis.</li>
                <li><b>Innovative Problem-Solving:</b> Renowned for exceptional problem-solving abilities, consistently delivering innovative and efficient solutions to complex challenges.  Excel at synthesizing diverse information to find unique solutions.</li>
                <li><b>Technical Reporting & Data Visualization:</b> Proficient in crafting detailed reports and visualizations that effectively communicate complex data and insights to varied audiences.</li>
                <li><b>Collaboration & Communication:</b> Strong communicator capable of bridging the gap between technical teams and non-technical stakeholders, ensuring seamless information flow and collaboration.</li>
                <li><b>Project Management & Strategic Execution:</b> Experienced in leading projects that enhance lead management systems, meeting critical deadlines and achieving strategic objectives.</li>
                <li class='last-item'><b>Technical Proficiency:</b> Solid foundation in database management and analysis with tools like SQL and MongoDB. Familiarity with programming languages and frameworks such as JavaScript, React, Next.js, TypeScript, Node.js, and Express, contributing to a comprehensive understanding of the technological aspects of lead systems.</li>
            </ul>
            <div class="border"></div>

            <h3>Languages:</h3>
            <ul>
                <li>Hebrew (Native)</li>
                <li>English (Highly Proficient)</li>
            </ul>
            <div class="border"></div>


            <h3>Millitary Service</h3>
            <p>Combat Intelligence Support, IDF (2009-2012)</p>
            <div class="border"></div>

            
            <h3>Volunteering</h3>
            <p>Dedicated volunteer at Chabad House in Hatikva neighborhood, contributing to impactful initiatives such as preparing meals, distributing food at Chabad Herzliya, and Lihiyot-Bekavod in Rishon Lezion.</p>
            <div class="border"></div>

        </section>

          <section class="resumeFinal">
            <h3>Seek Opportunities</h3>
              <p>As a seasoned professional in Sales Operations, with a specific focus on CRM and data-driven lead management, my career journey has been characterized by a steadfast dedication to mastering CRM analytics and optimizing sales strategies. In the ever-evolving tech industry, I've excelled in roles that demanded a deep understanding of CRM systems, lead distribution, sales operations analysis, and customer acquisition strategies. My ability to dissect and manage lead data across diverse dimensions, such as geographical segmentation and market trends, has been a cornerstone of my success.


              In my capacity as a CRM Analyst & Sales Operations Analyst, I have consistently demonstrated the ability to not only efficiently manage and direct lead traffic but also to guide teams in formulating and executing effective strategies for market expansion and customer engagement. My expertise in refining CRM processes and integrating technological advancements has solidified my role as a critical asset to organizations that value data-driven, strategic approaches to sales and CRM management.
              
              
              I am now eager to bring my wealth of experience and strategic insights to a new challenge. I am excited about opportunities to leverage my skills in CRM analytics, lead management, strategic planning, and collaborative leadership to drive sales excellence and operational efficiency. My goal is to join a forward-thinking organization where innovative, data-informed methods are at the forefront of business growth and customer acquisition strategies.
              
              </p>
            </section>

          </div>
        `;
    }
}
exports.default = Resume;

},{"../../public/images/profile2.jpg":"fUWD8","../../public/svg/treehouse.svg":"4QRYt","../../public/svg/udemy-3.svg":"8Dj5G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUWD8":[function(require,module,exports) {
module.exports = require("82dd79df1dddab89").getBundleURL("bnSOs") + "profile2.a1d7885d.jpg" + "?" + Date.now();

},{"82dd79df1dddab89":"lgJ39"}],"4QRYt":[function(require,module,exports) {
module.exports = require("9706c0576731f607").getBundleURL("bnSOs") + "treehouse.0181a493.svg" + "?" + Date.now();

},{"9706c0576731f607":"lgJ39"}],"8Dj5G":[function(require,module,exports) {
module.exports = require("6133c39105d521ee").getBundleURL("bnSOs") + "udemy-3.801f4588.svg" + "?" + Date.now();

},{"6133c39105d521ee":"lgJ39"}],"flhIS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Weblogal {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[0];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Weblogal;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcreQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _weblogalPng = require("../../public/images/weblogal.png");
var _weblogalPngDefault = parcelHelpers.interopDefault(_weblogalPng);
var _coursesPng = require("../../public/images/courses.png");
var _coursesPngDefault = parcelHelpers.interopDefault(_coursesPng);
var _2311Png = require("../../public/images/2311.png");
var _2311PngDefault = parcelHelpers.interopDefault(_2311Png);
var _fsconfPng = require("../../public/images/fsconf.png");
var _fsconfPngDefault = parcelHelpers.interopDefault(_fsconfPng);
var _phrasePng = require("../../public/images/phrase.png");
var _phrasePngDefault = parcelHelpers.interopDefault(_phrasePng);
var _circlePng = require("../../public/images/circle.png");
var _circlePngDefault = parcelHelpers.interopDefault(_circlePng);
var _galleryPng = require("../../public/images/gallery.png");
var _galleryPngDefault = parcelHelpers.interopDefault(_galleryPng);
var _webappPng = require("../../public/images/webapp.png");
var _webappPngDefault = parcelHelpers.interopDefault(_webappPng);
var _authPng = require("../../public/images/auth.png");
var _authPngDefault = parcelHelpers.interopDefault(_authPng);
const projects = [
    {
        title: "Web Blog",
        description: "my primary focus was to enhance and showcase my JavaScript development skills. This project represents a significant milestone in my journey as a developer, marking my first foray into full-stack development. It was a self-driven initiative, undertaken after an extensive period of self-study and practical experimentation.",
        url: "https://weblogal.com",
        github: "https://github.com/Parselinho/BlogWebsite",
        image: `${(0, _weblogalPngDefault.default)}`,
        backendList: [
            {
                listTitle: "Node.js and Express",
                listDescription: `At the core of the backend is Express, a minimalist web framework for Node.js, enabling me to create a robust server-side application with ease. Express's simplicity and flexibility were instrumental in implementing RESTful APIs and server logic.`
            },
            {
                listTitle: "mongoose with MongoDB",
                listDescription: `For data persistence, I used Mongoose, an elegant MongoDB object modeling tool. It provided a schema-based solution to model my application data, making data handling more structured and intuitive.`
            }
        ],
        frontendList: [
            {
                listTitle: "Webpack",
                listDescription: `Leveraged as the module bundler and task runner, it efficiently compiled and bundled JavaScript modules. Its configurations were enhanced with webpack-dev-server for a smoother development experience, enabling features like hot module replacement.`
            },
            {
                listTitle: "babel",
                listDescription: `Integrated with Webpack via babel-loader, Babel transpiled modern JavaScript code into a backward-compatible version for broader browser compatibility.`
            },
            {
                listTitle: "axios",
                listDescription: `Chosen for HTTP requests, Axios provided a simple yet powerful way to interact with the backend API, handling data fetching and submission seamlessly.`
            }
        ]
    },
    {
        title: "Course List",
        description: "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
        url: "https://react2.online",
        github: "https://github.com/Parselinho/project-10",
        image: `${(0, _coursesPngDefault.default)}`,
        backendList: [
            {
                listTitle: "Express",
                listDescription: `A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`
            },
            {
                listTitle: "Sequelize",
                listDescription: `A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server, enabling a solid database integration.`
            },
            {
                listTitle: "SQLite3",
                listDescription: `A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.`
            },
            {
                listTitle: "Bootstrap",
                listDescription: `employed for styling, but the main emphasis was on React development rather than CSS.`
            }
        ],
        frontendList: [
            {
                listTitle: "React",
                listDescription: `A JavaScript library for building user interfaces, enabling the creation of fast, scalable, and simple web applications.`
            },
            {
                listTitle: "React Router",
                listDescription: `For declarative routing in React applications, enhancing navigation capabilities.
        Axios: Employed for making HTTP requests to the backend server.`
            },
            {
                listTitle: "React Markdown",
                listDescription: `To render Markdown content.`
            },
            {
                listTitle: "React Hook Form",
                listDescription: `For efficient, easy-to-use form handling.`
            },
            {
                listTitle: "React Helmet",
                listDescription: `For managing the document head, useful for setting meta tags dynamically.`
            }
        ]
    },
    {
        title: "Employees API",
        description: "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students, embodying the epitome of dynamic and responsive design. It masterfully employs the foundational trio of web development: HTML for structuring content, CSS for styling and visual appeal, and JavaScript for interactivity and functionality, thereby creating a seamless and intuitive user experience.",
        url: "https://parselinho.github.io/employees/",
        github: "https://github.com/Parselinho/employees",
        image: `${(0, _2311PngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Dynamic Student Listing:",
                listDescription: `The application populates a grid with student profiles, including photos, names, email addresses, and registration dates. This data is dynamically inserted into the HTML using JavaScript, enhancing the interactivity of the page.`
            },
            {
                listTitle: "Pagination",
                listDescription: `The student list is paginated to improve usability, with the capability to display a specified number of student profiles per page. This is achieved through JavaScript, which dynamically creates and manages pagination buttons based on the total number of students.`
            },
            {
                listTitle: "Search Functionality",
                listDescription: `A search bar allows users to filter the student list in real-time. As users type a name, the list updates to display only those entries that match the search query, providing a seamless and efficient user experience.`
            },
            {
                listTitle: "Responsive Design",
                listDescription: `he CSS styling, aided by media queries, ensures that the application is fully responsive. It adapts to various screen sizes, making it accessible on both desktop and mobile devices.`
            },
            {
                listTitle: "Stylish Aesthetics",
                listDescription: `The application uses a modern color palette and fonts (imported from Google Fonts), along with CSS transitions for smooth visual effects, contributing to a professional and polished look.`
            }
        ]
    },
    {
        title: "FSConference",
        description: "This project presents a detailed registration form for a Full Stack Conference, a task that allowed me to focus primarily on enhancing my JavaScript skills. While the CSS styling was sourced from Team Treehouse, my contribution centered on the dynamic and interactive aspects of the web form. Using JavaScript, I implemented features such as real-time validation of form fields, conditional display of form elements, and the calculation of total costs for selected activities. This project was an invaluable opportunity for me to delve deeper into JavaScript, particularly in areas of event handling and DOM manipulation. It underscored my capability to create engaging, interactive web experiences, while the CSS provided by Team Treehouse ensured the form was also visually appealing and responsive.",
        url: "https://parselinho.github.io/FSConference/",
        github: "https://github.com/Parselinho/FSConference",
        image: `${(0, _fsconfPngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Dynamic Elements",
                listDescription: `The form is designed to be interactive, with elements like job role selections, T-shirt design choices, and activity checkboxes, offering users a customized experience.`
            },
            {
                listTitle: "Accessibility and Semantics",
                listDescription: `Semantic HTML elements and attributes enhance the form's accessibility, making it usable for a diverse range of users, including those relying on screen readers.`
            },
            {
                listTitle: "Enhanced Interactivity",
                listDescription: `The JavaScript file adds dynamic behavior to the form. It includes scripts to focus on the first input field on load, dynamically show or hide the 'other job role' input, and manage T-shirt color options based on the selected design.`
            },
            {
                listTitle: "Real-Time Validation and Cost Calculation",
                listDescription: `JavaScript is used for real-time validation of form fields like name, email, and credit card information, and for calculating the total cost of selected activities.`
            }
        ]
    },
    {
        title: "Phrase Hunter",
        description: "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. The game challenges players to guess a hidden phrase, similar to the classic Hangman game. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
        url: "https://parselinho.github.io/Phrase-Hunter/",
        github: "https://github.com/Parselinho/Phrase-Hunter",
        image: `${(0, _phrasePngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Dynamic Web Game Mechanics",
                listDescription: `In the 'Phrase Hunter' game, I designed and implemented dynamic game mechanics using JavaScript. This involved crafting a seamless user experience where game states change based on user interaction, managing game logic, and updating the UI in real-time to reflect the progress and outcomes of the game.`
            },
            {
                listTitle: "Object-Oriented JavaScript",
                listDescription: `I utilized Object-Oriented Programming (OOP) principles in JavaScript to structure the game's functionality. This approach involved creating classes for different game components - 'Phrase' for phrase management and 'Game' for overall game operation, ensuring a modular, maintainable, and scalable codebase.`
            },
            {
                listTitle: "Interactive UI Elements",
                listDescription: `The project highlights my skills in creating interactive UI elements. I developed an on-screen keyboard that responds to both mouse clicks and physical keyboard inputs, providing an immersive and accessible gaming experience for different user preferences.`
            },
            {
                listTitle: "Enhanced Accessibility",
                listDescription: `A key focus of the project was enhancing accessibility. I implemented features like focus states and keyboard navigation, making the game inclusive and user-friendly for a broad audience, including those relying on assistive technologies.`
            }
        ]
    },
    {
        title: "Circles",
        description: "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies. The project features a comprehensive UI kit, designed to provide a solid foundation for web design projects. Emphasizing a clean and refreshing aesthetic, the UI kit includes a variety of elements such as typography, buttons, form elements, and a responsive grid system. By employing Sass, I was able to streamline the styling process, making the CSS more maintainable and scalable. This was crucial in handling the kit's diverse components, from basic typography to complex grid layouts.",
        url: "https://parselinho.github.io/circleProject/",
        github: "https://github.com/Parselinho/circleProject",
        image: `${(0, _circlePngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Sass Integration and Styling",
                listDescription: `This project marked my initial foray into using Sass, a powerful CSS preprocessor. The focus was on leveraging Sass to create an efficient and manageable styling workflow. Through this experience, I enhanced my skills in organizing CSS architectures and utilizing Sass features like variables, mixins, and nested rules. This approach significantly improved the project's maintainability and scalability, especially in styling complex UI components and ensuring a consistent design theme across the 'Circles UI Kit'.`
            }
        ]
    },
    {
        title: "Gallery",
        description: " I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery. ",
        url: "https://parselinho.github.io/galleryProject/",
        github: "https://github.com/Parselinho/galleryProject",
        image: `${(0, _galleryPngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Interactive Photo Gallery Creation",
                listDescription: `In the 'Gal Photo Gallery' project, I focused on developing a user-friendly and visually engaging photo gallery. This involved creating an interactive search functionality using JavaScript, allowing users to filter images based on captions. I employed CSS to design a responsive grid layout, ensuring the gallery's adaptability across different devices. The integration of the 'baguetteBox' library for lightbox effects further enhanced the viewing experience. This project highlights my skills in combining JavaScript and CSS to deliver a seamless and dynamic user interface, showcasing my proficiency in front-end web development and design.`
            }
        ]
    },
    {
        title: "WebApp",
        description: "In this project, I developed an advanced web application dashboard, showcasing my skills in creating a rich user interface with diverse functionalities. Key features include an alert banner with dismissible alerts, implemented in JavaScript, enhancing the user experience through dynamic interaction. The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics. I also implemented an autocomplete search functionality for user messaging, enhancing the usability of the dashboard. The project demonstrates my proficiency in JavaScript for creating interactive elements and my ability to integrate third-party libraries for data visualization. The CSS, structured with grid and flexbox layouts, ensures a responsive and organized presentation of the dashboard components.",
        url: "https://parselinho.github.io/webApp/",
        github: "https://github.com/Parselinho/webApp",
        image: `${(0, _webappPngDefault.default)}`,
        frontendList: [
            {
                listTitle: "Advanced Web Application Dashboard Development",
                listDescription: `This project showcases my ability to create a comprehensive web application dashboard with multiple interactive features. I implemented a JavaScript-based alert system for dynamic notifications and integrated Chart.js for diverse data visualizations, including line, bar, and doughnut charts. These elements provide valuable insights and enhance user interaction. The project also features an autocomplete functionality for efficient user messaging, demonstrating my skill in enhancing user experience through JavaScript. The responsive design was meticulously crafted using CSS grid and flexbox layouts, ensuring seamless adaptability across various devices. This dashboard project exemplifies my expertise in front-end development, emphasizing interactive design and data presentation.`
            }
        ]
    },
    {
        title: "Auth Lirbary",
        description: "AuthenticRealm is a comprehensive solution for handling user authentication and authorization in Node.js applications. It simplifies the process of implementing user registration, login, email verification, password reset, and role-based access control, making it ideal for rapid development.",
        url: "https://www.npmjs.com/package/authenticrealm",
        github: "https://github.com/Parselinho/authenticrealm",
        image: `${(0, _authPngDefault.default)}`,
        backendList: [
            {
                listTitle: "JWT-Based Authentication",
                listDescription: `Utilizing JSON Web Tokens (JWT), AuthenticRealm ensures secure and efficient user authentication. This method enables stateless authentication, making it ideal for scalable applications. JWTs are used for both access and refresh tokens, providing a reliable mechanism for user sessions and secure access contro`
            },
            {
                listTitle: "Custom Error Handling",
                listDescription: `AuthenticRealm incorporates a robust custom error handling system, allowing for clear and concise feedback on various authentication and authorization issues. This feature enhances debugging and user experience, ensuring that errors are communicated effectively`
            },
            {
                listTitle: "Email Verification & Password Reset",
                listDescription: `Incorporating advanced functionalities such as email verification and password reset, AuthenticRealm enhances security and user management. This feature is crucial for verifying user identity and providing secure ways to recover accounts, thereby boosting the overall security posture of the application.`
            },
            {
                listTitle: "Role-Based Access Control",
                listDescription: `AuthenticRealm implements Role-Based Access Control (RBAC) to manage user permissions effectively. This approach allows for fine-grained control over user capabilities, ensuring that access to resources is limited based on user roles, thereby enhancing application security and operational efficiency.`
            },
            {
                listTitle: "Middleware for Session Transactions",
                listDescription: `To ensure data consistency, AuthenticRealm uses middleware for managing session transactions. This approach is crucial for maintaining database integrity, especially in complex operations involving user authentication and authorization processes.`
            },
            {
                listTitle: "Scalable User Model with Mongoose",
                listDescription: `Leveraging Mongoose for user model management, AuthenticRealm offers a scalable and efficient way to handle user data. The schema-based approach of Mongoose aids in structuring user data effectively, enhancing both data integrity and query performance.`
            }
        ]
    }
];
exports.default = projects;

},{"../../public/images/weblogal.png":"lgf1H","../../public/images/courses.png":"dj39I","../../public/images/2311.png":"lp3Jq","../../public/images/fsconf.png":"71J5i","../../public/images/phrase.png":"4z37p","../../public/images/circle.png":"3D1e4","../../public/images/gallery.png":"fAenf","../../public/images/webapp.png":"jXt9y","../../public/images/auth.png":"hkfK8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4z37p":[function(require,module,exports) {
module.exports = require("74c43b44aae6f4c2").getBundleURL("bnSOs") + "phrase.3d915d06.png" + "?" + Date.now();

},{"74c43b44aae6f4c2":"lgJ39"}],"jXt9y":[function(require,module,exports) {
module.exports = require("74ebcd1025317325").getBundleURL("bnSOs") + "webapp.8e831cc4.png" + "?" + Date.now();

},{"74ebcd1025317325":"lgJ39"}],"hkfK8":[function(require,module,exports) {
module.exports = require("4bf09850e834eeb2").getBundleURL("bnSOs") + "auth.7da24e94.png" + "?" + Date.now();

},{"4bf09850e834eeb2":"lgJ39"}],"gGg2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _map = require("@babel/runtime-corejs3/core-js-stable/instance/map");
var _mapDefault = parcelHelpers.interopDefault(_map);
const renderProject = (project)=>{
    // if (!project.backendList) {
    //   return `
    //     <li>
    //       <p>Used only frontend tech</p>
    //     </li>
    //   `;
    // }
    const isBackendList = project.backendList;
    let backendList;
    if (!isBackendList) backendList = `<li>Used only frontEnd tech</li>`;
    else {
        var _context;
        backendList = (0, _mapDefault.default)(_context = project.backendList).call(_context, (item)=>`
      <li>${item.listTitle}<p>${item.listDescription}</p></li>`).join("");
    }
    const isfrontList = project.frontendList && project.frontendList.length > 0;
    let frontList;
    if (!isfrontList) frontList = `<li>
        Used only BackEnd tech<p></p>
      </li>`;
    else {
        var _context2;
        frontList = (0, _mapDefault.default)(_context2 = project.frontendList).call(_context2, (item)=>`
    <li>${item.listTitle}<p>${item.listDescription}</p></li>`).join("");
    }
    return `
       <div class="heroContainer">
        <section class="hero">
            <div class="projectFlex">
                <figure class="figure">
                    <img src="${project.image}" alt="${project.title} image" loading="lazy">
                    <figcaption class="offscreen">${project.url}</figcaption>
                </figure>
                <h2 class="texth2">${project.title}</h2>
                <nav class="projectNav">
                    <a href='${project.github}' target="_blank" rel="noopener" title="navigate to my github profile">GitHub Code</a>
                    <a href='${project.url}' target="_blank" rel="noopener" title="navigate to the project website">Project Site</a>
                </nav>
            </div>
            <p class="texth2">${project.description}</p>
            <div class="textBold">
                <h3>Technologies and Packages for the Backend:</h3>
                    <ul>${backendList}</ul>
                <h3>Technologies and Packages for the Frontend:</h3>
                    <ul>${frontList}</ul>
            </div>
        </section>
       </div> 
    `;
};
exports.default = renderProject;

},{"@babel/runtime-corejs3/core-js-stable/instance/map":"j5741","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFYQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Courses {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[1];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Courses;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtl1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Employees {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[2];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Employees;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70aAJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Fsconference {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[3];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Fsconference;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ki3a3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class PhraseHunter {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[4];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = PhraseHunter;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14NQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Circle {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[5];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Circle;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rDWWZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Gallery {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[6];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Gallery;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"XKC9S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class WebApp {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[7];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = WebApp;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnfmQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _projectsJs = require("../../data/projects.js");
var _projectsJsDefault = parcelHelpers.interopDefault(_projectsJs);
var _renderProjectJs = require("../../../utils/renderProject.js");
var _renderProjectJsDefault = parcelHelpers.interopDefault(_renderProjectJs);
class Auth {
    constructor(){
        this.data = (0, _projectsJsDefault.default)[8];
    }
    render() {
        return (0, _renderProjectJsDefault.default)(this.data);
    }
}
exports.default = Auth;

},{"../../data/projects.js":"jcreQ","../../../utils/renderProject.js":"gGg2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1W6Ki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTimeout = require("@babel/runtime-corejs3/core-js-stable/set-timeout");
var _setTimeoutDefault = parcelHelpers.interopDefault(_setTimeout);
document.addEventListener("DOMContentLoaded", dropDown);
const dropdownDiv = document.querySelector(".dropdownContent");
function dropDown() {
    const dropdown = document.querySelector(".dropdown");
    const button = document.querySelector(".dropBtn");
    // Toggle dropdown on click
    button.addEventListener("click", (event)=>{
        dropdownDiv.style.display = dropdownDiv.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });
    // Show dropdown on mouseover
    button.addEventListener("mouseover", ()=>showOrHide("block"));
    // Show dropdown on focus
    button.addEventListener("focus", (event)=>showOrHide("block"));
    // Hide dropdown when leaving the dropdown area
    dropdown.addEventListener("mouseleave", ()=>showOrHide("none"));
    // Hide dropdown on focusout
    dropdown.addEventListener("focusout", ()=>{
        (0, _setTimeoutDefault.default)(()=>{
            if (!dropdown.contains(document.activeElement)) showOrHide("none");
        });
    });
}
function showOrHide(val) {
    dropdownDiv.style.display = val;
}
exports.default = dropDown;

},{"@babel/runtime-corejs3/core-js-stable/set-timeout":"krONS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krONS":[function(require,module,exports) {
module.exports = require("29743d6d900b22ae");

},{"29743d6d900b22ae":"iSKg2"}],"iSKg2":[function(require,module,exports) {
"use strict";
require("a1e15d73498d19f9");
var path = require("43f05a906d719969");
module.exports = path.setTimeout;

},{"a1e15d73498d19f9":"KNLky","43f05a906d719969":"8QO0z"}],"KNLky":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("24dd4cf72028d3d2");
require("4b0d783d07371454");

},{"24dd4cf72028d3d2":"cI3Fc","4b0d783d07371454":"iiqOa"}],"cI3Fc":[function(require,module,exports) {
"use strict";
var $ = require("3e9ec6baaa0aebef");
var global = require("33a72369cd36eb8a");
var schedulersFix = require("c0b995757495878d");
var setInterval = schedulersFix(global.setInterval, true);
// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({
    global: true,
    bind: true,
    forced: global.setInterval !== setInterval
}, {
    setInterval: setInterval
});

},{"3e9ec6baaa0aebef":"jjems","33a72369cd36eb8a":"avqB7","c0b995757495878d":"9TklU"}],"9TklU":[function(require,module,exports) {
"use strict";
var global = require("e411fc03fcc2396c");
var apply = require("ee3a82a5c3c6d8a0");
var isCallable = require("87f60224118a80a8");
var ENGINE_IS_BUN = require("a94db9fe0912d38f");
var USER_AGENT = require("8ad8d876b6c2035e");
var arraySlice = require("d03769626bd84069");
var validateArgumentsLength = require("baa1564dd3fe37c7");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"e411fc03fcc2396c":"avqB7","ee3a82a5c3c6d8a0":"kLBNq","87f60224118a80a8":"fqYwo","a94db9fe0912d38f":"4sZkj","8ad8d876b6c2035e":"jumDW","d03769626bd84069":"gooNL","baa1564dd3fe37c7":"82N6M"}],"4sZkj":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"gooNL":[function(require,module,exports) {
"use strict";
var uncurryThis = require("9bc49279ff26093a");
module.exports = uncurryThis([].slice);

},{"9bc49279ff26093a":"5P4uT"}],"82N6M":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"iiqOa":[function(require,module,exports) {
"use strict";
var $ = require("ee27042e8d7454d4");
var global = require("5219ffc3f50d5bed");
var schedulersFix = require("6b736db0d5cccdf2");
var setTimeout = schedulersFix(global.setTimeout, true);
// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({
    global: true,
    bind: true,
    forced: global.setTimeout !== setTimeout
}, {
    setTimeout: setTimeout
});

},{"ee27042e8d7454d4":"jjems","5219ffc3f50d5bed":"avqB7","6b736db0d5cccdf2":"9TklU"}]},["3RK8R","bNKaB"], "bNKaB", "parcelRequire2041")

//# sourceMappingURL=index.728b5326.js.map
