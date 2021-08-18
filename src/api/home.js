import request from "../utils/request";
import requsetMock from "../utils/requsetMock";

export const reqGetCategoryList = () => {
  return request({
    method: "GET",
    url: `/product/getBaseCategoryList`,
  });
};
export const reqGetBanners = () => {
  return requsetMock({
    method: "GET",
    url: `/banners`,
  });
};
