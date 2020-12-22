import React from 'react';
import CardBlog03 from './cards/CardBlog03'
export interface IBlogSection03Props { }

const BlogSection03 = ({ }: IBlogSection03Props) => {
  return (
    <div>
      <div className="sm-d-flex justify-between items-end">
        <div>
          <div className="text-3xl font-weight-600">
            Press
          </div>
          <div className="text-grey-500 max-w-60ch mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium unde perferendis odio autem perspiciatis.
          </div>
        </div>
        <div className="mt-3 sm-mt-0">
          <input type="text" placeholder="Enter your email" />
          <button className="text-white bg-primary-500 ml-2">Notify me</button>
        </div>
      </div>
      <hr className="my-3" />
      <div className="d-grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-3 gap-1_5">
        <CardBlog03
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, ex iure autem qui error suscipit aperiam consequuntur cupiditate, laudantium dolores aspernatur quam corrupti rerum!"
          title="Boost your conversion rate"
        />
        <CardBlog03
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, ex iure autem qui error suscipit aperiam consequuntur cupiditate, laudantium dolores aspernatur quam corrupti rerum!"
          title="Boost your conversion rate"
        />
        <CardBlog03
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, ex iure autem qui error suscipit aperiam consequuntur cupiditate, laudantium dolores aspernatur quam corrupti rerum!"
          title="Boost your conversion rate"
        />
        <CardBlog03
          date="Mar 16, 2020"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum, ex iure autem qui error suscipit aperiam consequuntur cupiditate, laudantium dolores aspernatur quam corrupti rerum!"
          title="Boost your conversion rate"
        />
      </div>
    </div>
  );
};

export default BlogSection03;
