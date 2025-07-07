"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("keyup", logInfo);
        document.getElementById("div1")?.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
    }
    function logInfo(_event) {
        console.log("Event Type: " + _event.type, "Event Target: " + _event.target, "CurrentTarget: " + _event.currentTarget, "Event Object: " + _event);
    }
    function handleMouseMove(_event) {
        const span = document.getElementById("span");
        if (!span) {
            return;
        }
        const offsetX = 10, offsetY = 10;
        span.innerHTML = "X:" + _event.clientX + "Y: " + _event.clientY + "Target: " + _event.target;
        span.style.left = (_event.clientX + offsetX) + "px";
        span.style.top = (_event.clientY + offsetY) + "px";
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map