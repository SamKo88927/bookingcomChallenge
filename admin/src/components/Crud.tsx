import React, { useEffect, useState } from 'react'
import Title from './Crud/Title'
import { motion } from "framer-motion"
import Form from './Crud/Form'
import Search from './Crud/Search'
import axios from 'axios'
const typeArray = [
    "飯店", "公寓", "度假村", "Villa", "木屋", "小屋", "豪華露營", "飯店式公寓", "度假屋", "家庭旅館", "青年旅館"
]
const citiesArray = ['台南', '台中', '宜蘭縣', '花蓮市', '台東市', '台北', '高雄', '墾丁', '礁溪鄉', '嘉義市']
const inputData = [
    {
        id: "name",
        name: "飯店名稱",
        placeholder: "西門町飯店"
    },
    { id: "type", name: "飯店類型", placeholder: '飯店', set: typeArray },
    { id: "city", name: "城市", placeholder: '台北', set: citiesArray },
    { id: "address", name: "飯店地址", placeholder: '西門訂 大漢街' },
    { id: "photos", name: "照片", placeholder: '直接輸入照片Url' },
    { id: "distance", name: "距離市中心", placeholder: '西門訂200m' },
    { id: "title", name: "介紹標題", placeholder: '西門訂飯店' },
    { id: "desc", name: "飯店詳細內容", placeholder: '西門訂飯店 距離西門町很近 很棒 大飯店' },
    { id: "cheapestPrice", name: "最便宜價格", placeholder: '988元' },
]

const Crud = ({ type, Logo, title, backgroundColor }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        city: "",
        address: "",
        photos: "",
        distance: "",
        title: "",
        desc: "",
        cheapestPrice: "",
    })
    console.log(formData)
    const [buttonClick , setButtonClick] = useState(false)
    useEffect(()=>{
        const createForm = ()=>{
            const res = axios.post("/hotels/",formData)
            console.log(res)
        }
        if(type=="創建" || buttonClick==true ){
            createForm()
            setButtonClick(false)
        }
    },[buttonClick])

    return (
        <div className={`${isOpen ? '' : ""}`}>
            <div className='p-5 text-white rounded cursor-pointer hover:opacity-75' style={{ background: backgroundColor }} >
                <div onClick={() => setIsOpen(!isOpen)} >
                    <Title img={Logo} title={title} />
                </div>
            </div>
            {!isOpen ? <></>
                :
                type == "創建" ?
                    <Form state={setFormData} inputData={inputData} backgroundColor={backgroundColor} button={type}  setButton={setButtonClick}/>
                    :
                    <>
                        <Search />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            style={{ pointerEvents: "auto" }}
                            className="overlay"
                        >
                            <Form  state={setFormData}
                             inputData={inputData} backgroundColor={backgroundColor} 
                             button={type} setButton={setButtonClick}
                             />
                        </motion.div>
                        
                    </>
            }




        </div>
    )
}


export default Crud