<template>
  <div class="logForm ">
    <label for="user" class="w3-col mb10">
      <span class="w3-col l2 tar">用户名：</span>
      <input class="w3-col l6" type="text" id="user" v-model="userModel"/>
      <p class="w3-col l4 w3-text-red pl10" v-show="!userModel">
        <v-icon name="info" class="mt05"></v-icon>
        <span>用户名不能为空</span>
      </p>
    </label>
    <label for="psd" class="w3-col">
      <span class="w3-col l2 tar">密码：</span>
      <input class="w3-col l6" type="text" id="psd" v-model="passwordModel"/>
      <p class="w3-col l4 w3-text-red pl10" v-show="passwordModel.length < 6">
        <v-icon name="info" class="mt05"></v-icon>
        <span>密码长度大于5</span>
      </p>
    </label>
    <div class="w3-col l10 tac mt10">
      <a href="#" @click="confirm" class="aBtn p10 pl30 pr30">登录</a>
    </div>
    <p class="w3-col l12">{{ errorText }}</p>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      userModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  methods: {
    confirm () {
      if (this.userModel && this.passwordModel && this.passwordModel.length >= 6) {
        Axios.get('/api/user').then((res) => {
          if (res) {
            var data = res.data.data
            if (data.username === this.userModel && data.userId.toString() === this.passwordModel) {
              this.$emit('isLogin', data)
            } else {
              this.errorText = '用户名或密码不正确'
            }
          } else {
            this.errorText = '登录失败'
          }
        }, (err) => {
          this.errorText = err
        })
      } else {
        this.errorText = '部分选项不符合要求'
      }
    }
  }
}
</script>

<style scoped lang="less">
  label{
    display: block;
    height: 34px;
    line-height: 34px;
    input{
      border: 1px solid #ccc;
      height: 34px;
      line-height: 34px;
    }
  }
</style>
