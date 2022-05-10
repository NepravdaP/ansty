import './App.css';

import React, { useState } from 'react';
import Timer from './components/Timer';
import Birthday from './components/Birthday';

const App = () => {
  const [isBirthday, setIsBirthday] = useState(false);

  const bDay = new Date('May 10,2022 15:36:00');
  // console.log(bDay);

  return (
    <div className="full-app">
      {isBirthday ? <Birthday /> : <Timer expiryTimestamp={bDay} setIsBirthday={setIsBirthday} />}
    </div>
  );
};

export default App;
