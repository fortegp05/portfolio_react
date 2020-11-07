import React, { FC } from 'react';

const Electronicwork: FC = () => {
  return (
    <>
      <h2>いままで作ったもの</h2>
      <div className="updateDateNowPlaying">2019年3月現在</div>

      <h3>赤ニキシー管時計</h3>
      <p>
          英国のPV Electronics製のキット。
      </p>
      <div className="imgCardArea">
          <div className="imgCard">
              <a href="images/IMG_8046.jpg">
                  <img className="imgData" src="images/IMG_8046_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_7305.jpg">
                  <img className="imgData" src="images/IMG_7305_sml.jpg" alt="" />
              </a>
          </div>
      </div>

      <h3>ニキシー管時計</h3>
      <p>
          日本のSandersonia Electronics製のキット。
      </p>
      <div className="imgCardArea">
          <div className="imgCard">
              <a href="images/IMG_5006.jpg">
                  <img className="imgData" src="images/IMG_5006_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_3669.jpg">
                  <img className="imgData" src="images/IMG_3669_sml.jpg" alt="" />
              </a>
          </div>
      </div>

      <h3>単3電池の放電器</h3>
      <p>
          ミニ四駆の充電池を特定電圧まで放電するもの。<br />
          一定の電圧まで放電してから充電すると、<br />
          満充電後のパワーが増す。
      </p>
      <div className="imgCardArea">
          <div className="imgCard">
              <a href="images/IMG_2207.jpg">
                  <img className="imgData" src="images/IMG_2207_sml.jpg" alt="" />
              </a>
          </div>

          <div className="imgCard">
              <a href="images/IMG_4659.jpg">
                  <img className="imgData" src="images/IMG_4659_sml.jpg" alt="" />
              </a>
          </div>
      </div>
    </>
  )
}

export default Electronicwork;