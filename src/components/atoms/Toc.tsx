import React, { FC, useEffect } from 'react';
import './Toc.css';

type props = {
  elements: HTMLElement[]
}

type toc = {
  contents: string
  top: number
  className: string
  id: string,
  tocId: string,
  key: number
}

const Toc: FC<props> = ({elements}) => {
  // TOC生成
  const tocData: toc[] = []
  let index = 0
  elements.map(e =>
    {
      tocData.push({
        contents: e.innerText,
        top: e.getBoundingClientRect().top,
        className: `toc${e.tagName}`,
        id: `toc${index}`,
        tocId: `tocId${index}`,
        key: index
      })
      e.setAttribute("id", `toc${index}`)
      return index++
    }
  )

  const toScroll = (id: string): void => {
    const target = document.getElementById(id);
    if (target == null) return;
    const rectTop = target.getBoundingClientRect().top;
    const { pageYOffset } = window;
    const top = rectTop - 100 + pageYOffset;
  
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    if (tocData.length === 0) return;

    // スクロールイベント
    const scrollListener = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      tocData.map((data, index) => {
        const tocElement = document.getElementById(data.tocId)
        if (tocElement == null) return null
        const tocElementClassList = tocElement.classList
        
        let contentsEnd = 0;
        if (index < tocData.length - 1) {
          contentsEnd = tocData[index + 1].top
        } else {
          contentsEnd = document.body.offsetHeight
        }

        if (data.top <= scrollTop && scrollTop <= contentsEnd) {
          tocElementClassList.add("highlight")
        } else {
          tocElementClassList.remove("highlight")
        }
        return null
      })
    };
    
    window.addEventListener('scroll', scrollListener);
  }, [tocData]);

  return (
    <div className="toc">
      <div className="side">
        <ul>
          {tocData.map((data) => (
            <li key={data.key} id={data.tocId} className={data.className}>
              <button type="button" className="toc_btn" onClick={() => toScroll(data.id)}>{data.contents}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Toc;