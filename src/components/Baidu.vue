<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import VedioType from '../types/baidu'
const router = useRouter()
const toLogin = () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  window.open('https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&client_id=Lq3UG8aMp2fV17RYHt0VAdFmGRvi9kYx&redirect_uri=oob&scope=basic,netdisk&display=popup&state=xxx&referer=www.honeyboy.com')

}
const vedioList = ref<[]>([]);
const state = reactive<{
  vedioList:VedioType[];
}>({
  vedioList: [] 
})
const getVedio = () => {
  axios.get("rest/2.0/xpan/file?parent_path=/&access_token=123.b67ef8b69eb8712765e266255c902064.YB5OPrqzl4AvmjFK_C2GlTJKUelYeMzeSZdAcoQ.SNFOXg&web=1&recursion=1&method=videolist&page=1&num=20", {
  }).then(value => {
    console.log(value);
    vedioList.value = value.data.info;
    state.vedioList = value.data.info;
    console.log(state.vedioList);

  }).catch((e) => {
    console.log(e)
  }).finally(() => {
    console.log('完成');

  })
}
// @ts-ignore
function gotoVedio(pathName){
  router.push(`/vedio/${pathName}`)
}

</script>
<template>
  <div class="text-center">
    百度开发测试页
  </div>
  <button @click="toLogin">
    登录授权
  </button>
  <br>
  <button @click="getVedio">
    获取视频列表
  </button>
  <div class="flex flex-wrap">
    <div
      v-for="item in state.vedioList"
      :key="item.fs_id"
      class="w-3/12 p-1"
      @click="gotoVedio(item.path)"
    >
      <img
        :src="item.thumbs.icon"
        :alt="item.server_filename"
        width="200"
      >
      <div>{{ item.server_filename }}</div>
    </div>
  </div>
</template>