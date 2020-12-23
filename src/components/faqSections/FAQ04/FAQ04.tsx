import { ReactNode } from 'react'

export interface IFAQ04Props {
  faqData: {
    id: string;
    title: string | ReactNode;
    content: string | ReactNode
  }[]
}

const FAQ04 = ({ faqData }: IFAQ04Props) => {
  return (
    <div className="text-grey-800">
      <div className="text-3xl font-weight-700 border-bottom py-3">
        Frequently asked questions
      </div>

      <div className="d-grid grid-cols-1 xs-grid-cols-2 sm-grid-cols-3 py-3 gap-2">
        {
          faqData.map(({ id, title, content }) => {
            return (
              <div key={id}>
                <div className="font-weight-600">
                  {title}
                </div>
                <div className="col-span-2 text-grey-600 mt-2">
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

export default FAQ04;
