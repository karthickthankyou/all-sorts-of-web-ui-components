
export interface ICardGridList02Props {
  displayName: string,
  jobTitle: string,
  role: string,
  avatar: string
}


const CardGridList02 = ({ displayName, jobTitle, role, avatar }: ICardGridList02Props) => {
  return (
    <div className="rounded shadow-sm bg-white">
      <div className="text-center border-bottom  p-4">
        <img src={avatar} alt="" className="w-8 h-8 object-cover rounded-circle" />
        <div className="textsm font-weight-600 mt-3">{displayName}</div>
        <div className="text-grey-500 mt-1 text-sm mt-2">
          {jobTitle}
        </div>
        <div className="bg-green-200 text-green-700 px-1 rounded-circle ml-2 text-sm d-inline-block mt-2">{role}</div>
      </div>
      <div className="d-flex divider-x">
        <button className="text-xs w-full py-3 hover-bg-grey-100 rounded-0">
          <i className="text-grey-400  fas fa-envelope fa-lg mr-2" />
          Email
        </button>
        <button className="text-xs w-full py-3 hover-bg-grey-100 rounded-0">
          <i className="text-grey-400  fas fa-phone fa-lg mr-2" />
          Call
        </button>
      </div>
    </div>
  );
};

export default CardGridList02;
