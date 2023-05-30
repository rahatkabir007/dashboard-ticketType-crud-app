import React, { useEffect, useState } from 'react';
import { addTicketType, editTicketType } from '../../features/TicketReducer';
import { useDispatch } from 'react-redux';
import { ToastMessage } from "../../utils/ToastMessage";

const TicketForm = ({ title, submitbtn, handleClose, data }) => {
    const [values, setValues] = useState({
        ticketType: '',
        description: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            return
        }
        setValues({
            ticketType: data?.ticketType,
            description: data?.description
        })
    }, [data])

    const handleAdd = (e, submitbtn) => {
        e.preventDefault();
        if (submitbtn === "Add Ticket") {
            if (!values.ticketType) {
                ToastMessage.notifyError("Please Fill Up Ticket Type Field")
                return;
            }
            dispatch(addTicketType({
                id: Math.floor(Math.random() * 1000),
                ticketType: values.ticketType,
                description: values.description
            }));
            ToastMessage.notifySuccess("Post Added Successfully")
        }
        else {
            if (!values.ticketType) {
                ToastMessage.notifyError("Please Fill Up Ticket Type Field")
                return;
            }
            if (
                values.ticketType === data?.ticketType &&
                values.description === data?.description
            ) {
                ToastMessage.notifyInfo("No changes made");
                handleClose();
                return;
            }
            dispatch(editTicketType({
                id: data?.id,
                ticketType: values.ticketType,
                description: values.description
            }));
            ToastMessage.notifySuccess("Post Edited Successfully")
        }
        handleClose();

    }

    return (
        <div className='p-6 flex flex-col gap-y-2'>
            <div className='w-full border-psclightblack border-b-4 pb-2'>
                <span className='text-xl font-medium text-pscdarkblue'>{title}</span>
            </div>
            <div className="py-5">
                <form onSubmit={(e) => { handleAdd(e, submitbtn) }}>
                    <div className="mb-4">
                        <label className="block text-pscdarkblue text-lg font-bold mb-2" htmlFor="username">
                            Ticket Type {!values.ticketType && <sup className='text-red-700'>*</sup>}
                        </label>
                        <input
                            className="appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            id="ticketType"
                            type="text"
                            placeholder="Ticket Type"
                            value={values.ticketType}
                            onChange={(e) => setValues({ ...values, ticketType: e.target.value })}
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
                            value={values.description}
                            onChange={(e) => setValues({ ...values, description: e.target.value })}
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