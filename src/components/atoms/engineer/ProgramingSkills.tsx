import React, { FC } from 'react';

const ProgramingSkillDatas = [
  {
    id: 1,
    skill: 'Java',
    description:
      '2007年から2016年までバージョン1.4～1.7を使用しServlet、JSPにてWeb開発を実施。<br>2018年9月から1年間Androidアプリ開発にて使用していた。<br>また静的構造解析の対象として解析の経験もあり。',
  },
  {
    id: 2,
    skill: 'Kotlin',
    description:
      '業務では3ヶ月程度Android開発にて使用<br>趣味でサーバーサイドKotlinの技術同人誌を執筆',
  },
  {
    id: 3,
    skill: 'PHP',
    description:
      '2016年から2年間使用。<br>業務でPHP5系を、趣味でPHP7系を使用していた。',
  },
  {
    id: 4,
    skill: 'Ruby(Rails)',
    description: '2019年9月から現在業務で利用している。',
  },
  {
    id: 5,
    skill: 'JavaScript',
    description: '12年ほど業務のフロントエンド開発にて使用。',
  },
  {
    id: 6,
    skill: 'TypeScript',
    description:
      '2019年9月から現在業務で利用している。<BR>本サイトでも使用している。',
  },
  {
    id: 7,
    skill: 'React',
    description:
      '2019年9月から現在業務で利用している。<BR>本サイトでも使用している。',
  },
  {
    id: 8,
    skill: 'jQuery',
    description:
      '2016年から2年間1.4系、または1.7系でフロントエンド開発に使用。<br>jQuery Mobileの開発経験もあり。2016年まではJavaScriptにてフロントエンド開発を実施。',
  },
  {
    id: 9,
    skill: 'C/C++',
    description:
      '組み込み開発で1年経験あり。<br>静的構造解析の対象として5年間分析の経験あり。<br>関数呼び出しの可視化やC++クラス継承関係の可視化などを実施。',
  },
];

const ProgramingSkills: FC = () => {
  return (
    <div>
      <h3>プログラミングスキル</h3>
      <ul className="list_items">
        {ProgramingSkillDatas.map((programingSkill) => (
          <li key={programingSkill.id}>
            {programingSkill.skill}
            <ul key={programingSkill.id} className="list_items">
              <li
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: programingSkill.description,
                }}
              />
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramingSkills;
