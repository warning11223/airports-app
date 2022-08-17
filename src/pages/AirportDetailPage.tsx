import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {RootState, useAppDispatch} from "../store";
import {fetchAirport} from "../store/slices/airportSlice";
import {useSelector} from "react-redux";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const AirportDetailPage = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { airport, status } = useSelector((state: RootState) => state.airports)


    const fetchAirportDetail = async () => {
        try {
            // @ts-ignore
            await dispatch(fetchAirport({id: params.id}))
        } catch (e: any) {
            throw Error(e)
        }
    }

    useEffect(() => {
        fetchAirportDetail()
    }, [])



    return (
        <div className=' h-screen '>
            {status === 'pending' && <Spinner />}
            {status === 'rejected' && <Error />}
            {status === 'fulfilled' &&
                <ul className=' ml-96 mt-24 list-none max-w-3xl mx-auto pt-5 container h-full text-xl '>
                    <h1 className=' mb-1 text-3xl '>Name airport: {airport.name}</h1>
                    <li className=' text-2xl '>Identity: {airport.ident}</li>
                    <li className=' text-2xl '>Region: {airport.region}</li>
                    <li className=' text-2xl '>Type: {airport.type}</li>
                    <li className=' text-2xl '>Country: {airport.country}</li>
                </ul>
            }
        </div>
    );
};

export default AirportDetailPage;
