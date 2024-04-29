const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Twitter 페이지를 프록시합니다.
app.use(
  '/twitter',
  createProxyMiddleware({
    target: 'https://twitter.com', // 대상 도메인
    changeOrigin: true, // 호스트 헤더를 대상 도메인으로 변경
    pathRewrite: { '^/twitter': '' }, // 경로 재작성
  })
);

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`프록시 서버가 ${PORT} 포트에서 실행 중입니다.`);
});
