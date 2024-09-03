import * as React from "react";

interface IMyButtonsState {
  first: number;
  second: number;
  third: number;
}

class MyButtons extends React.Component<{}, IMyButtonsState> {
  state: IMyButtonsState = {
    first: 0,
    second: 0,
    third: 0,
  };

  handleClick = (name: keyof IMyButtonsState) => () => {
    this.setState((state) => ({
      ...state,
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { first, second, third } = this.state;

    return (
      <div className="card p-3">
        <h5>Button Click Counter</h5>
        
        <p>
          Below are three buttons that track the number of times they have been clicked. Click any button to see the count increase.
        </p>

        <div className="row mb-2">
          <div className="col-md-4">
            <button
              className="btn btn-primary w-100"
              onClick={ this.handleClick("first") }
            >
              First button clicked: { first } times
            </button>
          </div>

          <div className="col-md-4">
            <button
              className="btn btn-secondary w-100"
              onClick={ this.handleClick("second") }
            >
              Second button clicked: { second } times
            </button>
          </div>

          <div className="col-md-4">
            <button
              className="btn btn-success w-100"
              onClick={ this.handleClick("third") }
            >
              Third button clicked: { third } times
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyButtons;
