<template>
    <div class="set">
        <div class="set-title">管理员信息</div>
        <div class="set-content">
            <p class="set-content-item" v-for="(item,index) in list" :key="index">{{item.title}}</p>
            <div class="pick">
                <label class="avatar-label" for="file" ></label>
                <input class="none" type="file" id="file" ref="file" multiple @change="uploadFile" accept="image/*">
                <span class="pick-style-w"></span>
                <span class="pick-style-h"></span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    title:'姓名：'
                },
                {
                    title:'注册时间：'
                },
                {
                    title:'管理员权限：'
                },
                {
                    title:'管理员 ID：'
                },
                {
                    title:'更换头像'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .set {
        width: 100%;
        height: 100%;
            .set-title{
            font:400 24px/40px "微软雅黑";
            color:#666;
            padding-bottom: 20px;
            }
            .set-content{
                width: 60%;
                min-height: 400px;
                background: #f9fafc;
                border-radius: 5px;
                margin: 0 auto;
                    .set-content-item {
                        padding: 10px 0px;
                        font: 400 20px/20px "微软雅黑";
                        color: #666;
                    }
                        .pick {
                        margin: 15px;
                        width: 50px;
                        height: 50px;
                        border: 2px  solid #555;
                        border-radius: 3px;
                        position: relative;
                            .none{
                                display: none;
                            }
                            .avatar-label {
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                z-index: 9;
                                cursor: pointer;
                            }
                            .pick-style-w { 
                                position: absolute;
                                top: 0px;
                                left: 5px;
                            }
                            .pick-style-h {
                                position: absolute;
                                top: 5px;
                                left: 0px;
                            }
                            .pick-style-w::before{
                                content:'';
                                width: 40px;
                                height: 23px;
                                display: inline-block;
                                border-width: 0 0 5px 0px;
                                border-style: solid;
                                transform: rotate(0deg);
                                color: #777;
                            }
                            .pick-style-h::before{
                                content:'';
                                width: 23px;
                                height: 40px;
                                display: inline-block;
                                border-width: 0 0 0px 5px;
                                border-style: solid;
                                transform: rotate(180deg);
                                color: #777;
                            }
                    }
            }
    }
</style>