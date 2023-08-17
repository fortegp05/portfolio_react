import React, { FC } from 'react';

const Qualification: FC = () => {
  return (
    <>
      <h2>資格(習得時期)</h2>
      <div>
          <ul className="list_items">
              <li>AWS SAA(SAA-C03 2023年3月)</li>
              <li>認定スクラムマスター(2019年4月)</li>
              <li>
                  VMware CertifiedProfessional 5 - Data Center Virtualization(VCP5-DCV)<br />
                  2013年12月取得(2015年12月更新)
              </li>
              <li>基本情報技術者試験(2007年5月)</li>
              <li>第2種電気工事士(2004年10月)</li>
              <li>普通自動車免許第一種（2005年8月）</li>
          </ul>
      </div>
    </>
  )
};

export default Qualification;