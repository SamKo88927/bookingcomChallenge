//////
export const gridHotelImage = (props) => (
    <div>
      <img
        className="rounded-xl h-20 ml-3 "
        src={props.photos[0]}
        alt="order-item"
      />
    </div>
  );
  export const gridHotelStatus = (props) => (
    props.popularHotel == true ?
      <button
        type="button"
        style={{ background: "#E14761" }}
        className="text-white py-1 px-3 capitalize rounded-2xl text-md"
      >
        熱門飯店
      </button> : <p>一般飯店</p>
  );
  export const hotelsGrid = [
    {
      headerText: "飯店名稱",
      field: 'name',
      textAlign: 'Center',
      width: '100',
    },
    {
      headerText: "飯店照片",
      template: gridHotelImage,
      textAlign: 'Center',
      width: '150',
    },
    {
      field: 'type',
      headerText: '飯店種類',
      width: '100',
      editType: 'dropdownedit',
    },
    {
      field: 'city',
      headerText: '城市',
      width: '100',
    },
    {
      field: 'address',
      headerText: '地址',
      width: '200',
    },
    {
      field: 'cheapestPrice',
      headerText: '總價格',
      format: 'C2',
      editType: 'numericedit',
      width: '100',
    },
    {
      headerText: '是否是熱門',
      template: gridHotelStatus,
      field: 'popularHotels',
      width: '120',
    },
    {
      field: '_id',
      headerText: '飯店ID',
      width: '120',
    },
  ];
  
  