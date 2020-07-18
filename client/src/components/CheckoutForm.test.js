import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
//running tests....

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByRole } = render(<CheckoutForm />);
  
    const firstName = getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { value: 'Corey'} });
  
    const lastName = getByLabelText(/last Name/i);
    fireEvent.change(lastName, { target: { value: 'Knoettgen'} });

    const address = getByLabelText(/address/i);
    fireEvent.change(address, { target: { value: '123 Main St'} });

    const city = getByLabelText(/city/i);
    fireEvent.change(city, { target: { value: 'Tampa'} });

    const state = getByLabelText(/state/i);
    fireEvent.change(state, { target: { value: 'FL'} });

    const zip = getByLabelText(/zip/i);
    fireEvent.change(zip, { target: { value: '33634'} });

    const button = getByRole('button', /submit/i);
    fireEvent.click(button);
});