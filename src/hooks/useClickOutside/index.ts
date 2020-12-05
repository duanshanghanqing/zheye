import { ref, Ref, onMounted, onUnmounted } from 'vue';
//  Ref 代表类型

// 传入响应式对象
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false);
    const handler = (e: MouseEvent) => {
        // 拿到dom节点
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = true; // 点击的元素在组件内，下拉菜单不隐藏
            } else {
                isClickOutside.value = false; 
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler);
    });
    onUnmounted(() => {
        document.removeEventListener('click', handler);
    });
    return isClickOutside;
}

export default useClickOutside;
