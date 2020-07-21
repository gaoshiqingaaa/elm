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

export function shopList(data){
    return request({
        url: '/shopping/restaurants',
        method: 'get',
        params: data
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