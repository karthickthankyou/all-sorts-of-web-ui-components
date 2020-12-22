import React from 'react';
import CardBlogSection01 from './cards/CardBlogSection01'
import picture from '../../../assets/portrait.jpg'
export interface IBlogSection01Props { }

const BlogSection01 = ({ }: IBlogSection01Props) => {
  return (
    <div className="text-grey-800">
      <div className="text-3xl font-weight-600">
        Recent Publications
      </div>
      <div className="text-grey-500 mt-2 max-w-60ch">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet blanditiis optio nam veritatis molestias ullam?
      </div>
      <hr className="my-4" />
      <div className="d-grid auto-col-15 gap-1_5">
        <CardBlogSection01
          author={{
            avatar: picture,
            name: 'Paul York'
          }}
          blogType="Article"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
        <CardBlogSection01
          author={{
            avatar: picture,
            name: 'Paul York'
          }}
          blogType="Video"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
        <CardBlogSection01
          author={{
            avatar: picture,
            name: 'Paul York'
          }}
          blogType="Case Study"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
      </div>
    </div>
  );
};

export default BlogSection01;
