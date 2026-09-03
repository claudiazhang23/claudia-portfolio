window.portfolioContent = {
  projects: {
    trueseeking: {
      slug: 'trueseeking',
      title: 'TrueSeeking',
      category: 'AI PRODUCT / HACKATHON',
      year: '2026.08',
      role: '产品负责人',
      capability: 'Claim 提取 · 证据检索 · 风险判断',
      summary: '面向知识科普内容创作者的发布前可信度核验产品。',
      tags: ['AI product', 'Claim', 'RAG', 'Coze'],
      link: 'https://trueseeking.cn/',
      result: '2026 AIY 黑客松深圳站成人组银奖',
      sections: {
        context: '知识科普内容创作者在发布前需要核验事实、定位风险并修改表达，但视频和文本里的关键主张通常散落在长内容中。',
        problem: '创作者缺少一个能够把原句、证据、风险原因和可修改建议放在同一条路径里的工具。',
        research: '从内容创作者的发布前任务出发，关注视频或文本输入、转写、Claim 提取、证据检索和报告阅读这条完整链路。',
        insight: '产品不应替用户做绝对真伪裁定，而应该让证据状态、不确定性和风险原因变得可见、可解释。',
        product: '构建从内容输入到 Claim 级报告的核验产品，展示证据状态、原句时间戳、风险原因与表达建议。',
        workflow: 'Coze 工作流负责转写、Claim 提取和证据检索；前端报告页负责让创作者理解判断过程并继续修改。',
        prototype: '完成可演示的前端报告页、Coze 工作流与后端链路，并围绕统一数据结构协作。',
        validation: '通过赛事路演和可演示产品验证核心链路是否能够被理解、使用和继续操作。',
        result: '获得 AIY 大赛成人组银奖，并完成从用户洞察、MVP 收敛到 AI 产品边界设计的闭环。',
        reflection: '可信度产品的价值不在于给出一个看似确定的答案，而在于帮助用户知道下一步应该检查什么、修改什么。'
      }
    },
    'medical-smart-audit': {
      slug: 'medical-smart-audit',
      title: '医疗集团智能审单工作流',
      category: 'AI WORKFLOW / HEALTHCARE',
      year: '2026.04–07',
      role: '复杂流程拆解 · 工作流设计 · 模型评测',
      capability: '字段抽取 · 知识库校验 · 审核判断',
      summary: '面向发票、劳务单和聘用协议的复杂财务单据审核自动化。',
      tags: ['AI workflow', 'RAG', 'Model evaluation', 'Prompt'],
      result: '电子单据审核准确率 99.1% · 15–20 分钟压缩至 2–5 分钟',
      sections: {
        context: '医疗集团的财务审核涉及多种电子单据，审核规则散落在业务材料、知识库和人工经验里。',
        problem: '人工审核耗时长，复杂单据中的字段判断和规则校验容易出现不一致。',
        research: '梳理发票、劳务单、聘用协议等单据的输入字段、审核规则、业务系统数据和人工复核节点。',
        insight: '复杂业务的 AI 价值不是把整段流程交给模型，而是把输入、证据、判断和复核拆成可追踪的节点。',
        product: '设计包含字段抽取、知识库校验、业务系统调用和审核判断的 AI 工作流。',
        workflow: '围绕指令遵从、字段抽取和手写汉字识别，对 Qwen、GLM、GPT 系列模型进行 Prompt 适配与对比评测。',
        prototype: '完成工作流搭建、模型选型验证与产品验收标准制定，推动 AI 能力与实际财务审核流程结合。',
        validation: '以电子单据审核准确率、单次审核耗时和关键 Bad Case 作为主要验收依据。',
        result: '电子单据审核准确率达到 99.1%，审核时长由人工 15–20 分钟压缩至 2–5 分钟。',
        reflection: '当业务规则足够复杂时，可解释的状态和证据链本身就是产品体验的一部分。'
      }
    },
    lessoncraft: {
      slug: 'lessoncraft',
      title: '“课搭子” LessonCraft',
      category: 'PERSONAL BUILD / EDTECH',
      year: '2026.07–NOW',
      role: '用户场景 · MVP · 交互闭环',
      capability: '课程时间线 · 长期记忆 · 人机协作',
      summary: '面向自由英语教师的 AI 备课协作工作台。',
      tags: ['AI workflow', 'HTML', 'Memory', 'EdTech'],
      result: '学生理解 → 课程包 → 课后反馈 → 下节建议',
      sections: {
        context: '一对一或小班自由英语教师需要同时记住学生基础、教学目标、课堂创意和连续课程中的变化。',
        problem: '教师经验和创意很难直接转成可复用的课程结构，AI 生成材料也不能取代教师的教学判断。',
        research: '聚焦新生首次备课与老生连续备课两类场景，梳理学生理解、教师确认、材料生成和课后复盘。',
        insight: '长期记忆必须可确认、可编辑、可删除；AI 应该帮助教师继续判断，而不是替教师完成判断。',
        product: '设计可编辑课程时间线、英文讲义、教师提示和可操作 HTML 课堂课件。',
        workflow: '围绕教师偏好、学生特征、课程证据三类记忆，规划 AI 追问、材料生成与课后复盘的工作流约束。',
        prototype: '完成覆盖学生理解、教师确认、课程包、课后反馈、候选记忆写入和下节建议的 Web Demo。',
        validation: '通过真实备课任务检查教师是否能理解、修改并继续使用生成的课程包。',
        result: '形成一套可交互的教师 AI 备课工作台原型，明确教师始终保留教学判断与修改权。',
        reflection: '好的 AI 协作不是减少所有人的判断，而是让关键判断更早出现、更容易被修改。'
      }
    },
    'notion-execution-layer': {
      slug: 'notion-execution-layer',
      title: 'Notion 执行层插件',
      category: 'PERSONAL BUILD / PRODUCTIVITY',
      year: '2026.05–NOW',
      role: '产品设计 · Notion API · 本地原型',
      capability: 'Plan · Focus · Review',
      summary: '连接 Notion 计划与现实执行过程的轻量工具。',
      tags: ['Notion API', 'Focus', 'Review', 'Prototype'],
      result: '打通任务读取、专注计时、执行记录和结果回写',
      sections: {
        context: 'Notion 擅长承载长期项目和资料，但任务开始、真实投入记录和执行结果回写之间仍然存在摩擦。',
        problem: '用户知道要做什么，却需要在开始任务、记录投入和更新结果时反复切换上下文。',
        research: '围绕任务读取、专注计时、执行记录和结果回写，观察从计划到行动之间的断点。',
        insight: '执行工具只需要在当下提供一个清晰的下一步，同时保留任务上下文和后续复盘。',
        product: '设计连接 Notion 与现实执行过程的轻量插件，形成 Plan、Focus、Review 三段式闭环。',
        workflow: '通过 Notion API 读取任务，在专注阶段记录真实投入，并把执行结果回写到原有数据库。',
        prototype: '完成可运行的本地原型，打通任务读取、专注计时、执行记录和结果回写。',
        validation: '以一次完整任务是否能够顺利开始、持续和回写作为原型验证标准。',
        result: '形成可运行本地原型，验证任务管理与真实执行之间的连接方式。',
        reflection: '产品不一定要增加更多信息，有时只需要让下一步更容易发生。'
      }
    }
  },
  labExperiments: {
    'model-evaluation': {
      slug: 'model-evaluation',
      title: '模型评测',
      label: 'MODEL EVALUATION',
      status: 'Evaluation',
      stack: 'Qwen · GLM · GPT · Prompt',
      date: '2026.03–07',
      summary: '围绕指令遵从、字段抽取和手写汉字识别进行模型对比与 Prompt 适配。',
      question: '在真实业务场景里，模型差异应该如何被观察和记录？',
      build: '设计评测场景、整理评测集、适配 Prompt，并比较不同模型在关键任务中的表现。',
      test: '关注准确率、可用性、时延、成本和 Bad Case，而不是只看一次性输出。',
      result: '验证 GLM 5.1 在手写汉字识别场景中的稳定性，并推动模型选型落地。',
      learning: '模型评测的终点不是排名，而是为产品方案和边界提供判断依据。',
      next: '继续把评测结果沉淀为可复用的场景与验收标准。'
    },
    'rag-knowledge-base': {
      slug: 'rag-knowledge-base',
      title: 'RAG 知识库',
      label: 'RAG KNOWLEDGE BASE',
      status: 'Workflow',
      stack: 'FAQ · Tables · Mind maps',
      date: '2026.03–07',
      summary: '面向耳机品牌智能客服，完成业务资料清洗、结构化、分块与知识库配置。',
      question: '业务资料如何从“存在”变成能被检索和继续使用的证据？',
      build: '整理 FAQ、复杂表格和思维导图，完成文档清洗、结构化、分块与知识库配置。',
      test: '检查知识检索、回答生成和用户交互流程在真实问题中的连续性。',
      result: '搭建从资料到检索再到回答生成的 RAG 应用流程。',
      learning: 'RAG 的产品难点经常不在生成，而在资料是否足够清晰、可维护和可追踪。',
      next: '继续观察资料更新、召回质量和回答反馈之间的关系。'
    },
    'research-to-requirements': {
      slug: 'research-to-requirements',
      title: '从用户研究到需求',
      label: 'RESEARCH → REQUIREMENTS',
      status: 'Research',
      stack: 'Survey · Interview · Synthesis',
      date: '2025.05–08',
      summary: '从 0 到 1 设计用户反馈收集机制，收集 200+ 份用户样本并推动建议落地。',
      question: '零散反馈如何变成团队可以判断和执行的产品问题？',
      build: '设计问卷与访谈提纲，收集用户样本并整理用户画像、核心痛点与功能需求。',
      test: '将反馈转成结构化研究报告与功能优化建议，观察团队采纳与落地情况。',
      result: '形成 4 项功能优化建议，其中 2 项被团队采纳并落地。',
      learning: '研究的价值不止是获得更多信息，而是让需求判断拥有更清晰的依据。',
      next: '继续提升从样本、洞察到优先级的可追踪性。'
    },
    'prototype-loop': {
      slug: 'prototype-loop',
      title: '原型验证循环',
      label: 'PROTOTYPE / SHIP / LEARN',
      status: 'Prototype',
      stack: 'Coze · Dify · n8n · HTML · API',
      date: '2026 / ongoing',
      summary: '使用工作流工具和 HTML 原型，把产品假设变成可以体验、质疑和修改的版本。',
      question: '一个产品假设，怎样最快进入真实任务而不是停留在文档里？',
      build: '使用 Coze、Dify、n8n、Python、SQL 与 HTML，完成 Agent、RAG、Function Call 和 API 流程验证。',
      test: '让原型进入具体用户场景，观察流程是否可理解、可操作以及哪里出现 Bad Case。',
      result: '形成多个可运行的 AI 应用原型，并把反馈带回下一轮产品设计。',
      learning: '原型不是最终答案，而是让团队更早看到真实摩擦的共同语言。',
      next: '继续把可运行原型沉淀为更稳定的产品系统。'
    }
  },
  journeyExperiences: [
    {
      type: 'LANGUAGE',
      title: '语言训练',
      organization: '深圳大学 · 上海外国语大学',
      period: '2020 — 2027',
      context: '汉语言文学本科与英语口译硕士训练，让我持续在不同语言、学科与表达方式之间切换。',
      learning: '信息如何被理解、转译和确认，决定了一个产品能否被继续使用。',
      tags: ['汉语言文学', '英语口译']
    },
    {
      type: 'PEOPLE',
      title: '理解人的任务',
      organization: '教育、消费与用户研究场景',
      period: '2022 — 2026',
      context: '从用户运营、教育业务到美妆消费分析，持续观察用户在真实任务中的选择、困难和反馈。',
      learning: '用户并不是在使用孤立功能，而是在具体场景中完成决策。',
      tags: ['用户运营', '消费决策', '用户研究']
    },
    {
      type: 'PLACES',
      title: '在具体场景里观察决策',
      organization: '旅行 / 服务场景',
      period: '待补充',
      context: '旅行、服务与消费决策是值得继续记录的真实场景，具体经历信息待补充。',
      learning: '信息获取、服务体验和场景变化，会共同影响用户下一步如何选择。',
      tags: ['Travel', 'Service', 'Context']
    },
    {
      type: 'PRODUCT',
      title: '把反馈转成产品',
      organization: '产品开发 · 需求转化 · AI 产品',
      period: '2022 — 2026',
      context: '从 200+ 用户反馈、300+ 美妆产品分析到复杂业务流程拆解，逐渐形成研究、判断和落地的工作方式。',
      learning: '产品工作不是收集更多需求，而是找到值得被解决、也能够被验证的问题。',
      tags: ['Research', 'Product', 'Requirements']
    },
    {
      type: 'AI',
      title: '让 AI 进入工作流',
      organization: 'TrueSeeking · 智能审单 · 个人原型',
      period: '2026 — now',
      context: '在知识可信度、财务审核、教师备课和个人执行等场景中，持续探索 AI 的产品边界。',
      learning: 'AI 产品的价值不只在模型能力，而在于能否进入真实工作流并留下可验证的证据。',
      tags: ['AI Product', 'Workflow', 'Evidence']
    }
  ]
}
