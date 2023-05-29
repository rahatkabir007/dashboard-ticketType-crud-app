import React, { useState } from 'react';

const TicketForm = ({ submitbtn, handleClose }) => {
    const [ticketType, setTicketType] = useState("");
    const [description, setDescription] = useState("");

    // const { createPostFormStatus } = useAppSelector((state: RootState) => state.post)
    // const dispatch = useAppDispatch()

    const handleAdd = (e, submitbtn) => {
        const data = {
            id: Math.floor(Math.random() * 1000),
            // userId: Math.floor(Math.random() * 1000),
            ticketType: ticketType,
            description: description

        }
        if (submitbtn === "Add Ticket") {

            handleClose()
            console.log("addd data", submitbtn, data);
        }
        else {

            handleClose()
            console.log("edit data", submitbtn, data);
        }
        // dispatch(createPostAction(data))
        // ToastMessage.notifySuccess("Post Added")
        e.preventDefault()
    }

    // useEffect(() => {
    //     if (createPostFormStatus === ApiStatus.success) {
    //         setTitle("");
    //         setBody("");
    //     }
    // }, [createPostFormStatus])
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
                            value={ticketType}
                            onChange={(e) => {
                                setTicketType(e.target.value)
                            }}
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
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
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