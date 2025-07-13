import React, { FC } from 'react';
import TechBookDatas from '../../../data/TechBooks'

const TechBook: FC = () => {
  const techBooks = TechBookDatas

  return (
      <>
        {techBooks.map((techBook) => (
          <div key={techBook.id}>
            <h2>{techBook.type}</h2>
            <div className="update_date">2025年07月現在</div>

            {techBook.books.map((book) => (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <p key={book.id} dangerouslySetInnerHTML={{__html: book.description}} />
              </div>
            ))}
          </div>
        ))}
      </>
  );
};

export default TechBook;