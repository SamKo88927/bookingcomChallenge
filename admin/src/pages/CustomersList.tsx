import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { customersGrid } from '../data/userData';
import useFetch from '../hooks/useFetch';

const CustomersList = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Print",'Delete',"Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const {data,loading,error} =useFetch("/users")
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="管理列表" title="顧客分頁" />
      <GridComponent
      className="flex justify-around"
        dataSource={data}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default CustomersList;
