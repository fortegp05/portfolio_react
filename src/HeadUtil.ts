const setMetaTag = (
  keyAttr: string,
  keyValue: string,
  valueAttr: string,
  value: string,
): void => {
  const { head } = document;
  const meta = document.createElement('meta');
  meta.setAttribute(keyAttr, keyValue);
  meta.setAttribute(valueAttr, value);
  head.appendChild(meta);
};

type HeadTagInfo = {
  title: string;
  description: string;
  twitterDescription: string;
  ogType: string;
  ogDescription: string;
};

const setHeadTagInfo = (headTagInfo: HeadTagInfo): void => {
  // タイトル変更
  document.title = headTagInfo.title;
  // ページごとに異なるmetaタグを生成する
  setMetaTag('name', 'description', 'content', headTagInfo.description);
  setMetaTag(
    'name',
    'twitter:description',
    'content',
    headTagInfo.twitterDescription,
  );
  setMetaTag('property', 'og:type', 'content', headTagInfo.ogType);
  setMetaTag(
    'property',
    'og:description',
    'content',
    headTagInfo.ogDescription,
  );
};

export default setHeadTagInfo;
