import axiosReq from '@/utils/axios-req'
//竞价一字板
export function getlimitBoard(chooseData) {
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/limit_board',
    baseURL: '',
    method: 'post',
    //reqLoading: false,
    data: { date: chooseData, page_num: 1, page_size: 300, sort: 0, sort_field: 'imbalance' }
  }
  return axiosReq(reqConfig)
}

//个股机会

//{"date":"2024-10-18","page_num":1,"page_size":20,"sort":0,"sort_field":"bidZf","filter":{"market":"1","warn_types":"","st":0,"optionals":null}}
export function getCallWarn(date) {
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/call_warn',
    baseURL: '',
    method: 'post',
    reqLoading: false,
    data: {
      date,
      page_num: 1,
      page_size: 40,
      sort: 0,
      sort_field: 'bidZf',
      filter: { market: '1', warn_types: '', st: 0, optionals: null }
    }
  }
  return axiosReq(reqConfig)
}

//炸板池

//{"date":"2024-10-18","page_num":1,"page_size":20,"sort":0,"sort_field":"bidZf","filter":{"market":"1","warn_types":"","st":0,"optionals":null}}
export function openLimitPool(date) {
  const reqConfig = {
    url: 'https://data.10jqka.com.cn/dataapi/limit_up/open_limit_pool',
    baseURL: '',
    method: 'get',
    reqLoading: false,
    data: {
      date,
      page: 1,
      limit: 15,
      field: '199112,9002,48,1968584,19,3475914,9003,10,9004',
      filter: 'HS,GEM2STAR',
      order_field: 199112,
      order_type: 0
    }
  }
  return axiosReq(reqConfig)
}

//冲刺涨停
export function getlimitUp(data) {
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up?page=1&limit=30&field=199112%2C10%2C48%2C1968584%2C19%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=199112&order_type=0&date=${data}`,
    baseURL: '',
    method: 'post'
  }
  return axiosReq(reqConfig)
}

//涨停池
export function getLimitUpPool() {
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up_pool?page=1&limit=15&field=601211%2C330329%2C9001%2C330324%2C10%2C199112%2C330325%2C9002%2C133971%2C133970%2C1968584%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=330324&order_type=0&date=20241011`,
    baseURL: '',
    method: 'post'
  }
  axiosReq(reqConfig).then(({ data }) => {})
}

//获取分时交易数据
function getHszbFsjy() {
  const reqConfig = {
    url: `https://finance.pae.baidu.com/vapi/v1/getquotation`,
    baseURL: '',
    params: {
      //srcid:5353
      market_type: 'ab',
      newFormat: 1,
      finClientType: 'pc',
      pointType: 'json',
      group: 'quotation_kline_ab',
      code: 601211,
      ktype: 'day'
    },
    reqLoading: false,
    method: 'get'
  }
  return axiosReq(reqConfig)
}

//获取日交易数据
export function getFsjy(code) {
  const reqConfig = {
    url: `https://github.jzfai.top/micro-service-baidu/vapi/v1/getquotation`,
    //url: `http://localhost:12050/TestController`,
    baseURL: '',
    params: {
      //srcid:5353
      market_type: 'ab',
      newFormat: 1,
      finClientType: 'pc',
      pointType: 'json',
      group: 'quotation_kline_ab',
      code,
      ktype: 'day'
    },
    reqLoading: false,
    method: 'get'
  }
  return axiosReq(reqConfig)
}

//发送短信接口
export function sendString(gpString) {
  const reqConfig = {
    url: `https://github.jzfai.top/micro-service-api/send/sms/sendString?phones=13302254692&gpString=1111`,
    baseURL: '',
    params: {
      phones: '13302254692',
      gpString
    },
    reqLoading: false,
    method: 'get'
  }
  axiosReq(reqConfig).then((r) => (res) => {})
}

// //买卖五档盘口
// function getMmwp() {
//   const reqConfig = {
//     url: `http://api1.mairui.club/hsrl/mmwp/000001/b997d4403688d5e66a`,
//     baseURL: '',
//     method: 'get'
//   }
//   axiosReq(reqConfig).then(({ data }) => {})
// }
//
// //实时交易数据接口
// function getSsjy() {
//   const reqConfig = {
//     url: `http://api.mairui.club/hsrl/ssjy/000001/b997d4403688d5e66a`,
//     baseURL: '',
//     method: 'get'
//   }
//   axiosReq(reqConfig).then(({ data }) => {})
// }
