import CardGridList01 from './cards/CardGridList01'
export interface IGridList01Props { }

const GridList01 = ({ }: IGridList01Props) => {
  return (
    <div className="d-grid grid-cols-1 xs-grid-cols-2 sm-grid-cols-3 gap-1 text-grey-800">
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
      <CardGridList01
        displayName="Jane Cooper"
        jobTitle="Regional Paradigm Technician"
        role="Admin"
      />
    </div>
  );
};

export default GridList01;
