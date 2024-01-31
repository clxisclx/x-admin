import request from '@/utils/request'
import type { SkuResponseData, SkuInfoData } from './type'

enum API {
  // sku列表
  SKU_URL = '/admin/product/list/',
  // sku上架
  SALE_URL = '/admin/product/onSale/',
  // SKU下架
  CANCELSALE_URL = '/admin/product/cancelSale/',
  // 商品详情
  SKUINFO_URL = '/admin/product/getSkuInfo/',
  //删除商品
  DELETESKU_URL = '/admin/product/deleteSku/',
}

// sku列表请求接口
export const reqSkuList = (page: number, limit: number) =>
  request.get<any, SkuResponseData>(API.SKU_URL + `${page}/${limit}`)

// 已有商品上架的请求
export const reqSaleSku = (skuId: number) =>
  request.get<any, any>(API.SALE_URL + skuId)

// 下架的请求
export const reqCancelSale = (skuId: number) =>
  request.get<any, any>(API.CANCELSALE_URL + skuId)

// 获取商品详情的接口
export const reqSkuInfo = (skuId: number) =>
  request.get<any, SkuInfoData>(API.SKUINFO_URL + skuId)

// 删除某个商品
export const reqRemoveSku = (skuId: number) =>
  request.delete<any, any>(API.DELETESKU_URL + skuId)
