import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'


const CreateFoodCategoryForm = () => {

    const [formData, setFormData] = useState({categoryName:"",restaurantId:""});

    const handleSubmit = (e)=> {
        // e.preventDefault();
       const data =  {
            name: formData.categoryName,
            restaurantId: {
                id:1
            }
        }

        console.log("data",data)

    }

    const handleInputChange = (e)=> {
         const {name,value} = e.target;
         setFormData(
            {
                ...formData,[name]:value
            }
         )
    }

  return (
    <div className=''>
        <div className="p-5 space-y-5">
            <h1 className="text-gray-400 text-center text-xl pb-10">
                Create Category Form
            </h1>
            <form onSubmit={(e) => handleSubmit(e)} className='space-y-5'>
                <TextField
                fullWidth
                id="categoryName"
                name="categoryName"
                label="Food Category"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.categoryName}
              ></TextField>
              <Button color="primary" variant="contained" type="submit">
            {" "}
            Create Category
          </Button>
            </form>
        </div>
      
    </div>
  )
}

export default CreateFoodCategoryForm
