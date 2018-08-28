import {
  wxRequest
} from '@/utils/wxRequest';

/**
 * manbasji 自定义接口
 */
const hostUrl = 'https://www.passingjoy.com/test/wechat';

//管理员登录接口
const orderQuery = (params) => wxRequest(params,hostUrl+'/erp/order/query/');

//查询所有库房
const queryStoreHouse = (params) => wxRequest(params,hostUrl+'/erp/storehouse/detail/')

//查询商品信息
const queryGoodsDetail = (params) => wxRequest(params,hostUrl+'/erp/stock/detail/')

//检索商品名称
const queryGoodsName = (params) => wxRequest(params,hostUrl+'/erp/goods/detail/')

//检索客户名称
const queryCustName = (params) => wxRequest(params,hostUrl+'/erp/customer/detail/')

//查询订单详情
const queryOrderDetail = (params) =>wxRequest(params,hostUrl+'/erp/order/detail/')

export default {
	orderQuery,
	queryStoreHouse,
	queryGoodsDetail,
	queryGoodsName,
	queryCustName,
	queryOrderDetail
}