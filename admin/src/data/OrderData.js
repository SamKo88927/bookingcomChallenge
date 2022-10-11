import useFetch from "../hooks/useFetch";
import { format, parseISO } from 'date-fns';
import { ReservationDatesAndPrice } from "../datesCalculate";

export const gridOrderhotelsImage = (props) => {
  const { data, loading, error } = useFetch(`/hotels/find/${props.hotelId}`)
  return (
    <div>
      {
        loading ? <>載入中</> :
          <img
            className="rounded-xl h-20 min-w-20 ml-1 "
            src={data.photos?.[0]}
            alt="order-item"
          />
      }
    </div>
  )
};
export const gridOrderRoomName = (props) => {
  const Url = `/rooms/findroom/${props.RoomNumberId.map((Id) => Id)}`
  const { data, loading, error } = useFetch(Url)
  return (
    <div>
      {
        loading ? <>載入中</> :
          <div>{data.map((room,i) => <div key={i}> {room.title} </div>)}</div>
      }
    </div>
  )
};

export const gridOrderReservationDates = (props) => (
  <div>
    {format(parseISO(props.ReservationDates[0].startDate), "MM/dd/yyyy")}-
    {format(parseISO(props.ReservationDates[0].endDate), "MM/dd/yyyy")}
  </div>
);
export const gridOrderUserName = (props) => {
  const Url = `/users/${props.userId}`
  const { data, loading, error } = useFetch(Url)
  return (
    <div>
      {
        loading ? <>載入中</> :
          <div>{data.username}</div>
      }
    </div>
  )
};

export const gridOrderPrice = (props) => {
  const Url = `/rooms/findroom/${props.RoomNumberId.map((Id) => Id)}`
  const { data, loading, error } = useFetch(Url)
const priceList =[]
  data.map((room) =>{
  const { totalRoomsPrice } = ReservationDatesAndPrice
    (props.ReservationDates[0].startDate, props.ReservationDates[0].endDate, room.price)
    priceList.push(totalRoomsPrice)
  })
  return (
    <div>
      {
        loading ? <>載入中</> :
          <div>{priceList.map((price,i) => <div key={i}> {price}</div>)}</div>
      }
    </div>
  )
};

export const gridOrderStatus = (props) => (
  <>
    {props.status === "待確認訂單" ?
      <button
        type="button"
        style={{ background: "#FF3939" }}
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
      >
        {props.status}
      </button> :
      <>{props.status}</>
    }
  </>
);

export const ordersGrid = [
  {
    headerText: "飯店照片",
    template: gridOrderhotelsImage,
    textAlign: 'Center',
    width: '150',
  },
  {
    template:gridOrderRoomName,
    // field: "RoomNumberId",
    headerText: '房型名稱',
    width: '200',
    editType: 'dropdownedit',
  },
  {
    template: gridOrderReservationDates,
    headerText: '住宿日期',
    width: '200',
  },
  {
    template: gridOrderUserName,
    headerText: '用戶名',
    width: '150',
  },
  {
    template: gridOrderPrice,
    headerText: '總價格',
    format: 'C2',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: '訂單狀態',
    template: gridOrderStatus,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: '_id',
    headerText: '訂單ID',
    width: '120',
    textAlign: 'Center',
  },
];



