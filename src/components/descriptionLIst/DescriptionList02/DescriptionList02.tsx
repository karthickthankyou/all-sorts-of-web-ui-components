import React from 'react';
import classNames from 'classnames'
export interface IDescriptionList02Props { }

const applicationData = [
  {
    key: "Full name",
    value: "Margot Foster",
  },
  {
    key: "Application for",
    value: "Backend Developer",
  },
  {
    key: "Email address",
    value: "margotfoster@example.com",
  },
  {
    key: "Salary expectation",
    value: "$120,000",
  },
  {
    key: "About",
    value: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
  },
]

const DescriptionList02 = ({ }: IDescriptionList02Props) => {
  return (
    <div className="text-grey-800 bg-grey-100 p-4">
      <div className="rounded overflow-hidden shadow-md">
        <div className="p-3 border-bottom bg-white">
          <div className="text-xl font-weight-600">
            Application Information
        </div>
          <div className="text-grey-500 text-sm mt-1">
            Personal details and application.
        </div>
        </div>
        <div className="divider-y bg-white">
          {
            applicationData.map(({ key, value }) => {
              return (
                <dl className="d-grid grid-cols-3 p-3">
                  <dt className="col-span-3 sm-col-span-1 text-grey-600">{key}</dt>
                  <dd className="col-span-3 sm-col-span-2 mt-1 sm-mt-0 xs-d-flex justify-between">
                    <div>{value}</div>
                    <button className="p-0 text-primary-400 hover-text-primary-500 mt-2 xs-ml-2 xs-mt-0">Update</button>
                  </dd>
                </dl>
              )
            })
          }
          <dl className="d-grid grid-cols-3 p-3">
            <dt className="col-span-3 sm-col-span-1 text-grey-600">Attachments</dt>
            <dd className="col-span-3 sm-col-span-2 mt-2 sm-mt-0 border rounded divider-y">
              {
                ["resume_back_end_developer.pdf", "coverletter_back_end_developer.pdf"].map(filename => {
                  return (
                    <div className="sm-d-flex p-2 items-center">
                      <i className="fas fa-paperclip mr-2 text-grey-400" />
                      <div className="text-grey-600 break-word">
                        {filename}
                      </div>
                      <div className="divider-x ml-auto">
                        <button className="p-0 pr-2 rounded-0 mt-2 hover-text-primary-500 text-primary-400">
                          Update
                        </button>
                        <button className="p-0 pl-2 rounded-0 mt-2 hover-text-primary-500 text-primary-400">
                          Remove
                        </button>
                      </div>
                    </div>)
                })
              }
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DescriptionList02;
