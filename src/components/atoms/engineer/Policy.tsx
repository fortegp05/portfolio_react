import React, { FC } from 'react';
import './Policy.css';

const Policy: FC = () => {
  return (
    <>
      <h2>大事にしていること</h2>
      <ul className="list_items">
        <li>
          <span className="emphasis">
            開発を通してプロダクトに関わる全員を幸せにすること
          </span>
          <br />
          自分、チーム、自社(組織)、ユーザー(お客様)、協力会社、それぞれの家族などを、
          <br />
          私が持てる技術でプロダクトを通して幸せにしたい。
        </li>
        <li>
          <span className="emphasis">
            もっとうまく開発するやり方を探し求め、分かちあい、見出していくこと
          </span>
          <br />
          でも深刻にならず楽しみながらやっていく。
        </li>
        <li>
          <span className="emphasis">ITエンジニアの楽しさを共有すること</span>
          <br />
          楽しく開発している人がいることを発信していきたい。
        </li>
      </ul>
    </>
  );
};

export default Policy;
