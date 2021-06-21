export default {
  headers: [
    {
      field: 'address', //当sorted为true时，字段名用于传递到后台进行排序查询使用
      dataField: 'address',
      fieldName: '编号', //列表头名
      fixed: true, //true固定必须显示,false放到3个点中备用显示
      sorted: false, //true可以进行排序，false不可进行排序
      index: 1,
    },
    {
      field: 'education',
      dataField: 'education',
      fieldName: '姓名',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gender',
      dataField: 'gender',
      fieldName: '手机号',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'zodiac',
      dataField: 'zodiac',
      fieldName: '所属分组',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'nurseId',
      dataField: 'nurseId',
      fieldName: '排班业务',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gendersex',
      dataField: 'gendersex',
      fieldName: '排班开始日期',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'userName',
      dataField: 'userName',
      fieldName: '排班结束日期',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'blood',
      dataField: 'blood',
      fieldName: '排班天数',
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
      nurseId: '陪护',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: '16841554564',
      gendersex: '2020.12.01 00：00：00',
      address: 'HG123921',
      marital: '2020.12.01 00：00：00',
      education: '赵游',
      blood: '5',
      constellation: '无',
      zodiac: '分组一',
      state: '启用',
      createTime: '2020-02-22T13:16:58.284+0000',
      userName: '2020-02-22T13:16:58.284+0000',
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
    },
  ],
  prePage: 0,
  nextPage: 0,
}
