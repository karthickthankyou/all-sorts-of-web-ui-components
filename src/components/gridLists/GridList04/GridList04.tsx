import picture from '../../../assets/portrait.jpg'
export interface IGridList04Props {
  employeeData: any
}


const GridList04 = ({ employeeData }: IGridList04Props) => {
  return (
    <div className="d-grid grid-cols-1 xs-grid-cols-2 sm-grid-cols-3 lg-grid-cols-4 gap-1 text-grey-800">
      {employeeData.map((data: any) => {

        return <div className="d-flex items-center">
          <img src={picture} alt="" className="rounded-circle object-cover w-3 h-3" />
          <div className='ml-2'>
            <div className="font-weight-600">
              {data.name}
            </div>
            <div className="text-grey-500">
              {data.role}
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default GridList04;
