import React, { useEffect } from 'react'
import { useState } from 'react';

import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, RadioGroup, Typography, Radio } from '@mui/material';
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {getRestaurantById, getRestaurantsCategory} from '../../State/Restaurant/Action';
import {store} from '../../State/store';
import { getMenuItemByRestaurantId } from '../../State/Menu/Action';

const foodTypes = [
    {label:"All", value:"all"},
    {label:"vegeterian only", value:"vegeterian"},
    {label:"Non-vegeterian", value:"non_vegeterian"},
    {label:"Sesonal", value:"seasonal"},

]


const RestaurantDetails = () => {

    const [foodType, setFoodType] = useState("all")
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth, restaurant, menu} = useSelector(store => store);
    const [selectedCategory, setSelectedCategory] = useState("");

    const {id, city, title} = useParams();

    console.log("restaurant", restaurant);
    console.log("menu", menu);
    

    const handleFilter = (e, value) => {
        console.log(e.target.value, e.target.name);
        setSelectedCategory(value);

    }

    const handleFilterFoodType = (e, value) => {
        console.log(e.target.value, e.target.name);
        setFoodType(value);

    }

    useEffect(()=>{
       dispatch(getRestaurantById({jwt, restaurantId:id}));
       dispatch(getRestaurantsCategory({restaurantId:id,jwt}));
    },[]);

    useEffect(() => {
        dispatch(
            getMenuItemByRestaurantId({
                jwt, 
                restaurantId:id, 
                vegetarian:foodType==="vegeterian", 
                seasonal:foodType==="seasonal", 
                nonveg:foodType==="non_vegeterian", 
                foodCategory: selectedCategory
            })
        );
    }, [selectedCategory, foodType])

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-start text-gray-500 py-2 mt-10'>Home/india/{title}/{id}</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                            <img className="w-full h-[40vh] object-cover" 
                            src={restaurant.restaurant?.images[0]} 
                            alt=""
                            />

                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                            <img className="w-full h-[40vh] object-cover" 
                            src={restaurant.restaurant?.images[1]}
                            alt=""
                            />

                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                            <img className="w-full h-[40vh] object-cover" 
                            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt=""
                            />

                    </Grid>
                </Grid>
            </div>
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold text-start">
                    {restaurant.restaurant?.name}
                </h1>
                <p className='text-gray-500 mt-1 text-start'>
                        {restaurant.restaurant?.description}
                </p>
                <div className="space-y-3 mt-3">
                    <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>bengaluru, Karnataka</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarTodayIcon/>
                    <span>Mon-Sun 9:00Am- 9:00PM(Today)</span>
                    </p>
                </div>
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className="space-y-10 lg:w-[20%] filter">
                <div className="box space-y-5 lg:sticky top-28">
                    <div className='text-start'>
                        <Typography varient="h5" sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilterFoodType}  name="food_type" value={foodType}>
                                {foodTypes.map((item)=> (
                                    <FormControlLabel 
                                    key={item.value}
                                    value={item.value}
                                    control={<Radio/>}
                                    label={item.label}
                                    selected = {foodType==item.value?true:false}
                                    />
                                    ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div className='text-start'>
                        <Typography varient="h5" sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter}  name="food_category" value={selectedCategory}>
                                {restaurant.categories.map((item) => (
                                    <FormControlLabel 
                                        key={item.id}
                                        value={item.name}
                                        control={<Radio/>}
                                        label={item.name}
                                    />
                                    ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                {menu.menuItems.map((item)=> <MenuCard item={item}/>)}
            </div>

        </section>

      
    </div>
  )
}

export default RestaurantDetails
