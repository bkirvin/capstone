import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Reservation from '../pages/Reservation';
import GlobalProvider from '../providers/GlobalProvider'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const TestWrap = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Reservation />
      </GlobalProvider>
    </BrowserRouter>
  )
}

test('Renders the BookingForm heading', () => {
    render(<TestWrap />);
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('shows selected time slot when selected', async() => {
  jest.setTimeout(5000)
  render(<TestWrap />)
  const button = await waitFor(() => screen.findByTestId('7:30 PM'))
  fireEvent.click(button)
  expect(screen.getByDisplayValue('7:30 PM')).toBeInTheDocument()
})