import React from 'react';
import { IonMenu, IonContent, IonMenuToggle, IonButton, IonIcon } from '@ionic/react';
import { add, settings } from 'ionicons/icons';
import './Sidemenu.css';

const Sidemenu: React.FC = () => (
  <IonMenu maxEdgeStart={1000} contentId='main' type='push'>
    <IonContent  color='medium'>
      <IonButton>
        <IonIcon icon={settings} slot='icon-only' />
      </IonButton>
      <IonMenuToggle class='test' autoHide={false}>
        <IonButton routerLink='/settings' routerDirection='none' shape='round'>
          <IonIcon icon={settings} slot='icon-only' />
        </IonButton>
        <IonButton routerLink='/new-chat' routerDirection='none' shape='round'>
          <IonIcon icon={add} slot='icon-only' />
        </IonButton>
      </IonMenuToggle>
    </IonContent>
  </IonMenu>
);

export default Sidemenu;
