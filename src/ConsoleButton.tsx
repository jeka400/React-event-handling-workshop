import * as React from "react";

const ConsoleButton: React.FC = () => {
  return (
    <div className="card p-3">
      <h5>Console Logging Button</h5>

      <p>
        Click the button below to trigger a console log event. 
        When the button is clicked, a message will be logged to the console, 
        displaying details of the click event.
      </p>
      
      <button
        className="btn btn-info"
        onClick={ (e) => console.log("Button clicked. Event details:", e) }
      >
        Log Event to Console
      </button>
    </div>
  );
};

export default ConsoleButton;