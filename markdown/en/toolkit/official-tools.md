---
title: Official Tools
---

The platform provides a variety of built-in tools that you can use directly in the agent. The built-in tools currently supported by the platform are:
- Web Crawling
- Contract Review

# Web Crawling

Crawler tools help users extract structured data from target web pages and combine it with the Agent's capabilities for further processing. The specific entry point is as follows:
<center>
<img src='/img/en/toolkit/1.jpg' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Figure 1-1: Web Crawling Entry Point</p>

## Creating a Crawling Task

1. Go to the homepage and click the "**New Crawling Task**" button.
2. Enter the crawler configuration page.
<center>
<img src='/img/en/toolkit/2.jpg' width=100%></img>
</center>

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 8px;">Figure 1-2: Web Crawling Configuration Page</p>

## Configuring Crawler Tasks

Using `http://www.cbssports.com/nba/` as an example:

**Step 1: Configure the Target Webpage**

Enter the URL you want to crawl.

**Step 2: Configure Crawling Fields**

- You can add multiple fields and configure field names, descriptions, and extraction rules.
- Supports XPath and regular expressions.

Field examples:

- **Field name**: title  
- **Description**: Article title  
- **Extraction rule**: `xpath => //div[@class='tyxxy_t']/h1/Text()`  

Field type descriptions:

- `string`: Text field, such as title, body text, etc.
- `webpage`: Sub-pages that need to be crawled further.

**Clicking the "Crawl" button** will automatically expand the lower-level webpage configuration. Clicking "Cancel Crawling" will clear the configuration.

---

## Export Configuration

**Export methods:**

- ✅ **Export to Agent**: Structured data enters the knowledge base after processing  
  - Example field path: `_state.data.content` (field name is content)  
  - Dataset name: `_state.url`

- ✅ **Export to HTTP**: Pushes content to a database through a `POST` interface

---

## Task Management

- **Schedule Setting**: Supports granularity settings for minutes, hours, days, etc., and also supports Cron expressions (e.g., crawling every Monday, Wednesday, and Friday).
- **Start and Stop**: Can be stopped at any time after starting (stopping is permanent termination).
- **Edit and Delete**: Editing, deleting, and setting are prohibited during task execution.

---

# Contract Review