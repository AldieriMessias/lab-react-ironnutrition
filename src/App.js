import foodsArr from "./foods.json"
import { Row} from 'antd';
import { FoodBox } from "./Components/FoodBox";
import { useState, useEffect } from "react";
import {AddFoodForm} from "./Components/Form";
import { Search } from "./Components/Search";


function App() {

const [foods, setFoods] = useState(foodsArr);

const [filtredFood, setFiltredFood] = useState(foods);

useEffect(() => {
  setFiltredFood(foods);
}, [foods]);

  return (
    <div className="App"> 
      
      <AddFoodForm addFoods={setFoods} />

      <Search filtredFunction={setFiltredFood} allFoods={foods}/>

      
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filtredFood.map((cE) => {
          return (
           <FoodBox name={cE.name} calories={cE.calories} image={cE.image} servings={cE.servings}  deleteFunc={setFoods} attRenderFunc={setFiltredFood} allFoods={foods} />
      );
    })} 
      </Row>

      
    </div>
  );
}


export default App;
