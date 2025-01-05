import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const RestaurantDetails = () => {
  const handleRestaurantStatus = () => {};

  return (
    <div className="lg:px-20 px-5 text-start">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          Indian Fast Food
        </h1>
        <div>
          <Button
            color={true ? "primary" : "error"}
            variant="contained"
            className="py-[1rem] px-[2rem]"
            onClick={handleRestaurantStatus}
            size="large"
          >
            {true ? "close" : "open"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Restaurant</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Code With Arman
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Cuisin Type</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Code With Arman
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Opening Hours</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Code With Arman
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    {true ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Open
                      </span>
                    ) : (
                      <span className="px-5 py-2 rounded-full bg-red-400 text-gray-950">
                        Close
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Address</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    India
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Buxar
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    802101
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    Chini Mill
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300">Contact</span>}
            ></CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    arman@gmai.com
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    <span className="pr-5">-</span>
                    +91 9716831569
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Social</p>
                  <div className="flex text-gray-400 items-center pb-3 gap-2">
                    <span className="pr-5">-</span>
                    <a href="/">
                        <InstagramIcon sx={{fontSize:"3rem"}}/>
                    </a>
                    <a href="/">
                        <TwitterIcon sx={{fontSize:"3rem"}}/>
                    </a>
                    <a href="/">
                        <LinkedInIcon sx={{fontSize:"3rem"}}/>
                    </a>
                    <a href="/">
                        <FacebookIcon sx={{fontSize:"3rem"}}/>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDetails;
