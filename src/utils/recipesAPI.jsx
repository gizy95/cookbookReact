import React from 'react'


const Endpoints = () => {

    const getRecipes = async () => {
        try {
            const res = await fetch("http://localhost:8000/recipes/");
            const data = await res.json();
            console.log(data)


            return data

        } catch (error) {
            console.log(error);
        }



    }

    const getRecipe = async (id) => {
        try {
            const res = await fetch(`http://localhost:8000/recipes/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            console.log(data)
            return data;

        } catch (error) {
            console.log(error);
        }



    }


    return { getRecipes, getRecipe };
}

export default Endpoints