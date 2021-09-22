import React, { useEffect,useState } from 'react';

function MealDetail(props) {

    const [meals, setMeals]  = useState([])
    const [meal, setMeal] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        const url = 'http://localhost:8000/meals/'
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data))
        .catch(err => console.error)
    }, [])

    const resetSearch = () => {
        setSearch('')
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Searching for: ${e.target.value}`)
        resetSearch()
    }
    const checkSearch = () => {
        for (let i = 0; i<meals.length; i++){

            if (search.toLowerCase() === meals[i].title.toLowerCase()) {
                setMeal(meals[i])
            }
        }
    }

    if (meals) {

        if (meals.some(item => search === item['title'])) {
            return (
                <div className='meal-card'>
                    <h2>{meal.title}</h2>
                    <button onClick={resetSearch}>New Search</button>
                </div>
            )
        } else {
            return (
                <div>
                <h2>Meals</h2>
                <div className='meal-search'>
                <label htmlFor='meal'></label>
                <input id='meal' type='text' placeholder='Search a meal' onChange={handleChange} value={search}></input>
                <button onClick={handleSubmit}>Search</button>
                </div>
            </div>
            );
        }

    } else {

        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )

    }
}

export default MealDetail;