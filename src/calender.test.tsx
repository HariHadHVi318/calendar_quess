/* eslint-disable jest/no-conditional-expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './calender';

describe('Calendar component', () => {
  test('renders the month and year in the header', () => {
    const date = new Date('2022-10-03');
    render(<Calendar date={date} />);
    const headerElement = screen.getByText('October 2022');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the days of the week', () => {
    const date = new Date('2022-10-03');
    render(<Calendar date={date} />);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach((day) => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
    });
  });

  test('renders the correct dates for the month', () => {
    const date = new Date('2022-10-03');
    render(<Calendar date={date} />);
    const dates = [null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, null, null, null, null, null, null];
    dates.forEach((date) => {
      if (date) {
        const dateElement = screen.getByText(date.toString());
        expect(dateElement).toBeInTheDocument();
      }
    });
  });

  test('highlights the current date', () => {
    const date = new Date(); 
    render(<Calendar date={date} />);
    const todayElement = screen.getByText(date.getDate().toString());
    expect(todayElement).toHaveClass('highlight');
  });
});
