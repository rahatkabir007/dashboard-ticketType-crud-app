import React, { useState } from 'react';
import { addTicketType, editTicketType } from '../../features/TicketReducer';
import { useDispatch } from 'react-redux';
import { ToastMessage } from "../../utils/ToastMessage";

const TicketForm = ({ submitbtn, handleClose, data }) => {
    const [values, setValues] = useState({
        ticketType: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleAdd = (e, submitbtn) => {
        if (submitbtn === "Add Ticket") {
            dispatch(addTicketType({
                id: Math.floor(Math.random() * 1000),
                ticketType: values.ticketType,
                description: values.description
            }));
            ToastMessage.notifySuccess("Post Added Successfully")
        }
        else {
            dispatch(editTicketType({
                id: data?.id,
                ticketType: values.ticketType ? values.ticketType : data?.ticketType,
                description: values.description ? values.description : data?.description
            }));
            ToastMessage.notifySuccess("Post Edited Successfully")
        }
        handleClose();
        e.preventDefault();
    }

    return (
        <div className='w-full'>
            <div className="py-8">
                <form onSubmit={(e) => { handleAdd(e, submitbtn) }} className="p-6 w-full">
                    <div className="mb-4">
                        <label className="block text-pscdarkblue text-lg font-bold mb-2" htmlFor="username">
                            Ticket Type
                        </label>
                        <input
                            className="appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            id="ticketType"
                            type="text"
                            placeholder="Ticket Type"
                            defaultValue={data ? data.ticketType : values.ticketType}
                            onChange={(e) => setValues({ ...values, ticketType: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-pscdarkblue text-lg font-bold mb-2" htmlFor="password">
                            Description
                        </label>
                        <textarea
                            rows={10}
                            style={{ resize: 'none' }}
                            className="appearance-none bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-gray-700"
                            id="description"
                            placeholder="Description"
                            defaultValue={data ? data.description : values.description}
                            onChange={(e) => setValues({ ...values, description: e.target.value })}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-pscdarkblue hover:bg-pscdarkblue text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {submitbtn}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TicketForm;