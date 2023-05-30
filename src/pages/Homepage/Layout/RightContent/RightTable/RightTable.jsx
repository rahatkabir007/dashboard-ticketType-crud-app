import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../../../../../components/Pagination/Pagination";
import DeleteTicketForm from "./DeleteTicketForm";
import TicketForm from '../../../../../components/TicketForm/TicketForm';
import { useSelector } from 'react-redux';

const RightTable = ({ handleModalOpen, handleClose }) => {
    const { ticketTypes } = useSelector(state => ({ ...state.ticketType }))

    const tableHeaders = [
        "Ticket No.",
        "Ticket Type",
        "Description",
        "Actions"
    ]

    return (
        <div className="py-5 rounded w-full">
            {
                ticketTypes?.length === 0 ? <>
                    <div className='flex justify-center items-center'>
                        <span className="text-xl font-medium">No Ticket Type Available</span>
                    </div>
                </> :
                    <>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                            <div className="inline-block min-w-full shadow  overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            {tableHeaders.map((header, idx) => (
                                                <th
                                                    key={idx}
                                                    className="px-3 py-8 border-b-2 text-center border-gray-200 bg-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                                    <span className="flex">
                                                        <span className="flex-1">{header}</span>
                                                    </span>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                                    <tbody>
                                        {ticketTypes?.map((data, index) => (
                                            <tr key={index} className="even:bg-gray-50 odd:bg-white text-center">
                                                <td className="px-3 py-5 text-sm">
                                                    <p className="text-gray-900 ">{index + 1}</p>
                                                </td>
                                                <td className="px-3 py-5 text-sm">
                                                    <p className="text-gray-900 ">{data?.ticketType}</p>
                                                </td>
                                                <td className="px-3 py-3  text-sm capitalize">
                                                    <p className="text-gray-900 ">
                                                        {data?.description}
                                                    </p>
                                                </td>
                                                <td className="px-2 py-3  text-sm">
                                                    <button
                                                        onClick={() => handleModalOpen(<TicketForm submitbtn="Edit Ticket" handleClose={handleClose} data={data} />)}
                                                    >
                                                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                                            <span
                                                                style={{ boxShadow: "0 2px 6px #acb5f6" }}
                                                                className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center"
                                                            >

                                                                <FaEdit />
                                                            </span>
                                                        </span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleModalOpen(<DeleteTicketForm handleClose={handleClose} id={data?.id} />)}
                                                    >
                                                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                                            {data && (
                                                                <span
                                                                    style={{ boxShadow: "0 2px 6px #fd9b96" }}
                                                                    className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center"
                                                                >
                                                                    <FaTrash />
                                                                </span>
                                                            )}
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* ---------- table footer  ------------------------------- */}
                                <div className="px-5 py-5 border-t flex justify-between items-center">
                                    <div>
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            Showing 1 to 10 of 50 Entries
                                        </span>
                                    </div>
                                    <div className="inline-flex  xs:mt-0">
                                        <Pagination pageCount={2} currentPage={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default RightTable;