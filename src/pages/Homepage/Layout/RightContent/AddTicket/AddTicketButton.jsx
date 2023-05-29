import React from 'react';
import TicketForm from '../../../../../components/TicketForm/TicketForm';


const AddTicketButton = ({ handleModalOpen }) => {

    return (
        <>
            <div className='my-5'>
                <div className='flex justify-end'>
                    <button
                        onClick={() => handleModalOpen(<TicketForm submitbtn="Add Ticket" />)}
                        className='outline-none border-none px-6 py-3 bg-pscdarkblue text-white rounded'>Add Ticket</button>

                </div>
            </div>
        </>
    );
};

export default AddTicketButton;