<template>
  <div class="login-content">
    <div class="login-box">
      <h2 class="hello">hello</h2>
      <h3 class="title">欢迎来到{{ systemTitle }}</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="login-ruleForm"
        >
        <el-form-item label="" prop="username">
          <el-input v-model.number="ruleForm.username"
          :prefix-icon="User"
          placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="ruleForm.password"
          :prefix-icon="Lock"
          show-password
          type="password" autocomplete="off" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <div class="btn-group flex">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button>注册</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormRules, FormInstance } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import { RuleForm } from './types'
const $router = useRouter()
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: '123456'
});
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { min: 6, message: '密码长度不低于6位', trigger: 'blur' },
    { max: 12, message: '密码长度不多于12位', trigger: 'change' },
  ],
})
const systemTitle = computed(() => import.meta.env.VITE_APP_TITLE)
const login = () => {
  ruleFormRef.value?.validate(valid => {
    if (valid) {
      $router.push('/')
    }
  })

}
// console.log('%c click', "background: red; color: white", systemTitle.value);

</script>

<style scoped>
.login-content {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg') 100% 100% no-repeat;
  background-size: 100% 100%;
}

.login-box {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  min-width: 400px;
  width: 30%;
  padding: 3% 4%;
  box-sizing: border-box;
  color: white;
  background: url('@/assets/images/login_form.png') 100% 100% no-repeat;
  background-size: 100% 100%;
}

.title {
  margin: 12px 0;
}

.btn-group {
  width: 100%;
  justify-content: space-between;
}
</style>