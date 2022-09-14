import { useEffect, useState} from "react";
import { useParams } from "react-router";
import MealList from "../components/MealList";
import axios from "axios";
import SearchBar from "../components/SearchBar";


function MealTypePage({allMeals, setMeals}){
    // const [allMeals, setAllMeals]=useState([])
    
    const mealType=(useParams().mealtype).toLowerCase()
    
    const[mealtypeMeals, setMealtypeMeals]=useState([])
    
    useEffect(()=>{
        if(mealType =="meals"){
            const options = {
                method: 'GET',
                url: 'https://themealdb.p.rapidapi.com/filter.php',
                params: {a: 'Canadian'},
                headers: {
                  'X-RapidAPI-Key': '63ed01f659mshf890aec1da0a5a4p14c8c6jsn4c163f87a955',
                  'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  setMeals(response.data.meals)
                  
              }).catch(function (error) {
                  console.error(error);
              });
        }
        if ( mealType == "dessert"){

            const options = {
                method: 'GET',
                url: 'https://pizzaallapala.p.rapidapi.com/productos',
                headers: {
                  'X-RapidAPI-Key': '63ed01f659mshf890aec1da0a5a4p14c8c6jsn4c163f87a955',
                  'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  setMeals(response.data.productos)
              }).catch(function (error) {
                  console.error(error);
              });
        }
    }, [mealType])
    

    return(
        
        <div className="mealtype">
            <SearchBar allMeals={allMeals}/>
            <h1><strong>{mealType.toUpperCase()}</strong></h1>
            <hr style={{color:"white"}}/>
            {allMeals.map((meal)=>(
                <MealList meals={meal}/>
            ))}
        </div>
    )
}
export default MealTypePage;