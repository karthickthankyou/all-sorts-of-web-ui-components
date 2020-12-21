export interface ICardTeamSection01Props {
  name: string,
  role: string,
  picture: string
}

const CardTeamSection01 = ({ name, role, picture }: ICardTeamSection01Props) => {
  return (
    <div>
      <img src={picture} alt="" className="w-full h-14 object-cover rounded shadow-md" />
      <div className="font-weight-600 mt-2">
        {name}
      </div>
      <div className="text-primary-500">
        {role}
      </div>
      <div className="text-grey-500">
        <i className="fab fa-twitter py-2 pr-2 cursor-pointer hover-text-grey-700" />
        <i className="fab fa-linkedin py-2 pr-2 cursor-pointer hover-text-grey-700" />
      </div>
    </div>
  );
};

export default CardTeamSection01;
