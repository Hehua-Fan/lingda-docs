---
title: 最初のエージェントを作成
---

本記事では、オートエージェントプラットフォームで最初のエージェントを作成する方法を紹介し、プラットフォームの機能に素早く慣れ、AIの強力な能力を体験するのに役立ちます。わずか3分程度で、あなたのアイデアをリアルタイムで対話できるエージェントに変えることができます。

# ステップ1：エージェントの作成

左側メニューの **「マイエージェント」** をクリックしてプラットフォームのホームページに入り、右上の **「エージェント作成」** をクリックして作成プロセスを開始します。

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/getting-started/create-your-first-agent/1.jpg" width="100%"/>
</div>

トップメニューの **「設定」** をクリックしてエージェント設定ページに入ります。ページはWYSIWYG形式で、左側が設定情報エリア、右側がリアルタイムプレビューウィンドウとなっています。

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/getting-started/create-your-first-agent/2.jpg" width="100%"/>
</div>

以下は設定すべき主要なパラメータです：

- 名前：エージェントに明確な名前を付ける  
- 説明：エージェントの用途を簡潔に説明する  
- タイプ：「その他」を選択  
- 会話の背景/オープニング：使用シナリオに基づいてカスタマイズ  
- 質問の提案：空白でも構いません  
- 会話モデル：デフォルトのままにする  
- プロンプト：エージェントの能力と行動を定義する  
- ナレッジベース：現時点では選択不要



## 例：SWOT分析アシスタント

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/getting-started/create-your-first-agent/3.jpg" width="100%"/>
</div>

- 名前：SWOT分析  
- 説明：ターゲット方向の強み、弱み、機会、脅威を理解する  
- タイプ：その他  
- オープニング：こんにちは、SWOT分析アシスタントです。今回はどの業界を分析したいですか？キーワードを送ってください！  
- プロンプト例：

```Plaintext
あなたはビジネス分野の専門家で、指定されたテーマの強み、弱み、機会、脅威を整理・評価し、最後に総合的な判断アドバイスと企業の実行可能な発展方向を提供できます。
私のテーマに基づいて、以下の形式で分析結果を出力してください：
【強み】
【弱み】
【機会】
【脅威】
【総合的な判断アドバイス】
【企業の実行可能な発展方向】
```

# ステップ2：計画プロセスの設定

トップメニューの **「計画」** をクリックしてプロセスオーケストレーションページに入ります。モジュールをドラッグアンドドロップすることで、エージェントの実行フローを構築できます。

例では、プラットフォームはすでに左側の **「テキスト情報」** ノードを右側の **「情報入力」** ノードに接続し、ユーザーの入力がインテリジェント対話モジュールに渡され、応答が生成されることを示しています。

設定が完了したら、右上の **「保存」** ボタンをクリックします。

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/jp/getting-started/create-your-first-agent/4.jpg" width="100%"/>
</div>

# ステップ3：対話テスト

保存後、右側の対話プレビューウィンドウでエージェントと通信し、その対話効果を体験できます。

使用中にエージェントのパフォーマンスを調整したい場合は、いつでもプロンプトの内容を変更して、対話体験を継続的に最適化できます。

これで、あなた専用のエージェントの作成に成功しました。オートエージェントプラットフォームは柔軟な構築能力を備えており、大規模モデルのインテリジェントな対話能力と組み合わせて、アイデアを効率的に実現するのに役立ちます。

次に、より多くの機能モジュールを試し、より豊かなエージェント構築方法を探索して、AIをあなたの効率的な作業アシスタントにしましょう。
