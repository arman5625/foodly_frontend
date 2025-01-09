import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import IngredientTable from "./IngredientTable";
import IngredientCategoryTable from "./IngredientCategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientCategory, getIngredientsOfRestaurant } from "../../State/Admin/Ingredients/Action";

const Ingredients = () => {
  const dispatch = useDispatch();
  const {restaurant} = useSelector(store=>store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getIngredientsOfRestaurant({id:restaurant.userRestaurant?.id, jwt}))
    dispatch(getIngredientCategory({restaurantId:restaurant.userRestaurant?.id,jwt}));
  }, []);
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <IngredientTable />
        </Grid>
        <Grid size={{ xs: 12, md: 4, lg: 4 }}>
          <IngredientCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Ingredients;
