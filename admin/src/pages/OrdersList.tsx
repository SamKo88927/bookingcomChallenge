import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import { ordersData, ordersGrid} from '../data/dummy';
import { ordersGrid } from '../data/OrderData';

import { Header } from '../components';
import useFetch from '../hooks/useFetch';


const OrdersList = () => {
  //Api完整url是 http://localhost:5000/api/v1/order 
  const {data,loading,error} =useFetch("/order")
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="管理列表" title="訂單分頁" />
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
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default OrdersList;

