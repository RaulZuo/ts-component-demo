import React from 'react';
import { Button } from '@alifd/next';
import './index.scss';
var FunctionComponent = function (props) {
    var text = props.text;
    return (React.createElement("div", null,
        React.createElement("span", { className: "component-title" }, "This is a function component"),
        React.createElement(Button, { type: "primary" }, text)));
};
export default FunctionComponent;
//# sourceMappingURL=index.js.map