---
title: Publish Agent
---

This article will introduce how to publish and externally call the agents you have created on the Auto Agents Platform. Through the **HTTP Application Links** and **API Services** provided by the platform, you can integrate agents into websites, systems, or your own products to achieve open capabilities. The platform supports a convenient publishing process, multiple calling methods, and secure and controllable key configurations, helping agents truly put into use.


# Publication Entry

Click the "···" button in the upper right corner of the agent, and select **"Publish"** in the pop-up menu to enter the publication page.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/publish/1.jpg" width="100%"/>
</div>


# HTTP Application Link Publication

## Create Link

1. Click the **"Create Link"** button in the upper right corner  
2. Set the following parameters:
   - **Link Name** (required)
   - **Validity Period** (required)
   - **Usage Method**: Default set to "Self-recharge for use"
   - **Link Password** (optional, support enable/disable)

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/publish/2.jpg" width="100%"/>
</div>

## Link Operations

- After successful creation, you can:
  - Open (access test)
  - Copy (for embedding)
  - Embed in webpage (generate iframe code)
- Click the "···" button on the right side of the link to:
  - Edit link information
  - Delete link

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/publish/3.jpg" width="100%"/>
</div>

---

# API Service Call

The platform supports accessing agents through APIs, suitable for system integration, automated tasks, or backend calls.

- **Uuid**: The unique identifier of the agent, used for request identification  
- **AuthKey**: Authorization access credential  
- **AuthSecret**: Authorization security key  
- **Creation Time**: Used to record when the API was created  

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/publish/4.jpg" width="100%"/>
</div>

> Operations available through action buttons: Copy, Refresh Keys, Delete API Information  
> For detailed API usage specifications, please refer to the official documentation: **Agents Open API v1.5**

---

## Example: Python Call to Agent API

Below is a sample code for requesting the agent API using Python, which can be integrated into actual business systems according to requirements.

`.env.local` configuration format:

```env
UUID=your_UUID
AUTH_KEY=your_AUTH_KEY
AUTH_SECRET=your_AUTH_SECRET
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
    prompt = "Explain what artificial intelligence is"
    print(agent_api(prompt))
```

Through the above publishing methods, whether building a web entry or system-level API access, you can flexibly deploy agents to various application environments, truly achieving a closed loop from building to implementation.

