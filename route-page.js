const portfolioContent = window.portfolioContent
const routePage = document.body.dataset.page
const routePrefix = document.body.dataset.rootPrefix || ''
const routeRoot = document.querySelector('[data-route-root]')

const routeHref = {
  home: `${routePrefix}#about`,
  about: `${routePrefix}#about`,
  work: `${routePrefix}#work`,
  lab: `${routePrefix}#lab`,
  journey: `${routePrefix}#experience`,
  experience: `${routePrefix}#experience`,
  contact: `${routePrefix}#contact`
}

const routeNavLinks = document.querySelector('[data-nav-links]')
if (routeNavLinks && !routeNavLinks.querySelector('[data-route-link="contact"]')) {
  const mobileContactLink = document.createElement('a')
  mobileContactLink.className = 'mobile-nav-contact'
  mobileContactLink.dataset.routeLink = 'contact'
  mobileContactLink.textContent = "Let's talk"
  routeNavLinks.append(mobileContactLink)
}

document.querySelectorAll('[data-route-link]').forEach((link) => {
  const target = link.dataset.routeLink
  if (routeHref[target]) link.href = routeHref[target]
})

const tags = (items = []) => items.map((item) => `<span>${item}</span>`).join('')

const projectCard = (project, index) => `
  <a class="route-card route-card-${index % 3}" href="${project.slug}/">
    <div class="route-card-top"><span>${String(index + 1).padStart(2, '0')}</span><small>${project.category}</small></div>
    <div class="route-card-marker" aria-hidden="true"></div>
    <h2>${project.title}</h2>
    <p>${project.summary}</p>
    <div class="route-card-meta"><span>${project.role}</span><span>${project.year}</span></div>
    <div class="route-card-bottom"><span>${project.capability}</span><i data-lucide="arrow-up-right" aria-hidden="true"></i></div>
  </a>`

const labCard = (experiment, index) => `
  <a class="route-card lab-route-card lab-route-card-${index % 4}" href="${experiment.slug}/">
    <div class="route-card-top"><span>LAB / ${String(index + 1).padStart(3, '0')}</span><small>${experiment.date}</small></div>
    <div class="lab-route-marker" aria-hidden="true"></div>
    <h2>${experiment.title}</h2>
    <p>${experiment.summary}</p>
    <div class="route-card-meta"><span>STATUS / ${experiment.status}</span><span>${experiment.stack}</span></div>
    <div class="route-card-bottom"><span>EXPLORE</span><i data-lucide="arrow-up-right" aria-hidden="true"></i></div>
  </a>`

const detailSections = [
  ['01', 'CONTEXT', 'context'],
  ['02', 'PROBLEM', 'problem'],
  ['03', 'RESEARCH', 'research'],
  ['04', 'INSIGHT', 'insight'],
  ['05', 'PRODUCT', 'product'],
  ['06', 'WORKFLOW', 'workflow'],
  ['07', 'PROTOTYPE', 'prototype'],
  ['08', 'VALIDATION', 'validation'],
  ['09', 'RESULT', 'result'],
  ['10', 'REFLECTION', 'reflection']
]

const projectDetail = (project) => `
  <article class="route-detail route-detail-project">
    <div class="route-detail-kicker">02 / WORK · ${project.category}</div>
    <div class="route-detail-heading">
      <div><h1>${project.title}</h1><p>${project.summary}</p></div>
      <div class="route-detail-stamp"><small>ROLE</small><strong>${project.role}</strong><small>YEAR</small><strong>${project.year}</strong></div>
    </div>
    <div class="detail-result"><span>OUTCOME</span><strong>${project.result}</strong></div>
    <div class="detail-grid">${detailSections.map(([number, label, key]) => `<section><span>${number} / ${label}</span><p>${project.sections[key]}</p></section>`).join('')}</div>
    <div class="detail-tags">${tags(project.tags)}</div>
    <div class="route-detail-actions"><a class="button button-dark" href="${routeHref.work}">返回全部案例 <i data-lucide="arrow-left" aria-hidden="true"></i></a>${project.link ? `<a class="button button-light" href="${project.link}" target="_blank" rel="noreferrer">打开项目 <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>` : ''}<a class="text-button" href="${routeHref.contact}">Let's talk <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>
  </article>`

