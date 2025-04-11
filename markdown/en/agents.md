---
title: Agents
---

This article will introduce how to create a fully functional agent from scratch in the Auto Agents Platform. It covers key steps from preliminary requirements analysis and capability assessment, to canvas orchestration and interaction design, to the agent's basic information configuration and module planning, helping you systematically master the entire process of agent building. Through this guide, you will be able to quickly build implementable, interactive, and extensible agent applications based on your business needs.

# Preparation
After fully understanding the platform's functions and capabilities, the key is how to transform your ideas into visualized agent planning. Good orchestration not only makes the agent run more smoothly, but also provides users with a better experience during use.

Before reading advanced techniques, it is recommended that you first familiarize yourself with knowledge base building and the functions of various modules. Understanding these will help you understand the agent planning content that follows. The entire module involves the following key steps:

**1. Assess Current Requirements**

When we want to build a specific business scenario using the platform, we can first define its specific purpose and goals for that scenario, to ensure that in the subsequent process design, we always focus on this goal.

**2. Assess AI Capabilities**

With specific business requirements, the next step is to determine whether the AI capabilities involved in completing this requirement match the AI capabilities supported by the platform. Currently, the platform supports capabilities such as "Intelligent Dialogue", "Knowledge Base Search", "Information Classification", "Field Extraction", etc., which have different uses during operation. At this point, you should have a basic understanding of the modules to be used.

**3. Canvas Orchestration**

After confirming the feasibility of the relevant requirements, we can then try out our ideas in the canvas orchestration. Canvas orchestration is relatively simple - drag the modules/official agents/tools you will use into the canvas, and connect the necessary data nodes to complete the agent building. The relevant module capabilities involved here can be referenced in the various module functions.

**4. User Interaction Design**

The AI agent ultimately faces users, so during the canvas orchestration process, we also need to consider whether users can understand the current AI agent's capabilities during use. How to design dialogue guidance content, how to respond when users do not follow requirements, whether questions sent to users are easy to understand, and many other issues that users may encounter should be planned in advance and designed into the canvas orchestration to provide users with a good experience.

**5. Testing and Experimentation**

During the AI agent orchestration design process, remember to conduct multiple tests and optimizations to test and adjust the AI agent at any time. Test whether the purpose and goals designed in the first step are achieved, test whether the user process is smooth, etc., to create an AI agent with better experience and better results.


# Basic Configuration
When we select "Create Agent", we will enter the agent creation page, which is the core page for customizing the agent. Here, you can adjust agent-related information and configure the agent's functional planning. These configurations determine the future presentation style and functionality of the agent. At the same time, you can also learn about the corresponding data of the agent, continuously optimize its use, or publish the agent to serve more users.

Agent configuration is divided into the following aspects:

- Basic information configuration: Set the agent's avatar, name, opening remarks, and other basic information
- Planning configuration: Set the agent's functions, implement agent-related capabilities through modular orchestration
- Distribution configuration: Configure agent publishing, listing, and delisting operations

**Use Cases**

- Adjusting agent basic information
- Agent knowledge base association
- Agent function planning
- Agent publishing


<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/1.jpg" width="100%"/>
</div>

The configuration page allows you to adjust the basic information of the agent, including settings in the following dimensions:

| Configuration Item Name | Configuration Description |
|------------------------|----------|
| **Agent Avatar** | Supports custom avatar uploads, text avatar settings, or selecting avatar icons provided by the platform. |
| **Agent Name** | Name the agent; the name will be prominently displayed in the user interface. |
| **Agent Description** | Briefly explain the agent's function, scenario, or capability to help users understand its purpose. |
| **Conversation Background** | The default background is white; you can customize by uploading background images for personalized display. |