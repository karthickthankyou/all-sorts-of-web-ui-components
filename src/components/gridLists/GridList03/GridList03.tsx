import ReactDOM from 'react-dom'
import { useState, useRef } from 'react'

export interface IGridList03Props { }

const pinnedProjectsData = [
  {
    id: '1',
    initials: 'GA',
    initialsColor: 'red',
    title: 'Graph API',
    membersCount: 14,
  },
  {
    id: '2',
    initials: 'RC',
    initialsColor: 'primary',
    title: 'React Components',
    membersCount: 14,
  },
  {
    id: '3',
    initials: 'CD',
    initialsColor: 'green',
    title: 'Component Design',
    membersCount: 14,
  },
  {
    id: '4',
    initials: 'T',
    initialsColor: 'yellow',
    title: 'Templates',
    membersCount: 14,
  },
]

const GridList03 = ({ }: IGridList03Props) => {
  const [selected, setSelected] = useState('')
  return (
    <div className="bg-grey-100 p-4">
      <div className="text-grey-500 uppercase">Pinned projects</div>
      <div className="d-grid grid-cols-4 gap-1 mt-2">
        {[
          pinnedProjectsData.map(details => {
            return (
              <CardGridList03 key={details.id} details={details} selected={selected} setSelected={setSelected} />
            )
          })
        ]}
      </div>
    </div>
  );
};

const CardGridList03 = ({ details, selected, setSelected }: any) => {
  console.log(details);
  const dropdownEl = useRef(null)

  return (
    <div className="relative bg-white">
      <div className="d-flex overflow-hidden rounded border shadow-sm h-full">
        <div className={`w-4 bg-${details.initialsColor}-500 d-flex items-center justify-center text-white`}>
          {details.initials}
        </div>
        <div className="p-3">
          <div className="font-weight-600">
            {details.title}
          </div>
          <div className="text-grey-500">
            Members {details.membersCount}
          </div>
        </div>
        <button className=" ml-auto" onClick={() => selected === details.id ? setSelected("") : setSelected(details.id)}>
          <i className="fas fa-ellipsis-v" />

          {selected === details.id && (
            <DropdownPortal parentEl={dropdownEl.current}>
              <div className="absolute top-full right-0 shadow-lg divider-y rounded overflow-hidden">
                {
                  ['Message', 'Exit group', 'Delete group', 'Report'].map(menuItem => {
                    return (

                      <div key={menuItem} className="bg-white p-2 hover-bg-grey-100">
                        {menuItem}
                      </div>

                    )
                  })
                }
              </div>
            </DropdownPortal>)}

        </button>
      </div >
      <div ref={dropdownEl}></div>
    </div >
  )
}


const DropdownPortal = ({ children, parentEl }: any) => {
  if (!parentEl) {
    return null;
  } else {
    return ReactDOM.createPortal(
      children,
      parentEl
    )
  }

}

export default GridList03;
