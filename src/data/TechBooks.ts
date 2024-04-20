export type TechBook = {
  id: number;
  type: string;
  books: [];
}

const TechBooks = [
  {
    id: 1,
    type: '単著',
    books: [
      {
        id: 1,
        title: '入門!実践!Kotlin Compose Multiplatformでデスクトップアプリ開発!', 
        description: 'Kotlin Compose Multiplatformでデスクトップアプリを開発する流れを紹介する技術同人誌!<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!', 
        imgFile: 'daily_title.png'
      },
      {
        id: 2,
        title: 'いろいろ実践!サーバーサイドKotlin Vol.2', 
        description: '「入門!実践!サーバーサイドKotlin」、「もっと実践!サーバーサイドKotlin」に続く「実践!サーバーサイドKotlin」シリーズ第三段!<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!', 
        imgFile: 'daily_title.png'
      },
      {
        id: 3,
        title: 'まいにち続ける技術', 
        description: '毎日なにかを続けるための考え方や事例をお伝えするノウハウ本。<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!<BR>詳細は<a href="https://fortegp05.hatenablog.com/entry/2020/09/09/080659" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。', 
        imgFile: 'daily_title.png'
      },
      {
        id: 4,
        title: 'いろいろ実践!サーバーサイドKotlin Vol.01', 
        description: 'Spring BootなサーバーサイドKotlinでいろいろな実践を学べる本。<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!<BR>詳細は<a href="https://fortegp05.hatenablog.com/entry/2020/09/09/075319" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。', 
        imgFile: 'ssk_3.png'
      },
      {
        id: 5,
        title: 'もっと実践!サーバーサイドKotlin',
        description: 'Spring BootなサーバーサイドKotlinの実践としてユーザー登録・認証とデプロイを学べる本。<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!<BR>詳細は<a href="https://fortegp05.hatenablog.com/entry/2020/03/07/174311" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: 'title_ssk2.jpg'
      },
      {
        id: 6,
        title: '入門!実践!サーバーサイドKotlin',
        description: 'Spring BootでサーバーサイドKotlinに入門して実践として簡単なアプリケーションを作る本。<BR>電子版は<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!<BR>詳細は<a href="https://fortegp05.hatenablog.com/entry/2019/08/27/172327" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: 'hyoshi_ssk.png'
      },
      {
        id: 7,
        title: 'はじめる技術 つづける技術',
        description: '何かを始める、続けるための考え方や事例を書いたノウハウ本。電子版のみ<a href="https://fortegp05.booth.pm/" target="_blank" rel="nofollow">BOOTH</a>で販売中!<BR>詳細は<a href="https://fortegp05.hatenablog.com/entry/2019/03/28/094500" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: 'hyoshi_bc.jpg'
      },
    ],
  },
  {
    id: 2,
    type: '合同誌',
    books: [
      {
        id: 8,
        title: '100コミュニケーション―コロナ時代のコミュニケーション100通り',
        description: 'コロナ時代のコミュニケーションに関するトピックスを100本(目標)集めます。<br>私はコミュニティについて書きました。 <br>購入やサンプルは<a href="https://techbookfest.org/product/5120896991756288?productVariantID=5976385220771840" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 9,
        title: 'ギポタル開発記-モブワークで学びながらわいわい作る技術同人誌ポータル‐',
        description: 'ギポタル｜技術同人誌ポータル。この本では、そのポータルサイトの開発の経緯、実装、試行錯誤やトラブル含めて開発の過程のすべてを本に詰め込みました。<br>私も開発に参加しています。 <br>購入やサンプルは<a href="https://techbookfest.org/product/6206369472446464?productVariantID=6175428259610624" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 10,
        title: 'ワンストップオンライン生活',
        description: 'コロナ影響で生活の大部分がオンライン化している今を切り取った合同誌。<br>私はオンラインでのチームビルディングについて書きました。<br>購入やサンプルは<a href="https://oyakata.booth.pm/items/2031359" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 11,
        title: 'ワンストップ生き方',
        description: 'この醜くも美しい人生の生き方をこの一冊に!という目的で作成された合同誌。<br>私は心や趣味について書きました。<br>購入やサンプルは<a href="https://booth.pm/ja/items/1871341" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 12,
        title: 'ワンストップアプリ開発(α版)',
        description: 'アプリケーション開発のすべてをこの一冊に!という目的で作成された合同誌。<br>私はアジャイルについて書きました。<br>購入やサンプルは<a href="https://oyakata.booth.pm/items/1715099" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 13,
        title: 'ワンストップ目標設定の技術',
        description: '目標設定のやり方考え方にに関する技術同人誌。<br>私は合計2章の寄稿をしました。<br>詳細やサンプルは<a href="https://oyakata.booth.pm/items/1572943" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 14,
        title: 'ゲームセンターを楽しむ技術の合同誌',
        description: 'ゲームセンターを楽しむための技術をまとめた本。<br>私は1章寄稿しいくつかコラムを書きました。<br>詳細は<a href="https://booth.pm/ja/items/1542903" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 15,
        title: 'ワンストップPodcastを始めよう',
        description: 'Podcastに関して、聞き方、始め方、続け方を網羅した本。<br>私は企画の立ち上げからメインの執筆を担当しました。<br>詳細は<a href="https://oyakata.booth.pm/items/1488170" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 16,
        title: 'ワンストップ勉強会',
        description: '勉強会に関する本。<br>コラムをひとつ寄稿しました。<br>詳細は<a href="https://oyakata.booth.pm/items/1315174" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      },
      {
        id: 17,
        title: 'ワンストップ見積もり',
        description: 'ITエンジニアがよくやるけどとても難しい見積もりについて、著者15人で書いたテクニック網羅本。<br>私は第4章、2点見積もりについて書きました。<br>詳細は<a href="https://oyakata.booth.pm/items/1315587" target="_blank" rel="noopener noreferrer nofollow">こちら</a>。',
        imgFile: ''
      }
    ]
  }
]
export default TechBooks