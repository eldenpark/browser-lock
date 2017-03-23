(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.i = function(value) {
        return value;
    };
    __webpack_require__.d = function(exports, name, getter) {
        Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 2);
})([ function(module, exports) {
    "use strict";
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function closeAllTab() {
        console.log("closeAllTab()");
        var lockPageTabId;
        chrome.tabs.create({
            url: "/html/lock.html"
        }, function(tab) {
            console.log("lock page tab create");
            lockPageTabId = tab.id;
        });
        chrome.tabs.getAllInWindow(function(tabs) {
            var pastUrls = new Array();
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].id != lockPageTabId) {
                    chrome.tabs.remove(tabs[i].id, function() {});
                    pastUrls.push(tabs[i].url);
                }
            }
            saveTabUrlIntoStorage(pastUrls);
        });
    }
    function saveTabUrlIntoStorage(pastUrls) {
        var saveUrlFormat = "{";
        for (var i = 0; i < pastUrls.length; i++) {
            saveUrlFormat += pastUrls[i] + ";";
        }
        saveUrlFormat += "}";
        chrome.storage.sync.set({
            "plExt-pastUrls": saveUrlFormat
        }, function() {
            console.log("save storage " + saveUrlFormat);
        });
    }
    function openAllPastUrls() {
        chrome.storage.sync.get("plExt-pastUrls", function(items) {
            var urls = String(Object.values(items));
            urls = urls.replace("{", "");
            urls = urls.replace("}", "");
            var pastUrls = urls.split(";");
            for (var i = 0; i < pastUrls.length; i++) {
                if (pastUrls[i].length > 0) {
                    chrome.tabs.create({
                        url: pastUrls[i]
                    });
                }
            }
        });
    }
    exports.default = {
        openAllPastUrls: openAllPastUrls,
        closeAllTab: closeAllTab
    };
}, , function(module, exports, __webpack_require__) {
    "use strict";
    "use strict";
    var _handleTabs = __webpack_require__(0);
    var _handleTabs2 = _interopRequireDefault(_handleTabs);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    window.closeAllTab = _handleTabs2.default.closeAllTab;
    window.openAllPastUrls = _handleTabs2.default.openAllPastUrls;
    console.log(1, _handleTabs2.default);
    function power() {
        console.log(22);
    }
    var power2 = function power2() {
        console.log(11);
    };
} ]);