import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

class Header extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>{this.props.children}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Header;
