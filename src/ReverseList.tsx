import * as React from "react";
import reverseHandler from "./ReverseHandler";
import ItemList from "./ItemList";

interface IAppItems {
  id: number;
  name: string;
}

interface IReverseListProps {
  appItems: IAppItems[];
}

interface IReverseListState {
  nicks: string[];
}

class ReverseList extends React.Component<IReverseListProps, IReverseListState> {
  constructor(props: IReverseListProps) {
    super(props);
    this.state = {
      nicks: ["Mia", "Oly", "Nika", "Ana", "Maya", "Roy", "Ena", "Lea", "Jeff", "John"]
    };
  }

  handleClick = (id: number) => {
    const item = this.props.appItems.find((i) => i.id === id);
    if (item) {
      console.log(`You clicked: "${item.name}"`);
    }
  };

  onReverseClick = () => {
    const reversedNicks = [...this.state.nicks].reverse();
    this.setState({ nicks: reversedNicks });
  };

  render() {
    return (
      <div className="card p-3">
        <h5>Nicknames List</h5>

        <p>
          Below is a list of nicknames. 
          You can reverse the order of the list by clicking the button on the right.
        </p>

        <div className="row">
          <div className="col-md-6">
            <ol className="list-group">
              { this.state.nicks.map((value, i) => (
                <li key={ i } className="list-group-item text-center">
                  { i+1 }. { value }
                </li>
              )) }
            </ol>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <button className="btn btn-warning" onClick={ this.onReverseClick }>
               Reverse Nicknames List
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReverseList;