const trueSeekingDetail = (project) => `
  <article class="ts-case-snapshot case-snapshot" aria-labelledby="trueseeking-title">
    <div class="ts-breadcrumb"><a href="${routeHref.work}">02 / WORK</a><span>·</span><span>AI PRODUCT / HACKATHON</span></div>

    <header class="ts-case-hero">
      <div class="ts-hero-copy">
        <h1 id="trueseeking-title">${project.title}</h1>
        <p>${project.summary}</p>
      </div>
      <dl class="ts-metadata" aria-label="项目基本信息">
        <div><dt>ROLE</dt><dd>产品负责人 · 用户任务 · MVP · AI 边界</dd></div>
        <div><dt>TYPE</dt><dd>AI Product / Knowledge Reliability</dd></div>
        <div><dt>TIME</dt><dd>${project.year}</dd></div>
      </dl>
    </header>

    <div class="ts-case-layout">
      <aside class="ts-narrative" aria-label="TrueSeeking 产品叙事">
        <section class="ts-rail-item">
          <span>01 / CONTEXT</span>
          <p>长视频、播客和知识内容不断增加，创作者在发布前很难快速确认：哪些关键表述需要证据支持。</p>
        </section>
        <section class="ts-rail-item">
          <span>02 / PROBLEM</span>
          <p>传统事实核查往往发生在发布之后。真正的问题不是“AI 能不能告诉我真假？”而是“哪些内容值得我在发布前停下来确认？”</p>
        </section>
        <section class="ts-rail-item">
          <span>03 / INSIGHT</span>
          <p><strong>AI 不替用户做绝对真伪裁定。</strong>产品应该让证据状态、不确定性、风险原因、来源变得可见、可解释。</p>
        </section>
        <section class="ts-rail-item ts-rail-outcome">
          <span>04 / OUTCOME</span>
          <p>${project.result}</p>
        </section>
      </aside>

      <div class="ts-product-column">
        <section class="ts-evidence-surface" aria-label="TrueSeeking Claim-level Evidence Workflow">
          <header class="ts-surface-header"><span>TRUESEEKING / EVIDENCE FLOW</span><span>PRE-PUBLISH RELIABILITY</span></header>

          <div class="ts-flow-source"><span>CONTENT</span><strong>长视频 · 播客 · 知识内容</strong><i aria-hidden="true">↓</i></div>
          <div class="ts-flow-track" aria-label="内容到表达修改的可信度核验流程">
            <article class="ts-flow-step"><span>01</span><i data-lucide="quote" aria-hidden="true"></i><strong>Extract Claim</strong><small>提取关键主张</small></article>
            <article class="ts-flow-step"><span>02</span><i data-lucide="search" aria-hidden="true"></i><strong>Find Evidence</strong><small>匹配证据</small></article>
            <article class="ts-flow-step"><span>03</span><i data-lucide="triangle-alert" aria-hidden="true"></i><strong>Explain Risk</strong><small>解释风险</small></article>
            <article class="ts-flow-step"><span>04</span><i data-lucide="pen-line" aria-hidden="true"></i><strong>Rewrite</strong><small>修改表达</small></article>
          </div>

          <section class="ts-report-fragment" aria-label="Claim-level report fragment">
            <div class="ts-report-heading"><span>报告片段 / CLAIM-LEVEL REPORT</span><span>TRACEABLE BEFORE PUBLISH</span></div>
            <div class="ts-report-top">
              <div><small>ORIGINAL CLAIM</small><strong>待核验的关键表述</strong></div>
              <div><small>EVIDENCE STATUS</small><strong>状态可见 · 可追溯</strong></div>
              <div><small>SOURCE / TIMESTAMP</small><strong>来源 · 时间标记</strong></div>
            </div>
            <div class="ts-report-bottom">
              <div><small>RISK REASON</small><strong>不确定性与风险原因</strong></div>
              <div><small>SUGGESTED REWRITE</small><strong>保留证据边界后的表达建议</strong></div>
            </div>
          </section>

          <p class="ts-flow-caption">CONTENT <b>→</b> CLAIM <b>→</b> EVIDENCE <b>→</b> RISK <b>→</b> REWRITE</p>
        </section>

        <section class="ts-my-work" aria-labelledby="ts-my-work-title">
          <div class="ts-my-work-heading"><span id="ts-my-work-title">我的工作 / MY WORK</span><span>PRODUCT DECISIONS</span></div>
          <ul>
            <li><i data-lucide="check" aria-hidden="true"></i><span>定义发布前可信度核验的核心用户任务</span></li>
            <li><i data-lucide="check" aria-hidden="true"></i><span>将 Claim → Evidence → Risk → Rewrite 拆成 MVP 产品闭环</span></li>
            <li><i data-lucide="check" aria-hidden="true"></i><span>设计 AI 判断边界，让不确定性与证据来源保持可解释</span></li>
          </ul>
        </section>
      </div>
    </div>
  </article>`

