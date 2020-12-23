import React from 'react';

export interface IAdvancedProps {
  employeeData:
  {
    name: string,
    email: string,
    jobTitle: string,
    department: string,
    status: string,
    role: string,
    avatar: string
  }[]
}

const Advanced = ({ employeeData }: IAdvancedProps) => {
  return (
    <div className="rounded shadow-md overflow-hidden overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-primary-100 border-bottom">
          <tr>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Name</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Title</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Status</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm">Role</th>
            <th className="font-weight-400 uppercase p-3 text-grey-600 text-sm"></th>
          </tr>
        </thead>
        <tbody className="divider-y bg-white">
          {employeeData.map(({ avatar, name, email, jobTitle, department, status, role, }) => {
            return (
              <tr>
                <td className="p-3 d-flex items-center">
                  <img src={avatar} alt="" className="rounded-circle w-3 h-3 object-cover mr-3" />
                  <div>
                    <div className="font-weight-600">
                      {name}
                    </div>
                    <div className="text-grey-500">
                      {email}
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div>
                    <div>
                      {jobTitle}
                    </div>
                    <div className="text-grey-500">
                      {department}
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="bg-green-200 text-green-800 rounded-circle lh-font-size text-sm d-inline-block px-2 py-1">{status}</div>
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

export default Advanced;
