var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import './SubComponent.scss';
var ClassComponent = (function (_super) {
    __extends(ClassComponent, _super);
    function ClassComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassComponent.prototype.render = function () {
        return (React.createElement("div", { className: "class-component" }, "I am class component"));
    };
    return ClassComponent;
}(Component));
export default ClassComponent;
//# sourceMappingURL=index.js.map