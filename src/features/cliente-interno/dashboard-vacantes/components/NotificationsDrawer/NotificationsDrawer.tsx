import { Drawer } from 'magneto365.ui';
import type { VacancyItem, VacancyNavigateOptions } from '../../vacancy-item.types';
import type { NotificacionItem } from './notifications.types';
import DrawerConfiguracionNotificaciones from '../DrawerConfiguracionNotificaciones/DrawerConfiguracionNotificaciones';

export interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  vacancies: VacancyItem[];
  items: NotificacionItem[];
  onNavigateVacancy: (vacancy: VacancyItem, options?: VacancyNavigateOptions) => void;
  onMarkAllRead?: () => void;
  onAfterNavigateMarkRead?: (notificationId: string) => void;
}

/**
 * Panel lateral desde la campana: `Drawer` de Magneto con el centro de notificaciones.
 */
const NotificationsDrawer = ({
  isOpen,
  onClose,
  vacancies,
  items,
  onNavigateVacancy,
  onMarkAllRead,
  onAfterNavigateMarkRead,
}: NotificationsDrawerProps) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    direction="right"
    drawerWidth="min(100vw - 16px, 560px)"
    customPadding={0}
    hideButton
    className="dcn-drawer-shell"
  >
    <DrawerConfiguracionNotificaciones
      onClose={onClose}
      initialTabId="all"
      items={items}
      vacancies={vacancies}
      onIrVacante={onNavigateVacancy}
      onMarkAllRead={onMarkAllRead}
      onAfterNavigateMarkRead={onAfterNavigateMarkRead}
    />
  </Drawer>
);

export default NotificationsDrawer;
