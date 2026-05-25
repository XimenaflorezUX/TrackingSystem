import Add from '../../assets/Add.svg.js';
import HambergerMenu from '../../assets/HambergerMenu.svg.js';
import Home2 from '../../assets/home.svg.js';
import ProfileAdd from '../../assets/ProfileAdd.svg.js';
import SearchNormal1 from '../../assets/SearchNormal1.svg.js';

var CreateAccountButton = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: '#9EE4B8',
        textColor: '#001B38',
        spacing: '10px'
    },
    iconProps: {
        icon: ProfileAdd,
        hover: true,
        color: '#090467 '
    }
};
//TabButton Molecule
var LeftLinkStyles = {
    textColor: '#14141C',
    buttonColor: '#FFF',
    hoverColor: '#04004d',
    visitedColor: '#000'
};
var LeftTabStyles = {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
};
var RightLinkStyles = {
    textColor: '#A3A3B5',
    buttonColor: 'transparent',
    hoverColor: '#04004d',
    visitedColor: '#A3A3B5'
};
var RightTabStyles = {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
};
var DrawerLeftTabStyles = {
    tabButtonLinkStyles: {
        textColor: '#14141C',
        buttonColor: '#FFF',
        hoverColor: '#04004d',
        visitedColor: '#000'
    },
    tabButtonStyles: {
        tabButtonColor: '#FFF',
        tabButtonTextSize: '11px',
        tabButtonTextWeight: '700',
        boxShadow: true
    }
};
var DrawerRightTabStyles = {
    tabButtonLinkStyles: {
        textColor: '#A3A3B5',
        buttonColor: 'transparent',
        hoverColor: '#04004d',
        visitedColor: '#A3A3B5'
    },
    tabButtonStyles: {
        tabButtonColor: '#F4F4FA',
        tabButtonTextSize: '11px',
        tabButtonTextWeight: '400',
        boxShadow: false
    }
};
var iconPropsBreadCrumb = {
    icon: Home2,
    hover: false,
    size: 13,
    color: '#a3a3b5'
};
var searchMobileProps = {
    buttonType: 'submit',
    buttonStyles: {
        buttonColor: 'transparent'
    },
    iconProps: {
        icon: SearchNormal1,
        hover: false,
        color: '#A3A3B5',
        size: 16
    }
};
var closeSearchMobileProps = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: 'transparent'
    },
    iconProps: {
        icon: Add,
        hover: false,
        color: '#14141C',
        size: 25
    }
};
var MobileSearchbarButtonProps = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: 'transparent'
    },
    buttonText: '',
    iconProps: {
        icon: SearchNormal1,
        hover: false,
        color: '#000096',
        size: 20
    }
};
var MenuButtonProps = {
    buttonType: 'button',
    buttonStyles: {
        buttonColor: 'transparent'
    },
    iconProps: {
        icon: HambergerMenu,
        hover: false,
        color: '#14141C',
        size: 20
    }
};
var searchPropsButton = {
    buttonType: 'submit',
    iconProps: {
        icon: SearchNormal1,
        hover: false,
        color: '#000096',
        size: 18
    }
};
var removePropsButton = {
    buttonType: 'reset',
    buttonSize: 'medium',
    iconProps: {
        icon: Add,
        hover: false,
        color: '#14141C',
        size: 18
    }
};

export { CreateAccountButton, DrawerLeftTabStyles, DrawerRightTabStyles, LeftLinkStyles, LeftTabStyles, MenuButtonProps, MobileSearchbarButtonProps, RightLinkStyles, RightTabStyles, closeSearchMobileProps, iconPropsBreadCrumb, removePropsButton, searchMobileProps, searchPropsButton };
//# sourceMappingURL=headers.constants.js.map
