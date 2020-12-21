export interface ICardTeam03Props {
  name: string,
  role: string,
  picture: string
}

const CardTeam03 = ({ name, role, picture }: ICardTeam03Props) => {
  return (
    <div>
      <img src={picture} alt="" className="w-6 h-6 rounded-circle object-cover" />
      <div className="font-weight-600">
        {name}
      </div>
      <div className="text-primary-500">
        {role}
      </div>
    </div>
  );
};

export default CardTeam03;
