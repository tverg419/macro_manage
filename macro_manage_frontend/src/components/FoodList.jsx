import React, { useEffect, useState } from 'react';

function FoodList(props) {

    const [food, setFood]  = useState([])

    useEffect(() => {
        const url = 'http://localhost:8000/food/?format=json'
        fetch(url)
        .then(res => res.json())
        .then(data => setFood(data))
    }, [])
    
    console.log(food)
    if (food) {
        const foodList = food.map(item => {
            return (
                <div className='food-card' key={item.id}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>Brand: {item.brand}</p>
                    <p>Serving Size: {item.serving_size}</p>
                    <p>Protein: {item.protein}g</p>
                    <p>Carbohydrates: {item.carbohydrates}g</p>
                    <p>Fats: {item.fats}g</p>
                </div>
            )
        })
            
            return (
                <div>            
                <h2>Food List</h2>
                {foodList}
            </div>
        );
    } else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
}

export default FoodList;