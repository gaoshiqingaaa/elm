<template>
    <div class="markdown">
        <mavon-editor
        style="min-height: 100%"
        />
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    components:{
        mavonEditor
    },
}
</script>

<style scoped>
    .markdown{
        width: 100%;
        height: 100%;
    }
</style>