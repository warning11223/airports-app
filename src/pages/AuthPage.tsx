import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {RootState, useAppDispatch} from "../store";
import {authUser, fetchUsers} from "../store/slices/authSlice";
import {useSelector} from "react-redux";

const AuthPage = () => {
    const [nameValue, setNameValue] = useState('Samantha');
    const [errorValidation, setErrorValidation] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { status, isAuth, users } = useSelector((state: RootState) => state.auth)

    const nameValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value)
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const findUser = users.find(item => item.username === nameValue);
        if(findUser) {
            dispatch(authUser(true));
            navigate('/');
        } else {
            dispatch(authUser(false));
            setErrorValidation(true);
        }
    }

    return (
        <div className=' flex justify-center  mt-24 '>
            <div className="w-full max-w-xs">
                <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username"
                            value={nameValue}
                            onChange={nameValueHandler}
                        ></input>
                        {errorValidation && <p className="text-red-500 text-xl pl-3 italic">No such user exists</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" disabled></input>
                    </div>
                    <div className="flex items-center justify-center ">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  "
                            type="submit"
                            onClick={submitHandler}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
