import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('missions/fetchdata',
    async(_,{rejectWithValue})=>{
        try{
            const data = axios.get(url);
            return data;
        }
        catch(e)
        {
            return rejectWithValue("Error fetching misions");
        }
    }
);
const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
  }


const missionSLice = createSlice({
    name: 'missions',
    initialState,
    reducers: {

    }
})

export default missionSLice;