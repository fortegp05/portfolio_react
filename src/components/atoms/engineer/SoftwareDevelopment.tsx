import React, { FC } from 'react';

const SowtwareDevelopment: FC = () => {
  return (
    <div>
      <h3>ソフトウェア開発</h3>
      <ul className="list_items">
        <li>
            Webアプリケーションの開発
            <ul className="list_items">
                <li>
                    Java9年、PHP2年、Rails3年、Python9ヶ月
                </li>
            </ul>
        </li>

        <li>
            Androidアプリの開発
            <ul className="list_items">
                <li>
                    1年
                </li>
            </ul>
        </li>
        
        <li>
            受託開発として案件契約から開発、保守運用までシステム開発業務における一通りの経験
            <ul className="list_items">
                <li>
                    見積、要件定義、設計、開発、テスト、リリース、保守運用を8年
                </li>
            </ul>
        </li>

        <li>
            インフラ
            <ul className="list_items">
                <li>
                    オンプレミスにてLinux、Windows Server、Solarisの、<br />
                    Webサーバー、DBサーバー構築、運用経験を8年。
                </li>
                <li>
                    AWS Lambda、CloudFront、CloudFormation、S3、CodeCommit、CodeBuild、CodePipeline、SES、SNS、CloudWatch。
                </li>
            </ul>
        </li>

        <li>
            OS、DB、ミドルウェア使用経験
            <ul className="list_items">
                <li>
                    OS：<br />
                    WindowsServer2010、<br />
                    Linux(RedHat5、CentOS5、SUSE)、Solaris(9、10)<br />
                    それぞれサーバー構築経験あり(インストール、初期設定、ミドルウェア設定など)<br />
                    趣味でFreeBSDを使用している(構築経験はなし)
                </li>
                <li>
                    DB：<br />
                    PostgreSQL8年、MySQL7年、SQLServer1年<br />
                    マルチバリューDBとして4D DAM(現在はAIDAM)3年、MySQLは趣味でも使用中2年。
                </li>
                <li>
                    ミドルウェア他ライブラリ：<br />
                    VMWare、Apache(2系まで)、Tomcat(6系まで)、<br />
                    chasen(形態素解析)、Imagix4d(リバースエンジニアリングツール)
                </li>
            </ul>
        </li>

        <li>
            マネジメント
            <ul className="list_items">
                <li>
                    2人～5人までのチームマネジメント経験<br />
                    PLとして案件開発の担当、顧客との打ち合わせや折衝の経験あり10年
                </li>
            </ul>
        </li>

        <li>
            スクラム
            <ul className="list_items">
                <li>
                    2019年4月にCSMを取得。<br />
                    スクラム開発の経験はないが、社内にスクラムについての教育を実施(予定)
                </li>
            </ul>
        </li>

        <li>
            その他の経験
            <ul className="list_items">
                <li>C/C++による組み込み開発1年</li>
                <li>Windowsサーバー構築(VMwareESXiによる仮想化、NW設定、バックアップ設定など)半年</li>
                <li>CLIツール開発(Linux/Shell、Windows/バッチ)</li>
                <li>その他言語経験(Perl、Tcl/Tk、basic、VB、AS3)</li>
                <li>物流システム開発4年</li>
                <li>趣味でサーバーサイドKotlinを勉強して160ページの技術同人誌を執筆。</li>
                <li>趣味でamp、レスポンシブデザインのサイト開発の経験あり。</li>
            </ul>
        </li>
    </ul>
    </div>
  );
};

export default SowtwareDevelopment;
