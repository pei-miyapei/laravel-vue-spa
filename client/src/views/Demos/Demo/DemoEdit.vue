<script setup lang="ts">
import { demoEditProps } from '../../../feature/Demos/Demo/demoEditProps';

const { demoForm, demo, save, isLoading } = demoEditProps();
</script>

<template>
  <el-form
    ref="demoForm"
    :model="demo"
    label-width="100px"
    v-loading="isLoading"
  >
    <el-row>
      <el-col>
        <el-form-item
          label="名称"
          prop="name"
          :rules="{ required: true, message: '必須項目です' }"
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
