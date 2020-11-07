import React, { FC } from 'react';
import SelfPortrait from '../../atoms/index/SelfPortrait';
import ProfileInformations from './ProfileInformations';
import './SelfIntroduction.css';

const SelfIntroduction: FC = () => {
  return (
    <>
      <div className="two_column">
        <div className="two_column_img">
          <SelfPortrait />
        </div>
        <div className="two_column_about">
          FORTE(フォルテ)と申します。 <br />
          楽しさを発信するWebエンジニア。 <br />
          ジョナサン・ラスマセンの、 <br />
          「もっとうまくソフトウェアを届けるやり方を探し求め、分かちあい、見出していこう{' '}
          <br />
          （でもあんまり深刻に受け止めすぎないで。楽しみながらやっていこう）」{' '}
          <br />
          の体現を目指して日々奮闘中。
        </div>
      </div>
      <ProfileInformations />
    </>
  );
};

export default SelfIntroduction;
