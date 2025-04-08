---
title: 创建知识库
---

本文将介绍如何在 Agents 平台中创建和配置专属知识库，包括知识库的类型选择、嵌入模型设定、Token 分块策略等基础配置流程，并进一步说明如何上传和解析文档，使其具备可被智能体调用和检索的能力。通过本教程，您将掌握构建结构化知识库的标准操作流程，为后续智能体的高效问答与知识调度打下坚实基础。

# 知识库入口

1. 导航到"知识库"部分，点击"创建知识库"
2. 提供名称和描述，选择知识库类型（通用、代码、专业等）

<center>
<img src='/img/kb-1-1.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-1：知识库创建入口</p>

<center>
<img src='/img/kb-1-2.jpg' width=50%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-2：知识库创建配置界面（自动）</p>

<center>
<img src='/img/kb-1-3.jpg' width=50%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-3：知识库创建配置界面（手动）</p>

- **解析方法**：默认通用，可选法律、论文、图书、手册、FAQ等。<span style="color:red">请注意，一旦选择并使用某个嵌入模型进行文件嵌入后，您将无法更改该嵌入模型。我们必须确保在特定知识库中使用相同的嵌入模型对所有文件进行嵌入，以便在相同的嵌入空间内比较相似度并检索相关内容。</span>
- **指定嵌入模型**：嵌入模型是一种将文本转化为向量（数值形式）的算法，用于捕捉文本中的语义信息。指定嵌入模型的意义在于决定文本如何被嵌入到一个高维空间中，使得相似的文本内容在这个空间中距离较近。
- **设置块token数**：块Token数指的是在处理文档时，系统将文本分割成多个“块”（或片段），每个块包含的Token（词语或子词）数量。Token是模型在处理文本时的最小单位，它可以是一个完整的单词或词的一部分。设置块Token数的目的是为了管理文档的大小和处理效率。较大的块Token数可以容纳更多内容，但可能增加计算复杂性；而较小的块Token数则有助于更细粒度地分析文本，但可能需要更多的块来处理整个文档。合理设置块Token数可以平衡处理精度和效率。


# 上传文件
- 进入知识库的"数据集"页面
- 点击"上传"选择文件
- 上传完成后,点击"更新到知识库"
<center>
<img src='/img/kb-1-4.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-4：知识库上传文件</p>

<center>
<img src='/img/kb-1-5.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-5：知识库上传文件</p>

# 解析文件
- 点击文件的"解析"按钮
- 系统将自动切片并嵌入数据
- 解析成功后,状态更新为"成功",文件内容即可被检索
<center>
<img src='/img/kb-1-6.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">图1-6：知识库解析文件</p>