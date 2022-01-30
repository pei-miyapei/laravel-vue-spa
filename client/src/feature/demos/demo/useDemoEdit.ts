import { ElForm, ElMessage } from 'element-plus';
import { onBeforeMount, reactive, ref } from 'vue';
import { injectAuth } from '../../../store/authContext';
import { Demo } from './demo';
import { DemoRepository } from './demoRepository';
import { useLoading } from './useLoading';

export const useDemoEdit = () => {
  const demoRepository = new DemoRepository(injectAuth());
  const demo = reactive(new Demo());
  const { isLoading, loading } = useLoading();
  const ruleFormRef = ref<InstanceType<typeof ElForm>>();

  // load
  onBeforeMount(async () => {
    loading(async () => {
      const response = await demoRepository.find();
      Object.assign(demo, response.data);
    });
  });

  const save = async () => {
    ruleFormRef.value?.validate((valid) => {
      if (!valid) return;
      loading(async () => {
        const response = await demoRepository.upsert(demo);
        demo.id = response.data.id;
        ElMessage({ message: '保存しました', type: 'success' });
      });
    });
  };

  return { demo, isLoading, save, ruleFormRef };
};
