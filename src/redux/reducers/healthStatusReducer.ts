import { IResponseDTO, TEndpoint } from '@/interfaces';
import { endpoints } from '@/utils/endpoints';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Record<TEndpoint, IResponseDTO | null> = endpoints.reduce(
  (acc, endpoint) => {
    acc[endpoint] = null;
    return acc;
  },
  {} as Record<TEndpoint, IResponseDTO | null>,
);

export const healthStatusSlice = createSlice({
  name: 'healthStatus',
  initialState,
  reducers: {
    updateHealthStatus: (
      state,
      action: PayloadAction<{ endpoint: string; data: IResponseDTO }>,
    ) => {
      if (action.payload.data) {
        return {
          ...state,
          [action.payload.endpoint]: action.payload.data,
        };
      }
      return state;
    },
  },
});

export const { updateHealthStatus } = healthStatusSlice.actions;
export default healthStatusSlice.reducer;
