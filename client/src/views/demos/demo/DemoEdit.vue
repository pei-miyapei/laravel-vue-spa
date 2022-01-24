<script setup lang="ts">
import { useDemoEdit } from '../../../feature/demos/demo/useDemoEdit';

const { demo, isLoading, save, ruleFormRef } = useDemoEdit();
</script>

<template>
  <el-form
    :model="demo"
    label-width="100px"
    v-loading="isLoading"
    ref="ruleFormRef"
  >
    <el-row>
      <el-col>
        <el-form-item
          label="名称"
          :rules="{ required: true, message: '必須項目です' }"
          prop="name"
        >
          <el-input v-model="demo.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save" :disabled="isLoading">
            <i class="far fa-edit"></i>
            保存
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
