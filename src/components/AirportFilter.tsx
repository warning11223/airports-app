import React, {useRef, useState} from 'react';
import {useAppDispatch} from "../store";
import {fetchFilterCountry, fetchFilterRegion, fetchFilterType} from "../store/slices/airportSlice";

const AirportFilter = () => {
    let country = useRef<HTMLSelectElement>(null);
    let type = useRef<HTMLSelectElement>(null);
    let region = useRef<HTMLSelectElement>(null);
    const dispatch = useAppDispatch();


    const countryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // @ts-ignore
        country = e.target.value;
        // @ts-ignore
            dispatch(fetchFilterCountry(country));

    }

    const typeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // @ts-ignore
        type = e.target.value;
        // @ts-ignore
        dispatch(fetchFilterType(type));
    }

    const regionChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // @ts-ignore
        region = e.target.value;
        // @ts-ignore
        dispatch(fetchFilterRegion(region));
    }

    return (
        <>
            <label htmlFor="filters" className=' text-2xl mr-4 '  >Filter by:</label>


            <select
                id="filters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-1 mr-16 w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // @ts-ignore
                value={country}
                onChange={countryChangeHandler}
            >
                <option label="Country">Country:</option>
                <option label="DE">DE</option>
                <option label="BE">BE</option>
                <option label="UA">UA</option>
                <option label="IS">IS</option>
                <option label="JP">JP</option>
                <option label="SN">SN</option>
                <option label="TK">TK</option>
                <option label="FR">FR</option>
                <option label="TU">TU</option>
            </select>

            <select
                id="filters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-16 w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // @ts-ignore
                value={type}
                onChange={typeChangeHandler}
            >
                <option label="Type" >Type:</option>
                <option label="small_airport">small_airport</option>
                <option label="closed">closed</option>
                <option label="big_airport">big_airport</option>
                <option label="open">open</option>
            </select>

            <select
                id="filters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // @ts-ignore
                value={region}
                onChange={regionChangeHandler}
            >
                <option label="Region" >Region:</option>
                <option label="DE-HE">DE-HE</option>
                <option label="BE-WLG">BE-WLG</option>
                <option label="UA-ZP">UA-ZP</option>
                <option label="KH">KH</option>
                <option label="DN">DN</option>
                <option label="Kyiv">Kyiv</option>
                <option label="TK-WLG">TK-WLG</option>
                <option label="FR-WLG">FR-WLG</option>
            </select>
        </>
    );
};

export default AirportFilter;
