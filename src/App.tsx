import React from 'react';
import Calendar from './calender';

const App: React.FC = () => {
  const date = new Date(); // Presentday date

  return (
    <div className="app">
      <Calendar date={date} />
    </div>
  );
};

export default App;
