import React from 'react';
import CardBlog02 from './cards/CardBlog02'
export interface IBlogSection02Props { }

const BlogSection02 = ({ }: IBlogSection02Props) => {
  return (
    <div className="text-center text-grey-800">
      <div className="text-3xl font-weight-600">
        From the blog
      </div>
      <div className="text-grey-500 max-w-60ch mx-auto mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque rerum iste odit corporis  harum facere quo.
      </div>
      <div className="d-grid auto-col-17_5 gap-1 mt-4">
        <CardBlog02
          author={{
            avatar: 'static/media/portrait.9d4ca520.jpg',
            name: 'Paul York'
          }}
          blogType="Article"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
        <CardBlog02
          author={{
            avatar: 'static/media/portrait.9d4ca520.jpg',
            name: 'Paul York'
          }}
          blogType="Article"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
        <CardBlog02
          author={{
            avatar: 'static/media/portrait.9d4ca520.jpg',
            name: 'Paul York'
          }}
          blogType="Article"
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sit recusandae reprehenderit velit, rem repudiandae eaque?"
          readDuration="6 min read"
          title="Boost your conversion rate"
        />
      </div>
    </div>
  );
};

export default BlogSection02;
