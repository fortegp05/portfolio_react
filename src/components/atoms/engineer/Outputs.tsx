import React, { FC } from 'react';

const Output: FC = () => {
  return (
    <>
    <h2>アウトプット</h2>
    <h3>プロダクト</h3>
    <div>
        <ul className="list_items">
            <li>
                <a href="https://fortegp05.github.io/aozorafm/" target="_blank" rel="noopener noreferrer nofollow">Podcast『aozora.fm』の配信サイト</a>改修
                <ul className="list_items">
                    <li>
                        <a href="https://r7kamura.github.io/yattecast/" target="_blank" rel="noopener noreferrer nofollow">Yattecast</a>テンプレートに以下の機能を追加
                        <ul className="list_items">
                            <li>chapter機能の追加</li>
                            <li>再生位置とchapterの背景色連動</li>
                            <li>レジューム再生機能(ページを閉じる際に再生位置を記憶、復元する機能)</li>
                            <li>スクロール時の再生エリア追従</li>
                            <li>告知内容が目立つようにレイアウト変更(レスポンシブ対応済み)</li>
                            <li>RSSフィードに改修した機能の内容を追記</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <a href="https://qiita.com/FORTE/items/0a3bae8e172039071af4" target="_blank" rel="noopener noreferrer nofollow">Androidアプリのサンプル開発</a>
                <ul className="list_items">
                    <li>
                        レガシーなアーキテクチャからの改善を目的に、<br />
                        たたき台となるサンプルアプリを開発。<br />
                        以下のアーキテクチャ、ライブラリなどを実装。
                        <ul className="list_items">
                            <li>MVVMアーキテクチャ</li>
                            <li>DataBinfding</li>
                            <li>RxJava2</li>
                            <li>RxBus</li>
                            <li>Room</li>
                            <li>okhhtp3</li>
                            <li>RxJavaに対応したユニットテスト</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <a href="/" target="_blank">ポートフォリオ</a>(本サイト)
                <ul className="list_items">
                    <li>
                        Reactで作成。
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    </>
  );
};

export default Output;