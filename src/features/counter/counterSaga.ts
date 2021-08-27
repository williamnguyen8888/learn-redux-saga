import {takeEvery, delay, put} from '@redux-saga/core/effects'
import {PayloadAction} from "@reduxjs/toolkit";
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction){
//     console.log('log', action)
// }
 function* handleIncrementSaga(action: PayloadAction<number>){
    console.log('waiting 2s')
   // wait 2s
   yield delay(2000)
   console.log('waiting done dispatch action')

   //dispatch action sucsess
   yield put(incrementSagaSuccess(action.payload))
}
export default function* counterSaga(){
    console.log("counterSaga")
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}


