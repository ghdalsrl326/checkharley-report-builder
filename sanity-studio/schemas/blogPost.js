export default {
  title: 'BlogPost',
  name: 'blogPost',
  type: 'document',
  fields: [
    {
      title: '대표 이미지',
      name: 'mainImage',
      type: 'image',
    },
    {
      title: '카테고리',
      name: 'category',
      type: 'string',
    },
    {
      title: '제목',
      name: 'title',
      type: 'string',
    },
    {
      title: '요약',
      name: 'summary',
      type: 'markdown',
    },
    {
      title: '본문',
      name: 'content',
      type: 'markdown',
    },
    {
      title: '본문 이미지 리스트',
      name: 'contentImages',
      type: 'array',
      of: [
        {
          title: '본문 이미지',
          name: 'contentImage',
          type: 'image',
        },
      ],
    },
    {
      title: '태그',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: '작성일',
      name: 'publishedAt',
      type: 'date',
    },
  ],
}
