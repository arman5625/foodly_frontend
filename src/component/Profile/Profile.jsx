import React, { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Address from "./Address";
import Events from "./Events";
import Favorites from "./Favorites";
import Orders from "./Orders";
import Notification from "./Notification";

const Profile = () => {
  const [openSideBar, setOpenSidebar] = useState(false);

  const handleClose = () => setOpenSidebar(false);

  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <ProfileNavigation open={false} handleClose={handleClose} />
      </div>
      <div className="lg:w-[80vw]">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/address" element={<Address />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
