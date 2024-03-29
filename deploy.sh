# /bin/bash
# 确保脚本抛出遇到的错误---
set -e

# 打包生成静态文件
pnpm docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

# 提交打包静态网站到 github-pages 分支
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<username>.github.io/<repo> 不成功
git push -f git@github.com:liusaisaia/docs.git master:gh-pages

cd -

