import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {categorizeIngredients} from '../utils/categorizeIngredients';
import { useDispatch } from 'react-redux';

import {addItemToCart} from '../../State/Cart/Action';


const MenuCard = ({item}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch = useDispatch();


    const handleCheckBoxChange = (itemName) => {
        if(selectedIngredients.includes(itemName)){
            setSelectedIngredients(selectedIngredients.filter((item) => item!==itemName))
        }else {
            setSelectedIngredients([...selectedIngredients,itemName])
        }

    }

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const reqData  = {
            token: localStorage.getItem("jwt"),
           cartItem:{
            foodId: item.id,
            quantity:1,
            ingredients: selectedIngredients,
           },
        }
        dispatch(addItemToCart(reqData));
        console.log("reqData",reqData);
    }

    

  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex item-center justify-between'>
            <div className="lg:flex item-center lg:gap-5">
                <img 
                    className="w-[7rem] h-[7rem] object-cover"  
                    src={item?.images[0]} 
                    alt=""
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>{item?.name}</p>
                    <p>₹{item?.price}</p>
                    <p className="text-gray-400">{item?.description}</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <form onSubmit={handleAddItemToCart} >
            <div className='flex gap-5 flex-wrap'>
                {
                    Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                        <div> 
                            <p>{category}</p>
                            <FormGroup>
                                {categorizeIngredients(item.ingredients)[category].map(
                                    (ingre) => (
                                    <FormControlLabel 
                                       key={ingre.name} 
                                       control={
                                        <Checkbox 
                                          color='primary' 
                                          onChange={()=>handleCheckBoxChange(ingre.name)}
                                        />
                                    } 
                                    label={ingre.name}/>
                                ))}
                            </FormGroup>
                        </div>
                        
                    ))}
            </div>
            <div className='pt-5'>
                <Button type="submit" variant="contained" disabled={false}>{true?"Add to Cart":"Out of Stock"}</Button>
            </div>

         </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
