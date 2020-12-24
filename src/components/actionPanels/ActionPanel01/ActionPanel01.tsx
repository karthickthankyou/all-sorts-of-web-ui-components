import classNames from 'classnames'
export interface IActionPanel01Props {
  title: string;
  desc: string;
  buttonText: string;
  buttonColor: 'green' | 'red' | 'yellow';
}

const ActionPanel01 = ({ title, desc, buttonText, buttonColor }: IActionPanel01Props) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm max-w-50 w-full">
      <div className="text-xl font-weight-600">
        {title}
      </div>
      <div className="text-grey-500 mt-1 max-w-60ch">
        {desc}
      </div>

      <button className={`bg-${buttonColor}-200 text-${buttonColor}-700 hover-text-${buttonColor}-600 rounded mt-3`}>
        {buttonText}
      </button>
    </div>
  );
};

export default ActionPanel01;
