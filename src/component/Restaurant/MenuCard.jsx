import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, FormGroup, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CheckBox } from '@mui/icons-material';

const ingredients = [
    {
        category:"Nuts & Seeds",
        ingredients:["cashews"]
        
    },
    {
        category:"Protein",
        ingredients:["Ground beef", "Bacon stripe"]
        
    },
    {
        category:"Bread",
        ingredients:["Hamburger bun"]
        
    },
    {
        category:"Vegetable",
        ingredients:["Lettuce", "Tomato slices", "onion slices"]
        
    }
]

const MenuCard = () => {

    const handleCheckBoxChange = (value) => {
        console.log(value);
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
                    src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt=""
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>₹499</p>
                    <p className="text-gray-400">nice food</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
         <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    ingredients.map((item) => (
                        <div> 
                            <p>{item.category}</p>
                            <FormGroup>
                                {item.ingredients.map((ingre) => (
                                    <FormControlLabel control={<CheckBox color='primary' onChange={()=>handleCheckBoxChange(item)}/>} label={ingre}/>
                                ))}
                            </FormGroup>
                        </div>
                        
                    ))}
            </div>
            <div className='pt-5'>
                <Button type="submit" varient="container" disabled={false}>{true?"Add to Cart":"Out of Stock"}</Button>
            </div>

         </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
