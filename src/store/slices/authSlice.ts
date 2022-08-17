import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IUsersResponse} from "../../models/airport.module";
import axios from "axios";

export interface CounterState {
    isAuth: boolean;
    users: IUsersResponse[];
    status: 'pending' | 'fulfilled' | 'rejected'
}

const initialState: CounterState = {
    isAuth: false,
    users: [],
    status: 'pending'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUsersResponse[]>) => {
            state.users = action.payload;
            const findUser = state.users
            state.status = 'fulfilled';
        });
        builder.addCase(fetchUsers.pending, (state) => {
            state.users = [];
            state.status = 'pending';
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.users = [];
            state.status = 'rejected';
        });
    })
})

export const fetchUsers = createAsyncThunk<IUsersResponse[]>(
    'auth/fetchUsers',
    async () => {
        const { data } = await axios.get<IUsersResponse[]>(`https://jsonplaceholder.typicode.com/users`);
        return data;
    }
)

export const { authUser } = authSlice.actions

export default authSlice.reducer