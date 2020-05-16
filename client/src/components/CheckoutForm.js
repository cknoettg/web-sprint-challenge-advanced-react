import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  //const [values, setValues] = useState(initialValue);

  //TODO: collapse this into one state
  const [firstName,setFirstName] = useForm('');
  const [lastName,setLastName] = useForm('');
  const [address,setAddress] = useForm('');
  const [city,setCity] = useForm('');
  const [state,setState] = useForm('');
  const [zip,setZip] = useForm('');

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={useForm.handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={useForm.handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={useForm.handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={useForm.handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={useForm.handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={useForm.handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
