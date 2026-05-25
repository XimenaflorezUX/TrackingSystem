import React from 'react';
import { Typography } from '../Typography/Typography.component.js';
import '../Typography/Typography.interface.js';

function InlineDetails(_a) {
    var details = _a.details, className = _a.className;
    var formatedDetails = details.join(' | ');
    return (React.createElement("div", { className: className },
        React.createElement(Typography.Text, { size: "md", weight: "normal", color: "inherit" }, formatedDetails)));
}

export { InlineDetails, InlineDetails as default };
//# sourceMappingURL=InlineDetails.component.js.map
