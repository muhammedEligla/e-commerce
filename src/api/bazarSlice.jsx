import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    productData:[],
    userInfo:null,
};

export const bazarSlice = createSlice({
    name:"bazar" , 
    initialState,
    reducers:{
        addToCart:(state , action )=>{
            const item = state.productData.find(item =>{
                return item._id === action.payload.pro._id;
            })
            if(item){
                item.quantity += 1
            }else{
                const coant = action.payload.coant
                const proClone = {...action.payload.pro , quantity: coant ? coant : 1 }
                state.productData.push(proClone);
            }
        },
        plusQuant:(state , action)=>{
            const item = state.productData.find(item =>{
                return item._id === action.payload._id;
            })
            item.quantity += 1;
        },
        mainusQuant:(state , action)=>{
            const item = state.productData.find(item =>{
                return item._id === action.payload._id;
            })
            if(item.quantity > 1 ){
                item.quantity -= 1
            }else{
                item.quantity = 1
            }
        },
        deletItem:(state , action)=>{
            const handDelete = state.productData.filter(item => item._id !== action.payload)
            state.productData = handDelete
        },
        resetCart: (state)=>{
            state.productData =[];
        },
        increamentQua:(state , action)=>{
            const item = state.productData.find(item =>{
                item._id === action.payload._id
            })
            if(item){
                item.quntity++
            }else{
                item.quantity = 1
            }
        },
        decrmentQua:(state , action )=>{
            const item = state.productData.find(item =>{
                item._id === action.payload._id
            });
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
        addUser:(state , action)=>{
            state.userInfo = action.payload
        },
        removeUser:(state)=>{
            state.userInfo = null
        }
    },
});

export const {addToCart , plusQuant , mainusQuant , deletItem , resetCart , increamentQua , decrmentQua ,addUser , removeUser} = bazarSlice.actions;
export default bazarSlice.reducer;