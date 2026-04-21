<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  src: string
  title?: string
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'HTML Demo',
  height: 500
})

const iframeRef = ref<HTMLIFrameElement | null>(null)
const isFullscreen = ref(false)
const isLoading = ref(true)
const containerRef = ref<HTMLDivElement | null>(null)

const toggleFullscreen = () => {
  if (!containerRef.value) return
  
  if (!document.fullscreenElement) {
    containerRef.value.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

const openInNewTab = () => {
  window.open(props.src, '_blank')
}

const onIframeLoad = () => {
  isLoading.value = false
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})
</script>

<template>
  <div ref="containerRef" class="demo-container" :class="{ 'is-fullscreen': isFullscreen }">
    <div class="demo-toolbar">
      <span class="demo-title">{{ title }}</span>
      <div class="demo-actions">
        <button class="demo-btn" @click="openInNewTab" title="在新标签页打开">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
        <button class="demo-btn" @click="toggleFullscreen" :title="isFullscreen ? '退出全屏' : '全屏'">
          <svg v-if="!isFullscreen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="demo-content" :style="{ height: isFullscreen ? '100%' : height + 'px' }">
      <div v-if="isLoading" class="demo-loading">
        <div class="loading-spinner"></div>
        <span>加载中...</span>
      </div>
      <iframe
        ref="iframeRef"
        :src="src"
        :title="title"
        frameborder="0"
        allowfullscreen
        @load="onIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  margin: 16px 0;
  transition: all 0.3s ease;
}

.demo-container:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.demo-container.is-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  border-radius: 0;
  margin: 0;
}

.demo-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.demo-actions {
  display: flex;
  gap: 8px;
}

.demo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: var(--vp-c-bg);
  border-radius: 6px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
}

.demo-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.demo-content {
  position: relative;
  width: 100%;
  background: #000;
}

.demo-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #0a0a0a;
  color: #888;
  font-size: 14px;
  z-index: 1;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #333;
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.is-fullscreen .demo-content {
  height: calc(100vh - 49px) !important;
}
</style>
