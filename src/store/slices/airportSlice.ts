import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import {IAirportsResponse} from "../../models/airport.module";

export interface IAirportSlice {
    airports: IAirportsResponse[]
    status: 'pending' | 'fulfilled' | 'rejected'
    airport: IAirportsResponse
}

const initialState: IAirportSlice = {
    airports: [],
    status: 'pending',
    airport: {
        id: 0,
        ident: '',
        name: '',
        region: '',
        type: '',
        country: '',
    },
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAirports.fulfilled, (state, action: PayloadAction<IAirportsResponse[]>) => {
            state.airports = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchAirports.pending, (state) => {
            state.airports = [];
            state.status = 'pending';
        });
        builder.addCase(fetchAirports.rejected, (state) => {
            state.airports = [];
            state.status = 'rejected';
        });


        builder.addCase(fetchAirport.fulfilled, (state, action: PayloadAction<IAirportsResponse>) => {
            state.airport = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchAirport.pending, (state) => {
            state.airports = [];
            state.status = 'pending';
        });
        builder.addCase(fetchAirport.rejected, (state) => {
            state.airports = [];
            state.status = 'rejected';
        });


        builder.addCase(fetchFilterCountry.fulfilled, (state, action: PayloadAction<IAirportsResponse[]>) => {
            state.airports = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchFilterCountry.pending, (state) => {
            state.airports = [];
            state.status = 'pending';
        });
        builder.addCase(fetchFilterCountry.rejected, (state) => {
            state.airports = [];
            state.status = 'rejected';
        });


        builder.addCase(fetchFilterType.fulfilled, (state, action: PayloadAction<IAirportsResponse[]>) => {
            state.airports = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchFilterType.pending, (state) => {
            state.airports = [];
            state.status = 'pending';
        });
        builder.addCase(fetchFilterType.rejected, (state) => {
            state.airports = [];
            state.status = 'rejected';
        });


        builder.addCase(fetchFilterRegion.fulfilled, (state, action: PayloadAction<IAirportsResponse[]>) => {
            state.airports = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(fetchFilterRegion.pending, (state) => {
            state.airports = [];
            state.status = 'pending';
        });
        builder.addCase(fetchFilterRegion.rejected, (state) => {
            state.airports = [];
            state.status = 'rejected';
        });
    },
})

export const fetchAirports = createAsyncThunk<IAirportsResponse[], Record<string, number>>(
    'airport/fetchAirports',
    async ({page, limit = 5}) => {
        const {data} = await axios.get<IAirportsResponse[]>(`https://610a449252d56400176afc99.mockapi.io/items?page=${page}&limit=${limit}`);
        return data;
    }
)

export const fetchAirport = createAsyncThunk<IAirportsResponse, Record<string, number>>(
    'airport/fetchAirport',
    async ({id}) => {
        const {data} = await axios.get<IAirportsResponse>(`https://610a449252d56400176afc99.mockapi.io/items/${id}`);
        return data;
    }
)

export const fetchFilterCountry = createAsyncThunk<IAirportsResponse[], string>(
    'filter/fetchFilterCountry',
    async (country) => {
        const {data} = await axios.get<IAirportsResponse[]>(`https://610a449252d56400176afc99.mockapi.io/items?country=${country}`);
        return data;
    }
)

export const fetchFilterType = createAsyncThunk<IAirportsResponse[], string>(
    'filter/fetchFilterType',
    async (type) => {
        const {data} = await axios.get<IAirportsResponse[]>(`https://610a449252d56400176afc99.mockapi.io/items?type=${type}`);
        return data;
    }
)

export const fetchFilterRegion = createAsyncThunk<IAirportsResponse[], string>(
    'filter/fetchFilterRegion',
    async (region) => {
        const {data} = await axios.get<IAirportsResponse[]>(`https://610a449252d56400176afc99.mockapi.io/items?region=${region}`);
        return data;
    }
)

export default airportSlice.reducer