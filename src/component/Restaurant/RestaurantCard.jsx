import { Card, IconButton, Chip } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = ({item}) => {
  
  
  return (
    <Card className='w-[18rem]'>
      
      <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
      <img 
      className='w-full h-[10rem] rounded-t-md object-cover'
      src={item.images[0]} alt=""
      />
      <Chip 
        size="small" 
        className="absolute top-2 left-2"
        color={item.open?"success":"error"}
        label={item.open? "open":"closed"}
      />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-500 text-sm">
                {/* Craving it all? Dive into our global fla... */}{item.description}
            </p>

        </div>
        <div>
            <IconButton>
                {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard
