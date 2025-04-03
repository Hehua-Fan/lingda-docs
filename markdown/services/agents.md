---
title: 智能体创建与发布指南
hideTitle: true
---

# 智能体的创建

## 创建准备
在充分了解平台的功能和能力之后，如何将自己的想法变为可视化的智能体规划就是关键。好的编排方式不仅让智能体运行起来更加流畅，同时用户在使用过程中也会有更好的体验。

在阅读进阶技巧之前，推荐您先熟悉知识库搭建以及各模块功能两部分的内容，了解他们将有助于理解接下来的智能体规划相关内容。整个模块的涉及将涉及以下几个关键步骤：

1. 评估当前需求

当我们想利用平台搭建一个具体业务场景时，首先可以针对这个场景定义其具体的目的和目标，以确定在后续的流程设计中，始终围绕着这一目标展开。

2. 评估AI能力

有了具体的业务需求，接下来需要判断，需要完成这个需求所涉及的AI能力以及平台所支持的AI能力是否匹配。目前平台支持“智能对话”“知识库搜索”“信息分类”“字段提取”等能力，他们在运行过程中，有着不同的用途。此时心中应该对所用到的模块有基本的认识。

3. 画布编排

确认相关需求的可行性后，我们就可以在画布编排中，将心中的想法真正在画布中进行试验。画布编排比较简单，将用到的模块/官方智能体/工具拖入画布中，并将必要的数据节点进行链接，即完成智能体的搭建。这里涉及到的相关模块能力可以参考各模块功能。

4. 用户交互设计

AI智能体最终面向的是使用者，因此我们在画布编排过程中还要考虑用户在使用过程中，是否能理解当前AI智能体的能力。如何设计对话的引导内容、当用户未按照要求如何进行回复、为用户发送的问题是否易于理解，等等多种用户可能碰到的问题，应该提前规划，并设计到画布编排中来，为用户提供良好的使用体验。

5. 测试与实验

在AI智能体编排设计过程中，记得进行多多测试调优，以便随时对AI智能体进行测试和调整。测试在第一部中设计的目的和目标是否达成、测试用户使用过程中是否流畅等等，打造一个体验更好、效果更好的AI智能体。

✨以上就是在设计AI智能体过程中的核心步骤与技巧，在实际尝试过程中，请尽量按照以上步骤进行实操寻经，调整设计自己的AI智能体，最终利用AI智能体实现已有的需求~

## 基础配置
当我们选择“创建智能体”后，就会进入智能体的创建页面，该页面是对智能体进行自定义的核心页面，在此处将可以调整智能体相关信息，配置智能体的功能规划，这些配置决定了未来智能体的呈现样式及功能。同时你也能在此了解与智能体的相应数据，持续进行使用优化，或将智能体进行发布，服务更多用户。

智能体配置分为以下方面：

- 基本信息配置：设定智能体头像、名称、开场白等基本信息
- 规划配置：设定智能体功能，通过模块化编排实现智能体相关能力
- 分发配置：配置智能体发布、上下架等操作

**使用场景**

- 智能体基础信息调整
- 智能体知识库关联
- 智能体功能规划
- 智能体发布

<center>
<img src='/img/agent-1-1-1.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-1-1：配置界面</p>

配置页面可以对智能体的基本信息进行调整，这里包括以下几个维度的设置：

- 智能体头像
  - 可自定义上传头像、设定文字头像或选择平台已有头像
- 智能体名称
  - 为当前智能体进行命名，使用者会第一时间查看此名称
- 智能体描述
  - 简单描述该智能体的功能/场景/其他信息，便于使用者了解相关信息
- 对话背景
  - 默认为白色，你也可以为你的智能体选择一个精美的聊天背景
- 开场白
  - 在对话开始前，使用者会首先看到智能体发送过来的一条消息，即此处设置的开场白
- 问题建议
  - 通过预设一些问题建议，方便使用者快速与智能体互动，问题建议将在首次对话时呈现在对话框上方
  - 可设置多个引导，最多可添加6个引导
- 对话模型选择
  - 仅设定默认的“智能对话”模块所使用的模型
  - 在规划中，模块可单独进行选择大语言模型的选择
- 提示词
  - 仅设定默认的“智能对话”模块的提示词
  - 在规划中，模块可单独进行选择提示词的设置
- 知识库
  - 仅设定默认的“知识库搜索”模块所关联的知识库
  - 在规划中，其他“知识库搜索”模块可单独进行设置
  - 对话将对知识库进行内容检索，并根据相关性进行回答
  - 每个智能体可选择多个知识库
- 是否显示知识库引用
  - 通过知识库搜索回复的答案，会展示该答案的参考信息的文档来源

通过以上设置，就完成了一个智能体的基础信息的配置，接下来我们一起探索“规划”的设计，这是智能体设计的另一个重要配置环节，决定这个智能体未来会拥有哪些能力以及实现什么功能。

## 工作流规划

### 规划概述

“规划”顾名思义就是智能体的能力设计，在智能体运行时，系统将按照预先设计好的流程，依次执行各个模块，并实现目标效果。为了帮助使用者更好的理解和配置，平台的“规划”功能，采用拖拽连线的方式将一个个功能模块串联起来，让“任务规划”更加清晰易用，且有强大的自定义能力。

整个过程类似于搭积木，每个模块都拥有独特的能力，将这些“积木”进行适当组合，即可搭建出专属的智能体。熟悉各个模块功能，将有助于对智能体能力有更全面的认识。

<center>
<img src='/img/agent-1-3-1.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

- 左侧为模块区，目前平台的模块分为系统模块、智能体和工具三类。
  - 系统模块：链接 AI 能力，对输入文本进行处理，如信息加工、知识库搜索等。
  - 智能体：在一个智能体任务规划中，可以调用已上线的智能体，进行更加复杂能力的规划。
  - 工具：将常用工具进行打包，扩充智能体链接第三方能力，企业也可以根据自身需要，自行开发工具。

<center>
<img src='/img/agent-1-3-2.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

- 画布区为“规划”设计区，可将模块区组件通过拖拽方式移入画布，并通过连线，将各个模块进行能力组合。
- 每个模块中，位于左侧的接口为输入，右侧接口为输出，连接只能将一个输入和输出连接起来，不能连接“输入和输入”或者“输出和输出”。
- 如果连接错误，可点击线中间的 x 删除链接。

<center>
<img src='/img/agent-1-3-3.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

功能区位于页面右上角和左下角，分为两个部分：
- 画布功能区
- 智能体功能区

**画布功能区**
- 导入/导出：将该智能体的编排进行导入与导出。
- 预览：进入预览对话窗口，进行快速对话调试。
<center>
<img src='/img/agent-1-3-4.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>


**智能体功能区**
- 三点：发布智能体/删除智能体。
- 保存：保存智能体当前编排和配置。
- 上架：将智能体上架到“智能体市场”中。
<center>
<img src='/img/agent-1-3-5.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块结构**
每个模块由三部分组成：
- 左上角模块输入区，连接节点将信息输入
- 中间部分模块设置区，在此设置模块的参数、提示词等内容
- 右下角模块输出区，将模块执行后的信息输出
<center>
<img src='/img/agent-1-3-6.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**节点说明**

节点的颜色与它的类型息息相关，在以下为平台所有节点的颜色与它的数值类型：

<center>
<img src='/img/agent-1-3-7.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

<center>
<img src='/img/agent-1-3-8.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

* 黄色节点：布尔型数值，与其他布尔型节点连接
* 蓝色节点：字符串类型，可细分为文本信息、图片信息、文档信息三种，与其他相同信息类型节点
* 紫色节点：仅为知识库搜索结果，用于输入输出知识库搜索结果
* 红色节点：任意类型，仅在For Each模块中，需要为JSON数组或者目标对象

连接原则：同类型节点互相连接，不同类型节点不可连接。

### 用户提问（入口）

在对话过程中，我们往往需要获取用户的提问，来了解用户意图。借助“用户问题”模块可以获取用户提问/选择内容，并将内容传输给其他模块。

<center>
<img src='/img/agent-1-2-1.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-2.jpg' width=100%></img>
</center>

### 智能对话

智能对话模块借助 AI 能力，将用户发送的内容，通过大语言模型进行处理并回复给用户指定内容。

<center>
<img src='/img/agent-1-2-3.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-2：智能对话</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-4.jpg' width=100%></img>
</center>

### 确定回复

在需要将特定内容回复给用户时，可以使用确定回复模块，用户将直接收到文本框中的内容。如果回复内容节点链接外部信息源，则链接信息将覆盖输入框信息。

<center>
<img src='/img/agent-1-2-5.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-6.jpg' width=100%></img>
</center>  

### 信息分类 

借助 AI 的智能分析，将用户问题进行分类，可以针对不同类型的问题执行不同操作，方便进行个性化处理

