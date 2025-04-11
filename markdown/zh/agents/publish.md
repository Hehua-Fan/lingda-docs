---
title: 发布智能体
---

本文将介绍如何将您在 Agents 平台中创建的智能体进行发布和外部调用。通过平台提供的 **HTTP 应用链接** 和 **API 服务**，您可以将智能体集成到网页、系统或自有产品中，实现对外开放能力。平台支持便捷的发布流程、多种调用方式以及安全可控的密钥配置，助力智能体真正投入使用。


# 发布入口

点击智能体右上角的“···”按钮，在弹出的菜单中选择 **“发布”**，即可进入发布页面。

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/zh/agents/publish/1.jpg" width="100%"/>
</div>


# HTTP 应用链接发布

## 创建链接

1. 点击右上角 **“创建链接”** 按钮  
2. 设置以下参数：
   - **链接名称**（必填）
   - **有效期**（必填）
   - **使用方式**：默认设置为“自行充值使用”
   - **链接密码**（可选，支持启用/禁用）

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/zh/agents/publish/2.jpg" width="100%"/>
</div>

## 链接操作

- 成功创建后可对链接进行：
  - 打开（访问测试）
  - 复制（用于嵌入）
  - 嵌入网页（生成 iframe 代码）
- 点击链接右侧“···”按钮，可进行：
  - 编辑链接信息
  - 删除链接

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/zh/agents/publish/3.jpg" width="100%"/>
</div>

---

# API 服务调用

平台支持通过 API 的方式访问智能体，适用于系统集成、自动化任务或后端调用。

- **Uuid**：智能体的唯一标识，用于请求识别  
- **AuthKey**：授权访问凭证  
- **AuthSecret**：授权安全密钥  
- **创建时间**：用于记录 API 创建时间  

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/zh/agents/publish/4.jpg" width="100%"/>
</div>

> 可通过操作按钮进行：复制、刷新密钥、删除 API 信息  
> 详细 API 使用规范可参考官方文档：**Agents Open API v1.5**

---

## 示例：Python调用智能体API

以下是通过 Python 请求智能体 API 的示例代码，可根据需求集成到实际业务系统中。

`.env.local` 配置格式：

```env
UUID=你的UUID
AUTH_KEY=你的AUTH_KEY
AUTH_SECRET=你的AUTH_SECRET
PLATFORM=uat
```

```python
import requests
import os
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env.local'))

UUID = os.getenv("UUID")
AUTH_KEY = os.getenv("AUTH_KEY")
AUTH_SECRET = os.getenv("AUTH_SECRET")
PLATFORM = os.getenv("PLATFORM")

AUTOAGENTS_HOST_NAME = {
    "uat": "https://uat.agentspro.cn",
    "test": "https://test.agentspro.cn",
    "lingda": "https://lingda.agentspro.cn"
}

def agent_api(prompt):
    if PLATFORM not in AUTOAGENTS_HOST_NAME:
        return f"Unsupported platform: {PLATFORM}"

    url = f"{AUTOAGENTS_HOST_NAME[PLATFORM]}/openapi/agent/chat/completions/v1"
    headers = {
        "Authorization": f"Bearer {AUTH_KEY}.{AUTH_SECRET}",
        "Content-Type": "application/json"
    }
    body = {
        "agentId": UUID,
        "chatId": None,
        "userChatInput": prompt,
    }

    try:
        response = requests.post(url, headers=headers, json=body, timeout=30)
        if response.status_code == 200:
            return response.json()["choices"][0]["content"]
        return f"Error: {response.status_code} - {response.text}"
    except Exception as e:
        return f"Exception: {str(e)}"

if __name__ == "__main__":
    prompt = "解释什么是人工智能"
    print(agent_api(prompt))
```

通过以上发布方式，无论是构建网页入口，还是系统级 API 接入，您都可以灵活将智能体部署到多种应用环境中，真正实现从构建到落地的闭环。