import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import { modalStyle } from '../utils/modalStyle';
    // Define styles for the Box component

const Events = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOnClose = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);


    return (
        <div>
            <div className="p-5">
                <Button onClick={handleOpenModal} variant="contained">
                    Create New Event
                </Button>
            </div>

            <Modal open={openModal} onClose={handleOnClose}>
                <Box sx={modalStyle}>
                    <CreateEvent />
                </Box>
            </Modal>
        </div>
    );
};

export default Events;
