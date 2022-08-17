import React, {useEffect} from 'react';
import AirportSearch from "../components/AirportSearch";
import AirportFilter from "../components/AirportFilter";
import AirportCard from "../components/AirportCard";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Paginate from "../components/Paginate";
import { useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store";
import {fetchAirports} from "../store/slices/airportSlice";


const MainPage: React.FC = () => {
    const { status, airports } = useSelector((state: RootState) => state.airports)
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchAirports({page: 1, limit: 5}))
    }, []);



    return (
        <div className=' max-w-3xl mx-auto pt-5 container h-full ' >

            <AirportSearch />
            <AirportFilter />

            {status === 'pending' && <Spinner />}
            {status === 'rejected' && <Error />}

            {status === 'fulfilled' &&
                <div className=' mt-5 overflow-y-scroll border p-5 items-center flex flex-col justify-between ' style={{height: '550px'}}>
                    {airports.map(item => {
                        return <AirportCard key={item.id} item={item} />
                    })}
                </div>
            }

            <Paginate items={airports?.length!} />

        </div>
    );
};

export default MainPage;
