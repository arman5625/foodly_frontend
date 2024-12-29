import React from 'react'
import { useState } from 'react';

import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider, FormControl, FormControlLabel, RadioGroup, Typography, Radio } from '@mui/material';
import MenuCard from './MenuCard';

const categories = ["pizza", "biriyani", "burger", "chicken"];

const foodTypes = [
    {label:"All", value:"all"},
    {label:"vegeterian only", value:"vegeterian"},
    {label:"Non-vegeterian", value:"non_vegeterian"},
    {label:"Sesonal", value:"seasonal"},

]

const menu = [1,1,1,1,1,1];

const RestaurantDetails = () => {

    const [foodType, setFoodType] = useState("all")

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)
    }

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-start text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                            <img className="w-full h-[40vh] object-cover" 
                            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt=""
                            />

                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                            <img className="w-full h-[40vh] object-cover" 
                            src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                    Indian Fast Food
                </h1>
                <p className='text-gray-500 mt-1 text-start'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae expedita perferendis saepe, explicabo modi obcaecati at temporibus corporis sed repudiandae dolor magnam.
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
                            <RadioGroup onChange={handleFilter}  name="food_type" value={foodType}>
                                {foodTypes.map((item)=> (
                                    <FormControlLabel 
                                    key={item.value}
                                    value={item.value}
                                    control={<Radio/>}
                                    label={item.label}
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
                            <RadioGroup onChange={handleFilter}  name="food_type" value={foodType}>
                                {categories.map((item)=> (
                                    <FormControlLabel 
                                    key={item}
                                    value={item}
                                    control={<Radio/>}
                                    label={item}
                                    />
                                    ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                {menu.map((item)=> <MenuCard/>)}
            </div>

        </section>

      
    </div>
  )
}

export default RestaurantDetails
