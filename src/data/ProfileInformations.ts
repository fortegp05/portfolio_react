import TechBook from './TechBooks'

const techbook = TechBook
const ProfileInformation = [
  {
    id: 1,
    title: 'ITエンジニア', 
    text: 'Webシステム、Androidアプリ、AWS、チーム開発、スクラムなど。<br>業務委託のお仕事もしてます!',
    backgroundImgFileName: 'rawpixel-632449-unsplash.jpg',
    link: 'engineer.html'
  },
  {
    id: 2,
    title: 'Video Game', 
    text: 'FF14、DQ10、スパロボ、その他。<br>RPG、アクション、シミュレーション、サウンドノベル、格ゲーなど。', 
    backgroundImgFileName: 'michael-trimble-1281343-unsplash.jpg', 
    link: 'videogame.html'
  },
  {
    id: 3,
    title: 'Plastic Model', 
    text: 'ガンプラメイン。<br>車、バイク、ガレキにもいつか手を出したい。', 
    backgroundImgFileName: 'IMG_1478_sml.jpg', 
    link: 'plasticmodel.html'
  },
  {
    id: 4,
    title: 'Novels', 
    text: 'ミステリ、SF好き。<br>エラリー・クイーン、J・P・ホーガンなど。', 
    backgroundImgFileName: 'jason-leung-708875-unsplash.jpg', 
    link: 'novels.html'
  },
  {
    id: 5,
    title: 'ミニ四駆', 
    text: 'MAメイン。<br>シャイニングスコーピオン好き。', 
    backgroundImgFileName: 'IMG_1696.jpg', 
    link: 'mini4wd.html'
  },
  {
    id: 6, 
    title: '電子工作', 
    text: '放電器、ニキシー管時計をふたつ(キット)を作成。<br>次は自作キーボード沼にはまりたい。', 
    backgroundImgFileName: 'chris-ried-534420-unsplash.jpg', 
    link: 'electronicwork.html'
  },
  {
    id: 7,
    title: '技術同人誌の執筆', 
    text: `単著${techbook[0].books.length}冊、合同誌${techbook[1].books.length}冊に寄稿。`, 
    backgroundImgFileName: 'nathan-dumlao-aa0eHA73iLo-unsplash.jpg', 
    link: 'techbook.html'
  }
]

export default ProfileInformation;