<template>
  <div class="login-main">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" class="login-input" />
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" class="login-input" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router';

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const validateName = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  name: '',
  checkPass: ''
})

const rules = reactive({
  name: [{ validator: validateName, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('登陆成功')
      // 假装登陆操作
      localStorage.setItem("gitToken", "Tem_token")
      router.push('/board')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>



<style lang="scss">
.login-main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-input {
    width: 200px;
  }
}
</style>
