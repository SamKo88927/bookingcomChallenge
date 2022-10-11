

export const ReservationDatesAndPrice = (startDate, endDate,roomsPrice) => {
    const MSecond_per_day = 1000 * 86400;
    const DatesLength = 
    (Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) || 0) / MSecond_per_day
    const totalRoomsPrice = DatesLength * roomsPrice || 0
    return { DatesLength, totalRoomsPrice }
}


