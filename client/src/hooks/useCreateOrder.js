import React, { useEffect, useState } from 'react'
import axios from "axios"

 const useCreateOrder = (url,orderData,createOrderState) => {
    const [Order, setOrder]=useState([]);
    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await axios.post(url, orderData)
                console.log("useEffect 啟動")
            } catch (error) {
                console.log("上傳失敗")
            }
        }
        if(createOrderState==true){
            //設立確定送出實在使用這個createOrdered 才不會重複送出訂單
            createOrder()
        }
    }, [createOrderState])
    return{Order}
}

export default useCreateOrder
