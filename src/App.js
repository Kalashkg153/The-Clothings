import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';

import { getDoc } from 'firebase/firestore';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header'
import Signinup from './pages/signinup/signinup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component{

  constructor(){

    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        const docSnap = await getDoc(userRef);

        if(docSnap.exists()){
           this.setState({
             currentUser : {
               id : docSnap.id,
               ...docSnap.data()
             }
           } , () => {console.log(this.state);});

           console.log(this.state);
           this.setState({currentUser : userAuth});
        }
        else{
          console.log('no such document');
        }

    }



  });
}


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<Signinup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
