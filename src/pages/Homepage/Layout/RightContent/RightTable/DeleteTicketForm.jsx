import React from 'react';

const DeleteTicketForm = ({ handleClose }) => {
    return (
        <div>
            <div className="flex flex-col gap-y-10 items-center justify-center">
                <div>
                    <p className='text-xl'> Are You Sure You Want To Delete This Post?</p>
                </div>
                <div className='flex justify-center gap-8'>
                    <div
                        onClick={handleClose}
                        className='px-3 py-2 bg-[#1A1A40] text-white rounded cursor-pointer'>
                        Cancel
                    </div>
                    <div
                        // onClick={() => { dispatch(deletePostAction(showRemove)) }}
                        className='px-3 py-2 bg-[#A13333] text-white rounded cursor-pointer'>
                        Delete
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeleteTicketForm;