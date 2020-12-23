export interface IFAQ02Props { }

const accordionData = [
  { id: '1', title: "Ipsum dolor sit amet consectetur 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Lorem ipsum dolor amet consectetur 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Lorem ipsum sit amet 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Lorem dolor sit amet consectetur 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]

const FAQ02 = ({ }: IFAQ02Props) => {
  return (
    <div className="d-grid grid-cols-1 sm-grid-cols-3 gap-2 text-grey-800">
      <div>
        <div className="text-3xl font-weight-700">
          Frequently asked questions
        </div>
        <div className="text-lg text-grey-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reach out to our{" "}
          <a href="#" className="text-primary-500">customer support</a>{" "}team.
        </div>
      </div>
      <div className="col-span-2">
        {
          accordionData.map(({ id, title, content }) => {
            return (
              <div className="mb-4">
                <div className="text-xl font-weight-600">
                  {title}
                </div>
                <div className="text-grey-500 mt-2">
                  {content}
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default FAQ02;
