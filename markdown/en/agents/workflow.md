---
title: Workflow Planning
---

This article will introduce the "Planning" function of agents in the Auto Agents Platform. Planning, as the name suggests, is the process-oriented design of an agent's operational capabilities. During actual operation, the system will execute each module in sequence according to the preset process to achieve the established goals.

To help users understand and configure more clearly, the platform adopts a "what you see is what you get" drag-and-connect approach, linking various functional modules in a visualized way to create a clear, intuitive, and highly customizable task execution process.

The entire process is like "building blocks" - each module is a component with specific functions, and by reasonably combining these modules, you can build agents with personalized capabilities. Understanding the characteristics and uses of each module will help you more comprehensively master the agent building methods and capability boundaries.


<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/workflow/1.jpg" width="100%"/>
</div>

- The left side is the module area, currently the platform's modules are divided into three categories: system modules, agents, and tools.
  - System Modules: Connect AI capabilities to process input text, such as information processing, knowledge base search, etc.
  - Agents: Within an agent task planning, you can call online agents to plan more complex capabilities.
  - Tools: Package common tools to expand the agent's ability to connect to third-party capabilities; enterprises can also develop tools according to their own needs.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/workflow/2.jpg" width="100%"/>
</div>


- The canvas area is the "planning" design area, where components from the module area can be moved into the canvas by dragging, and through connections, various modules can be combined for capabilities.
- In each module, the interface on the left is the input, and the interface on the right is the output. Connections can only connect an input and output; you cannot connect "input to input" or "output to output."
- If a connection is incorrect, you can click the X in the middle of the line to delete the connection.

<div style="text-align: center; margin: 30px 0;">
  <img src="/img/en/agents/workflow/3.jpg" width="100%"/>
</div>


The function area is located in the upper right corner and lower left corner of the page, divided into two parts:
- Canvas Function Area
- Agent Function Area

**Canvas Function Area**
- Import/Export: Import and export the orchestration of the agent.
- Preview: Enter the preview dialogue window for quick dialogue debugging.

<center>
<img src='/img/en/agents/workflow/4.jpg' width=45%></img>
</center>

**Agent Function Area**
- Three dots: Publish agent/Delete agent.
- Save: Save the current orchestration and configuration of the agent.
- List: List the agent in the "Agent Marketplace."

<center>
<img src='/img/en/agents/workflow/5.jpg' width=45%></img>
</center>


**Module Structure**
Each module consists of three parts:
- Module input area in the upper left corner, connecting nodes that input information
- Module setting area in the middle, where you set parameters, prompts, and other content for the module
- Module output area in the lower right corner, outputting information after the module executes
<center>
<img src='/img/en/agents/workflow/6.jpg' width=45%></img>
</center>


**Node Description**

The color of a node is closely related to its type. Below are all the colors of nodes on the platform and their value types:

<center>
<img src='/img/en/agents/workflow/7.jpg' width=45%></img>
</center>


<center>
<img src='/img/en/agents/workflow/8.jpg' width=45%></img>
</center>


* Yellow nodes: Boolean type values, connect with other Boolean type nodes
* Blue nodes: String type, can be subdivided into text information, image information, and document information, connect with other nodes of the same information type
* Purple nodes: Only for knowledge base search results, used for inputting and outputting knowledge base search results
* Red nodes: Any type, only in the For Each module, needs to be a JSON array or target object

Connection Principle: Nodes of the same type connect with each other; nodes of different types cannot connect.

