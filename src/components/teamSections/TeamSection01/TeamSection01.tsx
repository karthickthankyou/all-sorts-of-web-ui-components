import React from 'react';
import CardTeamSection01 from './CardTeamSection01'
import picture from '../../../assets/portrait.jpg'
export interface ITeamSection01Props { }

const TeamSection01 = ({ }: ITeamSection01Props) => {
  return (
    <div>
      <div className="text-3xl font-weight-700">
        Our Team
      </div>
      <div className="text-grey-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nihil maiores perspiciatis ipsam similique?
      </div>
      <div className="d-grid grid-cols-1 xs-grid-cols-2 sm-grid-cols-3 lg-grid-cols-4 gap-1 mt-4">
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
        <CardTeamSection01
          name="Lindsay Walton"
          picture={picture}
          role="Front-end Developer"
        />
      </div>
    </div>
  );
};

export default TeamSection01;
