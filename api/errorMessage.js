export const errorMessage=(status, message,err)=>{
    const error = new Error();
    const orignalErr = err?.message || "條件錯誤"; 
    //怕到時候不一定要傳error變數
    error.status= status;
    error.message=message+`\n錯誤詳細描述: `+orignalErr;
    return error; 
}