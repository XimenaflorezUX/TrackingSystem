import HambergerMenuDark from '../../assets/hamburguerMenuDark.svg.js';
import IsoLogoMagneto from '../../assets/favicon-m.svg.js';
import IsoLogoMagnetoDark from '../../assets/logoMagnetoDarkMobile.svg.js';
import LoginCurve from '../../assets/LoginCurve.svg.js';
import LogoMagneto from '../../assets/logo-magneto.svg.js';
import LogoMagnetoDark from '../../assets/logoMagnetoDark.svg.js';
import ProfileAdd from '../../assets/ProfileAdd.svg.js';
import Refresh from '../../assets/Refresh.svg.js';

var classMUI = 'magneto-ui';
var logoProps = {
    alt: 'Logo Magneto',
    logo: LogoMagneto,
    isoType: IsoLogoMagneto
};
var logoPropsDark = {
    alt: 'Logo Magneto',
    logo: LogoMagnetoDark,
    isoType: IsoLogoMagnetoDark
};
var logoPropsLogin = {
    alt: 'Logo Magneto',
    logo: LogoMagneto,
    isoType: IsoLogoMagneto
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
        icon: HambergerMenuDark,
        hover: false,
        color: '#FFFFFF',
        size: 20
    }
};

export { LoadingProps, LoginButton, MenuButtonAnalystProps, SignInIcon, SignInStyles, SignUpButtonStyle, classMUI, logoProps, logoPropsDark, logoPropsLogin };
//# sourceMappingURL=common.constants.js.map
