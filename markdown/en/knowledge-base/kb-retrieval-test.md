---
title: Retrieval Testing
---

After file parsing is complete, you can test the query effectiveness of the dataset on the retrieval testing page and debug the relevant parameters most suitable for your scenario requirements. Enter test text, click test to see the effect.

<center>
<img src='/img/kb-2-1.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Figure 2-1: Knowledge Base Retrieval Testing</p>

<center>
<img src='/img/kb-2-2.png' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Figure 2-2: Knowledge Base Retrieval Testing</p>

Each parameter has corresponding prompts to help you better understand and use the parameters.

| Parameter Name | Parameter Explanation |
|----------------|------------------------|
| **Similarity Threshold** | We use a hybrid similarity score to evaluate the similarity between user questions and knowledge base chunks. It is calculated by weighted combination of keyword similarity and vector cosine similarity. If the similarity between a question and a chunk is less than this threshold, that chunk will be filtered out. |
| **Vector Similarity Weight** | We use a hybrid similarity score to evaluate the similarity between user questions and knowledge base chunks. It is calculated by weighted combination of keyword similarity and vector cosine similarity. The sum of the two similarity weights is 1. For example, if the vector similarity weight is 0.9, then the keyword similarity is 0.1.<br>The default vector similarity is 1, meaning only vector retrieval is used. It is recommended to reduce the vector similarity weight when your question contains specific names, addresses, numbers, or other keywords, using a hybrid similarity score of vector retrieval and keyword retrieval. |
| **Recall Count** | On the premise of meeting the similarity threshold, sorted by similarity from high to low, the number of relevant chunks recalled. |
| **Enable Reranking** | The reranking model is used to reorder already recalled chunks based on their relevance to the user's question. Its main purpose is to improve the accuracy and relevance of search results, ensuring that user queries can obtain the most valuable and relevant information. **Note: The reranking model consumes considerable resources, and enabling it will reduce retrieval speed.** |
| **Reranking Recall Count** | Based on the scores of the reranking model, sorted by relevance from high to low, the number of relevant chunks recalled. |



# Frequently Asked Questions

1. What is the size limit for a knowledge base?

>Each knowledge base can contain up to 10GB of text content or approximately 5 million tokens.

2. Which languages are supported?

>Currently, more than 30 languages are supported, including Chinese, English, Japanese, Korean, etc.

3. How to handle sensitive information?

>Knowledge base provides access control and encryption options to ensure the security of sensitive information.

4. Do I need to retrain the model after updating the knowledge base?

>No. After the knowledge base is updated, the system will automatically reindex the new content without the need for retraining.

