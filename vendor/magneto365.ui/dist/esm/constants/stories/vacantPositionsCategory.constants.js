import Book1 from '../../assets/book-1.svg.js';
import Box from '../../assets/programatic/box.svg.js';
import Broom from '../../assets/Broom.svg.js';
import Brush2 from '../../assets/programatic/brush-2.svg.js';
import Computing from '../../assets/programatic/computing.svg.js';
import Device1 from '../../assets/programatic/devices-1.svg.js';
import Glass from '../../assets/programatic/glass.svg.js';
import Hospital from '../../assets/programatic/hospital.svg.js';
import Like from '../../assets/programatic/like-shapes.svg.js';
import Location from '../../assets/Location.svg.js';
import Message from '../../assets/programatic/device-message.svg.js';
import Ranking from '../../assets/programatic/ranking-1.svg.js';
import Setting from '../../assets/programatic/setting.svg.js';
import Sun from '../../assets/programatic/sun-fog.svg.js';
import Tree from '../../assets/programatic/tree.svg.js';
import Video1 from '../../assets/programatic/video.svg.js';
import { generateID } from '../../utils/generateID/generateID.util.js';

[
    {
        name: 'Tecnología y sistemas',
        icon: 'oficios-varios-aseo-seguridad',
        list: [
            { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de cosas', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de mainframes', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de iphones', href: 'https://www.magneto365.com/es' }
        ]
    },
    {
        name: 'Tecnología y sistemas',
        icon: Location,
        list: [
            { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
        ]
    },
    {
        name: 'Tecnología y sistemas',
        icon: Location,
        list: [
            { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
        ]
    },
    {
        name: 'Tecnología y sistemas',
        icon: Location,
        list: [
            { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
        ]
    },
    {
        name: 'Tecnología y sistemas',
        icon: Location,
        list: [
            { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
            { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
        ]
    }
];
var programaticIcons = {
    'oficios-varios-aseo-seguridad': Broom,
    'manufactura-produccion-operativos': Box,
    'construccion-oficios-artesanias': Brush2,
    'tecnicos-reparaciones-mantenimiento': Setting,
    'ventas-servicio-cliente-marketing': Like,
    'medios-arte-produccion-audiovisual': Video1,
    'direccion-gerencia': Ranking,
    'profesionales-consultorias-servicios': Message,
    'informatica-tecnologia-sistemas': Device1,
    ingenieria: Computing,
    'agricultura-recursos-naturales': Tree,
    'educacion-formacion-docencia': Book1,
    'salud-medicina': Hospital,
    'ciencia-investigacion': Glass,
    'hoteleria-turismo-gastronomia': Sun
};

export { programaticIcons };
//# sourceMappingURL=vacantPositionsCategory.constants.js.map
