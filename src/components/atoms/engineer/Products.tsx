import React, { FC } from 'react';
import './Products.css';

const ProductImages = [
  {
    id: 1,
    image: 'images/portfolio_image.png',
    class: 'product_image',
  },
  {
    id: 2,
    image: 'images/podcast_image.png',
    class: 'product_image',
  },
  {
    id: 3,
    image: 'images/android_sample_image.png',
    class: 'product_image_long',
  },
];

const ProductDatas = [
  {
    id: 1,
    title: 'Portfolio',
    url: 'https://fortegp05.net/',
    urlText: 'https://fortegp05.net/',
    src: 'https://github.com/fortegp05/portfolio_react',
    description:
      'このサイトです。Reactで作られています。',
    skills: [
      { id: 1, logo: 'images/javascript.png' },
      { id: 2, logo: 'images/typescript-icon.svg' },
      { id: 3, logo: 'images/react.svg' },
      { id: 4, logo: 'images/html-5.png' },
    ],
    classNameShow: "show",
  },
  {
    id: 2,
    title: 'Podcast配信サイト',
    url: 'https://fortegp05.github.io/aozorafm/',
    urlText: 'https://fortegp05.github.io/aozorafm/',
    src: 'https://github.com/fortegp05/aozorafm',
    description:
      'テンプレートyattecastを改造。チャプター、スクロール時の再生バー固定表示、再生位置保存、告知欄の追加など。',
    skills: [
      { id: 1, logo: 'images/jekyll.png' },
      { id: 2, logo: 'images/github-octocat.png' },
      { id: 3, logo: 'images/javascript.png' },
      { id: 4, logo: 'images/html-5.png' },
    ],
    classNameShow: "",
  },
  {
    id: 3,
    title: 'Androidサンプルアプリ',
    url: 'https://qiita.com/FORTE/items/0a3bae8e172039071af4',
    urlText: '説明Qiita',
    src: 'https://github.com/fortegp05/SampleAndroidApps',
    description:
      'JavaによるRxJava(RxAndroid) + RxBus + Data Binding + roomのサンプルアプリ。',
    skills: [
      { id: 1, logo: 'images/android-icon.png' },
      { id: 2, logo: 'images/java.png' },
      { id: 3, logo: 'images/github-octocat.png' },
    ],
    classNameShow: "",
  },
];

const Products: FC = () => {
  const onclickFunction = (id: number): void => {
    const target = document.getElementById(`AreaProduct${id}`);
    if (target == null) return;
    const { classList } = target;

    if (classList.contains('show')) {
      return;
    }
    const elements = document.getElementsByClassName('show');
    Array.prototype.forEach.call(elements, (element: HTMLElement) => {
      element.classList.remove('show');
    });

    classList.add('show');
  };

  return (
    <>
      <h2>作ったもの</h2>
      {ProductImages.map((productImage) => (
        <div key={productImage.id} className="product_tile_area">
          <div className="product_tile">
            <button
              className="show_product_data_btn"
              type="button"
              onClick={() => onclickFunction(productImage.id)}
            >
              <img
                className={productImage.class}
                src={productImage.image}
                alt=""
              />
            </button>
          </div>
        </div>
      ))}
      {ProductDatas.map((productData) => (
        <div key={productData.id}>
          <div id={`AreaProduct${productData.id}`} className={`product_data ${productData.classNameShow}`}>
            <div className="product_title">{productData.title}</div>
            <div className="product_column_title">URL</div>
            <div className="product_column_text">
              <a href={productData.url}>{productData.urlText}</a>
            </div>
            <div className="product_column_title">ソースコード</div>
            <div className="product_column_text">{productData.src}</div>
            <div className="product_column_title">説明</div>
            <div className="product_column_text">{productData.description}</div>
            <div className="product_column_title">スキル</div>
            <div className="product_column_text">
              {productData.skills.map((skill) => (
                <ul key={skill.id} className="product_skill_logo">
                  <li>
                    <img src={skill.logo} alt="" />
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
