---
title: エージェントの公開
---

この記事では、Agentsプラットフォームで作成したエージェントを公開し、外部から呼び出す方法について説明します。プラットフォームが提供する**HTTPアプリケーションリンク**と**APIサービス**を通じて、エージェントをウェブページ、システム、または独自の製品に統合し、外部に能力を開放することができます。プラットフォームは便利な公開プロセス、複数の呼び出し方法、および安全で制御可能なキー設定をサポートし、エージェントの実際の利用を支援します。


# 公開入口

エージェントの右上にある「···」ボタンをクリックし、表示されるメニューから**「公開」**を選択すると、公開ページに移動します。

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/agents/publish/1.jpg" width="100%"/>
</div>


# HTTPアプリケーションリンクの公開

## リンクの作成

1. 右上の**「リンク作成」**ボタンをクリック  
2. 以下のパラメータを設定：
   - **リンク名**（必須）
   - **有効期限**（必須）
   - **使用方法**：デフォルトは「自己チャージ使用」
   - **リンクパスワード**（任意、有効/無効化可能）

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/agents/publish/2.jpg" width="100%"/>
</div>

## リンク操作

- 作成後、リンクに対して以下の操作が可能：
  - 開く（アクセステスト）
  - コピー（埋め込み用）
  - ウェブページに埋め込む（iframeコード生成）
- リンク右側の「···」ボタンをクリックすると、以下が可能：
  - リンク情報の編集
  - リンクの削除

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/agents/publish/3.jpg" width="100%"/>
</div>

---

# APIサービス呼び出し

プラットフォームはAPI経由でのエージェントアクセスをサポートしており、システム統合、自動化タスク、またはバックエンド呼び出しに適しています。

- **Uuid**：エージェントの一意識別子、リクエスト識別に使用  
- **AuthKey**：アクセス認証資格情報  
- **AuthSecret**：認証セキュリティキー  
- **作成時間**：API作成時間の記録に使用  

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/agents/publish/4.jpg" width="100%"/>
</div>

> 操作ボタンで：コピー、キーの更新、API情報の削除が可能  
> 詳細なAPI使用仕様は公式ドキュメント：**Agents Open API v1.5**を参照

---

## 例：PythonでのエージェントAPI呼び出し

以下は、Pythonでエージェント APIをリクエストするサンプルコードで、実際のビジネスシステムに統合できます。

`.env.local` 設定形式：

```env
UUID=あなたのUUID
AUTH_KEY=あなたのAUTH_KEY
AUTH_SECRET=あなたのAUTH_SECRET
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
    prompt = "人工知能とは何か説明してください"
    print(agent_api(prompt))
```

上記の公開方法により、ウェブページ入口の構築でも、システムレベルのAPI接続でも、エージェントを様々なアプリケーション環境に柔軟に展開し、構築から実装までの循環を真に実現することができます。