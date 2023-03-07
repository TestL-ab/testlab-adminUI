import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import axios from "axios";
import Visualizer from './Visualizer';

jest.mock("axios");

test('renders conetnt', () => {
  render(<Visualizer />);
  const h1 = screen.getByText('Experiment Data for Experiment #5');
  expect(h1).toBeInTheDocument();
});

describe('Visualizer', () => {
  test('renders chart when API call succeeds', async () => {
    const data = [
      {
        id: 1,
        value: "red",
        experiment_id: 1,
        is_control: true,
        weight: 0.5,
        event_total: 300,
        distinct_user_events_total: 100,
        total_users: 150
      },
      {
        id: 2,
        value: "green",
        experiment_id: 1,
        is_control: false,
        weight: 0.5,
        event_total: 250,
        distinct_user_events_total: 75,
        total_users: 150
      },
    ];

    jest.mockResolvedValue(data);
    await waitFor(() => {
      expect(screen.getByText('Raw Click Data:')).toBeInTheDocument()
    })
  })

  test('renders error when API call fails', async () => {})
})