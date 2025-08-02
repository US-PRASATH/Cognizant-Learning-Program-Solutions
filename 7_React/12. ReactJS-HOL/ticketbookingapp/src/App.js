import React, { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <FlightDetails />
    </div>
  );
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>
      <ul>
        <li>Flight: Indigo 6E-456 | From: Chennai → Delhi | Time: 10:00 AM</li>
        <li>Flight: Air India AI-123 | From: Bangalore → Mumbai | Time: 3:45 PM</li>
        <li>Flight: SpiceJet SG-678 | From: Hyderabad → Pune | Time: 7:30 PM</li>
      </ul>
      <button>Book Ticket</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
