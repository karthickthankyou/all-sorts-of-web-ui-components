import Accordion from '../../common/Accordion'
export interface IFAQ01Props { }

const accordionData = [
  { id: '1', title: "Ipsum dolor sit amet consectetur 1", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '2', title: "Lorem ipsum dolor amet consectetur 2", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '3', title: "Lorem ipsum sit amet 3", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '4', title: "Lorem dolor sit amet consectetur 4", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '5', title: "Ipsum dolor sit amet 5", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
  { id: '6', title: "Lorem ipsum dolor sit amet consectetur 6", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, magni! Numquam provident veritatis eveniet maxime!' },
]

const FAQ01 = ({ }: IFAQ01Props) => {
  return (
    <div className="text-center text-grey-800 d-flex justify-center bg-grey-100">
      <div className="w-50">

        <div className="text-4xl font-weight-600 border-bottom py-3">
          Frequently asked questions
      </div>
        <div className="text-left divider-y">
          {
            accordionData.map(({ id, title, content }) => {
              return (
                <Accordion id={id}
                  title={
                    <div className="font-weight-600">{title}</div>
                  }
                  content={
                    <div className="text-grey-600">{content}</div>
                  } />
              )
            })
          }
        </div>
      </div>

    </div>
  );
};

export default FAQ01;
