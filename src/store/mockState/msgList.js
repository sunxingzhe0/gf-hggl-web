export default {
  headers: [
    {
      field: 'address', //当sorted为true时，字段名用于传递到后台进行排序查询使用
      dataField: 'address',
      fieldName: '消息标题', //列表头名
      fixed: true, //true固定必须显示,false放到3个点中备用显示
      sorted: false, //true可以进行排序，false不可进行排序
      index: 1,
    },
    {
      field: 'education',
      dataField: 'education',
      fieldName: '状态',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gender',
      dataField: 'gender',
      fieldName: '推送时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
  ],
  pages: 1,
  total: 13,
  pageNum: 1,
  pageSize: 10,
  list: [
    {
      index: 1,
      id: '14735AB83D5B4ECABBACA7DB03B0D1B7',
      nurseId: '1',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: '2019-06-12 09:44:12',
      gendersex: '1',
      address: '您的客户XXX刚刚进行了自评估测试',
      marital: '2020.12.01 00：00：00',
      education: '未读',
      blood: '',
      constellation: '无',
      zodiac: '',
      state: '启用',
      createTime: '2020-02-22T13:16:58.284+0000',
      userName: '￥1000.00',
      phone: null,
      stateType: '1',
      genderType: '1',
      maritalType: null,
      educationType: 'PRIMARYSCHOOL',
      bloodType: 'BLOOD_A',
      constellationType: 'BAIYANG',
      zodiacType: null,
      business: '待发布',
      status: '2020-02-22T13:16:58.284+0000',
      rmarks: '',
      goTime: '2020-02-22T13:16:58.284+0000',
      isstatus: '已执行',
      isEffect: false,
      online: '',
    },
  ],
  prePage: 0,
  nextPage: 0,
}
