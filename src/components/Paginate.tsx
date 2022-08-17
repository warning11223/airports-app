import React, {useRef, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useAppDispatch} from "../store";
import {fetchAirports} from "../store/slices/airportSlice";


type PaginateType = {
    items: number
}

const Paginate: React.FC<PaginateType> = ({items}) => {
    const page = useRef(0).current;
    const dispatch = useAppDispatch();

    const pageCount = Math.ceil(20 / 5);


    const handlePageClick = (event: {selected: number}) => {
        dispatch(fetchAirports({page: event.selected + 1}));
    }

    return (
        <div className=' mt-8 '>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                forcePage={page}
                containerClassName=' flex transition-all  '
                activeClassName=' bg-gray-500 text-white '
                nextClassName=' py-1 px-2 border '
                previousClassName=' py-1 px-2 border mr-2 '
                pageClassName=' py-1 px-2 border mr-2 rounded '
            />
        </div>
    );
};

export default Paginate;
