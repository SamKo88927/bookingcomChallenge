import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

// import { roomsData, roomsGrid } from '../data/dummy';
import { Header } from '../components';
import useFetch from '../hooks/useFetch';
import { roomsGrid } from '../data/RoomData';

const RoomsList = () => {
  const toolbarOptions = ['Search'];
  const {data,loading,error} =useFetch("/rooms")
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
       <Header category="管理列表" title="房型分頁" />
      <GridComponent
        dataSource={data}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {roomsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default RoomsList;
