import { useState } from 'react';

import "./App.css";
import Header from './Header'
import ShowList from './ShowList'


function App() {
  const [shows,setShowList]=useState([
    {id:1,name:'lost'},
     { id:2,name:'got'}
  ]);
  
  function addShow(show){
  setShowList([...shows,show]);
  }
  function Delete(showid) {
    setShowList(shows.filter((show=>show.id  !== showid)));
  }
  return (
    <div className='container'>
      <Header addShow={addShow}/>
      <ShowList shows={shows} Delete={Delete}/>
    <footer/>
    </div>
  );
}

export default App;