const snapshotMetadata = (items) => items.map(({ label, value }) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')

const snapshotNarrative = (items) => items.map(({ label, content, outcome = false }) => `
  <section class="ts-rail-item${outcome ? ' ts-rail-outcome' : ''}">
    <span>${label}</span>
    <p>${content}</p>
  </section>`).join('')

const snapshotMyWork = (items) => `
  <section class="ts-my-work" aria-labelledby="snapshot-my-work-title">
    <div class="ts-my-work-heading"><span id="snapshot-my-work-title">我的工作 / MY WORK</span><span>PRODUCT DECISIONS</span></div>
    <ul>${items.map((item) => `<li><i data-lucide="check" aria-hidden="true"></i><span>${item}</span></li>`).join('')}</ul>
  </section>`

const snapshotShell = ({ variant, breadcrumb, title, summary, metadata, narrative, visual, myWork }) => `
  <article class="ts-case-snapshot case-snapshot ${variant}">
    <div class="ts-breadcrumb"><a href="${routeHref.work}">02 / WORK</a><span>·</span><span>${breadcrumb}</span></div>
    <header class="ts-case-hero">
      <div class="ts-hero-copy"><h1>${title}</h1><p>${summary}</p></div>
      <dl class="ts-metadata" aria-label="项目基本信息">${snapshotMetadata(metadata)}</dl>
    </header>
    <div class="ts-case-layout">
      <aside class="ts-narrative" aria-label="${title} 项目叙事">${snapshotNarrative(narrative)}</aside>
      <div class="ts-product-column">
        ${visual}
        ${snapshotMyWork(myWork)}
      </div>
    </div>
  </article>`

const auditWorkflowNode = ({ number, icon, title, detail }) => `
  <article class="audit-workflow-node">
    <span>${number}</span><i data-lucide="${icon}" aria-hidden="true"></i><strong>${title}</strong><small>${detail}</small>
  </article>`

const auditWorkflowVisual = () => `
  <section class="case-core-surface audit-core-surface" aria-label="智能审单工作流总览">
    <header class="case-core-header"><span>智能审单工作流总览 / WORKFLOW OVERVIEW</span><span>AUDIT DECISION PATH</span></header>
    <div class="audit-workflow-track">
      ${auditWorkflowNode({ number: '01', icon: 'file-text', title: '文档上传', detail: '发票 / 劳务单 / 聘用协议' })}
      ${auditWorkflowNode({ number: '02', icon: 'table-2', title: '字段抽取', detail: 'OCR + 结构化信息' })}
      ${auditWorkflowNode({ number: '03', icon: 'shield-check', title: '规则校验', detail: '知识库 + 业务系统' })}
      ${auditWorkflowNode({ number: '04', icon: 'sparkles', title: 'AI 判断', detail: '风险识别 / 不确定项' })}
      ${auditWorkflowNode({ number: '05', icon: 'user-check', title: '人工复核', detail: '确认 / 追问 / 修正' })}
      ${auditWorkflowNode({ number: '06', icon: 'archive', title: '结果归档', detail: '记录 / 可追溯' })}
    </div>
    <div class="audit-decision-note"><span>证据不足</span><b>→</b><strong>待确认</strong><small>不由 AI 强行裁决</small></div>
    <div class="audit-learning-line"><i aria-hidden="true">↑</i><span>持续学习与规则沉淀</span><i aria-hidden="true">↑</i></div>
  </section>`

const scenarioActivity = ({ icon, title, detail }) => `
  <article class="scenario-activity"><i data-lucide="${icon}" aria-hidden="true"></i><strong>${title}</strong><small>${detail}</small></article>`

const scenarioLearningVisual = () => `
  <section class="case-core-surface scenario-core-surface" aria-label="Scenario-based Learning Flow">
    <header class="case-core-header"><span>情境化学习流程 / SCENARIO LEARNING FLOW</span><span>WORD → SCENARIO → USE</span></header>
    <div class="scenario-targets"><span>TARGET WORDS</span><strong>delay</strong><strong>gate</strong><strong>rebook</strong><strong>board</strong></div>
    <div class="scenario-focus"><span>SCENARIO</span><strong>Airport Delay</strong><small>Theme · Character · Task</small></div>
    <div class="scenario-activity-grid">
      ${scenarioActivity({ icon: 'headphones', title: 'LISTEN', detail: '听懂信息' })}
      ${scenarioActivity({ icon: 'file-text', title: 'READ', detail: '阅读理解' })}
      ${scenarioActivity({ icon: 'messages-square', title: 'SPEAK', detail: '口语表达' })}
      ${scenarioActivity({ icon: 'pen-line', title: 'WRITE', detail: '写作输出' })}
    </div>
    <div class="scenario-progress"><div><span>LEARN</span><small>理解输入</small></div><b>→</b><div><span>FEEDBACK</span><small>表现反馈 + 错误分析</small></div><b>→</b><div><span>TEST</span><small>使用验证</small></div></div>
    <div class="scenario-ai-notes"><span>GENERATE · 主题 / 角色 / 任务</span><span>LISTEN · TTS</span><span>SPEAK · STT</span><span>ADAPT · 下一步练习</span></div>
  </section>`

const knowledgePipelineNode = ({ number, icon, title, detail }) => `
  <article class="knowledge-pipeline-node"><span>${number}</span><i data-lucide="${icon}" aria-hidden="true"></i><strong>${title}</strong><small>${detail}</small></article>`

const knowledgePipelineVisual = () => `
  <section class="case-core-surface knowledge-core-surface" aria-label="Knowledge Pipeline">
    <header class="case-core-header"><span>知识工作流 / KNOWLEDGE PIPELINE</span><span>TRACEABLE RETRIEVAL</span></header>
    <div class="knowledge-inputs"><span>KNOWLEDGE INPUT</span><strong>FAQ</strong><strong>TABLE</strong><strong>MIND MAP</strong></div>
    <div class="knowledge-pipeline-track">
      ${knowledgePipelineNode({ number: '01', icon: 'file-text', title: 'SOURCE', detail: '多种资料输入' })}
      ${knowledgePipelineNode({ number: '02', icon: 'filter', title: 'CLEAN', detail: '清洗与规范化' })}
      ${knowledgePipelineNode({ number: '03', icon: 'grid-2x2', title: 'STRUCTURE', detail: '结构化处理' })}
      ${knowledgePipelineNode({ number: '04', icon: 'layers-3', title: 'CHUNK', detail: '切分为可检索单元' })}
      ${knowledgePipelineNode({ number: '05', icon: 'search', title: 'RETRIEVE', detail: '命中相关资料' })}
      ${knowledgePipelineNode({ number: '06', icon: 'messages-square', title: 'ANSWER', detail: '引用来源后回答' })}
    </div>
    <div class="knowledge-retrieval-hit"><span>RETRIEVAL HIT</span><strong>相关资料命中</strong><small>SOURCE / 可追溯</small></div>
    <p class="knowledge-product-note">回答可靠，先从知识结构开始。</p>
  </section>`

const medicalAuditDetail = (project) => snapshotShell({
  variant: 'audit-case-snapshot',
  breadcrumb: 'AI WORKFLOW / HEALTHCARE',
  title: project.title,
  summary: project.summary,
  metadata: [
    { label: 'ROLE', value: project.role },
    { label: 'TIME', value: project.year }
  ],
  narrative: [
    { label: '01 / CONTEXT', content: '医疗集团的财务审核涉及多种电子单据，审核规则分散在业务材料、知识库和人工经验里。' },
    { label: '02 / PROBLEM', content: '人工审核耗时长，复杂单据中的字段判断和规则校验容易出现不一致。' },
    { label: '03 / INSIGHT', content: '<strong>复杂业务的 AI 价值，不是把整段流程交给模型。</strong>而是把输入、证据、判断、复核拆成可追踪的节点。' },
    { label: '04 / OUTCOME', content: '电子单据审核准确率 99.1%<br />15–20 分钟 → 2–5 分钟', outcome: true }
  ],
  visual: auditWorkflowVisual(),
  myWork: [
    '梳理单据字段、审核规则和人工复核节点',
    '设计包含抽取、校验、判断、复核的 AI 工作流',
    '进行 Prompt 与模型评测，对比 Qwen / GLM / GPT 系列表现'
  ]
})

const words2ScenarioDetail = () => snapshotShell({
  variant: 'scenario-case-snapshot',
  breadcrumb: 'PERSONAL BUILD / AI × EDUCATION',
  title: 'Words2Scenario',
  summary: '把英语词汇从「记忆对象」，变成真实情境里的使用任务。',
  metadata: [
    { label: 'TYPE', value: 'Personal Product / AI Education' },
    { label: 'ROLE', value: '独立产品设计与搭建' },
    { label: 'TIME', value: '2025.11–至今' }
  ],
  narrative: [
    { label: '01 / CONTEXT', content: '面向四六级、IELTS、TOEFL 等英语考试备考者，以及希望提升词汇量与表达能力的学习者。' },
    { label: '02 / PROBLEM', content: '传统背词更多解决“这个词是什么意思”。用户即使记住词义，仍可能不会听懂、表达、写出来，或迁移到真实语境。' },
    { label: '03 / INSIGHT', content: '<strong>情境不只是给单词配一句例句。</strong>真正有效的 Context 包含 Theme、Character、Task、Use，让词汇进入真实任务。' },
    { label: '04 / CURRENT BUILD', content: 'Learn / Test<br />Listening · Reading · Speaking · Writing', outcome: true }
  ],
  visual: scenarioLearningVisual(),
  myWork: [
    '从词汇记忆问题出发定义情境化学习产品',
    '设计 Learn / Test 与听说读写的完整学习路径',
    '使用 AI 搭建和验证核心产品体验'
  ]
})

const customerServiceDetail = () => snapshotShell({
  variant: 'knowledge-case-snapshot',
  breadcrumb: 'ENTERPRISE AI / RAG',
  title: 'AI 智能客服',
  summary: '先把复杂业务资料变成可检索的证据，再让 AI 回答。',
  metadata: [
    { label: 'ROLE', value: '资料清洗 · 结构化 · Chunking · Knowledge Base · RAG' },
    { label: 'TYPE', value: 'Enterprise AI / Knowledge Workflow' },
    { label: 'TIME', value: '2026.02–2026.05' }
  ],
  narrative: [
    { label: '01 / CONTEXT', content: '客服回答依赖大量业务资料，可能来自 FAQ、复杂表格、思维导图和业务文档。' },
    { label: '02 / PROBLEM', content: 'RAG 的问题不只是模型生成质量。资料结构混乱、Chunk 不合理、来源不清楚时，最终回答仍然不稳定。' },
    { label: '03 / INSIGHT', content: '<strong>RAG 的关键不只在生成。</strong>更重要的是知识是否清晰、可维护、可检索、可追踪。' },
    { label: '04 / IMPLEMENTATION', content: 'KNOWLEDGE INPUT<br />FAQ · Complex Tables · Mind Maps<br /><br />→ STRUCTURED KNOWLEDGE BASE', outcome: true }
  ],
  visual: knowledgePipelineVisual(),
  myWork: [
    '清洗并重构不同格式的业务资料',
    '设计知识结构和 Chunking 方式',
    '搭建 Knowledge Base 与 RAG 检索工作流'
  ]
})

const labDetailSections = [
  ['QUESTION', 'question'],
  ['BUILD', 'build'],
  ['TEST', 'test'],
  ['RESULT', 'result'],
  ['LEARNING', 'learning'],
  ['NEXT', 'next']
]

const labDetail = (experiment) => `
  <article class="route-detail route-detail-lab">
    <div class="route-detail-kicker">03 / LAB · ${experiment.label}</div>
    <div class="route-detail-heading">
      <div><h1>${experiment.title}</h1><p>${experiment.summary}</p></div>
      <div class="route-detail-stamp"><small>STATUS</small><strong>${experiment.status}</strong><small>STACK</small><strong>${experiment.stack}</strong><small>DATE</small><strong>${experiment.date}</strong></div>
    </div>
    <div class="lab-question-bar"><span>WHAT I'M EXPLORING</span><strong>${experiment.question}</strong></div>
    <div class="detail-grid lab-detail-grid">${labDetailSections.map(([label, key]) => `<section><span>${label}</span><p>${experiment[key]}</p></section>`).join('')}</div>
    <div class="route-detail-actions"><a class="button button-dark" href="${routeHref.lab}">返回 AI Lab <i data-lucide="arrow-left" aria-hidden="true"></i></a><a class="text-button" href="${routeHref.contact}">Let's talk <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>
  </article>`

const journeyNode = (experience, index) => `
  <article class="journey-route-node journey-route-node-${index % 5}">
    <div class="journey-route-node-top"><span>${String(index + 1).padStart(2, '0')}</span><small>${experience.type}</small></div>
    <h2>${experience.title}</h2>
    <p class="journey-route-org">${experience.organization}</p>
    <span class="journey-route-period">${experience.period}</span>
    <p>${experience.context}</p>
    <div class="journey-learning"><small>WHAT I LEARNED</small><strong>${experience.learning}</strong></div>
    <div class="detail-tags">${tags(experience.tags)}</div>
  </article>`

const renderWorkList = () => {
  const projects = Object.values(portfolioContent.projects)
  routeRoot.innerHTML = `
    <section class="route-hero route-hero-work">
      <div class="route-kicker">02 / WORK</div>
      <h1>PRODUCT<br /><em>CASES</em></h1>
      <p>Real problems. Structured thinking. Useful products.</p>
      <span class="route-hero-side">WHAT I BUILD<br />AI PRODUCT · WORKFLOW · EVIDENCE</span>
    </section>
    <section class="route-section route-section-list">
      <div class="route-section-heading"><span>SELECTED / ${String(projects.length).padStart(2, '0')}</span><p>完整案例从具体的工作阻力开始，落到可以被理解、验证和继续使用的产品路径。</p></div>
      <div class="route-card-grid">${projects.map(projectCard).join('')}</div>
    </section>`
}

const renderLabList = () => {
  const experiments = Object.values(portfolioContent.labExperiments)
  routeRoot.innerHTML = `
    <section class="route-hero route-hero-lab">
      <div class="route-kicker">03 / LAB</div>
      <h1>AI<br /><em>EXPERIMENTS</em></h1>
      <p>Questions first. Small builds. Evidence in motion.</p>
      <span class="route-hero-side">WHAT I'M EXPLORING<br />PROTOTYPE · RESEARCH · LEARN</span>
    </section>
    <section class="route-section route-section-list">
      <div class="route-section-heading"><span>LAB / ${String(experiments.length).padStart(3, '0')}</span><p>这里记录还在形成中的问题、工作流和原型，不把每次实验都包装成已经完成的答案。</p></div>
      <div class="route-card-grid lab-route-grid">${experiments.map(labCard).join('')}</div>
    </section>`
}

const renderJourney = () => {
  const experiences = portfolioContent.journeyExperiences
  routeRoot.innerHTML = `
    <section class="route-hero route-hero-journey">
      <div class="route-kicker">04 / JOURNEY</div>
      <h1>FROM LANGUAGE<br /><em>TO PRODUCT</em><br />TO AI</h1>
      <p>Where I learned to look, listen, structure, and build.</p>
      <span class="route-hero-side">WHERE I LEARNED IT<br />LANGUAGE · PEOPLE · PLACES · PRODUCT · AI</span>
    </section>
    <section class="route-section journey-route-section">
      <div class="route-section-heading"><span>EXPERIENCE MAP / 05</span><p>不是一条职位时间线，而是不同场景如何逐渐塑造我的 Product Thinking。</p></div>
      <div class="journey-route-map">${experiences.map(journeyNode).join('')}</div>
      <div class="journey-route-cta"><span>FROM LANGUAGE TO AI</span><strong>Research × Product × Real-world context</strong><a class="section-cta" href="${routeHref.contact}">Let's talk <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>
    </section>`
}

const renderProjectDetail = () => {
  const slug = document.body.dataset.slug
  const project = portfolioContent.projects[slug]

  if (slug === 'words2scenario') {
    routeRoot.innerHTML = words2ScenarioDetail()
    return
  }

  if (slug === 'ai-customer-service') {
    routeRoot.innerHTML = customerServiceDetail()
    return
  }

  routeRoot.innerHTML = !project
    ? '<p class="route-empty">找不到这个项目。</p>'
    : project.slug === 'trueseeking'
      ? trueSeekingDetail(project)
      : project.slug === 'medical-smart-audit'
        ? medicalAuditDetail(project)
        : projectDetail(project)
}

const renderLabDetail = () => {
  const experiment = portfolioContent.labExperiments[document.body.dataset.slug]
  routeRoot.innerHTML = experiment ? labDetail(experiment) : '<p class="route-empty">找不到这个实验。</p>'
}

if (routeRoot) {
  if (routePage === 'work-list') renderWorkList()
  if (routePage === 'work-detail') renderProjectDetail()
  if (routePage === 'lab-list') renderLabList()
  if (routePage === 'lab-detail') renderLabDetail()
  if (routePage === 'journey') renderJourney()
}

if (window.lucide) window.lucide.createIcons()
