import * as React from "react";

interface IAppItems {
  id: number;
  name: string;
}

interface IItemListProps {
  appItems: IAppItems[];
  onItemClick: (id: number) => void;
}

const ItemList: React.FC<IItemListProps> = ({ appItems, onItemClick }) => {
  return (
    <div className="card p-3">
      <h5>Interactive List of App Items</h5>

      <p>Click on any of the buttons below to trigger an event. 
        When a button is clicked, a message will be logged to the console 
        indicating the ID of the clicked item.
      </p>      
      
      <ul className="list-group mb-3">
        { appItems.map(({ id, name }) => (
          <li key={ id } className="list-group-item d-flex justify-content-between align-items-center">
            <button
              className="btn btn-outline-primary"
              onClick={ () => onItemClick(id) }
            >
              { name }
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
