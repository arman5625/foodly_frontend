import { Button, Card, Divider, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Box from '@mui/material/Box';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Grid from '@mui/material/Grid2';
// import * as Yup from "yupp";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

const initialValues = {
    streetAddress:"",
    state: "",
    pincode: "",
    city: ""
}

// const validationSchema = Yup.object.shape({
// streetAddress: Yup.string().required("Street Address is required"),
// state: Yup.string().required("state  is required"),
// pincode: Yup.number().required("Pincode  is required"),
// city: Yup.string().required("City  is required"),

// })

const validationSchema = {}

const cartItems = [1,1];


const Cart = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const createOrderUsingSelectedAddress = () => {
        
    }

    const handleOpenAddressModel = () => setOpen(true);

    const handleSubmit = (value) => {
        console.log("value ",value);
        

    }
  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
           {cartItems.map((item) => (
            <CartItem/>
           ))} 
                   <Divider/>
            <div className='billDetails px-5 text-sm'>
                <p className='font-extralight py-5'>Bill Details</p>
                <div className='space-y-3'>
                    <div className="flex justify-between text-gray-400">
                        <p>Item Total</p>
                        <p>₹2550</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>Deliver Fee</p>
                        <p>₹21</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>Platform Fee</p>
                        <p>₹5</p>
                    </div>
                    <div className="flex justify-between text-gray-400">
                        <p>GST and Restaurant Charges</p>
                        <p>₹33</p>
                    </div>
                    <Divider/>
                    <div className="flex justify-between text-gray-400">
                        <p>Total Pay</p>
                        <p>₹3000</p>
                    </div>
                </div>
            </div>
        </section>
     <Divider orientation='vertical' flexItem/>
     <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
        <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
                Choose Delivery Address
            </h1>
            <div className='flex gap-5 flex-wrap justify-center'>
                {[1,1,1].map((item) => <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress}/>)}

                <Card className="flex gap-5 w-64 p-5">
                    <AddLocationAltIcon/>
                    <div className='space-y-3 text-gray-500'>
                        <h1 className='font-semibold text-lg text-white '>Add New Address</h1>
                        <Button varient="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>
                    </div>
                </Card>
            </div>
        </div>
     </section>
      </main>

    
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Formik initialValues={initialValues} 
            //  validationSchema={validationSchema}
             onSubmit={handleSubmit}
            >
                <Form>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Field
                        as={TextField}
                        name="streetAddress"
                        label="Street Address"
                        fullWidth
                        varient="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Field
                        as={TextField}
                        name="state"
                        label="State"
                        fullWidth
                        varient="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Field
                        as={TextField}
                        name="city"
                        label="City"
                        fullWidth
                        varient="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Field
                        as={TextField}
                        name="pincode"
                        label="Pincode"
                        fullWidth
                        varient="outlined"
                        // error={!ErrorMessage("streetAddress")}
                        // helperText={
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        ></Field>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Button fullWidth type="submit" color='primary' variant='contained'>Deliver Here</Button>
                    </Grid>
                </Grid>
                </Form>

            </Formik>
        </Box>
        </Modal>
    </>
  )
}

export default Cart