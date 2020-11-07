import React, { FC } from 'react'

const Mini4wd: FC = () => {
  return (
    <>
      <h2>いま使用中のマシン</h2>
      <div className="updateDateMade">2019年3月現在</div>
      
      <h3>エアロアバンテ</h3>
      <p>
          シャーシはMA、ボディはポリカのエアロアバンテ。<br />
          フロントは自作のスプリングピボットバンパー。<br />
          リアは簡易軸打ち。<br />
          ボディが綺麗に塗装できたので大満足。<br />
          (裏からシルバー、表面に蛍光ブルー、クリアーブルーの重ねがけ)
      </p>
      <p>
          マスダンパーの設置場所が少ないのがイマイチ…。<br />
          いつか作り直したい。
      </p>
      <div className="imgCardArea">
          <div className="imgCard">
              <a href="images/IMG_8428.jpg">
                  <img className="imgData" src="images/IMG_8428_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_1692.jpg">
                  <img className="imgData" src="images/IMG_1692_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_2746.jpg">
                  <img className="imgData" src="images/IMG_2746_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_1870.jpg">
                  <img className="imgData" src="images/IMG_1870_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_2252.jpg">
                  <img className="imgData" src="images/IMG_2252_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_1008.jpg">
                  <img className="imgData" src="images/IMG_1008_sml.jpg" alt="" />
              </a>
          </div>
      </div>
      
      <h3>シャイニングスコーピオン</h3>
      <p>
          シャーシはMA。<br />
          そのままフルカウルのボディをMAに乗せると電池周りが干渉するので、<br />
          電池周りを中心に加工して乗っけてる。<br />
          フロント、リアともに市販のスライドダンパー。<br />
          サイドマスダンはボディキャッチを加工したもの。<br />
          ボディの塗装はパールホワイトの上にブルーを重ねている。<br />
          マスキングによるブルーのラインがそこそこ上手くいったのがお気に入り。
      </p>
      <p>
          スライドダンパーはカーボンのに変えたい。<br />
          あとサイドマスダンパーがいまいちなので、<br />
          もっと可動域が多い感じにしたいなぁ。
      </p>
      <div className="imgCardArea">
          <div className="imgCard">
              <a href="images/IMG_0150.jpg">
                  <img className="imgData" src="images/IMG_0150_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_3581.jpg">
                  <img className="imgData" src="images/IMG_3581_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_9143.jpg">
                  <img className="imgData" src="images/IMG_9143_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_4692.jpg">
                  <img className="imgData" src="images/IMG_4692_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_8613.jpg">
                  <img className="imgData" src="images/IMG_8613_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_2199.jpg">
                  <img className="imgData" src="images/IMG_2199_sml.jpg" alt="" />
              </a>
          </div>
      </div>
    </>
  )
}

export default Mini4wd;