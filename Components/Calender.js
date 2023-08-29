import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <p>Selected Date: {selectedDate.toDateString()}</p>
      </div>
    );
  }
  
  export default CalendarComponent;
  