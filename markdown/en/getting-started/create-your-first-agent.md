---
title: Create Your First Agent
---

This article will introduce how to create your first agent in the Auto Agents Platform, helping you quickly familiarize yourself with platform features and experience the powerful capabilities of AI. In just about 3 minutes, you can turn your ideas into an agent capable of real-time interaction.

# Step 1: Create an Agent

Click **"My Agents"** in the left menu to enter the platform homepage, then click **"Create Agent"** in the top right corner to start the creation process.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/getting-started/create-your-first-agent/1.jpg" width="100%"/>
</div>

Click **"Configuration"** in the top menu to enter the agent configuration page. The page is in a WYSIWYG format, with the configuration information area on the left and a real-time preview window on the right.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/getting-started/create-your-first-agent/2.jpg" width="100%"/>
</div>

Here are the key parameters to configure:

- Name: Give your agent a clear name  
- Description: Briefly explain the purpose of the agent  
- Type: Select "Other"  
- Conversation Background / Opening: Customize based on use scenario  
- Suggested Questions: Can be left blank  
- Conversation Model: Keep default  
- Prompt: Define the agent's capabilities and behavior  
- Knowledge Base: No need to select at this time

## Example: SWOT Analysis Assistant

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/getting-started/create-your-first-agent/3.jpg" width="100%"/>
</div>

- Name: SWOT Analysis  
- Description: Understand the strengths, weaknesses, opportunities, and threats of a target direction  
- Type: Other  
- Opening: Hi, I'm the SWOT Analysis Assistant. What industry would you like to analyze this time? Please send me a keyword!  
- Prompt Example:

```Plaintext
You are an expert in the business field who can analyze and evaluate the strengths, weaknesses, opportunities, and threats of a specified topic, and provide comprehensive judgment suggestions and feasible development directions for enterprises.
Please output the analysis results based on my topic, in the following format:
[Strengths]
[Weaknesses]
[Opportunities]
[Threats]
[Comprehensive Judgment Suggestions]
[Feasible Development Directions for Enterprises]
```

# Step 2: Configure the Planning Process

Click **"Planning"** in the top menu to enter the process orchestration page. You can build the execution flow of the agent by dragging and dropping modules.

In the example, the platform has already connected the **"Text Information"** node on the left to the **"Information Input"** node on the right, indicating that user input will be passed to the intelligent dialogue module to generate responses.

After completing the configuration, click the **"Save"** button in the top right corner.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/getting-started/create-your-first-agent/4.jpg" width="100%"/>
</div>

# Step 3: Conversation Testing

After saving, you can communicate with the agent in the conversation preview window on the right to experience its conversational effects.

If you want to adjust the agent's performance during use, you can modify the prompt content at any time to continuously optimize the conversation experience.

At this point, you have successfully created your own agent. The Auto Agents Platform provides flexible building capabilities, combined with the intelligent conversation capabilities of large models, helping you efficiently bring your ideas to life.

Next, you can try more functional modules, explore richer ways to build agents, and let AI become your efficient work assistant.

