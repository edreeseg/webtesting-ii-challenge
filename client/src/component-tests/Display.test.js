import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/Display';
afterEach(cleanup);

describe('The Display component', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('displays current amount of strikes', () => {
    const { getByText } = render(<Display />);
    getByText(/Strikes: \d/i);
  });
  it('displays current amount of balls', () => {
    const { getByText } = render(<Display />);
    getByText(/Balls: \d/i);
  });
  // Initially had a test about displaying strikes and balls based on props, but this would be writing a test of methodology, not functionality.
});
