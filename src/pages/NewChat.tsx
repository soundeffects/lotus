import React from 'react';
import { IonPage, IonContent, IonList, IonItem } from '@ionic/react';
import Header from '../components/Header';

const NewChat: React.FC = () => (
  <IonPage>
    <Header>New Chat</Header>
    <IonContent>
      <IonList>
        <IonItem>Name</IonItem>
        <IonItem>Image</IonItem>
        <IonItem>Type</IonItem>
        <IonItem>Rules</IonItem>
        <IonItem>People</IonItem>
        <IonItem>Theme</IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);

export default NewChat;
