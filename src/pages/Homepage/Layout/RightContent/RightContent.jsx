import React, { useState } from 'react';
import RightNav from './RightNav/RightNav';
import RightTable from './RightTable/RightTable';
import AddTicketButton from './AddTicket/AddTicketButton';
import Modal from '../../../../components/Modal/Modal';

const RightContent = ({ setOpen, open, setResponsiveOpen, responsiveOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleModalOpen = (content) => {
        setIsOpen(true);
        setModalContent(content);
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setModalContent("");
    };

    return (
        <>
            <Modal isOpen={isOpen} handleModalOpen={handleModalOpen} handleClose={handleModalClose} content={modalContent} />
            <div className='flex flex-col'>
                <RightNav open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} setResponsiveOpen={setResponsiveOpen} />
                <div className='my-[25px] mx-[45px]'>
                    <AddTicketButton handleModalOpen={handleModalOpen} handleClose={handleModalClose} />
                    <RightTable handleModalOpen={handleModalOpen} handleClose={handleModalClose} />
                </div>
            </div>
        </>
    );
};

export default RightContent;