'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ArrowRight2 = require('../../../../../../../assets/ArrowRight2.svg.js');
require('../../../../../../UI/atoms/BarChart/enums.js');
require('../../../../../../../utils/classNameManager/classNameManager.util.js');
require('../../../../../../UI/atoms/Button/Button.component.js');
var ButtonLink_component = require('../../../../../../UI/atoms/ButtonLink/ButtonLink.component.js');
require('../../../../../../UI/atoms/Collapse/Collapse.component.js');
require('../../../../../../../constants/stories/DatePicker.constants.js');
require('../../../../../../../constants/stories/jobVideo.constants.js');
require('../../../../../../../constants/stories/megaMenu.constants.js');
require('../../../../../../../constants/stories/sideFilter.constants.js');
require('../../../../../../../constants/stories/vacancies.constants.js');
require('../../../../../../../constants/stories/vacantPositionsCategory.constants.js');
require('../../../../../../../constants/img.constants.js');
require('../../../../../../../utils/date/dateInput.util.js');
require('../../../../../../UI/atoms/Field/Field.component.js');
require('../../../../../../UI/atoms/Typography/Typography.component.js');
require('../../../../../../UI/atoms/Typography/Typography.interface.js');
require('../../../../../../UI/atoms/InputFile/InputFile.component.js');
require('../../../../../../UI/atoms/Paragraph/Paragraph.component.js');
require('../../../../../../UI/atoms/Radio/Radio.interface.js');
require('../../../../../../UI/atoms/Radio/Radio.constants.js');
require('../../../../../../../constants/jobDetails.constants.js');
require('../../../../../../UI/atoms/Toggle/Toggle.component.js');
require('../../../../../../hooks/useMediaQuery/index.js');
var JobsFaqsLink_module = require('./JobsFaqsLink.module.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var JobsFaqsLink = function (_a) {
    var text = _a.text, href = _a.href, isButtonLink = _a.isButtonLink;
    var classes = isButtonLink ? JobsFaqsLink_module['magneto-ui-faqs--buttonLink'] : JobsFaqsLink_module['magneto-ui-faqs--link'];
    return (React__default["default"].createElement(ButtonLink_component.ButtonLink, { buttonText: text, href: href, iconSize: 16, prefixIcon: ArrowRight2, target: "_blank", className: classes }));
};

exports.JobsFaqsLink = JobsFaqsLink;
//# sourceMappingURL=JobsFaqsLink.component.js.map
