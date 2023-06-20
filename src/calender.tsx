import React from 'react';

type CalendarProps = {
  date: Date;
};

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getFirstDayOfMonth = () => {
    return new Date(year, month, 1).getDay();
  };

  const getDaysInMonth = () => {
    return new Date(year, month + 1, 0).getDate();
  };

  const createCalendarGrid = () => {
    const calendarGrid: (number | null)[][] = [];
    const firstDay = getFirstDayOfMonth();
    const daysInMonth = getDaysInMonth();

    let dayCounter = 1;

    for (let row = 0; row < 6; row++) {
      const calendarRow: (number | null)[] = [];

      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < firstDay) {
          calendarRow.push(null);
        } else if (dayCounter > daysInMonth) {
          calendarRow.push(null);
        } else {
          calendarRow.push(dayCounter);
          dayCounter++;
        }
      }

      calendarGrid.push(calendarRow);
    }

    return calendarGrid;
  };

  const calendarGrid = createCalendarGrid();

  const isToday = (day: number | null): boolean => {
    if (day === null) return false;
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  return (
    <>
    <h2>React Component with calendar</h2>
    <div className="calendar">
        <div className='calender_parent'>
      <div className="header">
        {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)}
      </div>
      <div className='date_calender'>
      <div className="days-of-week">
            {daysOfWeek.map(day => (
            <div key={day} className="day">{day}</div>
            ))}
        </div>
        {calendarGrid.map((row, rowIndex) => (
            <div key={rowIndex} className="week">
            {row.map((day, colIndex) => (
                <div
                key={colIndex}
                className={`day ${isToday(day) ? 'highlight' : ''}`}
                >
                {day}
                </div>
            ))}
            </div>
        ))}
      </div>
        </div>
    </div></>
  );
};

export default Calendar;
