import request from '@/utils/request'

export function login(data){
    return request({
        url: '/admin/login',
        method: 'post',
        data: data
    })
}

export function userList(data){
    return request({
        url: '/v1/users/list',
        method: 'get',
        params: data
    })
}

export function shoppingList(latitude,longitude){
    return request({
        url:'/shopping/restaurants?latitude='+latitude+'&longitude='+longitude,
        method:'get',
          //post data   ;get  parms:data
    })
}

export function foodList(limit, offset, id){
    return request({
        url: '/shopping/v2/foods?offset=' + offset + '&limit=' + limit + '&restaurant_id=' + id,
        method: 'get',
        // params: data
    })
}

export function orderList(data){
    return request({
        url: '/bos/orders',
        method: 'get',
        params: data
    })
}

export function managerList(data){
    return request({
        url: '/admin/all',
        method: 'get',
        params: data
    })
}

export function deleteItem(food_id){
    return request({
        url: '/shopping/v2/food/' + food_id,
        method: 'delete',
        // params: data
    })
}

export function updateItem(data){
    return request({
        url: '/shopping/v2/updatefood',
        method: 'post',
        data: data
    })
}

export function getUserCity(){
    return request({
        url: '/v1/user/city/count',
        method: 'get',
    })
}
