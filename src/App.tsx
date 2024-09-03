import * as React from "react";
import MyButtons from "./Buttons";
import ReverseList from "./ReverseList";
import ItemList from "./ItemList";
import ConsoleButton from "./ConsoleButton";

const App: React.FC = () => {
  const items = [
    { id: 1, name: "First" },
    { id: 2, name: "Second" },
    { id: 3, name: "Third" },
  ];

  return (
    <div className="container mb-5 pb-5 mt-5">
      <h1 className="text-center pt-6 mb-5">React event handling workshop</h1>

      <div className="mb-5">
        <ItemList appItems={ items } onItemClick={ (id) => console.log(`Item clicked with ID: ${ id }`) } />
      </div>

      <div className="mb-5">
        <ConsoleButton />
      </div>

      <div className="mb-5">
        <ReverseList appItems={ items } />
      </div>

      <div className="mb-5">
        <MyButtons />
      </div>
    </div>

  );
};

export default App;
