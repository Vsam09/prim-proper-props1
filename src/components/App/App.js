import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestList from '../GuestList/GuestList';
import GuestForm from '../GuestForm/GuestForm';

function App() {
  let [guestList, setGuestList] = useState([]);

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (newGuest) => {
    axios.post('/guests', { 
      name: newGuestName, 
      kidsMeal: newGuestMeal,
      data: newGuest
     })
      .then(response => {
        console.log('POST /guests', response)
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };

  return (
    <div className="App">
    
      <Header />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm addGuest={addGuest}/>
      <GuestList guestList={guestList} />
      <DinnerSupplies guestList = {guestList} />
      <Footer />
    </div>
  );
}

export default App;
