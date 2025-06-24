#!/bin/bash

# 设置变量
SERVER="root@45.78.224.30"
APP_DIR="/root/lingda-docs"
PORT="3002"

echo "🚀 开始部署 Lingda Docs..."

echo "📦 同步代码到服务器..."
rsync -avz --exclude='node_modules' --exclude='.next' --exclude='.git' ./ $SERVER:$APP_DIR/

echo "🏗️  构建并启动应用..."
ssh $SERVER "cd $APP_DIR && docker-compose down && docker-compose up -d --build"

echo "⏳ 等待应用启动..."
sleep 10

echo "🔍 检查容器状态..."
ssh $SERVER "docker-compose -f $APP_DIR/docker-compose.yml ps"

echo "📋 显示应用日志（最后10行）..."
ssh $SERVER "docker-compose -f $APP_DIR/docker-compose.yml logs --tail=10 lingda-docs"

echo "✅ 部署完成！"
echo "🌐 访问地址: http://45.78.224.30:$PORT"
echo ""
echo "📝 其他有用的命令："
echo "  查看日志: ssh $SERVER 'cd $APP_DIR && docker-compose logs -f lingda-docs'"
echo "  重启应用: ssh $SERVER 'cd $APP_DIR && docker-compose restart'"
echo "  停止应用: ssh $SERVER 'cd $APP_DIR && docker-compose down'" 