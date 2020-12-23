import classNames from 'classnames'
export interface ISimpleTableProps {
  employeeData:
  {
    name: string,
    email: string,
    jobTitle: string,
    department: string,
    status: string,
    role: string,
    avatar: string
  }[],
  variant?: 'zebra' | "divider"
}

const SimpleTable = ({ employeeData, variant = "divider" }: ISimpleTableProps) => {
  return (
    <div className="rounded shadow-md overflow-hidden overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-primary-100 border-bottom">
          <tr className="letter-spacing-1">
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Name</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Title</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Status</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Role</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm"></th>
          </tr>
        </thead>
        <tbody className={classNames({ "zebra-tr": variant === 'zebra', "divider-y bg-white": variant === 'divider', })}>
          {employeeData.map(({ avatar, name, email, jobTitle, department, status, role, }) => {
            return (
              <tr>
                <td className="p-3">
                  <div className="font-weight-600">
                    {name}
                  </div>
                </td>
                <td className="p-3 text-grey-600">
                  <div>
                    {jobTitle},{" "}{department}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-grey-500">
                    {email}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-grey-600">
                    {role}
                  </div>
                </td>
                <td className="p-3">
                  <button className="text-primary-500">
                    Edit
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
