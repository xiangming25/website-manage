// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.API_URL': 'http://localhost:7001'
  },
});
