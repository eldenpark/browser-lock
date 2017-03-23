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
    return __webpack_require__(__webpack_require__.s = 0);
})([ function(module, exports) {
    "use strict";
    "use strict";
    var NAMESPACE = "plExt-";
    var KEY_PATTERN = NAMESPACE + "pattern";
    var hideElement = function hideElement(id) {
        if (document.getElementById(id)) {
            document.getElementById(id).classList.add("hide");
        }
    };
    var showElement = function showElement(id) {
        if (document.getElementById(id)) {
            document.getElementById(id).classList.remove("hide");
        }
    };
    var successCallback = function successCallback(lock) {
        showElement("patternBlock");
        hideElement("patternMsgDefault");
        showElement("patternMsgSuccess");
        setTimeout(function() {
            hideElement("patternMsgSuccess");
            lock.reset();
            showElement("patternMsgDefault");
            hideElement("patternBlock");
        }, 2e3);
    };
    var errorCallback = function errorCallback(lock) {
        showElement("patternBlock");
        hideElement("patternMsgDefault");
        showElement("patternMsgError");
        setTimeout(function() {
            hideElement("patternMsgError");
            lock.reset();
            showElement("patternMsgDefault");
            hideElement("patternBlock");
        }, 2e3);
    };
    var checkPattern = function checkPattern(lock, pattern, success, error) {
        chrome.storage.sync.get(KEY_PATTERN, function(res) {
            console.log("key in storage", res);
            if (pattern == res[KEY_PATTERN]) {
                success(lock);
            } else {
                error(lock);
            }
        });
    };
    window.onload = function() {
        var lock = new PatternLock("#patternLock", {
            allowRepeat: true,
            margin: 25,
            radius: 9,
            onDraw: function onDraw(pattern) {
                return checkPattern(lock, pattern, successCallback, errorCallback);
            }
        });
        chrome.cookies.getAll({
            url: "https://facebook.com"
        }, function(cookies) {
            console.log(1, cookies);
        });
    };
} ]);