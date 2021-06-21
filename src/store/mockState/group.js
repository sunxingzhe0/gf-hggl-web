export default {
  headers: [
    {
      field: 'address', //当sorted为true时，字段名用于传递到后台进行排序查询使用
      dataField: 'address',
      fieldName: '分组名称', //列表头名
      fixed: true, //true固定必须显示,false放到3个点中备用显示
      sorted: false, //true可以进行排序，false不可进行排序
      index: 1,
    },
    {
      field: 'education',
      dataField: 'education',
      fieldName: '护工数量',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gender',
      dataField: 'gender',
      fieldName: '排序',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'userName',
      dataField: 'userName',
      fieldName: '状态',
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
      nurseId: 'ssd54654',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: 1,
      gendersex: '外科一',
      address: '护工一组',
      marital: '2020.12.01 00：00：00',
      education: 5,
      blood: '2020.12.01 00：00：00',
      constellation: '无',
      zodiac: '赵婷',
      state: '启用',
      createTime: '2020-02-22T13:16:58.284+0000',
      userName: '启用',
      phone: null,
      stateType: '1',
      genderType: '1',
      maritalType: null,
      educationType: 'PRIMARYSCHOOL',
      bloodType: 'BLOOD_A',
      constellationType: 'BAIYANG',
      zodiacType: null,
    },
    {
      index: 1,
      id: '14735AB83D5B4ECABBACA7DB03B0D1B7',
      nurseId: 'ssd54654',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: 2,
      gendersex: '外科一',
      address: '护工二组',
      marital: '2020.12.01 00：00：00',
      education: 6,
      blood: '2020.12.01 00：00：00',
      constellation: '无',
      zodiac: '赵婷',
      state: '启用',
      createTime: '2020-02-22T13:16:58.284+0000',
      userName: '启用',
      phone: null,
      stateType: '1',
      genderType: '1',
      maritalType: null,
      educationType: 'PRIMARYSCHOOL',
      bloodType: 'BLOOD_A',
      constellationType: 'BAIYANG',
      zodiacType: null,
    },
  ],
  prePage: 0,
  nextPage: 0,
}
