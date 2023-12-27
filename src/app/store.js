import { configureStore } from '@reduxjs/toolkit'
import dragonSlice from './DragonSlice';
import missionSLice from './Mission';

export const store = configureStore({
  reducer: {dragonSlice,missionSLice},
})