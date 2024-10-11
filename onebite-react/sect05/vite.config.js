import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["onnxruntime-web"],
  },
  server: {
    mimeTypes: {
      "application/wasm": ["wasm"],
    },
  },
  build: {
    target: "esnext", // 최신 ECMAScript 지원으로 설정
    rollupOptions: {
      external: [
        "onnxruntime-web",
        "/models/nms-yolov8.onnx",
        "/models/yolov8n.onnx",
      ],
    },
    output: {
      format: "esm", // WebAssembly 지원
    },
  },
});
