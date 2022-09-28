

export const ReservationDatesAndPrice = (startDate, endDate, hotelsPrice, roomsPrice)=>{
    const MSecond_per_day=1000*86400;
    const DatesLength = (Math.abs(endDate?.getTime()-startDate?.getTime())||0 )/MSecond_per_day
    const totalHotelsPrice = DatesLength*hotelsPrice||0
    const totalRoomsPrice = DatesLength*roomsPrice||0
    return{DatesLength,totalHotelsPrice,totalRoomsPrice}
}

