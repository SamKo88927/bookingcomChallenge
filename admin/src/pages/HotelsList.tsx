import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import {  hotelsData, hotelsGrid } from '../data/dummy';

import { Header } from '../components';
import useFetch from '../hooks/useFetch';
import { hotelsGrid } from '../data/HotelData';
const HotelsList = () => {
  const {data,loading,error} =useFetch("/hotels")
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="管理列表" title="飯店分頁" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        editSettings={editing}
      >
        <ColumnsDirective >
          {hotelsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default HotelsList;

