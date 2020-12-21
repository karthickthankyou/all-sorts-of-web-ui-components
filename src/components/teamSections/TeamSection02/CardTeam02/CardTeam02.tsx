export interface ICardTeam02Props {
  name: string,
  role: string,
  picture: string
}

const CardTeam02 = ({ name, role, picture }: ICardTeam02Props) => {
  return (
    <div className="d-flex items-center">
      <img src={picture} alt="" className="rounded-circle w-4 h-4 object-cover" />
      <div className="ml-3">
        <div className="font-weight-600">
          {name}
        </div>
        <div className="text-primary-500 mt-1">
          {role}
        </div>
      </div>
    </div>
  );
};

export default CardTeam02;
