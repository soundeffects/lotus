import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Local components and pages
import Home from './pages/Home';
import NewChat from './pages/NewChat';
import Settings from './pages/Settings';
import Sidemenu from './components/Sidemenu/Sidemenu';
import './components/Sidemenu/Sidemenu.css';
import { Chat } from './declarations';

// Core CSS required for Ionic components to work properly
import '@ionic/react/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Theme variables
import './theme/variables.css';


const chats: Chat[] = [
  {
    title: 'Home',
    url: '/home',
    imgUrl: 'http://lorempixel.com/96/96'
  }
]


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Sidemenu />
      <IonRouterOutlet id='main'>
      { chats.map((chat, index) => <Route key={index} path={chat.url} component={Home} exact={true} />) }
        <Route path='/settings' component={Settings} exact={true} />
        <Route path='/new-chat' component={NewChat} exact={true} />
        <Route path='/' render={() => <Redirect to='/home' exact={true} /> } />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
