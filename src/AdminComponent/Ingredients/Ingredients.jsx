import React from 'react'
import Grid from '@mui/material/Grid2';
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'

const Ingredients = () => {
  return (
    <div className='px-2'>
      <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
             <IngredientTable/>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <IngredientCategoryTable/>
          </Grid>
        </Grid>
    </div>
  )
}

export default Ingredients
