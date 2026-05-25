'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hamburguerMenuDark = require('../../assets/hamburguerMenuDark.svg.js');
var faviconM = require('../../assets/favicon-m.svg.js');
var logoMagnetoDarkMobile = require('../../assets/logoMagnetoDarkMobile.svg.js');
var LoginCurve = require('../../assets/LoginCurve.svg.js');
var logoMagneto = require('../../assets/logo-magneto.svg.js');
var logoMagnetoDark = require('../../assets/logoMagnetoDark.svg.js');
var ProfileAdd = require('../../assets/ProfileAdd.svg.js');
var Refresh = require('../../assets/Refresh.svg.js');

var classMUI = 'magneto-ui';
var logoProps = {
    alt: 'Logo Magneto',
    logo: logoMagneto,
    isoType: faviconM
};
var logoPropsDark = {
    alt: 'Logo Magneto',
    logo: logoMagnetoDark,
    isoType: logoMagnetoDarkMobile
};
var logoPropsLogin = {
    alt: 'Logo Magneto',
    logo: logoMagneto,
    isoType: faviconM
};
var LoginButton = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: 'white',
        textColor: '#14141C',
        spacing: '10px'
    },
    iconProps: {
        icon: LoginCurve,
        hover: true
    }
};
var LoadingProps = {
    loadingIcon: {
        icon: Refresh,
        hover: false
    }
};
var SignInIcon = {
    icon: LoginCurve,
    hover: false,
    color: '#0A0C0E'
};
//Link Atom
var SignInStyles = {
    textColor: '#0A0C0E',
    buttonColor: '#F0F1F3',
    hoverColor: '#C2C8CF'
};
var SignUpButtonStyle = {
    buttonType: 'button',
    buttonSize: 'medium',
    buttonStyles: {
        buttonColor: '#9EE4B8',
        textColor: '#001B38',
        spacing: '10px'
    },
    iconProps: {
        icon: ProfileAdd,
        hover: true,
        color: '#0A0C0E '
    }
};
var MenuButtonAnalystProps = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: 'transparent'
    },
    iconProps: {
        icon: hamburguerMenuDark,
        hover: false,
        color: '#FFFFFF',
        size: 20
    }
};

exports.LoadingProps = LoadingProps;
exports.LoginButton = LoginButton;
exports.MenuButtonAnalystProps = MenuButtonAnalystProps;
exports.SignInIcon = SignInIcon;
exports.SignInStyles = SignInStyles;
exports.SignUpButtonStyle = SignUpButtonStyle;
exports.classMUI = classMUI;
exports.logoProps = logoProps;
exports.logoPropsDark = logoPropsDark;
exports.logoPropsLogin = logoPropsLogin;
//# sourceMappingURL=common.constants.js.map
