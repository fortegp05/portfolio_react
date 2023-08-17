import React, { FC } from 'react';
import './Videogame.css'

const Videogame: FC = () => {

  return (
    <>
      <h2>いまやっているゲーム</h2>
      <div className="update_date">2023年08月現在</div>
      <div>
          <ul className="list_items">
              <li>
                  <a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCXIV" target="_blank" rel="noopener noreferrer">FF XIV(Tiamat/Gaia DC)</a><br />
                  <a href="https://jp.finalfantasyxiv.com/lodestone/character/1688818/" target="_blank" rel="noopener noreferrer">LODESTONE</a>
              </li>
              <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88X_%E7%9B%AE%E8%A6%9A%E3%82%81%E3%81%97%E4%BA%94%E3%81%A4%E3%81%AE%E7%A8%AE%E6%97%8F_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">DQ10</a></li>
              <li><a href="https://store.steampowered.com/app/1307550/Craftopia/?l=japanese" target="_blank" rel="noopener noreferrer">Craftopia</a></li>
              <li><a href="https://store.steampowered.com/app/1340260/_/?l=japanese" target="_blank" rel="noopener noreferrer">チャカ王の迷宮</a></li>
          </ul>
      </div>


      <h2>好きなゲーム一覧</h2>
      <div className="updateDateNowPlaying">動画閲覧のみも含む</div>

      <h3 className="hard_title">ファミコン</h3>
      <ul id="famicomList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AF%E3%83%AB%E3%83%BC" target="_blank" rel="noopener noreferrer">レッキングクルー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA%E3%83%96%E3%83%A9%E3%82%B6%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">スーパーマリオブラザーズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%BF%8D%E8%80%85%E3%83%8F%E3%83%83%E3%83%88%E3%83%AA%E3%81%8F%E3%82%93_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">忍者ハットリくん 忍者は修行でござるの巻</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%BC%E3%83%8B%E3%83%BC%E3%82%BA_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">グーニーズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B2%E3%82%B2%E3%82%B2%E3%81%AE%E9%AC%BC%E5%A4%AA%E9%83%8E_%E5%A6%96%E6%80%AA%E5%A4%A7%E9%AD%94%E5%A2%83" target="_blank" rel="noopener noreferrer">ゲゲゲの鬼太郎 妖怪大魔境</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%87%E3%82%A3%E3%82%A6%E3%82%B9_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">グラディウス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88" target="_blank" rel="noopener noreferrer">ドラゴンクエスト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%AD%94%E7%95%8C%E6%9D%91" target="_blank" rel="noopener noreferrer">魔界村</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E6%B5%B7%E9%81%93%E4%BA%94%E5%8D%81%E4%B8%89%E6%AC%A1_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">東海道五十三次</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%82%B4%E3%82%A8%E3%83%A2%E3%83%B3!%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E9%81%93%E4%B8%AD" target="_blank" rel="noopener noreferrer">がんばれゴエモン!からくり道中</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%AD%E3%83%A2%E3%83%B3%E3%81%AE%E9%8D%B5_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">ソロモンの鍵</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%AB%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC%E3%81%AE%E5%86%92%E9%99%BA_%E6%99%82%E3%81%AE%E9%8D%B5%E4%BC%9D%E8%AA%AC" target="_blank" rel="noopener noreferrer">ワルキューレの冒険 時の鍵伝説</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%AB%98%E6%A9%8B%E5%90%8D%E4%BA%BA%E3%81%AE%E5%86%92%E9%99%BA%E5%B3%B6" target="_blank" rel="noopener noreferrer">高橋名人の冒険島</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%BF%B7%E5%AE%AE%E7%B5%84%E6%9B%B2_%E3%83%9F%E3%83%AD%E3%83%B3%E3%81%AE%E5%A4%A7%E5%86%92%E9%99%BA" target="_blank" rel="noopener noreferrer">迷宮組曲 ミロンの大冒険</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB_%E7%A5%9E%E9%BE%8D%E3%81%AE%E8%AC%8E" target="_blank" rel="noopener noreferrer">ドラゴンボール 神龍の謎</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%9F%E3%81%91%E3%81%97%E3%81%AE%E6%8C%91%E6%88%A6%E7%8A%B6" target="_blank" rel="noopener noreferrer">たけしの挑戦状</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%AD%E3%83%83%E3%82%AF%E3%83%BB%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%BA_%E4%BC%AF%E7%88%B5%E4%BB%A4%E5%AC%A2%E8%AA%98%E6%8B%90%E4%BA%8B%E4%BB%B6" target="_blank" rel="noopener noreferrer">シャーロック・ホームズ 伯爵令嬢誘拐事件</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93_(%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3)" target="_blank" rel="noopener noreferrer">ドラえもん</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%88%E3%83%AD%E3%82%AF%E3%83%AD%E3%82%B9" target="_blank" rel="noopener noreferrer">メトロクロス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88II_%E6%82%AA%E9%9C%8A%E3%81%AE%E7%A5%9E%E3%80%85" target="_blank" rel="noopener noreferrer">ドラゴンクエストII 悪霊の神々</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%BC%E3%83%8B%E3%83%BC%E3%82%BA2_%E3%83%95%E3%83%A9%E3%83%83%E3%83%86%E3%83%AA%E3%83%BC%E6%9C%80%E5%BE%8C%E3%81%AE%E6%8C%91%E6%88%A6" target="_blank" rel="noopener noreferrer">グーニーズ2 フラッテリー最後の挑戦</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%82%92%E3%81%BF%E3%82%8B%E3%81%B2%E3%81%A8" target="_blank" rel="noopener noreferrer">星をみるひと</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">ロックマン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC" target="_blank" rel="noopener noreferrer">ファイナルファンタジー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2" target="_blank" rel="noopener noreferrer">メタルギア</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88III_%E3%81%9D%E3%81%97%E3%81%A6%E4%BC%9D%E8%AA%AC%E3%81%B8%E2%80%A6" target="_blank" rel="noopener noreferrer">ドラゴンクエストIII そして伝説へ…</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9I" target="_blank" rel="noopener noreferrer">イース</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA%E3%83%96%E3%83%A9%E3%82%B6%E3%83%BC%E3%82%BA3" target="_blank" rel="noopener noreferrer">スーパーマリオブラザーズ3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%BF%8D%E8%80%85%E9%BE%8D%E5%89%A3%E4%BC%9D" target="_blank" rel="noopener noreferrer">忍者龍剣伝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCII" target="_blank" rel="noopener noreferrer">ファイナルファンタジーII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%88%E3%83%AA%E3%82%B9" target="_blank" rel="noopener noreferrer">テトリス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B32_Dr.%E3%83%AF%E3%82%A4%E3%83%AA%E3%83%BC%E3%81%AE%E8%AC%8E" target="_blank" rel="noopener noreferrer">ロックマン2 Dr.ワイリーの謎</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%89%E3%82%A6%E3%82%B2%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">シャドウゲイト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%B9%E3%83%94%E3%83%AA%E3%83%83%E3%83%88" target="_blank" rel="noopener noreferrer">ドラゴンスピリット 新たなる伝説</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89_%E3%82%AC%E3%83%81%E3%83%A3%E3%83%9D%E3%83%B3%E6%88%A6%E5%A3%AB" target="_blank" rel="noopener noreferrer">SDガンダムワールド ガチャポン戦士2 カプセル戦記</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%BE%8E%E5%91%B3%E3%81%97%E3%82%93%E3%81%BC_%E7%A9%B6%E6%A5%B5%E3%81%AE%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E4%B8%89%E6%9C%AC%E5%8B%9D%E8%B2%A0" target="_blank" rel="noopener noreferrer">美味しんぼ 究極のメニュー三本勝負</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%82%AA%E9%AD%94%E5%9F%8E%E4%BC%9D%E8%AA%AC" target="_blank" rel="noopener noreferrer">悪魔城伝説</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88IV_%E5%B0%8E%E3%81%8B%E3%82%8C%E3%81%97%E8%80%85%E3%81%9F%E3%81%A1" target="_blank" rel="noopener noreferrer">ドラゴンクエストIV 導かれし者たち</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%86%E3%83%AC%E3%83%84%E5%A4%A7%E7%99%BE%E7%A7%91" target="_blank" rel="noopener noreferrer">キテレツ大百科</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCIII" target="_blank" rel="noopener noreferrer">ファイナルファンタジーIII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9II" target="_blank" rel="noopener noreferrer">イースII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA" target="_blank" rel="noopener noreferrer">ドクターマリオ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B33_Dr.%E3%83%AF%E3%82%A4%E3%83%AA%E3%83%BC%E3%81%AE%E6%9C%80%E6%9C%9F!%3F" target="_blank" rel="noopener noreferrer">ロックマン3 Dr.ワイリーの最期!?</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%9A%B4%E3%82%8C%E3%82%93%E5%9D%8A%E5%A4%A9%E7%8B%97" target="_blank" rel="noopener noreferrer">暴れん坊天狗</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%BE%E3%81%98%E3%81%8B%E3%82%8B%E2%98%86%E3%82%BF%E3%83%AB%E3%82%8B%E3%83%BC%E3%83%88%E3%81%8F%E3%82%93" target="_blank" rel="noopener noreferrer">まじかる☆タルるートくん FANTASTIC WORLD!!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3_(%E3%83%95%E3%82%A1%E3%83%9F%E3%83%AA%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF)" target="_blank" rel="noopener noreferrer">北斗の拳4 七星覇拳伝 北斗神拳の彼方へ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B34_%E6%96%B0%E3%81%9F%E3%81%AA%E3%82%8B%E9%87%8E%E6%9C%9B!!" target="_blank" rel="noopener noreferrer">ロックマン4 新たなる野望!!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%AC%AC2%E6%AC%A1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6" target="_blank" rel="noopener noreferrer">第2次スーパーロボット大戦</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">シャッフルファイト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B35_%E3%83%96%E3%83%AB%E3%83%BC%E3%82%B9%E3%81%AE%E7%BD%A0!%3F" target="_blank" rel="noopener noreferrer">ロックマン5 ブルースの罠!?</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%BE%E3%81%98%E3%81%8B%E3%82%8B%E2%98%86%E3%82%BF%E3%83%AB%E3%82%8B%E3%83%BC%E3%83%88%E3%81%8F%E3%82%93" target="_blank" rel="noopener noreferrer">まじかる☆タルるートくん2 まほうだいぼうけん</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AF%E3%82%AE%E3%83%A3%E3%83%B3%E3%83%A9%E3%83%B3%E3%83%89" target="_blank" rel="noopener noreferrer">ワギャンランド3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%86%B1%E8%A1%80%E6%A0%BC%E9%97%98%E4%BC%9D%E8%AA%AC" target="_blank" rel="noopener noreferrer">熱血格闘伝説</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%83%E3%82%AF" target="_blank" rel="noopener noreferrer">ドラゴンボールZ 激闘天下一武道会</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AF%E3%82%A4%E3%83%AA%E3%83%BC%26%E3%83%A9%E3%82%A4%E3%83%88%E3%81%AE%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9C%E3%83%BC%E3%83%89_%E3%82%B6%E3%83%83%E3%83%84%E2%98%86%E3%83%91%E3%83%A9%E3%83%80%E3%82%A4%E3%82%B9" target="_blank" rel="noopener noreferrer">ワイリー&ライトのロックボード ザッツ☆パラダイス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E4%BB%AE%E9%9D%A2%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BCSD_%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%81%AE%E9%87%8E%E6%9C%9B" target="_blank" rel="noopener noreferrer">仮面ライダーSD グランショッカーの野望</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E5%A4%A2%E3%81%AE%E6%B3%89%E3%81%AE%E7%89%A9%E8%AA%9E" target="_blank" rel="noopener noreferrer">星のカービィ 夢の泉の物語</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A7%E3%82%A4%E3%83%A1%E3%82%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">ジョイメカファイト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">マイティファイナルファイト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B36_%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E3%81%AE%E6%88%A6%E3%81%84!!" target="_blank" rel="noopener noreferrer">ロックマン6 史上最大の戦い!!</a></li>        
      </ul>

      <h3 className="hard_title">ディスクシステム</h3>
      <ul id="diskSystemList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E6%8E%A2%E5%81%B5%E5%80%B6%E6%A5%BD%E9%83%A8_%E6%B6%88%E3%81%88%E3%81%9F%E5%BE%8C%E7%B6%99%E8%80%85" target="_blank" rel="noopener noreferrer">ファミコン探偵倶楽部 消えた後継者 前編</a></li>
          <li><a href="https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E6%8E%A2%E5%81%B5%E5%80%B6%E6%A5%BD%E9%83%A8_%E6%B6%88%E3%81%88%E3%81%9F%E5%BE%8C%E7%B6%99%E8%80%85_%E5%BE%8C%E7%B7%A8&action=edit&redlink=1" target="_blank" rel="noopener noreferrer">ファミコン探偵倶楽部 消えた後継者 後編</a></li>
      </ul>

      <h3 className="hard_title">PCエンジン</h3>
      <ul id="pceList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC" target="_blank" rel="noopener noreferrer">ダンジョンエクスプローラー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BCII" target="_blank" rel="noopener noreferrer">ダンジョンエクスプローラーII</a></li>
      </ul>

      <h3 className="hard_title">ゲームボーイ</h3>
      <ul id="gbList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%83%AD%E3%83%87%E3%82%A3%E3%82%A6%E3%82%B9%E3%81%A0!" target="_blank" rel="noopener noreferrer">パロディウスだ!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%81%96%E5%89%A3%E4%BC%9D%E8%AA%AC_%E3%80%9C%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC%E5%A4%96%E4%BC%9D%E3%80%9C" target="_blank" rel="noopener noreferrer">聖剣伝説 〜ファイナルファンタジー外伝〜</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89" target="_blank" rel="noopener noreferrer">ロックマンワールド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%892" target="_blank" rel="noopener noreferrer">ロックマンワールド2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%893" target="_blank" rel="noopener noreferrer">ロックマンワールド3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%894" target="_blank" rel="noopener noreferrer">ロックマンワールド4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%895" target="_blank" rel="noopener noreferrer">ロックマンワールド5</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC_%E8%B5%A4%E3%83%BB%E7%B7%91" target="_blank" rel="noopener noreferrer">ポケットモンスター 赤</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%83%86%E3%83%AA%E3%83%BC%E3%81%AE%E3%83%AF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%A9%E3%83%B3%E3%83%89" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ テリーのワンダーランド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA2_%E3%83%9E%E3%83%AB%E3%82%BF%E3%81%AE%E3%81%B5%E3%81%97%E3%81%8E%E3%81%AA%E9%8D%B5" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ2 マルタのふしぎな鍵 ルカの旅立ち</a></li>
      </ul>

      <h3 className="hard_title">スーパーファミコン</h3>
      <ul id="sfcList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%AF%E3%83%88%E3%83%AC%E3%82%A4%E3%82%B6%E3%83%BC" target="_blank" rel="noopener noreferrer">アクトレイザー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCIV" target="_blank" rel="noopener noreferrer">ファイナルファンタジーIV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%82%B4%E3%82%A8%E3%83%A2%E3%83%B3%E3%80%9C%E3%82%86%E3%81%8D%E5%A7%AB%E6%95%91%E5%87%BA%E7%B5%B5%E5%B7%BB%E3%80%9C" target="_blank" rel="noopener noreferrer">がんばれゴエモン〜ゆき姫救出絵巻〜</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%88%E3%83%90%E3%83%88%E3%83%ABII_%E3%83%A9%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%82%BF%E3%83%BC%E3%83%84%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">ザ・グレイトバトルII ラストファイターツイン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88V_%E5%A4%A9%E7%A9%BA%E3%81%AE%E8%8A%B1%E5%AB%81" target="_blank" rel="noopener noreferrer">ドラゴンクエストV 天空の花嫁</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E5%A5%B3%E7%A5%9E%E8%BB%A2%E7%94%9F" target="_blank" rel="noopener noreferrer">真・女神転生</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E6%88%A6%E8%A8%98_%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88_%E3%82%AA%E3%83%AA%E3%83%A5%E3%83%B3%E3%83%9D%E3%82%B9" target="_blank" rel="noopener noreferrer">ヒーロー戦記 プロジェクト オリュンポス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%83%E3%82%AD%E3%83%BC%E3%81%AE%E3%83%9E%E3%82%B8%E3%82%AB%E3%83%AB%E3%82%A2%E3%83%89%E3%83%99%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC" target="_blank" rel="noopener noreferrer">ミッキーのマジカルアドベンチャー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCV" target="_blank" rel="noopener noreferrer">ファイナルファンタジーV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%89%E3%82%93%E3%81%BE1/2_%E7%88%86%E7%83%88%E4%B9%B1%E9%97%98%E7%AF%87" target="_blank" rel="noopener noreferrer">らんま1/2 爆烈乱闘篇</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%88%E3%83%90%E3%83%88%E3%83%ABIII" target="_blank" rel="noopener noreferrer">ザ・グレイトバトルIII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%AC%AC3%E6%AC%A1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6" target="_blank" rel="noopener noreferrer">第3次スーパーロボット大戦</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%81%96%E5%89%A3%E4%BC%9D%E8%AA%AC2" target="_blank" rel="noopener noreferrer">聖剣伝説2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB%E3%83%8D%E3%82%B3%E3%81%AE%E5%A4%A7%E5%86%92%E9%99%BA_%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">トルネコの大冒険 不思議のダンジョン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%ABZ_%E8%B6%85%E6%AD%A6%E9%97%98%E4%BC%9D2" target="_blank" rel="noopener noreferrer">ドラゴンボールZ 超武闘伝2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X" target="_blank" rel="noopener noreferrer">ロックマンX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%83%83%E3%82%AD%E3%83%BC%E3%81%AE%E8%8D%89%E3%82%84%E3%81%8D%E3%81%86" target="_blank" rel="noopener noreferrer">ドラッキーの草やきう</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%82%B4%E3%82%A8%E3%83%A2%E3%83%B32_%E5%A5%87%E5%A4%A9%E7%83%88%E5%B0%86%E8%BB%8D%E3%83%9E%E3%83%83%E3%82%AE%E3%83%8D%E3%82%B9" target="_blank" rel="noopener noreferrer">がんばれゴエモン2 奇天烈将軍マッギネス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%88%E3%83%90%E3%83%88%E3%83%AB%E5%A4%96%E4%BC%9D2_%E7%A5%AD%E3%82%8A%E3%81%A0%E3%83%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%82%A4" target="_blank" rel="noopener noreferrer">ザ・グレイトバトル外伝2 祭りだワッショイ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%ABV%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_(%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3)" target="_blank" rel="noopener noreferrer">機動戦士Vガンダム</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%BA%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC" target="_blank" rel="noopener noreferrer">ロックマンズサッカー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6EX" target="_blank" rel="noopener noreferrer">スーパーロボット大戦EX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCVI" target="_blank" rel="noopener noreferrer">ファイナルファンタジーVI</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3%E3%83%9C%E3%82%A6%E3%83%AB" target="_blank" rel="noopener noreferrer">カービィボウル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%ABZ_%E8%B6%85%E6%AD%A6%E9%97%98%E4%BC%9D3" target="_blank" rel="noopener noreferrer">ドラゴンボールZ 超武闘伝3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%AB%E3%83%9D%E3%83%B3" target="_blank" rel="noopener noreferrer">ドカポン3・2・1 〜嵐を呼ぶ友情〜</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%82%B4%E3%82%A8%E3%83%A2%E3%83%B33_%E7%8D%85%E5%AD%90%E9%87%8D%E7%A6%84%E5%85%B5%E8%A1%9B%E3%81%AE%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E5%8D%8D%E5%9B%BA%E3%82%81" target="_blank" rel="noopener noreferrer">がんばれゴエモン3 獅子重禄兵衛のからくり卍固め</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X2" target="_blank" rel="noopener noreferrer">ロックマンX2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%B0%E3%83%AC%E3%82%A4%E3%83%88%E3%83%90%E3%83%88%E3%83%ABIV" target="_blank" rel="noopener noreferrer">ザ・グレイトバトルIV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%A6%87%E7%8E%8B%E5%A4%A7%E7%B3%BB%E3%83%AA%E3%83%A5%E3%83%BC%E3%83%8A%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">覇王大系リューナイト ロードオブパラディン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%8E%E3%83%BB%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC" target="_blank" rel="noopener noreferrer">クロノ・トリガー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B37_%E5%AE%BF%E5%91%BD%E3%81%AE%E5%AF%BE%E6%B1%BA!" target="_blank" rel="noopener noreferrer">ロックマン7 宿命の対決!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA_%E3%83%A8%E3%83%83%E3%82%B7%E3%83%BC%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89" target="_blank" rel="noopener noreferrer">スーパーマリオ ヨッシーアイランド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X3" target="_blank" rel="noopener noreferrer">ロックマンX3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88VI_%E5%B9%BB%E3%81%AE%E5%A4%A7%E5%9C%B0" target="_blank" rel="noopener noreferrer">ドラゴンクエストVI 幻の大地</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%AE%9F%E6%B3%81%E3%81%8A%E3%81%97%E3%82%83%E3%81%B9%E3%82%8A%E3%83%91%E3%83%AD%E3%83%87%E3%82%A3%E3%82%A6%E3%82%B9" target="_blank" rel="noopener noreferrer">実況おしゃべりパロディウス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%82%B4%E3%82%A8%E3%83%A2%E3%83%B3_%E3%81%8D%E3%82%89%E3%81%8D%E3%82%89%E9%81%93%E4%B8%AD%E3%80%9C%E5%83%95%E3%81%8C%E3%83%80%E3%83%B3%E3%82%B5%E3%83%BC%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E7%90%86%E7%94%B1%E3%80%9C" target="_blank" rel="noopener noreferrer">がんばれゴエモン きらきら道中〜僕がダンサーになった理由〜</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AARPG" target="_blank" rel="noopener noreferrer">スーパーマリオRPG</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9" target="_blank" rel="noopener noreferrer">星のカービィ スーパーデラックス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%A9%BA%E6%83%B3%E7%A7%91%E5%AD%A6%E4%B8%96%E7%95%8C%E3%82%AC%E3%83%AA%E3%83%90%E3%83%BC%E3%83%9C%E3%83%BC%E3%82%A4" target="_blank" rel="noopener noreferrer">空想科学世界ガリバーボーイ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3" target="_blank" rel="noopener noreferrer">スターオーシャン</a></li>
          <li><a href="https://ja.wikipedia.org/w/index.php?title=%E3%83%9F%E3%83%8B%E5%9B%9B%E9%A7%86_%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%94%E3%82%AA%E3%83%B3_%E3%83%AC%E3%83%83%E3%83%84%26%E3%82%B4%E3%83%BC!!&action=edit&redlink=1" target="_blank" rel="noopener noreferrer">ミニ四駆 シャイニングスコーピオン レッツ&ゴー!!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%9F%E3%82%B3%E3%83%B3%E6%8E%A2%E5%81%B5%E5%80%B6%E6%A5%BD%E9%83%A8PartII_%E3%81%86%E3%81%97%E3%82%8D%E3%81%AB%E7%AB%8B%E3%81%A4%E5%B0%91%E5%A5%B3" target="_blank" rel="noopener noreferrer">ファミコン探偵倶楽部PartII うしろに立つ少女</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%26%E3%83%95%E3%82%A9%E3%83%AB%E3%83%86" target="_blank" rel="noopener noreferrer">ロックマン&フォルテ</a></li>
      </ul>

      <h3 className="hard_title">プレイステーション</h3>
      <ul id="psList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E5%B9%BB%E6%83%B3%E6%B0%B4%E6%BB%B8%E4%BC%9D" target="_blank" rel="noopener noreferrer">幻想水滸伝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%AA%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%84" target="_blank" rel="noopener noreferrer">ポリスノーツ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%8A%E3%83%83%E3%83%81%E3%83%A3%E3%83%BC" target="_blank" rel="noopener noreferrer">スナッチャー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">バイオハザード</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%9D%E3%83%AD%E3%82%AF%E3%83%AD%E3%82%A4%E3%82%B9%E7%89%A9%E8%AA%9E_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">ポポロクロイス物語</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B38_%E3%83%A1%E3%82%BF%E3%83%AB%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">ロックマン8 メタルヒーローズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCVII" target="_blank" rel="noopener noreferrer">ファイナルファンタジーVII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/AZITO" target="_blank" rel="noopener noreferrer">AZITO</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3_%E3%83%90%E3%83%88%E3%83%AB%26%E3%83%81%E3%82%A7%E3%82%A4%E3%82%B9" target="_blank" rel="noopener noreferrer">ロックマン バトル&チェイス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCIV" target="_blank" rel="noopener noreferrer">ファイナルファンタジーIV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%BB%E3%82%B6%E3%83%BB%E3%83%90%E3%83%88%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC" target="_blank" rel="noopener noreferrer">ガンダム・ザ・バトルマスター</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%82%B3%E3%82%A2" target="_blank" rel="noopener noreferrer">アーマードコア</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B5%E3%82%AC_%E3%83%95%E3%83%AD%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A2" target="_blank" rel="noopener noreferrer">サガ フロンティア</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%94%BB%E6%AE%BB%E6%A9%9F%E5%8B%95%E9%9A%8A_GHOST_IN_THE_SHELL" target="_blank" rel="noopener noreferrer">攻殻機動隊 GHOST IN THE SHELL</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%9B%B7%E5%BC%A9%E6%A9%9F%E5%85%B5%E3%82%AC%E3%82%A4%E3%83%96%E3%83%AC%E3%82%A4%E3%83%96" target="_blank" rel="noopener noreferrer">雷弩機兵ガイブレイブ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X4" target="_blank" rel="noopener noreferrer">ロックマンX4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%B7%E3%82%88%E3%81%B7%E3%82%88SUN" target="_blank" rel="noopener noreferrer">ぷよぷよSUN 決定盤</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%82%B3%E3%82%A2" target="_blank" rel="noopener noreferrer">アーマードコア プロジェクトファンタズマ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3DASH_%E9%8B%BC%E3%81%AE%E5%86%92%E9%99%BA%E5%BF%83" target="_blank" rel="noopener noreferrer">ロックマンDASH 鋼の冒険心</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A7%E3%82%B3%E3%83%9C%E3%81%AE%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AA%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">チョコボの不思議なダンジョン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%83%AB%E3%82%BA_%E3%82%AA%E3%83%96_%E3%83%87%E3%82%B9%E3%83%86%E3%82%A3%E3%83%8B%E3%83%BC" target="_blank" rel="noopener noreferrer">テイルズ オブ デスティニー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%892" target="_blank" rel="noopener noreferrer">バイオハザード2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%8E%E3%82%AE%E3%82%A2%E3%82%B9" target="_blank" rel="noopener noreferrer">ゼノギアス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%A9%E8%AA%85_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">立体忍者活劇 天誅</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%BB%E3%82%B6%E3%83%BB%E3%83%90%E3%83%88%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC" target="_blank" rel="noopener noreferrer">ガンダム・ザ・バトルマスター2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3_%E3%82%BB%E3%82%AB%E3%83%B3%E3%83%89%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC" target="_blank" rel="noopener noreferrer">スターオーシャン セカンドストーリー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION" target="_blank" rel="noopener noreferrer">SDガンダム G GENERATION</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B9%E3%83%88%E3%83%AD%E3%83%8E%E3%83%BC%E3%82%AB" target="_blank" rel="noopener noreferrer">アストロノーカ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89" target="_blank" rel="noopener noreferrer">メタルギアソリッド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/LSD_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">LSD</a></li>
          <li><a href="https://www.jp.playstation.com/software/title/slps01643.html" target="_blank" rel="noopener noreferrer">雷弩騎兵ガイブレイブII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%B9%BB%E6%83%B3%E6%B0%B4%E6%BB%B8%E4%BC%9DII" target="_blank" rel="noopener noreferrer">幻想水滸伝II</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%82%AB%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">ドカポン!怒りの鉄剣</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6F" target="_blank" rel="noopener noreferrer">スーパーロボット大戦F</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A7%E3%82%B3%E3%83%9C%E3%81%AE%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AA%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B32" target="_blank" rel="noopener noreferrer">チョコボの不思議なダンジョン2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A2_%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%96%E3%82%A2%E3%83%AA%E3%83%BC%E3%83%8A" target="_blank" rel="noopener noreferrer">アーマード・コア マスターオブアリーナ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCVIII" target="_blank" rel="noopener noreferrer">ファイナルファンタジーVIII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%A9%E8%AA%85_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">天誅〜忍凱旋</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B5%E3%82%AC_%E3%83%95%E3%83%AD%E3%83%B3%E3%83%86%E3%82%A3%E3%82%A22" target="_blank" rel="noopener noreferrer">サガ フロンティア2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6F%E5%AE%8C%E7%B5%90%E7%B7%A8" target="_blank" rel="noopener noreferrer">スーパーロボット大戦F完結編</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%A1%E3%82%AC%E3%83%96%E3%83%BC%E3%82%B9%E3%83%88" target="_blank" rel="noopener noreferrer">オメガブースト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6%E3%82%B3%E3%83%B3%E3%83%97%E3%83%AA%E3%83%BC%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9" target="_blank" rel="noopener noreferrer">スーパーロボット大戦コンプリートボックス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%A9%E3%81%93%E3%81%A7%E3%82%82%E3%81%84%E3%81%A3%E3%81%97%E3%82%87" target="_blank" rel="noopener noreferrer">どこでもいっしょ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%81%96%E5%89%A3%E4%BC%9D%E8%AA%AC_LEGEND_OF_MANA" target="_blank" rel="noopener noreferrer">聖剣伝説 レジェンド オブ マナ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AD%E3%83%B3%E3%81%AB%E3%82%B3%E3%83%96%E3%83%B3" target="_blank" rel="noopener noreferrer">トロンにコブン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION-ZERO" target="_blank" rel="noopener noreferrer">SDガンダム GGENERATION-ZERO</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%893_LAST_ESCAPE" target="_blank" rel="noopener noreferrer">バイオハザード3 LAST ESCAPE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%B4%E3%82%A1%E3%83%AB%E3%82%AD%E3%83%AA%E3%83%BC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB" target="_blank" rel="noopener noreferrer">ヴァルキリープロファイル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3DASH2" target="_blank" rel="noopener noreferrer">ロックマンDASH2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6%CE%B1" target="_blank" rel="noopener noreferrer">スーパーロボット大戦α</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCIX" target="_blank" rel="noopener noreferrer">ファイナルファンタジーIX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION" target="_blank" rel="noopener noreferrer">SDガンダム GGENERATION-F</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88VII_%E3%82%A8%E3%83%87%E3%83%B3%E3%81%AE%E6%88%A6%E5%A3%AB%E3%81%9F%E3%81%A1" target="_blank" rel="noopener noreferrer">ドラゴンクエストVII エデンの戦士たち</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X5" target="_blank" rel="noopener noreferrer">ロックマンX5</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%A9%E8%AA%85_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">立体忍者活劇 天誅弐</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%83%AB%E3%82%BA_%E3%82%AA%E3%83%96_%E3%82%A8%E3%82%BF%E3%83%BC%E3%83%8B%E3%82%A2" target="_blank" rel="noopener noreferrer">テイルズ オブ エターニア</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6%CE%B1%E5%A4%96%E4%BC%9D" target="_blank" rel="noopener noreferrer">スーパーロボット大戦α外伝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%AE%E6%8D%95%E3%81%97%E3%81%A1%E3%82%83%E3%81%86%E3%81%9E" target="_blank" rel="noopener noreferrer">逮捕しちゃうぞ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION" target="_blank" rel="noopener noreferrer">SDガンダム GGENERATION-F IF</a></li>
      </ul>

      <h3 className="hard_title">ドリームキャスト</h3>
      <ul id="dcList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF%E3%82%A2%E3%83%89%E3%83%99%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC" target="_blank" rel="noopener noreferrer">ソニックアドベンチャー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/MARVEL_VS._CAPCOM_CLASH_OF_SUPER_HEROES" target="_blank" rel="noopener noreferrer">MARVEL VS. CAPCOM CLASH OF SUPER HEROES</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E5%A4%96%E4%BC%9D_%E3%82%B3%E3%83%AD%E3%83%8B%E3%83%BC%E3%81%AE%E8%90%BD%E3%81%A1%E3%81%9F%E5%9C%B0%E3%81%A7%E2%80%A6" target="_blank" rel="noopener noreferrer">機動戦士ガンダム外伝 コロニーの落ちた地で…</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%9B%BB%E8%84%B3%E6%88%A6%E6%A9%9F%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AD%E3%83%B3" target="_blank" rel="noopener noreferrer">電脳戦機バーチャロン オラトリオ・タングラム</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%B3%E3%83%A0%E3%83%BC" target="_blank" rel="noopener noreferrer">シェンムー 一章 横須賀</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_CODE" target="_blank" rel="noopener noreferrer">バイオハザード CODE Veronica</a></li>
          <li><a href="https://ja.wikipedia.org/w/index.php?title=%E3%83%88%E3%83%AC%E3%82%B8%E3%83%A3%E3%83%BC%E3%82%B9%E3%83%88%E3%83%A9%E3%82%A4%E3%82%AF&action=edit&redlink=1" target="_blank" rel="noopener noreferrer">トレジャーストライク</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%97%E3%82%B3%E3%83%B3_%E3%83%90%E3%83%BC%E3%82%B5%E3%82%B9_%E3%82%A8%E3%82%B9%E3%83%BB%E3%82%A8%E3%83%8C%E3%83%BB%E3%82%B1%E3%82%A4_%E3%83%9F%E3%83%AC%E3%83%8B%E3%82%A2%E3%83%A0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88_2000" target="_blank" rel="noopener noreferrer">CAPCOM VS. SNK ミレニアムファイト2000</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%BF%E3%83%BC%E3%83%8A%E3%83%AB%E3%82%A2%E3%83%AB%E3%82%AB%E3%83%87%E3%82%A3%E3%82%A2" target="_blank" rel="noopener noreferrer">エターナルアルカディア</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">ファンタシースターオンライン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">ファンタシースターオンラインVer.2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF%E3%82%A2%E3%83%89%E3%83%99%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC2" target="_blank" rel="noopener noreferrer">ソニックアドベンチャー2</a></li>
      </ul>

      <h3 className="hard_title">プレイステーション2</h3>
      <ul id="ps2List" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A22" target="_blank" rel="noopener noreferrer">アーマード・コア2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_(%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B32)" target="_blank" rel="noopener noreferrer">機動戦士ガンダム</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%AC%BC%E6%AD%A6%E8%80%85" target="_blank" rel="noopener noreferrer">鬼武者</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/ZONE_OF_THE_ENDERS" target="_blank" rel="noopener noreferrer">Z.O.E ZONE OF ENDERS</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A22_%E3%82%A2%E3%83%8A%E3%82%B6%E3%83%BC%E3%82%A8%E3%82%A4%E3%82%B8" target="_blank" rel="noopener noreferrer">アーマード・コア2 アナザーエイジ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%AA%E3%83%8B%E3%83%83%E3%82%AF%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88_%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A00079" target="_blank" rel="noopener noreferrer">ジオニックフロント 機動戦士ガンダム0079</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%90%E3%83%83%E3%83%8804_%E3%82%B7%E3%83%A3%E3%83%83%E3%82%BF%E3%83%BC%E3%83%89%E3%82%B9%E3%82%AB%E3%82%A4" target="_blank" rel="noopener noreferrer">ACE COMBAT 04 shattered skies</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/CAPCOM_VS._SNK_2_MILLIONAIRE_FIGHTING_2001" target="_blank" rel="noopener noreferrer">CAPCOM VS. SNK 2 MILLIONAIRE FIGHTING 2001</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E4%B8%89%E5%9C%8B%E7%84%A1%E5%8F%8C2" target="_blank" rel="noopener noreferrer">真・三國無双2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AD%E3%81%A8%E4%BC%91%E6%97%A5" target="_blank" rel="noopener noreferrer">トロと休日</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%892" target="_blank" rel="noopener noreferrer">メタルギアソリッド2 サンズ・オブ・リバティ METAL GEAR SOLID2 SONS OF LIBERTY</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/ICO_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">ICO</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%C3%97%E3%83%80%E3%82%AF%E3%82%B9%E3%82%BF%E3%83%BC_%E6%97%A7%E4%B8%96%E7%95%8C%E3%81%AE%E9%81%BA%E7%94%A3" target="_blank" rel="noopener noreferrer">ジャック×ダクスター 旧世界の遺産</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%AC%BC%E6%AD%A6%E8%80%852" target="_blank" rel="noopener noreferrer">鬼武者2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%A9%E3%82%AF%E3%82%BF%E5%90%8D%E4%BD%9C%E5%8A%87%E5%A0%B4_%E3%83%A9%E3%82%AF%E3%82%AC%E3%82%AD%E7%8E%8B%E5%9B%BD" target="_blank" rel="noopener noreferrer">ガラクタ名作劇場 ラクガキ王国</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6IMPACT" target="_blank" rel="noopener noreferrer">スーパーロボット大戦IMPACT</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A23" target="_blank" rel="noopener noreferrer">アーマード・コア3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E6%88%A6%E8%A8%98_Lost_War_Chronicles" target="_blank" rel="noopener noreferrer">機動戦士ガンダム戦記 Lost War Chronicles</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E4%B8%89%E5%9C%8B%E7%84%A1%E5%8F%8C2" target="_blank" rel="noopener noreferrer">真・三國無双2 猛将伝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA_%E3%83%88%E3%83%AB%E3%83%8D%E3%82%B3%E3%81%AE%E5%A4%A7%E5%86%92%E9%99%BA3_%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">ドラゴンクエストキャラクターズ トルネコの大冒険3 不思議のダンジョン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%BC%E3%82%AF%E3%82%AF%E3%83%AD%E3%83%8B%E3%82%AF%E3%83%AB" target="_blank" rel="noopener noreferrer">ダーククロニクル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%91%E3%83%B3%E4%B8%89%E4%B8%96_%E9%AD%94%E8%A1%93%E7%8E%8B%E3%81%AE%E9%81%BA%E7%94%A3" target="_blank" rel="noopener noreferrer">ルパン三世 魔術王の遺産</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION#SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION_NEO" target="_blank" rel="noopener noreferrer">SDガンダム GGENERATION NEO</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/GUILTY_GEAR_XX" target="_blank" rel="noopener noreferrer">GUILTY GEAR XX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A23_%E3%82%B5%E3%82%A4%E3%83%AC%E3%83%B3%E3%83%88%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">アーマード・コア3 サイレントライン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/ANUBIS_ZONE_OF_THE_ENDERS" target="_blank" rel="noopener noreferrer">ANUBIS ZONE OF THE ENDERS</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E4%B8%89%E5%9C%8B%E7%84%A1%E5%8F%8C3" target="_blank" rel="noopener noreferrer">真・三國無双3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3_Till_the_End_of_Time" target="_blank" rel="noopener noreferrer">スターオーシャン Till the End of Time</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%AC%AC2%E6%AC%A1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6%CE%B1" target="_blank" rel="noopener noreferrer">第2次スーパーロボット大戦α</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%A9%E8%AA%85_%E5%8F%82" target="_blank" rel="noopener noreferrer">天誅 参</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%9B%BB%E8%84%B3%E6%88%A6%E6%A9%9F%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AD%E3%83%B3_%E3%83%9E%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">電脳戦機バーチャロン マーズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%A0%AD%E6%96%87%E5%AD%97D_Special_Stage" target="_blank" rel="noopener noreferrer">頭文字D Special Stage</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_%E3%82%81%E3%81%90%E3%82%8A%E3%81%82%E3%81%84%E5%AE%87%E5%AE%99" target="_blank" rel="noopener noreferrer">機動戦士ガンダム めぐりあい宇宙</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B6%E3%83%BB%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%95%E3%82%A1%E3%82%A4%E3%82%BF%E3%83%BC%E3%82%BA2001" target="_blank" rel="noopener noreferrer">ザ・キング・オブ・ファイターズ2001</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SIREN_(%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BD%E3%83%95%E3%83%88)" target="_blank" rel="noopener noreferrer">SIREN</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Kunoichi_-%E5%BF%8D-" target="_blank" rel="noopener noreferrer">Kunoichi -忍-</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SNK_VS._CAPCOM_SVC_CHAOS" target="_blank" rel="noopener noreferrer">SNK VS. CAPCOM SVC CHAOS</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%88%A6%E5%9B%BD%E7%84%A1%E5%8F%8C" target="_blank" rel="noopener noreferrer">戦国無双</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION#SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION_SEED" target="_blank" rel="noopener noreferrer">SDガンダム GGENERATION SEED</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%94%BB%E6%AE%BB%E6%A9%9F%E5%8B%95%E9%9A%8A_STAND_ALONE_COMPLEX" target="_blank" rel="noopener noreferrer">攻殻機動隊 STAND ALONE COMPLEX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A2_%E3%83%8D%E3%82%AF%E3%82%B5%E3%82%B9" target="_blank" rel="noopener noreferrer">アーマード・コア ネクサス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%88%A6%E5%9B%BD%E7%84%A1%E5%8F%8C_%E7%8C%9B%E5%B0%86%E4%BC%9D" target="_blank" rel="noopener noreferrer">戦国無双 猛将伝</a></li>
          <li><a href="https://ja.wikipedia.org/w/index.php?title=%E6%88%91%E3%81%8C%E7%AB%9C%E3%82%92%E8%A6%8B%E3%82%88&action=edit&redlink=1" target="_blank" rel="noopener noreferrer">我が竜を見よ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%90%E3%83%83%E3%83%885_%E3%82%B8%E3%83%BB%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%A6%E3%82%A9%E3%83%BC" target="_blank" rel="noopener noreferrer">エースコンバット5 ジ・アンサング・ウォー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88VIII_%E7%A9%BA%E3%81%A8%E6%B5%B7%E3%81%A8%E5%A4%A7%E5%9C%B0%E3%81%A8%E5%91%AA%E3%82%8F%E3%82%8C%E3%81%97%E5%A7%AB%E5%90%9B" target="_blank" rel="noopener noreferrer">ドラゴンクエストVIII 空と海と大地と呪われし姫君</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%893" target="_blank" rel="noopener noreferrer">メタルギアソリッド3 スネークイーター</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%ABZ3" target="_blank" rel="noopener noreferrer">ドラゴンボールZ3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E4%B8%89%E5%9C%8B%E7%84%A1%E5%8F%8C4" target="_blank" rel="noopener noreferrer">真・三國無双4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/NAMCO_x_CAPCOM" target="_blank" rel="noopener noreferrer">NAMCO x CAPCOM</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%88%E3%82%A5%E3%83%AB%E3%83%BC%E3%82%AA%E3%83%87%E3%83%83%E3%82%BB%E3%82%A4_%E3%80%9C%E5%A4%B1%E3%82%8F%E3%82%8C%E3%81%97G%E3%81%AE%E4%BC%9D%E8%AA%AC%E3%80%9C" target="_blank" rel="noopener noreferrer">ガンダムトゥルーオデッセイ 〜失われしGの伝説〜</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%AC%AC3%E6%AC%A1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6%CE%B1_%E7%B5%82%E7%84%89%E3%81%AE%E9%8A%80%E6%B2%B3%E3%81%B8" target="_blank" rel="noopener noreferrer">第3次スーパーロボット大戦α 終焉の銀河へ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A2_%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%82%A4%E3%83%B4%E3%83%B3" target="_blank" rel="noopener noreferrer">アーマード・コア ラストレイヴン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%9C%9F%E3%83%BB%E4%B8%89%E5%9C%8B%E7%84%A1%E5%8F%8C4" target="_blank" rel="noopener noreferrer">真・三國無双4 猛将伝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%ABZ_Sparking!" target="_blank" rel="noopener noreferrer">ドラゴンボールZ Sparking!</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%BF%8D%E9%81%93_%E6%88%92" target="_blank" rel="noopener noreferrer">忍道 戒</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%894" target="_blank" rel="noopener noreferrer">バイオハザード4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%88%A6%E5%9B%BD%E7%84%A1%E5%8F%8C2" target="_blank" rel="noopener noreferrer">戦国無双2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCXII" target="_blank" rel="noopener noreferrer">ファイナルファンタジーXII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Another_Century%27s_Episode" target="_blank" rel="noopener noreferrer">Another Century's Episode2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%84%A1%E5%8F%8COROCHI" target="_blank" rel="noopener noreferrer">無双OROCHI</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Another_Century%27s_Episode" target="_blank" rel="noopener noreferrer">Another Century’s Episode 3 THE FINAL</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_G%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3_%E3%82%B9%E3%83%94%E3%83%AA%E3%83%83%E3%83%84" target="_blank" rel="noopener noreferrer">SDガンダム Gジェネレーション スピリッツ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6OG%E5%A4%96%E4%BC%9D" target="_blank" rel="noopener noreferrer">スーパーロボット大戦OG外伝</a></li>
      </ul>

      <h3 className="hard_title">ゲームボーイアドバンス</h3>
      <ul id="gbaList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%88%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF_%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%A8%E3%82%B0%E3%82%BC" target="_blank" rel="noopener noreferrer">ロックマンエグゼ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%80%E3%83%AD%E3%83%83%E3%83%88navi" target="_blank" rel="noopener noreferrer">メダロット・ナビ クワガタ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4" target="_blank" rel="noopener noreferrer">逆転裁判</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%88%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF_%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%A8%E3%82%B0%E3%82%BC2" target="_blank" rel="noopener noreferrer">ロックマンエグゼ2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%BC%E3%83%AD" target="_blank" rel="noopener noreferrer">ロックマンゼロ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4#%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A42" target="_blank" rel="noopener noreferrer">逆転裁判2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E5%A4%A2%E3%81%AE%E6%B3%89%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9" target="_blank" rel="noopener noreferrer">星のカービィ 夢の泉デラックス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%88%E3%83%AB%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF_%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%A8%E3%82%B0%E3%82%BC3" target="_blank" rel="noopener noreferrer">ロックマンエグゼ3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%82%AD%E3%83%A3%E3%83%A9%E3%83%90%E3%83%B3%E3%83%8F%E3%83%BC%E3%83%88" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ キャラバンハート</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC%E3%82%BF%E3%82%AF%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9" target="_blank" rel="noopener noreferrer">ファイナルファンタジータクティクスアドバンス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%BC%E3%83%AD2" target="_blank" rel="noopener noreferrer">ロックマンゼロ2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION#SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_GGENERATION_ADVANCE" target="_blank" rel="noopener noreferrer">SDガンダム Gジェネレーション ADVANCE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%A8%E3%82%B0%E3%82%BC4" target="_blank" rel="noopener noreferrer">ロックマンエグゼ4 トーナメント レッドサン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4#%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A43" target="_blank" rel="noopener noreferrer">逆転裁判3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E9%8F%A1%E3%81%AE%E5%A4%A7%E8%BF%B7%E5%AE%AE" target="_blank" rel="noopener noreferrer">星のカービィ 鏡の大迷宮</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%BC%E3%83%AD3" target="_blank" rel="noopener noreferrer">ロックマンゼロ3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3%E3%82%BC%E3%83%AD4" target="_blank" rel="noopener noreferrer">ロックマンゼロ4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCV#%E3%82%B2%E3%83%BC%E3%83%A0%E3%83%9C%E3%83%BC%E3%82%A4%E3%82%A2%E3%83%89%E3%83%90%E3%83%B3%E3%82%B9%E7%89%88" target="_blank" rel="noopener noreferrer">ファイナルファンタジーV アドバンス</a></li>
      </ul>

      <h3 className="hard_title">ゲームキューブ</h3>
      <ul id="gcList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%A3%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">スーパーマリオサンシャイン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">ファンタシースターオンライン エピソード1&2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%890" target="_blank" rel="noopener noreferrer">バイオハザード0</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AB%E3%83%80%E3%81%AE%E4%BC%9D%E8%AA%AC_%E9%A2%A8%E3%81%AE%E3%82%BF%E3%82%AF%E3%83%88" target="_blank" rel="noopener noreferrer">ゼルダの伝説 風のタクト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/P.N.03" target="_blank" rel="noopener noreferrer">P.N.03</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC%E3%83%BB%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%AB%E3%82%AF%E3%83%AD%E3%83%8B%E3%82%AF%E3%83%AB" target="_blank" rel="noopener noreferrer">ファイナルファンタジー・クリスタルクロニクル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3_%E3%82%A8%E3%83%94%E3%82%BD%E3%83%BC%E3%83%893_%E3%82%AB%E3%83%BC%E3%83%89%E3%83%AC%E3%83%9C%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">ファンタシースターオンライン エピソード3 カードレボリューション</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%86%E3%83%B3%E3%83%BB%E3%82%AB%E3%82%A4%E3%83%88%E3%82%B9_%E7%B5%82%E3%82%8F%E3%82%89%E3%81%AA%E3%81%84%E7%BF%BC%E3%81%A8%E5%A4%B1%E3%82%8F%E3%82%8C%E3%81%9F%E6%B5%B7" target="_blank" rel="noopener noreferrer">バテン・カイトス 終わらない翼と失われた海</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">ソニックヒーローズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_%E6%88%A6%E5%A3%AB%E9%81%94%E3%81%AE%E8%BB%8C%E8%B7%A1" target="_blank" rel="noopener noreferrer">機動戦士ガンダム 戦士達の軌跡</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%83%E3%82%AF%E3%83%9E%E3%83%B3X" target="_blank" rel="noopener noreferrer">ロックマンX コマンドミッション</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/SD%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0_%E3%82%AC%E3%82%B7%E3%83%A3%E3%83%9D%E3%83%B3%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">SDガンダム ガシャポンウォーズ</a></li>
      </ul>

      <h3 className="hard_title">Wii</h3>
      <ul id="wiiList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_%E3%82%A2%E3%83%B3%E3%83%96%E3%83%AC%E3%83%A9%E3%83%BB%E3%82%AF%E3%83%AD%E3%83%8B%E3%82%AF%E3%83%AB%E3%82%BA" target="_blank" rel="noopener noreferrer">バイオハザード アンブレラ・クロニクルズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88X_%E7%9B%AE%E8%A6%9A%E3%82%81%E3%81%97%E4%BA%94%E3%81%A4%E3%81%AE%E7%A8%AE%E6%97%8F_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">ドラゴンクエストX 眠れる勇者と導きの盟友 オンライン</a></li>
      </ul>

      <h3 className="hard_title">ニンテンドーDS</h3>
      <ul id="ndsList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%8A%E3%82%B6%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89_2%E3%81%A4%E3%81%AE%E8%A8%98%E6%86%B6" target="_blank" rel="noopener noreferrer">アナザーコード 2つの記憶</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%84%B3%E3%82%92%E9%8D%9B%E3%81%88%E3%82%8B%E5%A4%A7%E4%BA%BA%E3%81%AEDS%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0" target="_blank" rel="noopener noreferrer">脳を鍛える大人のDSトレーニング</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AA%E3%82%AA%E3%82%AB%E3%83%BC%E3%83%88DS" target="_blank" rel="noopener noreferrer">マリオカートDS</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E6%BC%A2%E5%AD%97%E8%83%BD%E5%8A%9B%E6%A4%9C%E5%AE%9A%E5%8D%94%E4%BC%9A%E5%85%AC%E8%AA%8D_%E6%BC%A2%E6%A4%9CDS" target="_blank" rel="noopener noreferrer">日本漢字能力検定協会公認 漢検DS</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/New_%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA%E3%83%96%E3%83%A9%E3%82%B6%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">New スーパーマリオブラザーズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%AB%E3%83%BC" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ ジョーカー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AA%E7%94%BA" target="_blank" rel="noopener noreferrer">レイトン教授と不思議な町</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC%E3%83%BB%E3%82%AF%E3%83%AA%E3%82%B9%E3%82%BF%E3%83%AB%E3%82%AF%E3%83%AD%E3%83%8B%E3%82%AF%E3%83%AB_%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%95%E3%82%A7%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer">ファイナルファンタジー・クリスタルクロニクル リング・オブ・フェイト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCCX_%E6%9C%89%E9%87%8E%E3%81%AE%E6%8C%91%E6%88%A6%E7%8A%B6" target="_blank" rel="noopener noreferrer">ゲームセンターCX 有野の挑戦状</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E6%82%AA%E9%AD%94%E3%81%AE%E7%AE%B1" target="_blank" rel="noopener noreferrer">レイトン教授と悪魔の箱</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9" target="_blank" rel="noopener noreferrer">星のカービィ ウルトラスーパーデラックス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E6%9C%80%E5%BE%8C%E3%81%AE%E6%99%82%E9%96%93%E6%97%85%E8%A1%8C" target="_blank" rel="noopener noreferrer">レイトン教授と最後の時間旅行</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BCZERO" target="_blank" rel="noopener noreferrer">ファンタシースターZERO</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BCCX_%E6%9C%89%E9%87%8E%E3%81%AE%E6%8C%91%E6%88%A6%E7%8A%B62" target="_blank" rel="noopener noreferrer">ゲームセンターCX 有野の挑戦状2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6K" target="_blank" rel="noopener noreferrer">スーパーロボット大戦K</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E6%A4%9C%E4%BA%8B" target="_blank" rel="noopener noreferrer">逆転検事</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88IX_%E6%98%9F%E7%A9%BA%E3%81%AE%E5%AE%88%E3%82%8A%E4%BA%BA" target="_blank" rel="noopener noreferrer">ドラゴンクエストIX 星空の守り人</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E9%AD%94%E7%A5%9E%E3%81%AE%E7%AC%9B" target="_blank" rel="noopener noreferrer">レイトン教授と魔神の笛</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%AB%E3%83%BC2" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ ジョーカー2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E6%A4%9C%E4%BA%8B#%E9%80%86%E8%BB%A2%E6%A4%9C%E4%BA%8B2" target="_blank" rel="noopener noreferrer">逆転検事2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88_%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF" target="_blank" rel="noopener noreferrer">ゴースト トリック</a></li>
      </ul>

      <h3 className="hard_title">PSP</h3>
      <ul id="pspList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A5%B5%E9%AD%94%E7%95%8C%E6%9D%91" target="_blank" rel="noopener noreferrer">極魔界村</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89_%E3%83%90%E3%83%B3%E3%83%89%E3%83%87%E3%82%B7%E3%83%8D" target="_blank" rel="noopener noreferrer">メタルギアソリッド バンドデシネ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB" target="_blank" rel="noopener noreferrer">モンスターハンターポータブル 2nd</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%B7%E3%82%B9_%E3%82%B3%E3%82%A2_%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCVII" target="_blank" rel="noopener noreferrer">クライシス コア ファイナルファンタジーVII</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89_%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E3%83%BB%E3%82%AA%E3%83%97%E3%82%B9%2B" target="_blank" rel="noopener noreferrer">メタルギアソリッド ポータブル・オプス+</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6A" target="_blank" rel="noopener noreferrer">スーパーロボット大戦A PORTABLE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB" target="_blank" rel="noopener noreferrer">ファンタシースターポータブル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%82%B7%E3%83%87%E3%82%A3%E3%82%A2_%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC" target="_blank" rel="noopener noreferrer">ディシディア ファイナルファンタジー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">イースI&IIクロニクルズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9VII" target="_blank" rel="noopener noreferrer">イースセブン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%AA%E9%96%A4%E7%AB%8B%E5%BF%97%E4%BC%9DV" target="_blank" rel="noopener noreferrer">太閤立志伝V</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB2" target="_blank" rel="noopener noreferrer">ファンタシースターポータブル2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9_-%E3%83%95%E3%82%A7%E3%83%AB%E3%82%AC%E3%83%8A%E3%81%AE%E8%AA%93%E3%81%84-" target="_blank" rel="noopener noreferrer">イース -フェルガナの誓い-</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89_%E3%83%94%E3%83%BC%E3%82%B9%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AB%E3%83%BC" target="_blank" rel="noopener noreferrer">メタルギアソリッド ピースウォーカー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB2_%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A3%E3%83%8B%E3%83%86%E3%82%A3" target="_blank" rel="noopener noreferrer">ファンタシースターポータブル2 インフィニティ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6Operation_Extend" target="_blank" rel="noopener noreferrer">スーパーロボット大戦Operation Extend</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B0" target="_blank" rel="noopener noreferrer">メタルスラッグコンプリート</a></li>
      </ul>

      <h3 className="hard_title">プレイステーション3</h3>
      <ul id="ps3List" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A24" target="_blank" rel="noopener noreferrer">アーマード・コア4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A2_%E3%83%95%E3%82%A9%E3%83%BC%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%BC" target="_blank" rel="noopener noreferrer">アーマード・コア フォーアンサー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%894" target="_blank" rel="noopener noreferrer">メタルギアソリッド4 ガンズ・オブ・ザ・パトリオット</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%895" target="_blank" rel="noopener noreferrer">バイオハザード5</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/BLAZBLUE" target="_blank" rel="noopener noreferrer">BLAZBLUE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E6%88%A6%E8%A8%98_(%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B33)" target="_blank" rel="noopener noreferrer">機動戦士ガンダム戦記</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E9%BB%84%E9%87%91%E5%88%80%E3%81%A8%E6%B6%88%E3%81%88%E3%81%9F%E8%88%B9%E5%9B%A3" target="_blank" rel="noopener noreferrer">アンチャーテッド 黄金刀と消えた船団</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%84%A1%E5%8F%8COROCHI_2" target="_blank" rel="noopener noreferrer">無双OROCHI 2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%83%9E%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B3%E3%82%A25" target="_blank" rel="noopener noreferrer">アーマード・コア5</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%AC%AC2%E6%AC%A1%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6OG" target="_blank" rel="noopener noreferrer">第2次スーパーロボット大戦OG</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2_%E3%83%A9%E3%82%A4%E3%82%B8%E3%83%B3%E3%82%B0_%E3%83%AA%E3%83%99%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%B3%E3%82%B9" target="_blank" rel="noopener noreferrer">メタルギア ライジング リベンジェンス</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%96%E3%83%AC%E3%82%A4%E3%82%AB%E3%83%BC" target="_blank" rel="noopener noreferrer">ガンダムブレイカー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6OG_INFINITE_BATTLE" target="_blank" rel="noopener noreferrer">スーパーロボット大戦OG INFINITE BATTLE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%896" target="_blank" rel="noopener noreferrer">バイオハザード6</a></li>
      </ul>

      <h3 className="hard_title">ニンテンドー3DS</h3>
      <ul id="3dsList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E5%A5%87%E8%B7%A1%E3%81%AE%E4%BB%AE%E9%9D%A2" target="_blank" rel="noopener noreferrer">レイトン教授と奇跡の仮面</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%A4%E3%83%AD%E3%83%83%E3%83%88%E3%82%A6%E3%82%A4%E3%83%B3%E3%82%B0%E3%82%B9_%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88" target="_blank" rel="noopener noreferrer">パイロットウイングス リゾート</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC#%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC_3G" target="_blank" rel="noopener noreferrer">モンスターハンター3（トライ）G</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_%E3%83%AA%E3%83%99%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BA" target="_blank" rel="noopener noreferrer">バイオハザード リベレーションズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%83%86%E3%83%AA%E3%83%BC%E3%81%AE%E3%83%AF%E3%83%B3%E3%83%80%E3%83%BC%E3%83%A9%E3%83%B3%E3%83%89" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ テリーのワンダーランド3D</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/PROJECT_X_ZONE" target="_blank" rel="noopener noreferrer">PROJECT X ZONE</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%81%A8%E3%81%B3%E3%81%A0%E3%81%9B_%E3%81%A9%E3%81%86%E3%81%B6%E3%81%A4%E3%81%AE%E6%A3%AE" target="_blank" rel="noopener noreferrer">とびだせ どうぶつの森</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%82%A4%E3%83%96%E3%83%AA%E3%83%BC%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88" target="_blank" rel="noopener noreferrer">ブレイブリーデフォルト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88VS%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4" target="_blank" rel="noopener noreferrer">レイトン教授VS逆転裁判</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%AC%E3%82%A4%E3%83%88%E3%83%B3%E6%95%99%E6%8E%88%E3%81%A8%E8%B6%85%E6%96%87%E6%98%8EA%E3%81%AE%E9%81%BA%E7%94%A3" target="_blank" rel="noopener noreferrer">レイトン教授と超文明Aの遺産</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6UX" target="_blank" rel="noopener noreferrer">スーパーロボット大戦UX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4#%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A45" target="_blank" rel="noopener noreferrer">逆転裁判5</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA2_%E3%83%9E%E3%83%AB%E3%82%BF%E3%81%AE%E3%81%B5%E3%81%97%E3%81%8E%E3%81%AA%E9%8D%B5" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ2 イルとルカの不思議なふしぎな鍵</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E6%A8%B9%E3%81%A8%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">世界樹と不思議のダンジョン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6BX" target="_blank" rel="noopener noreferrer">スーパーロボット大戦BX</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/PROJECT_X_ZONE_2" target="_blank" rel="noopener noreferrer">PROJECT X ZONE 2 BRAVE NEW WORLD</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E6%98%9F%E3%81%AE%E3%82%AB%E3%83%BC%E3%83%93%E3%82%A3_%E3%83%AD%E3%83%9C%E3%83%9C%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%88" target="_blank" rel="noopener noreferrer">星のカービィ ロボボプラネット</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4" target="_blank" rel="noopener noreferrer">逆転裁判6</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E8%92%BC%E3%81%8D%E9%9B%B7%E9%9C%86_%E3%82%AC%E3%83%B3%E3%83%B4%E3%82%A9%E3%83%AB%E3%83%88%E7%88%AA" target="_blank" rel="noopener noreferrer">蒼き雷霆 ガンヴォルト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%AB%E3%83%BC3" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ ジョーカー3 プロフェッショナル</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88XI_%E9%81%8E%E3%81%8E%E5%8E%BB%E3%82%8A%E3%81%97%E6%99%82%E3%82%92%E6%B1%82%E3%82%81%E3%81%A6" target="_blank" rel="noopener noreferrer">ドラゴンクエストXI 過ぎ去りし時を求めて</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E9%80%86%E8%BB%A2%E8%A3%81%E5%88%A4" target="_blank" rel="noopener noreferrer">大逆転裁判2 -成歩堂龍ノ介の覺悟-</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E6%A8%B9%E3%81%A8%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E3%83%80%E3%83%B3%E3%82%B8%E3%83%A7%E3%83%B3" target="_blank" rel="noopener noreferrer">世界樹と不思議のダンジョン2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_%E3%82%B8%E3%83%A7%E3%83%BC%E3%82%AB%E3%83%BC3" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ ジョーカー3</a></li>
      </ul>

      <h3 className="hard_title">PS VITA</h3>
      <ul id="vitaList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E5%9C%B0%E5%9B%B3%E3%81%AA%E3%81%8D%E5%86%92%E9%99%BA%E3%81%AE%E5%A7%8B%E3%81%BE%E3%82%8A" target="_blank" rel="noopener noreferrer">アンチャーテッド 地図なき冒険の始まり</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9_%E3%82%BB%E3%83%AB%E3%82%BB%E3%82%BF%E3%81%AE%E6%A8%B9%E6%B5%B7" target="_blank" rel="noopener noreferrer">イース セルセタの樹海</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%96%E3%83%AC%E3%82%A4%E3%82%AB%E3%83%BC2" target="_blank" rel="noopener noreferrer">ガンダムブレイカー2</a></li>
          <li><a href="https://www.jp.playstation.com/software/title/up0613pcse01023_00jpvita0000000001.html" target="_blank" rel="noopener noreferrer">Salt and Sanctuary</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9VIII" target="_blank" rel="noopener noreferrer">イースVIII -Lacrimosa of DANA-</a></li>
      </ul>

      <h3 className="hard_title">プレイステーション4</h3>
      <ul id="ps4List" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/KNACK" target="_blank" rel="noopener noreferrer">KNACK</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89V" target="_blank" rel="noopener noreferrer">メタルギアソリッドV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%84%A1%E5%8F%8COROCHI_2#%E7%84%A1%E5%8F%8COROCHI2_Ultimate" target="_blank" rel="noopener noreferrer">無双OROCHI2 Ultimate</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%BA_%E9%97%87%E7%AB%9C%E3%81%A8%E4%B8%96%E7%95%8C%E6%A8%B9%E3%81%AE%E5%9F%8E" target="_blank" rel="noopener noreferrer">ドラゴンクエストヒーローズ 闇竜と世界樹の城</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_%E3%83%AA%E3%83%99%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BA2" target="_blank" rel="noopener noreferrer">バイオハザード リベレーションズ2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%93%E3%83%AB%E3%83%80%E3%83%BC%E3%82%BA_%E3%82%A2%E3%83%AC%E3%83%95%E3%82%AC%E3%83%AB%E3%83%89%E3%82%92%E5%BE%A9%E6%B4%BB%E3%81%9B%E3%82%88" target="_blank" rel="noopener noreferrer">ドラゴンクエストビルダーズ アレフガルドを復活せよ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Bloodborne" target="_blank" rel="noopener noreferrer">Bloodborne</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%9C%B0%E7%90%83%E9%98%B2%E8%A1%9B%E8%BB%8D4" target="_blank" rel="noopener noreferrer">地球防衛軍4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0%E3%83%96%E3%83%AC%E3%82%A4%E3%82%AB%E3%83%BC3" target="_blank" rel="noopener noreferrer">ガンダムブレイカー3</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3_(%E3%82%B2%E3%83%BC%E3%83%A0)" target="_blank" rel="noopener noreferrer">ディビジョン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6OG_%E3%83%A0%E3%83%BC%E3%83%B3%E3%83%BB%E3%83%87%E3%83%A5%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%BA" target="_blank" rel="noopener noreferrer">スーパーロボット大戦OG ムーン・デュエラーズ</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6V" target="_blank" rel="noopener noreferrer">スーパーロボット大戦V</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88XI_%E9%81%8E%E3%81%8E%E5%8E%BB%E3%82%8A%E3%81%97%E6%99%82%E3%82%92%E6%B1%82%E3%82%81%E3%81%A6" target="_blank" rel="noopener noreferrer">ドラゴンクエストXI 過ぎ去りし時を求めて</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E6%B5%B7%E8%B3%8A%E7%8E%8B%E3%81%A8%E6%9C%80%E5%BE%8C%E3%81%AE%E7%A7%98%E5%AE%9D#%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E5%8F%A4%E4%BB%A3%E7%A5%9E%E3%81%AE%E7%A7%98%E5%AE%9D" target="_blank" rel="noopener noreferrer">アンチャーテッド 海賊王と最後の秘宝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E6%B5%B7%E8%B3%8A%E7%8E%8B%E3%81%A8%E6%9C%80%E5%BE%8C%E3%81%AE%E7%A7%98%E5%AE%9D#%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E5%8F%A4%E4%BB%A3%E7%A5%9E%E3%81%AE%E7%A7%98%E5%AE%9D" target="_blank" rel="noopener noreferrer">アンチャーテッド 古代神の秘宝</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%EF%BC%9A%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89" target="_blank" rel="noopener noreferrer">モンスターハンター：ワールド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6X" target="_blank" rel="noopener noreferrer">スーパーロボット大戦X</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%93%E3%83%AB%E3%83%80%E3%83%BC%E3%82%BA2_%E7%A0%B4%E5%A3%8A%E7%A5%9E%E3%82%B7%E3%83%89%E3%83%BC%E3%81%A8%E3%81%8B%E3%82%89%E3%81%A3%E3%81%BD%E3%81%AE%E5%B3%B6" target="_blank" rel="noopener noreferrer">ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6T" target="_blank" rel="noopener noreferrer">スーパーロボット大戦T</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%EF%BC%9A%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89" target="_blank" rel="noopener noreferrer">MHW アイスボーン</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%84%A1%E5%8F%8COROCHI_3#%E7%84%A1%E5%8F%8COROCHI3_Ultimate" target="_blank" rel="noopener noreferrer">無双OROCHI 3 Ultimate</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%86%E3%83%83%E3%83%89_%E3%82%A8%E3%83%AB%E3%83%BB%E3%83%89%E3%83%A9%E3%83%89%E3%81%AE%E7%A7%98%E5%AE%9D" target="_blank" rel="noopener noreferrer">アンチャーテッド エル・ドラドの秘宝(アンチャーテッド コレクション)</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%BC%E3%82%B9IX" target="_blank" rel="noopener noreferrer">イースIX -Monstrum NOX-</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A630" target="_blank" rel="noopener noreferrer">スーパーロボット大戦30</a></li>
      </ul>

      <h3 className="hard_title">Nintendo Switch</h3>
      <ul id="nsList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%97%E3%83%A9%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B32" target="_blank" rel="noopener noreferrer">スプラトゥーン2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AB%E3%83%80%E3%81%AE%E4%BC%9D%E8%AA%AC_%E3%83%96%E3%83%AC%E3%82%B9_%E3%82%AA%E3%83%96_%E3%82%B6_%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89" target="_blank" rel="noopener noreferrer">ゼルダの伝説 ブレス オブ ザ ワイルド</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AA%E3%82%AA_%E3%82%AA%E3%83%87%E3%83%83%E3%82%BB%E3%82%A4" target="_blank" rel="noopener noreferrer">スーパーマリオ オデッセイ</a></li>
          <li><a href="https://dxm.marv.jp/" target="_blank" rel="noopener noreferrer">DAEMON X MACHINA</a></li>
          <li><a href="https://bonusstage.net/kuroshinju/" target="_blank" rel="noopener noreferrer">伊勢志摩ミステリー案内 偽りの黒真珠</a></li>
          <li><a href="https://bonusstage.net/ginreika/" target="_blank" rel="noopener noreferrer">秋田・男鹿ミステリー案内 凍える銀鈴花</a></li>
          <li><a href="https://bonusstage.net/taketourou/" target="_blank" rel="noopener noreferrer">大分・別府ミステリー案内 歪んだ竹灯篭</a></li>
          <li><a href="https://www.dqx.jp/offline/" target="_blank" rel="noopener noreferrer">ドラゴンクエストX オフライン</a></li>
          <li><a href="https://www.nintendo.co.jp/zelda/totk/index.html" target="_blank" rel="noopener noreferrer">ゼルダの伝説 ティアーズ オブ ザ キングダム</a></li>
          <li><a href="https://www.jp.square-enix.com/paranormasight/" target="_blank" rel="noopener noreferrer">パラノマサイト</a></li>
          <li><a href="https://store-jp.nintendo.com/list/software/70010000022203.html" target="_blank" rel="noopener noreferrer">TETRA</a></li>
      </ul>

      <h3 className="hard_title">プレイステーション5</h3>
      <ul id="ps4List" className="list_items">
          <li><a href="https://www.ea.com/ja-jp/games/starwars/jedi/jedi-survivor" target="_blank" rel="noopener noreferrer">Star Wars ジェダイ：サバイバー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%89_RE:4" target="_blank" rel="noopener noreferrer">バイオハザード RE:4</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCXVI" target="_blank" rel="noopener noreferrer">ファイナルファンタジーXVI</a></li>
      </ul>

      <h3 className="hard_title">PC(Steam他)</h3>
      <ul id="pcList" className="list_items">
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%AB%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BCXIV" target="_blank" rel="noopener noreferrer">FF XIV</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88X_%E7%9B%AE%E8%A6%9A%E3%82%81%E3%81%97%E4%BA%94%E3%81%A4%E3%81%AE%E7%A8%AE%E6%97%8F_%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" target="_blank" rel="noopener noreferrer">DQ10</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B7%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B32" target="_blank" rel="noopener noreferrer">PSO2</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Terraria" target="_blank" rel="noopener noreferrer">Terraria</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Starbound" target="_blank" rel="noopener noreferrer">StarBound</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Fallout_4" target="_blank" rel="noopener noreferrer">Fallout 4</a></li>
          <li><a href="https://store.steampowered.com/app/753420/Dungreed/?l=japanese" target="_blank" rel="noopener noreferrer">Dungreed</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E7%84%A1%E5%8F%8COROCHI_Z" target="_blank" rel="noopener noreferrer">無双OROCHI Z</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%BB%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BA_%E3%82%B8%E3%82%A7%E3%83%80%E3%82%A4:%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%B3%E3%83%BB%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC" target="_blank" rel="noopener noreferrer">スター・ウォーズ ジェダイ:フォールン・オーダー</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E3%83%AA%E3%82%B3%E3%83%B3_%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89%E3%83%A9%E3%83%B3%E3%82%BA" target="_blank" rel="noopener noreferrer">ゴーストリコン ワイルドランズ</a></li>
          <li><a href="https://store.steampowered.com/app/1307550/Craftopia/?l=japanese" target="_blank" rel="noopener noreferrer">Craftopia</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E5%A4%A9%E7%A9%82%E3%81%AE%E3%82%B5%E3%82%AF%E3%83%8A%E3%83%92%E3%83%A1" target="_blank" rel="noopener noreferrer">天穂のサクナヒメ</a></li>
          <li><a href="https://sonic.sega.jp/SonicFrontiers/" target="_blank" rel="noopener noreferrer">ソニックフロンティア</a></li>
          <li><a href="https://store.steampowered.com/app/801480/Agent_A_A_puzzle_in_disguise/?l=japanese" target="_blank" rel="noopener noreferrer">Agent A: A puzzle in disguise</a></li>
          <li><a href="https://store.steampowered.com/app/312670/Strange_Brigade/?l=japanese" target="_blank" rel="noopener noreferrer">Strange Brigade</a></li>
          <li><a href="https://store.steampowered.com/app/368370/Her_Story/?l=japanese" target="_blank" rel="noopener noreferrer">Her Story</a></li>
          <li><a href="https://store.steampowered.com/app/241260/Sherlock_Holmes_Crimes_and_Punishments/?l=japanese" target="_blank" rel="noopener noreferrer">Sherlock Holmes: Crimes and Punishments</a></li>
      </ul>

      <h3 className="hard_title">スマートフォン</h3>
      <ul id="spList" className="list_items">
          <li><a href="https://www.4gamer.net/games/304/G030427/" target="_blank" rel="noopener noreferrer">彼女は最後にそう言った</a></li>
          <li><a href="http://www.dragonquest.jp/dqmsl/" target="_blank" rel="noopener noreferrer">ドラゴンクエストモンスターズ スーパーライト</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/Fate/Grand_Order" target="_blank" rel="noopener noreferrer">Fate/Grand Order</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E5%A4%A7%E6%88%A6DD" target="_blank" rel="noopener noreferrer">スパロボDD</a></li>
          <li><a href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF" target="_blank" rel="noopener noreferrer">DQウォーク</a></li>
          <li><a href="https://www.capcom-games.com/product/ja-jp/edotan/" target="_blank" rel="noopener noreferrer">えどたん</a></li>
      </ul>
    </>
  )
};

export default Videogame;