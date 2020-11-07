import React, { FC } from 'react';

const Podcast: FC = () => {
  return (
    <>
      <h3>Podcast</h3>
      <div>
        <ul className="list_items">
            <li>
                パーソナリティ
                <ul className="list_items">
                    <li>
                        <a href="https://fortegp05.github.io/aozorafm/" target="_blank" rel="noopener noreferrer nofollow">aozora.fm</a><br />
                        aozora.fmは仕事や趣味の楽しさを共有するpodcast。
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </>
  )
};

export default Podcast;