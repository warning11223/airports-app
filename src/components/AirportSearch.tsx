import React, { useEffect, useState} from 'react';
import {useDebounce} from "../hooks/useDebounce";
import axios from "axios";
import {IAirportsResponse} from "../models/airport.module";
import {useNavigate} from "react-router-dom";

const AirportSearch: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [airports, setAirports] = useState<IAirportsResponse[]>([]);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    const debounced = useDebounce(inputValue, 500);

    const searchAirports = async (value: string) => {
        try {
            const { data } = await axios.get<IAirportsResponse[]>(`https://610a449252d56400176afc99.mockapi.io/items?search=${value}`);
            setAirports(data);
        } catch (e: any) {
            throw new Error(e)
        }
    }

    useEffect(() => {
        if(debounced.length > 3) {
            searchAirports(debounced)
                .then(() => setDropdown(true))
        } else {
            setDropdown(false)
        }

    }, [debounced])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }


    return (
        <div className='mb-4 relative '>
            <input
                type="text"
                placeholder='Search by name airport'
                className=' rounded border py-2 px-4 outline-none w-full text-xl  '
                value={inputValue}
                onChange={inputHandler}
            />

            {dropdown &&
                <ul className=' list-none absolute w-full h-56 bg-gray-300 opacity-50 shadow-lg opacity-90 '>
                    {airports.map(item => {
                        return (
                            <li
                                key={item.id}
                                className=' px-7 py-5 border text-xl text-black hover:bg-green-500 cursor-pointer transition-all hover:text-white '
                                onClick={() => navigate(`/airports/${item.id}`)}
                            >{item.name}</li>
                        )
                    })}
                </ul>
            }

        </div>
    );
};

export default AirportSearch;