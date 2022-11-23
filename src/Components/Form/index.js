// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider,  } from 'antd';
import { useState } from 'react';



// Iteration 4
        export function AddFoodForm(props) {

            const [form, setForm] = useState({
                name:"" ,
                image:"" ,
                calories:"" ,
                servings:"",

            })

            function handleChange(e) {
                setForm({ ...form, [e.target.name]:e.target.value})

            }


            function handleAddFood(e){
                e.preventDefault();

                props.addFoods((e) =>[form, ...e])


            }


            return (
                <form onSubmit={handleAddFood} >
                <Divider>Add Food Entry</Divider>

                <label htmlFor='input-name'>Name</label>
                <input id='input-name' type="text" name='name' value={form.name} onChange={handleChange}  />

                <label htmlFor='input-image' >Image</label>
                <input id='input-image' type="text" name='image' value={form.image} onChange={handleChange}  />

                <label htmlFor='input-calories' >Calories</label>
                <input id='input-calories' type="number" name='calories' value={form.calories} onChange={handleChange}  />

                <label htmlFor='input-servings' >Servings</label>
                <input id='input-servings' type="number" name='servings' value={form.servings} onChange={handleChange}  />

                <button type="submit">Create</button>
                </form>
            );
        }

   
