import React from 'react';
import { IonContent, IonPage, IonList, IonItem} from '@ionic/react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header>Home</Header>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>test</IonItem>
          <IonItem>test2</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
