import React from 'react';
import CardTeam02 from './CardTeam02'
import picture from '../../../assets/portrait.jpg'
export interface ITeamSection02Props { }

const TeamSection02 = ({ }: ITeamSection02Props) => {
  return (
    <div className="d-grid grid-cols-1 sm-grid-cols-3 gap-2">
      <div>
        <div className="text-3xl font-weight-700">
          Meet our leadership
          </div>
        <div className="text-grey-500 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam officia nobis praesentium obcaecati repellat, quo reiciendis voluptatum sint delectus voluptatibus esse.
          </div>
      </div>
      <div className="col-span-2">
        <div className="d-grid grid-cols-1 xs-grid-cols-2 lg-grid-cols-3 gap-2">
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
          <CardTeam02
            name="Leslie Alexander"
            picture={picture}
            role="Co-founder / CEO"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection02;
