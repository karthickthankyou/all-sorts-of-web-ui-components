import { ReactNode } from 'react'

export interface IFAQ03Props {
  faqData: {
    id: string;
    title: string | ReactNode;
    content: string | ReactNode
  }[]
}

const FAQ03 = ({ faqData }: IFAQ03Props) => {
  return (
    <div className="text-grey-800">
      <div className="text-3xl font-weight-700 border-bottom py-3">
        Frequently asked questions
      </div>
      <div className="divider-y">
        {
          faqData.map(({ id, title, content }) => {
            return (
              <div key={id} className="d-grid grid-cols-1 sm-grid-cols-3 py-3">
                <div className="font-weight-600">
                  {title}
                </div>
                <div className="col-span-2 text-grey-600">
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

export default FAQ03;
