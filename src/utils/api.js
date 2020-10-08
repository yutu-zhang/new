import request from "./request"

// Get请求
export function gets(url,data){
    return request.get(url,{
        params:data
    })
}

// post 请求
export function posts(url,data){
    return request.post(url,data)
}

// 获取城市列表
export function ajaxCity(type){
    return gets(`/v1/cities?type=${type}`)
}

// 获取验证码图片
export function code(){
    return posts('/v1/captchas')
}

// 进入详情
export function detail(id){
    return gets(`/v1/cities/${id}`) 
}

// 搜索
export function search(id,keyword){
    return gets(`/v1/pois?type=search&city_id=${id}&keyword=${keyword}`)
}

// 我的
export function user(id){
    return gets(`v1/user?user_id=${id}`)
}

// 首页
export function msite(ip){
    return gets(`/v2/pois/${ip}`)
}
// index页轮播
export function date(ip){
    return gets(`/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F`)
}
//index页详细商品信息
export function lists(ip){
    return gets(`/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`)
}
