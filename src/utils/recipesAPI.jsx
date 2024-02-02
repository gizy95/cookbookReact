import React from 'react'


const Endpoints = () => {

    const getRecipes = async () => {
        try {
            const res = await fetch("https://cookbook-server-xiq5.onrender.com/recipes/");
            const data = await res.json();


            return data

        } catch (error) {
            console.log(error);
        }



    }

    const getRecipe = async (id) => {
        try {
            const res = await fetch(`https://cookbook-server-xiq5.onrender.com/recipes/${id}`);
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