<center>
<img src='/img/agent-1-2-7.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-8.jpg' width=100%></img>
</center>

### 信息提取 

- 通过 AI 对语义的理解，可以从输入信息中提取目标信息
- 常用于提取搜索关键词，SQL语句等，结合API、工具和应用模块使用，可以实现复杂功能

<center>
<img src='/img/agent-1-2-9.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-10.jpg' width=100%></img>
</center>

### 信息加工  

通过 prompt 对信息进行加工，以获得符合需求的内容。

<center>
<img src='/img/agent-1-2-11.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-12.jpg' width=100%></img>
</center>

### 知识库搜索  

针对常见的用户提问，可以将问题添加进知识库，便于搜索和查找。而对于“知识库”模块而言，该模块可以输入用户问题，并在知识库中搜索相关问题与解答，并用自然语言进行输出。

<center>
<img src='/img/agent-1-2-13.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-14.jpg' width=100%></img>
</center>

### 文档审查  

用于文档读取和审核场景，用户上传文档后，模型通过读取文档内容，并根据设定好的提问，依次进行回答。

<center>
<img src='/img/agent-1-2-15.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-16.jpg' width=100%></img>
</center>

### 图片提问  

支持用户上传图片后，借助视觉模型的识图能力，回复有关图片的提问信息。

<center>
<img src='/img/agent-1-2-17.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-18.jpg' width=100%></img>
</center>

### 文档提问  

支持用户上传文档后，直接输入问题，利用大语言模型读取文档后，回复用户。例如“总结这份文档中的要点”，实现即时的文档提问功能。与“文档审核”模块不同的是，这里用户可以自己输入提问问题，而“文档审核”则是预置提问，此处不需要输入问题。

<center>
<img src='/img/agent-1-2-19.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-20.jpg' width=100%></img>
</center>

### 关键词识别

识别文档中是否包含相关关键词

<center>
<img src='/img/agent-1-2-21.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-22.jpg' width=100%></img>
</center>

### Agent对话结束 

- 此模块为多Agents联动场景中，需要用到的的模块。只有当Agent的规划编排中，引入此模块，才可以在“规划”画布左侧 “Agents”处找到此Agent，并可以拖拽到画布中，实现多Agent间的联动
- 记忆变量为当前场景中存储的临时变量，在作为Agent出现在其他Agent的编排中时，记忆变量表示改Agent输出参数，实现跨Agent进行引用。

<center>
<img src='/img/agent-1-2-23.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-24.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-24：作为其他画布规划中的Agent，运行时会有此弹窗进行确认</p>

<center>
<img src='/img/agent-1-2-25.jpg' width=100%></img>
</center>

### 代码块  

- 通过添加 JavaScript 或 python 代码进行数据处理

<center>
<img src='/img/agent-1-2-26.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-27.jpg' width=100%></img>
</center>

### 信息处理  

- 通过正则表达式进行数据处理，仅支持字符串类型的输入与输出。

<center>
<img src='/img/agent-1-2-28.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-29.jpg' width=100%></img>
</center>

### 循环  

- 循环组件用于循环流程，使用者将需要循环处理的流程用循环组件的循环起点和循环终点做圈选，启动循环流程。

<center>
<img src='/img/agent-1-2-30.png' width=45%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**模块参数介绍**

<center>
<img src='/img/agent-1-2-31.jpg' width=100%></img>
</center>

### 多智能体

导航至左侧"智能体"面板,浏览您的智能体库。从中挑选理想的智能体,将它们拖放到中央画布区。这些被选中的智能体将作为"子智能体",让您轻松构建强大的多智能体系统。

<center>
<img src='/img/agent-1-2-32.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

**子智能体的构成与规则：**

1. 核心组件： 
  - 基础模块
  - Agent对话结束模块
2. 关键限制：每个子智能体仅允许包含一个"Agent对话结束"模块

**父智能体与子智能体的交互：**

请参考下方表格，了解它们之间的状态流转机制。

<center>
<img src='/img/agent-1-2-33.jpg' width=100%></img>
</center>

### 工具调用

导航至左侧"工具"面板，您将看到一个综合工具库，包括：

1. 自定义工具：您亲自创建的独特工具
2. 官方工具：系统提供的预设工具集

这里集中展示了您账号下所有可用的工具，包括自主开发和授权使用的各类资源。

<center>
<img src='/img/agent-1-2-34.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

可将工具拖拽至画布上进行使用。

