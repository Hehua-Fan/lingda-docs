---
title: Create Knowledge Base
---

This article will introduce how to create and configure dedicated knowledge bases in the Auto Agents Platform, including knowledge base type selection, embedding model settings, Token chunking strategies, and other basic configuration processes, and further explain how to upload and parse documents to enable them to be called and retrieved by agents. Through this tutorial, you will master the standard operating procedures for building structured knowledge bases, laying a solid foundation for subsequent efficient question answering and knowledge dispatching by agents.

# Knowledge Base Entry

1. Navigate to the "Knowledge Base" section, click "Create Knowledge Base"
2. Provide a name and description, select the knowledge base type (general, code, professional, etc.)

<center>
<img src='/img/en/knowledge-base/1.jpg' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Knowledge Base Creation Entry</p>

<center>
<img src='/img/en/knowledge-base/2.jpg' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Knowledge Base Creation Configuration Interface (Automatic)</p>

<center>
<img src='/img/en/knowledge-base/3.jpg' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Knowledge Base Creation Configuration Interface (Manual)</p>

- **Parsing Method**: Default is general, options include legal, papers, books, manuals, FAQ, etc. <span style="color:red">Please note that once you select and use an embedding model to embed files, you will not be able to change that embedding model. We must ensure that the same embedding model is used to embed all files in a specific knowledge base in order to compare similarities and retrieve relevant content in the same embedding space.</span>
- **Specify Embedding Model**: An embedding model is an algorithm that converts text into vectors (numerical form) to capture semantic information in the text. The significance of specifying an embedding model is to determine how text is embedded into a high-dimensional space, making similar text content close to each other in this space.
- **Set Block Token Count**: Block token count refers to when processing documents, the system divides the text into multiple "blocks" (or segments), with each block containing a certain number of tokens (words or subwords). Tokens are the smallest units that models use when processing text; they can be complete words or parts of words. The purpose of setting the block token count is to manage document size and processing efficiency. A larger block token count can accommodate more content but may increase computational complexity, while a smaller block token count helps to analyze text on a more fine-grained level but may require more blocks to process the entire document. Setting a reasonable block token count can balance processing precision and efficiency.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/knowledge-base/4.jpg" width="100%"/>
</div>

# Upload Files
- Enter the "Datasets" page of the knowledge base
- Click "Upload" to select files
- After uploading, click "Update to Knowledge Base"

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/knowledge-base/5.jpg" width="100%"/>
</div>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Upload Files to Knowledge Base</p>

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/knowledge-base/6.jpg" width="100%"/>
</div>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Upload Files to Knowledge Base</p>

# Parse Files
- Click the "Parse" button for the file
- The system will automatically slice and embed the data
- After successful parsing, the status will update to "Success," and the file content can be retrieved

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/knowledge-base/7.jpg" width="100%"/>
</div>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Parse Files in Knowledge Base</p>