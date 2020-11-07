import React, { FC } from 'react';

const Blog: FC = () => {
  return (
    <>
      <h3>ブログなど</h3>
      <div>
          <ul className="list_items">
              <li>
                  <a href="https://fortegp05.hatenablog.com/" target="_blank" rel="noopener noreferrer nofollow">はてなブログ 青空な日々</a><br />
                  ITエンジニア関連で興味あることをアウトプットして共有したいブログ
              </li>
              <li>
                  <a href="https://qiita.com/FORTE" target="_blank" rel="noopener  noreferrer nofollow">Qiita</a><br />
              </li>
              <li>
                  <a href="https://zenn.dev/forte" target="_blank" rel="noopener  noreferrer nofollow">Zenn</a><br />
              </li>
          </ul>
      </div>
    </>
  );
};

export default Blog;