import React, { FC } from 'react'

const JobCareer: FC = () => {
  return (
    <>
      <h2>職務経歴の詳細</h2>
      <h3>現職：自社SaaSアプリのWebエンジニア(2019年09月～)</h3>
      <div>
        SaaSアプリの開発。
        <ul className="list_items">
          <li>
            自社SaaSアプリ開発のメンバーとして以下の業務を実施。<br />
            言語はRuby(Rails)。
            <ul className="list_items">
              <li>詳細設計</li>
              <li>開発</li>
              <li>テスト(RSpec)</li>
              <li>保守・運用</li>
            </ul>
          </li>
          <li>
            同SaaSアプリのCSE（Customer Success Engineer）<br />
            CSEとして顧客の成功に貢献。<br />
            領域としてはCSEを超え、システムエンジニアやセールスエンジニアのようなことも実施。
            <ul className="list_items">
              <li>問い合わせ対応</li>
              <li>障害切り分け</li>
              <li>商談参加・提案</li>
              <li>不具合状況のレポート</li>
              <li>API連携開発管理</li>
            </ul>
          </li>
          <li>
            同SaaSアプリのAndroid版開発。<br />
            Androidアプリ開発のメンバーとして以下の業務を実施。<br />
            言語はKotlin。
            <ul className="list_items">
              <li>詳細設計</li>
              <li>開発</li>
              <li>テスト</li>
              <li>リリース</li>
              <li>保守・運用</li>
            </ul>
          </li>
          </ul>
      </div>
      <h3>前職：スマホアプリの開発(2018年09月～2019年8月)</h3>
      <div>
        自社開発のスマホアプリについてメンバーとして主に開発を担当。
        <ul className="list_items">
          <li>
            自社アプリのAndroid開発のメンバーとして以下の業務を実施。<br />
            言語はJava。
            <ul className="list_items">
              <li>詳細設計</li>
              <li>開発</li>
              <li>テスト</li>
              <li>リリース</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_items">
          <li>
            新規メディアサイトのインフラ構築として、<br />
            AWS + WordPress環境を構築。<br />
            以下のAWSの機能を使用し本番、Staginig環境を構築。
            <ul className="list_items">
              <li>EC2</li>
              <li>VPC</li>
              <li>CloudFront</li>
              <li>S3</li>
              <li>Route53</li>
              <li>CodeCommit</li>
              <li>CodeDeploy</li>
              <li>CodePipeline</li>
              <li>Certificate Manager</li>
              <li>Simple Email Service</li>
            </ul>
          </li>
        </ul>
      </div>

      <h3>旅行比較サイトの開発・運営(2016年06月～2018年08月)</h3>
      <div>
        プロジェクトリーダー(PL)またはメンバーを担当<br />
        開発プロジェクトによってはPLを担当した。
        <ul className="list_items">
          <li>
            具体的に以下の業務を実施。
            <ul className="list_items">
              <li>他部署(企画設計、営業)や契約先会社との連携(仕様確認、仕様調整など)</li>
              <li>設計(要件から機能設計書の作成、詳細設計)</li>
              <li>工程管理</li>
              <li>工数見積</li>
              <li>開発メンバーの管理(1人～2人)</li>
              <li>開発</li>
              <li>テスト</li>
              <li>保守運用(障害対応、調査、チューニングなど)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_items">
          <li>
            PLを担当した具体的な開発プロジェクトの内容については以下の通り。
            <ul className="list_items">
              <li>
                スマホサイトリニューアル<br />
                サイト内の全メニューにおいてスマホサイトのリニューアルを実施した際、<br />
                主要メニューのひとつについてPLを担当。<br />
                デザイン変更、jQuery Mobileの撤廃、HTML5化などを実施。
              </li>
              <li>
                提携サイトのスマホ対応<br />
                自社システムを利用した提携サイトスマホ対応のPLを担当。<br />
                上記のPL業務の他、スマホ化の要件定義を行い顧客との折衝も実施。
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_items">
          <li>
            その他の業務
            <ul className="list_items">
              <li>
                デグレード確認テストの自動化<br />
                Codeceptionを用いたテストの自動化
              </li>
              <li>
                契約旅行会社サイトのクローリング(旅行商品情報の取得、在庫情報の更新など)<br />
                PhantomJSを用いたクローリングの実施
              </li>
              <li>
                予実管理の見える化<br />
                プロジェクトの予算と実績からプロジェクト予実の見える化を半年かけて実施。<br />
                スライドにまとめての成果をシステム部(約50人)に向けて発表。
              </li>
              <li>
                バッチ処理管理の移行(cronからRundeckへ)<br />
                バッチ処理を管理(スケジューラ)をcronからRundeckへ移行。
              </li>
              <li>
                ソース管理システムの移行<br />
                SubversionからGitHubへの移行。
              </li>
            </ul>
          </li>
        </ul>
      </div>
      　　　
      <h3>1社目：SIerにてPLまたはメンバーを担当(2007年4月～2016年03月)</h3>
      <div>
        受託開発案件の見積・契約、設計、開発、保守・運用を担当。<br />
        開発プロジェクトによってはPLを担当した。
        <ul className="list_items">
          <li>
            設計開発支援ツールの受託開発を担当(2007年4月～2012年11月)<br />
            お客様が開発している大規模製品(30年以上、人員200人以上が参加)において、<br />
            システム構造の見える化のためにソースコードの静的解析結果を、<br />
            イントラサイトで公開する設計開発支援ツールの開発を担当していた。<br />
            開発にはメンバーとして参加し開発プロジェクトによってはPLとして、以下の業務を実施。
            <ul className="list_items">
              <li>お客様からの要件ヒアリング、要件定義</li>
              <li>お客様との定例(開発進捗報告など)</li>
              <li>設計(要件から機能設計書の作成、詳細設計)</li>
              <li>工程管理</li>
              <li>工数見積</li>
              <li>開発メンバーの工数管理(1人～2人)</li>
              <li>サーバー構築(OSインストールから設定まで)</li>
              <li>開発</li>
              <li>テスト</li>
              <li>保守運用(障害対応、調査、チューニングなど)</li>
              <li>現地作業(リリース作業、サーバー構築)</li>
            </ul>
            <br />
            具体的な実績、取り組みなど。
            <ul className="list_items">
              <li>
                システムの消費メモリ使用量低減と低減に伴う性能対策を実施。<br />
                最大ターンアラウンドタイム3秒を維持しながら、<br />
                2GB～8GB使用していたメモリを1GB以下に低減。
              </li>
              <li>
                社内未経験のデータベースとプログラム言語の導入を担当。<br />
                有識者が居ない中6ヶ月ほどで機能開発を行いリリースを達成。
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_items">
          <li>
            トラック離発着管理システムの改修と運用(2012年12月～2015年3月)<br />
            大手物流会社様向けにトラックなどの離発着予定と実績の入力・管理を行うシステム。<br />
            離発着予定の他、積載するコンテナの量も入力・管理が可能。<br />
            開発にはメンバーとして参加し、2013年3月からはPLとして以下の業務を実施。
            <ul className="list_items">
              <li>お客様からの要件ヒアリング、要件定義</li>
              <li>お客様との定例(開発進捗報告など)</li>
              <li>設計(要件から機能設計書の作成、詳細設計)</li>
              <li>工程管理、工数見積</li>
              <li>開発メンバーの工数管理(1人～2人)</li>
              <li>現地作業(現地テスト、リリース)</li>
              <li>サーバー増強対応(サーバーやOS、ミドルウェア等の選定と発注)</li>
              <li>インフラ設計、構築(OS、ミドルウェアのインストールと設定、テスト)</li>
              <li>システム保守(ハードウェア、ソフトウェアの保守)</li>
              <li>開発</li>
              <li>テスト</li>
              <li>保守運用(障害対応、調査、チューニングなど)</li>
              <li>現地作業(リリース作業、サーバー構築)</li>
            </ul>
            <br />
            具体的な実績、取り組みなど。
            <ul className="list_items">
              <li>
                システムの全国展開対応を実施。<br />
                導入拠点数を500前後から全国3,000前後に増やすため、<br />
                サーバー増強と性能対策を実施し全国展開を達成。<br />
                サーバーは当初四台構成から十台まで増加対応を実施。
              </li>
              <li>
                実績データダウンロード機能の性能対策<br />
                性能対策のため、日々の業務に影響が無い範囲で、<br />
                オンデマンド処理からバッチ処理への変更を実施。
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_items">
          <li>
            大規模システムの障害アラート系とログ機能改修(2015年4月～2016年3月)<br />
            開発メンバーを担当。
            <ul className="list_items">
              <li>詳細設計</li>
              <li>開発</li>
              <li>テスト</li>
            </ul>
            <br />
            実績、取り組みなど。
            <ul className="list_items">
              <li>製品内に使用する200前後のコマンドに対してログ出力機能の改修を実施。</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default JobCareer;