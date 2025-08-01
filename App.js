
// App.js
import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import format from 'date-fns/format';
import 'bpk-component-calendar/dist/BpkCalendar.css'; // Optional styling
import './App.scss';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Flight Schedule</h1>

      <BpkCalendar
        id="calendar"
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
        formatDate={(date) => format(date, 'yyyy-MM-dd')}
        markToday
      />

      <button>Continue</button>
    </div>
  );
}

export default App;
