import React from 'react';
import {IAirportsResponse} from "../models/airport.module";
import {useNavigate} from "react-router-dom";

type AirportCardType = {
    item: IAirportsResponse,
}

const AirportCard: React.FC<AirportCardType> = ({item}) => {

    const navigate = useNavigate();

    const cardHandler = () => {
        navigate(`/airports/${item.id}`)
    }

    return (
        <div
            className=' border rounded py-4 px-6 mb-3 hover:bg-yellow-200 transition-all cursor-pointer '
            style={{minWidth: '400px'}}
            onClick={cardHandler}
        >
            <p className=' font-bold text-xl '>Airport: <i>{item?.name}</i></p>
            <p>Country: {item?.country}</p>
            <p>Type: {item?.type}</p>
            <p>Ident: {item?.ident}</p>
            <p>Local-code: {item?.local_code}</p>
            <p>Region: {item?.region}</p>
        </div>
    );
};

export default AirportCard;
