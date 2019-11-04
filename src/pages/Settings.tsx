import React from 'react';
import { IonPage, IonContent, IonList, IonItem } from '@ionic/react';
import Header from '../components/Header';

const Settings: React.FC = () => (
  <IonPage>
    <Header>Settings</Header>
    <IonContent>
      <IonList>
        <IonItem>Do not disturb</IonItem>
        <IonItem>External Accounts</IonItem>
        <IonItem>Invisible</IonItem>
        <IonItem>Low Data Mode</IonItem>
        <IonItem>Default Profile</IonItem>
        <IonItem>Reactions/Shortcuts</IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default Settings;
