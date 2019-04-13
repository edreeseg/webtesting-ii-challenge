import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from '../components/Dashboard';
afterEach(cleanup);

describe('The Dashboard component', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
  it('contains the Display component', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Strikes: \d/i);
    getByText(/Balls: \d/i);
  });
  it('initializes strike and ball count at 0', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Strikes: 0/i);
    getByText(/Balls: 0/i);
  });
  it('Increments strikes by one when strike button is clicked', () => {
    const { getByText } = render(<Dashboard />);
    const strikeButton = getByText(/Strike!/i);
    getByText(/Strikes: 0/i);
    fireEvent.click(strikeButton);
    getByText(/Strikes: 1/i);
  });
  it('Increments balls by one when ball button is clicked', () => {
    const { getByText } = render(<Dashboard />);
    const ballButton = getByText(/Ball!/i);
    getByText(/Balls: 0/i);
    fireEvent.click(ballButton);
    getByText(/Balls: 1/i);
  });
  it('Increments strikes by one when foul button is clicked, if strikes are below 2', () => {
    const { getByText } = render(<Dashboard />);
    const foulButton = getByText(/Foul!/i);
    getByText(/Strikes: 0/i);
    fireEvent.click(foulButton);
    getByText(/Strikes: 1/i);
    fireEvent.click(foulButton);
    getByText(/Strikes: 2/i);
    fireEvent.click(foulButton);
    getByText(/Strikes: 2/i);
  });
  it('Resets strike and ball count to 0 when hit button is clicked', () => {
    const { getByText } = render(<Dashboard />);
    const hitButton = getByText(/Hit!/i);
    const strikeButton = getByText(/Strike!/i);
    const ballButton = getByText(/Ball!/i);
    for (let i = 0; i < 2; i++) {
      fireEvent.click(strikeButton);
      fireEvent.click(ballButton);
    }
    getByText(/Strikes: 2/i);
    getByText(/Balls: 2/i);
    fireEvent.click(hitButton);
    getByText(/Strikes: 0/i);
    getByText(/Balls: 0/i);
  });
});
