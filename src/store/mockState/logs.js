export default {
  headers: [
    {
      field: 'address', //当sorted为true时，字段名用于传递到后台进行排序查询使用
      dataField: 'address',
      fieldName: '预约单号', //列表头名
      fixed: true, //true固定必须显示,false放到3个点中备用显示
      sorted: false, //true可以进行排序，false不可进行排序
      index: 1,
    },
    {
      field: 'education',
      dataField: 'education',
      fieldName: '预约项目',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gender',
      dataField: 'gender',
      fieldName: '服务范围',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'zodiac',
      dataField: 'zodiac',
      fieldName: '护理对象',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'nurseId',
      dataField: 'nurseId',
      fieldName: '所在区域',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gendersex',
      dataField: 'gendersex',
      fieldName: '详细地址',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'userName',
      dataField: 'userName',
      fieldName: '护理开始时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'blood',
      dataField: 'blood',
      fieldName: '护理结束时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'business',
      dataField: 'business',
      fieldName: '评分用户',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'status',
      dataField: 'status',
      fieldName: '评分信息',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'createTime',
      dataField: 'createTime',
      fieldName: '评分时间',
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
      nurseId: '护理一区',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: '陪护',
      gendersex: '重庆',
      address: 'HG123921',
      marital: '2020.12.01 00：00：00',
      education: '',
      blood: '2020.12.01 00：00：00',
      constellation: '无',
      zodiac: '赵游',
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
      business: '匿名用户',
      status: '',
    },
  ],
  prePage: 0,
  nextPage: 0,
}