<center>
<img src='/img/agent-1-2-35.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2-1：用户提问</p>

### 系统设置

>详见：[内置函数/变量说明](https://uxkpl4cba3j.feishu.cn/wiki/WBFkwSv27ig0SvkxKvDc6bAsn8d)

# 智能体的发布

首先点击右上角的“···”按钮，然后在弹出的二级菜单中选择“发布”按钮，进入智能体发布页面。

<center>
<img src='/img/agent-2-1.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图2-1：智能体发布入口</p>

## HTTP应用

1. 创建链接
- 点击右上角"创建链接"按钮
- 必填项：链接名称、有效期
- 默认使用方式："自行充值使用"
- 可选：启用/禁用链接密码

<center>
<img src='/img/agent-2-2.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图2-1：智能体发布入口</p>

2. 链接操作
- 创建成功后可执行：打开、复制、嵌入网页
- 点击链接右侧"···"按钮：删除或编辑链接

<center>
<img src='/img/agent-2-3.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图2-1：智能体发布入口</p>

## API服务
可对API信息进行：复制、刷新、删除。详细API调用方法参考Agents Open Api-v1.5

- **Uuid**：智能体API的唯一标识符，用于识别和区分不同的API实例。
- **AuthKey**：用于验证API调用权限的密钥，确保只有授权用户可以访问API。
- **AuthSecret**：用于进一步保护API调用的安全密钥，通常与AuthKey配合使用以增强安全性。
- **创建时间**：API创建时间。

<center>
<img src='/img/agent-2-4.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图2-1：智能体发布入口</p>

## Python调用API

```yaml
UUID=17f77a78f3da4013ace57ad16640d39d
AUTH_KEY=17f77a78f3da4013ace57ad16640d39d
AUTH_SECRET=xgM4FJ7e3NTz9unnRNxr0vj9G5Bgkttx
PLATFORM=uat
```

```python
import requests
import os
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env.local'))

# 从环境变量中获取配置
UUID = os.getenv("UUID")
AUTH_KEY = os.getenv("AUTH_KEY")
AUTH_SECRET = os.getenv("AUTH_SECRET")
PLATFORM = os.getenv("PLATFORM")

AUTOAGENTS_HOST_NAME_UAT = "https://uat.agentspro.cn"
AUTOAGENTS_HOST_NAME_TEST = "https://test.agentspro.cn"
AUTOAGENTS_HOST_NAME_LINGDA = "https://lingda.agentspro.cn"

def agent_api(prompt):
    # Step 1: 选择一个平台：uat、test、lingda
    if PLATFORM not in AUTOAGENTS_HOST_NAME:
        logger.error(f"Unsupported platform: {PLATFORM}")
        return f"Unsupported platform: {PLATFORM}"
        
    # Step 2: 准备请求体
    url = f"{AUTOAGENTS_HOST_NAME[PLATFORM]}/openapi/agent/chat/completions/v1"
    headers = {
        "Authorization": f"Bearer {AUTH_KEY}.{AUTH_SECRET}",
        "Content-Type": "application/json"
    }
    body = {
        "agentId": f"{UUID}",
        "chatId": None,
        "userChatInput": f"{prompt}",
    }

    try:
        # 发送POST请求
        response = requests.post(url, headers=headers, json=body, timeout=30)

        # 检查响应状态码
        if response.status_code == 200:
            try: 
                # 尝试将响应解析为JSON
                json_response = response.json()
                logger.info(f"Raw response received")
                result = json_response["choices"][0]["content"]
                logger.info(f"Successfully got response of length: {len(result)}")
                return result
            except (ValueError, KeyError, IndexError) as e:  
                # 处理各种解析错误
                error_msg = f"Failed to parse response: {str(e)}"
                logger.error(error_msg)
                logger.error(f"Raw response: {response.text}")
                return f"Error: {error_msg}"
        else:
            error_msg = f"Request failed with status code {response.status_code}"
            logger.error(error_msg)
            logger.error(f"Response: {response.text}")
            return f"Error: {error_msg}"
            
    except requests.exceptions.RequestException as e:
        error_msg = f"Request exception: {str(e)}"
        logger.error(error_msg)
        return f"Error: {error_msg}"
    except Exception as e:
        error_msg = f"Unexpected error: {str(e)}"
        logger.error(error_msg)
        return f"Error: {error_msg}"


if __name__ == "__main__":
    prompt = "解释什么是人工智能"
    response = agent_api(prompt)
    print(response)
```