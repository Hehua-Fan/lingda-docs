---
title: Multi-agents and Tool Call
---

This paper will introduce how to implement multi-agent cooperation and external tool invocation in Agents platform. By modularizing multiple sub-agents, you can build an agent system with the ability of division of labor, state transfer and memory. At the same time, the tool call function provided by the platform allows you to flexibly integrate custom logic and system tools to enhance the processing capability and business adaptability of the agent. This chapter will provide a detailed analysis of multi-agent interaction mechanisms, sub-agent construction rules, tool drag and drop, usage processes, and best practices to help you build more intelligent and scalable AI systems.

# Multiple agents

Navigate to the Agent panel on the left to browse your agent library. Pick the ideal agents and drag them to the central canvas area. These selected agents will act as "child agents ", allowing you to easily build powerful multi-agent systems.

<div>
<img src="/img/agents/workflow/multiagents-and-tools/1.jpg" width="100%" />
</div>

** Sub-agent structure and rules: **

1. Core components:
- Basic module
- Agent Indicates the end of the session module
2. Key limitation: Each child Agent is allowed to contain only one "Agent End of session "module

** Parent agent interaction with child agent: **

Please refer to the table below to understand the state flow mechanism between them.

| | Type | Function |
|--------------------------|------|----------|
| Agent run successfully. Confirm | - | A pop-up message is displayed indicating that the Agent execution is complete. |
| run the | - | command to reset the Agent execution record and restart the command from User Asked. |
| If yes, go to | - | Agent. After the operation is complete, continue with the next module. The Agent is not triggered by user input. |
| If no, run the | - | command to run the current Agent again without resetting the entire process. |
| adds agent memory variable | - | adds Boolean/string/search result variables and reads the memory value by '{{key}}' for subsequent modules. |


# Tool call

Navigate to the Tools panel on the left and you will see a comprehensive library of tools, including:

1. Custom tools: Unique tools that you create yourself
2. Official tools: The default tool set provided by the system

Here is a collection of all the tools available under your account, including self-developed and authorized resources.

<div>
<img src="/img/agents/workflow/multiagents-and-tools/2.jpg" width="100%" />
</div>

You can drag the tool onto the canvas to use it.