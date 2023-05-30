import React from 'react';
import TicketForm from '../../../../../components/TicketForm/TicketForm';


const AddTicketButton = ({ handleModalOpen, handleClose }) => {

    return (
        <>
            <div className='my-5'>
                <div className='flex justify-end'>
                    <button
                        onClick={() => handleModalOpen(<TicketForm title="Add Ticket Type" submitbtn="Add Ticket" handleClose={handleClose} />)}
                        className='outline-none border-none px-6 py-3 bg-pscdarkblue text-white rounded'>Add Ticket</button>

                </div>
            </div>
        </>
    );
};

export default AddTicketButton;