import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 1,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1; 
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action:PayloadAction<number>) => {
            state.value += action.payload;
        }).addCase(incrementAsync.rejected, (_, action) => {
            console.error('Increment async failed:', action.error);
        }).addCase(incrementAsync.pending, () => {
            console.log('Increment async pending...');
        })
    }
})

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await new Promise<number>((resolve) =>
            setTimeout(() => resolve(amount), 1000)
        );
        return response;
    }
)

export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer