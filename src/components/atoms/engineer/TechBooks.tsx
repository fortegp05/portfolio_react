import React, { FC } from 'react';
import TechBookDatas from '../../../data/TechBooks'

const TechBooks: FC = () => {
  const techBooks = [...(TechBookDatas[0].books), ...(TechBookDatas[1].books)]

  return (
    <>
      <h3>技術書</h3>
      <div>
        <ul className="list_items">
          {techBooks.map((techBook) => (
            <li key={techBook.id}>
              {techBook.title}<br />
              <span dangerouslySetInnerHTML={{__html: techBook.description}} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};

export default TechBooks;