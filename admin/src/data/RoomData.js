import { BsFillPeopleFill } from "react-icons/bs";

export const gridRoomPeople = (props) => (
    <div className='flex gap-2 items-center justify-center'>
      <BsFillPeopleFill/>
      <div>
      {props.maxPeople}
      </div>
    </div> 
    
);
export const gridRoomNumbers = (props) =>  (
      <div>
        
           <div>{props.roomNumbers.map(
            (roomNumbers,i)=>
            <div key={i}>
            {roomNumbers.number}
            </div>
            )
            }</div>
   
      </div>
)


export const roomsGrid = [
  {
    headerText: '房型名稱',
    field:"title",
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'desc',
    headerText: '規格',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'price',
    headerText: '價格',
    width: '50',
  },
  {
    headerText: '適合人數',
    width: '120',
    textAlign: 'Center',
    template: gridRoomPeople,
  },
  {
    template: gridRoomNumbers,
    headerText: '房型編號',
    width: '120',
  },
  {
    headerText: '房型id',
    field:"_id",
    width: '150',
  },
];
