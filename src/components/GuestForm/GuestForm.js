import {useState} from 'react'
    
function GuestForm({
    addGuest
}){
    let [newGuestName, setNewGuestName] = useState('');
    let [newGuestMeal, setNewGuestMeal] = useState('false');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newGuest = {
            name: newGuestName,
            meal: newGuestMeal
        };
        if (newGuestName) {
          addGuest(newGuest);
        }
        else {
          alert('The new guest needs a name!');
        }
        let newMeal ={
            
        }
      }
    
      console.log(newGuestMeal)

    return(
        <>
        <h2>Add a new guest</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={newGuestName}
            onChange={(evt) => setNewGuestName(evt.target.value)}
          />
          <div>
            Would this guest like a kid's meal?
            <div >
              <div>
                <label>
                  <input
                    type="radio"
                    value={true}
                    checked={newGuestMeal === 'true'}
                    name="kidsMeal"
                    onChange={(evt) => setNewGuestMeal(evt.target.value)}
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={newGuestMeal === 'false'}
                    name="kidsMeal"
                    onChange={(evt) => setNewGuestMeal(evt.target.value)}
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
     </>
    )
}
export default GuestForm;