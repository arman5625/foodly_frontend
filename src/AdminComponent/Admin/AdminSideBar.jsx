import { Dashboard, ShoppingBag } from '@mui/icons-material'
import React from 'react';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../State/Authentication/Action';

const menu = [
    {title:"Dashboard", icon:<Dashboard/>, path:"/"},
    {title:"Orders", icon:<ShoppingBag/>, path:"/orders"},
    {title:"Menu", icon:<ShopTwoIcon/>, path:"/menu"},
    {title:"Food Category", icon:<CategoryIcon/>, path:"/category"},
    {title:"Ingredients", icon:<FastfoodIcon/>, path:"/ingredients"},
    {title:"Events", icon:<EventIcon/>, path:"/events"},
    {title:"Details", icon:<AdminPanelSettingsIcon/>, path:"/details"},
    {title:"Logout", icon:<LogoutIcon/>, path:"/"}

]

const AdminSideBar = ({handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(auth => auth)

    const handleNavigation= (item)=> {
        if(item.title === "Logout"){
          console.log("auth",auth)
          dispatch(logout(auth.jwt));
          navigate("/")
          handleClose();
    
        }else{
          navigate(`/admin/restaurants${item.path}`)
        }
      }

  return (
    <div>
      <>
        <Drawer 
            variant = {isSmallScreen? 'temporary': 'permanent'}
            onClose={handleClose} 
            open={true} anchor="left" 
            sx={{zIndex:1}}
        >
            <div className='w-[50vw] lg:w-[20vw] h-screnn flex flex-col 
        justify-center text-xl gap-4 pt-16'>

        {menu.map((item, i) => <>
        <div onClick={()=> handleNavigation(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
            {item.icon}
            <span>{item.title}</span>
        </div>
        {i !== menu.length-1 && <Divider/>}
        </>)}
        </div>

        </Drawer>
      </>
    </div>
  )
}

export default AdminSideBar
