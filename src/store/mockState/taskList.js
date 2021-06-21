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
      fieldName: '任务类型',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gender',
      dataField: 'gender',
      fieldName: '服务对象',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'zodiac',
      dataField: 'zodiac',
      fieldName: '住院号',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'nurseId',
      dataField: 'nurseId',
      fieldName: '床号',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'gendersex',
      dataField: 'gendersex',
      fieldName: '性别',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'userName',
      dataField: 'userName',
      fieldName: '年龄',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'blood',
      dataField: 'blood',
      fieldName: '联系电话',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'business',
      dataField: 'business',
      fieldName: '入院时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'status',
      dataField: 'status',
      fieldName: '护理时段',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'createTime',
      dataField: 'createTime',
      fieldName: '开始时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'endTime',
      dataField: 'endTime',
      fieldName: '结束时间',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'worName',
      dataField: 'worName',
      fieldName: '护理人员',
      fixed: true,
      sorted: false,
      index: 1,
    },
    {
      field: 'isStatuso',
      dataField: 'isStatuso',
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
      nurseId: '45',
      pic: null,
      name: 'xxx',
      age: 0,
      gender: '赵游',
      gendersex: '男',
      address: 'HG123921',
      marital: '2020.12.01 00：00：00',
      education: '陪护',
      blood: 1757447848,
      constellation: '无',
      zodiac: '00255463',
      state: '启用',
      createTime: '2020-02-22T13:16:58.284+0000',
      userName: 22,
      phone: null,
      stateType: '1',
      genderType: '1',
      maritalType: null,
      educationType: 'PRIMARYSCHOOL',
      bloodType: 'BLOOD_A',
      constellationType: 'BAIYANG',
      zodiacType: null,
      business: '2020.12.01 00：00：00',
      endTime: '2020-02-22T13:16:58.284+0000',
      status: 5,
      worName: '周瑾',
      isStatuso: '已发布',
    },
  ],
  prePage: 0,
  nextPage: 0,
}
