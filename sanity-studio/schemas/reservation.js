export default {
  title: 'Reservation',
  name: 'reservation',
  type: 'document',
  fields: [
    {
      title: '성함',
      name: 'name',
      type: 'string',
    },
    {
      title: '연락처',
      name: 'contact',
      type: 'string',
    },
    {
      title: '구매를 고려중인 할리데이비슨',
      name: 'harleyModel',
      type: 'string',
    },
    {
      title: '점검 희망일',
      name: 'preferredDate',
      type: 'date',
    },
  ],
}
