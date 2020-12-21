import React from 'react';
import picture from '../../../assets/portrait.jpg'
import CardTeam03 from './CardTeam03'
export interface ITeamSection03Props { }

const TeamSection03 = ({ }: ITeamSection03Props) => {
  const team = [];
  for (let i = 0; i < 24; i++) {
    team.push(<CardTeam03
      name="Floyd Miles"
      picture={picture}
      role="Senior Designer"
    />)
  }
  return (
    <div className="text-center">
      <div className="text-3xl font-weight-700">
        The People
      </div>
      <div className="text-grey-500 mt-2 max-w-60ch mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati rem alias ipsa quae soluta quasi?
      </div>

      <div className="d-grid auto-col-7_5 mt-5 gap-3">
        {team}
      </div>

    </div>
  );
};

export default TeamSection03;
