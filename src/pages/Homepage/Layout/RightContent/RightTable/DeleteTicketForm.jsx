import React from 'react';
import { ToastMessage } from "../../../../../utils/ToastMessage";
import { useDispatch } from 'react-redux';
import { deleteTicketType } from '../../../../../features/TicketReducer';
const DeleteTicketForm = ({ handleClose, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTicketType(id));
        handleClose();
        ToastMessage.notifySuccess("Ticket Type Deleted Successfully")
    }

    return (
        <div>
            <div className="flex flex-col gap-y-10 items-center justify-center">
                <div>
                    <p className='text-xl'> Are You Sure You Want To Delete This Ticket Type?</p>
                </div>
                <div className='flex justify-center gap-8'>
                    <div
                        onClick={handleClose}
                        className='px-3 py-2 bg-[#1A1A40] text-white rounded cursor-pointer'>
                        Cancel
                    </div>
                    <div
                        onClick={handleDelete}
                        className='px-3 py-2 bg-[#A13333] text-white rounded cursor-pointer'>
                        Delete
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeleteTicketForm;