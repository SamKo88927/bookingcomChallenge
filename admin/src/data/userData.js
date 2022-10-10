import avatar from './avatar.jpg';
const customerGridImage = (props) => (
    <img
      className="rounded-full h-10 ml-1"
      src={avatar}
      alt="employee"
    />
  );
  
const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
      <p style={{ background:"#5CE1E6" }} className="rounded-full h-3 w-3" />
      <p>活躍中</p>
    </div>
);

export const customersGrid = [
    {
      type: 'checkbox', width: '50',
    },
    {
      width: '100',
      template: customerGridImage
    },
    {
      headerText: '顧客姓名',
      field: 'username',
      width: '100',
    },
    {
      field: 'email',
      headerText: 'Email',
      width: '150',
      textAlign: 'Center'
    },
    {
      headerText: '會員等級',
      width: '130',
      textAlign: 'Center',
      template: customerGridStatus
    },
    {
      field: 'createdAt',
      headerText: '註冊時間',
      width: '100',
      format: 'yMd',
      textAlign: 'Center'
    },
    {
      field: 'updatedAt',
      headerText: '上一次更新時間',
      width: '100',
      format: 'yMd',
      textAlign: 'Center'
    },
    {
      field: '_id',
      headerText: '顧客ID',
      width: '120',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
  
  ];
  
  

  