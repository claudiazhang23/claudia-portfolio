const projects = [
  {
    id: 'words2scenario',
    category: 'PERSONAL BUILD / AI × EDUCATION',
    year: '',
    title: 'Words2Scenario',
    subtitle: '把英文单词 context 化的产品',
    summary: '把单词从「记忆对象」，变成真实情境里的使用任务。',
    role: '独立产品设计与搭建',
    result: 'PERSONAL BUILD',
    resultLabel: 'STATUS',
    footerLabel: 'CURRENT BUILD',
    footerValue: 'Learn / Test · Listening · Reading · Speaking · Writing',
    decision: 'Context 能帮助用户更好地记忆和掌握单词。',
    value: '把单词从「记忆对象」，变成真实情境里的使用任务。',
    thinking: [
      { title: '单词', keyword: 'WORD', visual: 'word' },
      { title: '情境', keyword: 'SCENARIO', visual: 'scenario' },
      { title: '任务', keyword: 'TASK', visual: 'task' },
      { title: '使用', keyword: 'USE', visual: 'use' },
      { title: '反馈', keyword: 'FEEDBACK', visual: 'feedback' },
      { title: '下一轮练习', keyword: 'NEXT PRACTICE', visual: 'practice' }
    ],
    visualClass: 'visual-scenario',
    detailPath: 'work/words2scenario/',
    link: '',
    friction: '因为 context 能帮助用户更好地记忆和掌握单词，希望让备考英语考试的人不只死记硬背。',
    approach: '围绕四六级、IELTS、TOEFL 等英语考试备考者，以及希望提升词汇量和表达能力的学习者，定义从单词到使用任务的学习路径。',
    solution: '以 AI 文本生成、TTS、STT 与 Listening / Reading / Speaking / Writing 支撑情境学习；当前没有真实数字 Evidence。',
    visual: `
      <div class="scenario-sheet">
        <div class="scenario-sheet-top"><span>WORDS2SCENARIO / LEARNING SHEET</span><span>PERSONAL BUILD</span></div>
        <div class="scenario-sheet-main">
          <div class="scenario-word"><small>WORD</small><strong>context</strong><span>from memory to use</span></div>
          <div class="scenario-arrow" aria-hidden="true">→</div>
          <div class="scenario-context"><small>SCENARIO</small><strong>真实使用情境</strong><span>主题 · 角色 · 任务</span></div>
        </div>
        <div class="scenario-practice"><span>LISTEN</span><i></i><span>READ</span><i></i><span>SPEAK</span><i></i><span>WRITE</span></div>
        <div class="scenario-footer"><span>LEARN / TEST</span><span>NEXT PRACTICE</span></div>
      </div>`
  },
  {
    id: 'smart-audit',
    category: 'ENTERPRISE AI / WORKFLOW',
    year: '',
    title: '智能审单工作流',
    subtitle: '面向医疗集团财务人员的 AI 单据审核工作流。',
    summary: '把复杂审核拆成可追踪、可复核的 AI 工作流。',
    role: '流程编排 · Prompt · 知识库 · 模型评测 · 验收标准',
    result: '99.1% 审核准确率 · 15–20 min → 2–5 min',
    resultLabel: 'EVIDENCE',
    footerLabel: 'OUTCOME',
    footerValue: '电子单据审核准确率 99.1%\n15–20 分钟 → 2–5 分钟',
    decision: '证据不足时，进入「待确认」，而不是强行给最终结论。',
    value: '把复杂审核拆成可追踪、可复核的 AI 工作流。',
    thinking: [
      { title: '单据上传', keyword: 'DOCUMENT', visual: 'document' },
      { title: '字段抽取', keyword: 'EXTRACT', visual: 'extract' },
      { title: '规则 / 知识校验', keyword: 'VALIDATE', visual: 'validate' },
      { title: '业务系统数据', keyword: 'HTTP DATA', visual: 'data' },
      { title: '审核判断', keyword: 'REVIEW', visual: 'review' },
      { title: '通过 / 异常 / 待确认', keyword: 'DECISION', visual: 'decision' }
    ],
    visualClass: 'visual-audit',
    detailPath: 'work/medical-smart-audit/',
    link: '',
    friction: '发票、劳务单、聘用协议等单据规则复杂，人工审核通常需要 15–20 分钟，字段判断也容易不一致。',
    approach: '将输入、字段、规则、系统数据、判断与复核拆成节点；对 Qwen、GLM、GPT 做 Prompt 适配和对比评测。',
    solution: '证据不足时保留「待确认」，而不是让模型直接给最终结论；具体生产部署范围待补充。',
    visual: `
      <div class="audit-sheet">
        <div class="audit-sheet-top"><span>DOCUMENT REVIEW / WORKFLOW</span><span>QWEN · GLM · GPT</span></div>
        <div class="audit-flow">
          <div><small>DOCUMENT</small><strong>单据上传</strong></div><i>→</i>
          <div><small>EXTRACT</small><strong>字段抽取</strong></div><i>→</i>
          <div><small>VALIDATE</small><strong>规则校验</strong></div><i>→</i>
          <div><small>REVIEW</small><strong>审核判断</strong></div>
        </div>
        <div class="audit-result"><span>REVIEW RESULT</span><strong>PASS</strong><strong>REVIEW</strong><strong>EXCEPTION</strong></div>
        <div class="audit-evidence"><strong>99.1%</strong><span>电子单据审核准确率</span><b>15–20 → 2–5 min</b><span>单次人工审核时长</span></div>
      </div>`
  },
  {
    id: 'trueseeking',
    category: 'AI PRODUCT / HACKATHON',
    year: '',
    title: 'TrueSeeking',
    subtitle: '面向知识科普内容创作者的发布前可信度核验产品。',
    summary: '把长内容里的主张、证据和风险，收进一条发布前核验路径。',
    role: '产品负责人 · 用户任务 · MVP · AI 边界',
    result: '2026 AIY 黑客松深圳站成人组银奖',
    resultLabel: 'OUTCOME',
    footerLabel: 'OUTCOME',
    footerValue: '2026 AIY 黑客松深圳站 · 成人组银奖',
    decision: 'AI 不替用户做绝对真伪裁定。',
    value: '把长内容里的主张、证据和风险，收进一条发布前核验路径。',
    thinking: [
      { title: '提取主张', keyword: 'CLAIM', visual: 'claim' },
      { title: '匹配证据', keyword: 'EVIDENCE', visual: 'evidence' },
      { title: '解释风险', keyword: 'RISK', visual: 'risk' },
      { title: '修改表达', keyword: 'REWRITE', visual: 'rewrite' }
    ],
    visualClass: 'visual-claim',
    detailPath: 'work/trueseeking/',
    link: 'https://trueseeking.cn/',
    friction: '创作者发布视频或文本前，需要从长内容中找出关键主张，核验事实、定位风险并修改表达。',
    approach: '采用 Claim 级核验报告，把原句、证据状态、时间戳、风险原因和表达建议放在同一条路径。',
    solution: 'AI 不替用户做绝对真伪裁定；让证据状态、不确定性和风险原因变得可见、可解释。',
    visual: `
      <div class="claim-sheet">
        <div class="claim-sheet-top"><span>TRUESEEKING / REPORT</span><span>CLAIM-LEVEL</span></div>
        <div class="claim-report-row"><small>ORIGINAL CLAIM</small><strong>长内容中的关键主张</strong><span>发布前核验</span></div>
        <div class="claim-report-row is-highlight"><small>EVIDENCE STATUS</small><strong>状态可见、可追溯</strong><span>Source / Timestamp</span></div>
        <div class="claim-report-row"><small>RISK REASON</small><strong>不确定性需要被解释</strong><span>可回溯</span></div>
        <div class="claim-report-row"><small>SUGGESTED REWRITE</small><strong>保留证据边界后修改表达</strong><span>REWRITE</span></div>
      </div>`
  },
  {
    id: 'ai-customer-service',
    category: 'ENTERPRISE AI / RAG',
    year: '',
    title: 'AI 智能客服',
    subtitle: '面向耳机品牌客服场景的 AI 问答 / RAG 知识库工作流。',
    summary: '先把复杂业务资料变成可检索的证据，再让 AI 回答。',
    role: '资料清洗 · 结构化 · Chunking · Knowledge Base · RAG',
    result: 'FAQ · 复杂表格 · 思维导图 → Structured Knowledge Base',
    resultLabel: 'IMPLEMENTATION',
    footerLabel: 'IMPLEMENTATION',
    footerValue: 'Structured Knowledge Base · RAG Workflow',
    decision: 'RAG 的难点不只在生成，而在资料是否清晰、可维护、可追踪。',
    value: '先把复杂业务资料变成可检索的证据，再让 AI 回答。',
    thinking: [
      { title: '资料来源', keyword: 'SOURCE', visual: 'source' },
      { title: '清洗', keyword: 'CLEAN', visual: 'clean' },
      { title: '结构化', keyword: 'STRUCTURE', visual: 'structure' },
      { title: '分块', keyword: 'CHUNK', visual: 'chunk' },
      { title: '检索', keyword: 'RETRIEVE', visual: 'retrieve' },
      { title: '回答', keyword: 'ANSWER', visual: 'answer' }
    ],
    visualClass: 'visual-rag',
    detailPath: 'work/ai-customer-service/',
    link: '',
    friction: 'FAQ、复杂表格和思维导图等资料格式复杂且分散，未清洗和结构化时难以检索、维护与追踪。',
    approach: '把资料清洗、结构化、分块和知识库配置作为关键产品工作，再连接检索与回答生成。',
    solution: '当前可公开的 Evidence 是资料 → 检索 → 回答生成流程；暂无准确率、响应时延或用户量数据。',
    visual: `
      <div class="rag-sheet">
        <div class="rag-sheet-top"><span>KNOWLEDGE RELIABILITY / RAG</span><span>DOCUMENT EVIDENCE</span></div>
        <div class="rag-fragments"><span>FAQ</span><span>复杂表格</span><span>思维导图</span></div>
        <div class="rag-connector" aria-hidden="true"></div>
        <div class="rag-chunks"><span>CHUNK 01</span><span>CHUNK 02</span><span>CHUNK 03</span></div>
        <div class="rag-hit"><small>RETRIEVAL HIT</small><strong>相关资料被找到</strong><span>ANSWER + SOURCE</span></div>
        <div class="rag-foot"><span>STRUCTURED KNOWLEDGE BASE</span><b>可维护 · 可追踪</b></div>
      </div>`
  }
]

const labItems = [
  {
    id: 'model-evaluation',
    number: '01',
    noteTitle: '模型评测不是终点。',
    noteCopy: '发现失败，\n才能知道下一步该改什么。',
    label: 'MODEL EVALUATION',
    type: 'evaluation',
    context: {
      headingLead: '先找到模型',
      headingAccent: '在哪里失效。',
      lede: '把模型放进真实任务，\n观察失败、沉淀 Bad Case，\n再建立下一轮评估标准。',
      tags: []
    },
    intro: '在真实任务上评估模型表现，识别失败模式，建立评估标准。',
    task: '真实任务 / 需求场景',
    model: 'Qwen · GLM · GPT',
    badCase: '这一步暴露模型失败点',
    evaluation: '评估集 & 通过标准',
    iterate: 'Prompt · Eval Set · Acceptance',
    signals: [
      { title: '指令遵从', detail: '模型未按指令执行' },
      { title: '字段抽取', detail: '关键字段遗漏 / 错误' },
      { title: '手写识别', detail: '识别错误 / 漏字' }
    ]
  },
  {
    id: 'rag',
    number: '02',
    noteTitle: '知识库要能被继续使用。',
    noteCopy: '好的知识库不是“存进去”，\n而是让答案可靠、可追溯、可复用。',
    label: 'RAG / KNOWLEDGE RELIABILITY',
    type: 'rag',
    context: {
      headingLead: '可靠回答，',
      headingAccent: '从可靠知识开始。',
      lede: '先把复杂资料整理成可维护、\n可检索、可追溯的知识，\n再让模型基于证据回答。',
      tags: []
    },
    intro: '构建可用的知识结构，验证知识能否被准确检索和引用。',
    pipeline: [
      { label: 'SOURCE', detail: 'FAQ / 文档 / 表格', icon: 'file-text' },
      { label: 'CLEAN', detail: '清洗 / 规范化', icon: 'filter' },
      { label: 'CHUNK', detail: '结构拆分 / 向量化', icon: 'grid-2x2' },
      { label: 'RETRIEVE', detail: '召回 / Top-k 重排', icon: 'search' },
      { label: 'ANSWER', detail: '生成回答 / 引用溯源', icon: 'messages-square' }
    ],
    gap: '检索不到 · 检索错 · 上下文不足',
    signals: ['资料清洗质量', 'Chunk 粒度', '召回准确性', '上下文相关性']
  },
  {
    id: 'micro-builds',
    number: '03',
    noteLabel: 'LAB NOTE / 03',
    noteTitle: '我更在意它有没有解决一个真实问题。',
    noteCopy: '',
    label: 'AI+ MICRO BUILDS',
    type: 'micro-builds',
    context: {
      headingLead: '把小摩擦，做成小工具。',
      headingAccent: 'AI+ 小工具',
      lede: '不是展示技术，\n而是把能真正减轻摩擦的想法做出来。',
      tags: ['Personal Tools', 'Micro Builds', 'Daily Use']
    },
    builds: [
      {
        number: '01',
        title: 'AI Expense Capture',
        positioning: '截图记账自动化',
        flow: '截图 → OCR → 结构化 → Notion',
        tags: ['OCR', '规则', 'LLM', 'Notion'],
        status: 'PERSONAL TOOL',
        visual: 'expense'
      },
      {
        number: '02',
        title: '语音结构化输入',
        positioning: '把口语变成可直接使用的文字',
        flow: '语音 → STT → 结构化 → 可用文本',
        tags: ['STT', 'LLM', 'Text Actions'],
        status: 'MICRO BUILD',
        visual: 'voice'
      },
      {
        number: '03',
        title: 'NotchToolbox',
        positioning: 'MacBook 刘海效率工具',
        flow: 'OCR · Clipboard · Color Picker',
        tags: ['SwiftUI', 'macOS'],
        status: 'DAILY USE',
        visual: 'notch'
      }
    ],
    moreBuilds: ['Notion × Google × Apple 日历同步', 'Notion 执行层', 'Vibe Island']
  }
]

const defaultLabContext = {
  headingLead: '让 AI 进入',
  headingAccent: '真实工作流。',
  lede: '把模型能力放进真实任务，\n观察它在哪里失效，\n并把 Bad Case 变成下一轮产品输入。',
  tags: []
}

const journeyItems = [
  {
    id: 'language',
    number: '01',
    stage: 'LANGUAGE',
    title: '语言',
    meaning: '理解表达',
    icon: 'book-open',
    blocks: [
      { icon: 'message-square-text', label: 'Context', labelZh: '场景背景', text: '语言学习让我开始关注：\n信息如何被表达、理解与传递。' },
      { icon: 'languages', label: 'Experience', labelZh: '具体经历', text: '汉语言文学本科与英语口译硕士训练，让我持续在不同语言、学科与表达方式之间切换。' },
      { icon: 'eye', label: 'Insight', labelZh: '获得洞察', text: '理解信息，不只是理解文字。\n语境、表达方式与信息结构，都会改变用户最终理解到的内容。' },
      { icon: 'sprout', label: 'Impact', labelZh: '带来的影响', text: '这让我在做产品时，更关注信息结构、表达方式与用户理解成本。' }
    ]
  },
  {
    id: 'people',
    number: '02',
    stage: 'PEOPLE',
    title: '人',
    meaning: '理解用户',
    icon: 'users-round',
    blocks: [
      { icon: 'users-round', label: 'Context', labelZh: '场景背景', text: '真实产品问题最终都与人有关。' },
      { icon: 'briefcase-business', label: 'Experience', labelZh: '具体经历', text: '从用户运营、教育业务到美妆消费分析，持续观察用户在真实任务中的选择、困难和反馈。' },
      { icon: 'eye', label: 'Insight', labelZh: '获得洞察', text: '用户不会按照“产品经理的语言”描述问题。\n真正重要的是理解行为、动机、障碍与真实任务。' },
      { icon: 'sprout', label: 'Impact', labelZh: '带来的影响', text: '让我逐渐从功能思维，转向 User Task 与 Problem Definition。' }
    ]
  },
  {
    id: 'places',
    number: '03',
    stage: 'PLACES',
    title: '场景',
    meaning: '真实世界',
    icon: 'mountain-snow',
    blocks: [
      { icon: 'globe-2', label: 'Context', labelZh: '场景背景', text: '走出课堂，进入真实世界。\n旅行与服务经历让我在多元文化与真实场景中观察人、理解需求。' },
      { icon: 'luggage', label: 'Experience', labelZh: '具体经历', text: '在旅行与服务场景中，使用本地交通、预订、问路、点餐等服务，体验不同文化下的用户旅程。' },
      { icon: 'eye', label: 'Insight', labelZh: '获得洞察', text: '不同文化背景下，人们的表达方式、信任路径与行为习惯差异很大。\n好的体验来自对场景与用户真正的理解。' },
      { icon: 'sprout', label: 'Impact', labelZh: '带来的影响', text: '培养了我从真实场景出发、共情用户、发现问题的能力，也成为我走向产品与 AI 的重要基础。' }
    ]
  },
  {
    id: 'product',
    number: '04',
    stage: 'PRODUCT',
    title: '产品',
    meaning: '定义问题',
    icon: 'panels-top-left',
    blocks: [
      { icon: 'search-check', label: 'Context', labelZh: '研究问题', text: '通过访谈、调研和业务信息，发现真正的痛点与机会。' },
      { icon: 'workflow', label: 'Experience', labelZh: '设计方案', text: '把问题拆成用户任务、业务规则与产品路径。', flow: ['Research', 'Workflow', 'Validation'] },
      { icon: 'eye', label: 'Insight', labelZh: '产品判断', text: '好的产品不是从功能开始，而是从理解问题开始。' },
      { icon: 'badge-check', label: 'Impact', labelZh: '验证价值', text: '用原型、产品实验和 Evidence，验证假设是否成立。' }
    ]
  },
  {
    id: 'ai',
    number: '05',
    stage: 'AI',
    title: 'AI',
    meaning: '工作流',
    icon: 'network',
    blocks: [
      { icon: 'sparkles', label: 'Context', labelZh: '能力背景', text: 'AI 提供了新的能力，但能力本身不是产品。' },
      { icon: 'blocks', label: 'Experience', labelZh: '实践范围', text: '模型评测、RAG、AI 工作流、人机协作与 Micro Builds。' },
      { icon: 'eye', label: 'Insight', labelZh: '产品判断', text: '技术放大能力，人决定方向。' },
      { icon: 'route', label: 'Impact', labelZh: '关注路径', text: '关注技术如何进入真实任务，并通过人工确认与 Evidence 被验证。', flow: ['真实问题', 'AI 能力', '工作流', '人工确认', 'Evidence'] }
    ]
  }
]

const nav = document.querySelector('[data-site-nav]')
const navLinks = document.querySelector('[data-nav-links]')
const menuButton = document.querySelector('[data-menu-button]')
const topRevealZone = document.querySelector('[data-top-reveal-zone]')
const navMail = document.querySelector('[data-site-nav] .nav-mail')
const sectionConfig = [
  { id: 'about', label: '关于我' },
  { id: 'work', label: '产品案例' },
  { id: 'lab', label: 'AI 实验' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: "Let's talk" }
]
const sections = sectionConfig.map(({ id }) => document.getElementById(id)).filter(Boolean)
const getHashSectionId = () => decodeURIComponent(window.location.hash.slice(1))
let pendingHashSectionId = getHashSectionId()
if (!document.getElementById(pendingHashSectionId)) pendingHashSectionId = ''
const navItems = [...document.querySelectorAll('[data-nav-link]')]
const projectButtons = [...document.querySelectorAll('[data-project-index]')]
const featuredProjectIndices = projectButtons.length ? projectButtons.map((button) => Number(button.dataset.projectIndex)) : projects.map((_, index) => index)
const caseVisual = document.querySelector('[data-case-visual]')
const caseStage = document.querySelector('[data-case-stage]')
const caseDialog = document.querySelector('[data-case-dialog]')
const dialogVisual = document.querySelector('[data-dialog-visual]')
let currentProjectIndex = 0
let currentProjectPosition = 0
let activeCase = 'trueseeking'
let activeExperiment = 'model-evaluation'
let activeJourney = 'places'
let journeyTransitionTimer = 0

const closeMobileMenu = () => {
  navLinks?.classList.remove('is-open')
  menuButton?.setAttribute('aria-expanded', 'false')
  menuButton?.setAttribute('aria-label', '打开导航')
}

const setActiveSection = (sectionId, syncHash = false) => {
  navItems.forEach((link) => {
    link.classList.toggle('is-active', link.dataset.navSection === sectionId)
  })
  navMail?.classList.toggle('is-active', sectionId === 'contact')
  if (syncHash && !pendingHashSectionId && window.location.hash !== `#${sectionId}`) {
    window.history.replaceState(null, '', `#${sectionId}`)
  }
}

const getSectionScrollOffset = (sectionId) => sectionId === 'contact' ? 0 : (nav?.offsetHeight || 66) + 24

const scrollToSection = (sectionId, updateHash = true, behavior = 'smooth') => {
  const target = document.getElementById(sectionId)
  if (!target) return false

  if (updateHash && window.location.hash !== `#${sectionId}`) {
    window.history.replaceState(null, '', `#${sectionId}`)
  }
  const targetTop = Math.max(0, window.scrollY + target.getBoundingClientRect().top - getSectionScrollOffset(sectionId))
  if (behavior === 'instant') window.scrollTo(0, targetTop)
  else window.scrollTo({ top: targetTop, behavior })
  closeMobileMenu()
  return true
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const sectionId = anchor.getAttribute('href')?.slice(1)
    if (!sectionId || !document.getElementById(sectionId)) return
    event.preventDefault()
    scrollToSection(sectionId)
  })
})

const resolveHash = () => {
  const sectionId = pendingHashSectionId || getHashSectionId()
  if (!sectionId || !document.getElementById(sectionId)) return
  window.requestAnimationFrame(() => {
    scrollToSection(sectionId, false, 'instant')
    window.requestAnimationFrame(() => {
      if (pendingHashSectionId === sectionId) pendingHashSectionId = ''
    })
  })
}

const primeInitialHashNavigation = () => {
  if (!pendingHashSectionId) return
  scrollToSection(pendingHashSectionId, false, 'instant')
}

const setText = (selector, value) => {
  const element = document.querySelector(selector)
  if (element) element.textContent = value
}

const refreshIcons = () => {
  if (window.lucide) window.lucide.createIcons()
}

const thinkingIcon = (visual) => ({
  claim: 'list-filter',
  evidence: 'search',
  risk: 'triangle-alert',
  rewrite: 'pen-line',
  document: 'file-text',
  extract: 'scan-text',
  validate: 'shield-check',
  data: 'database',
  review: 'circle-check',
  decision: 'circle-dot',
  word: 'type',
  scenario: 'map-pin',
  task: 'list-todo',
  use: 'mouse-pointer-click',
  feedback: 'message-circle',
  practice: 'refresh-cw',
  source: 'files',
  clean: 'filter',
  structure: 'network',
  chunk: 'layers-3',
  retrieve: 'search',
  answer: 'messages-square'
}[visual] || 'circle')

const renderThinking = (project) => {
  const container = document.querySelector('[data-case-thinking]')
  if (!container) return
  const items = project?.thinking || []
  container.innerHTML = `
    <div class="thinking-header"><span>PRODUCT THINKING</span></div>
    <div class="thinking-flow ${project?.visualClass || ''}">
      ${items.map((item, index) => `
        <div class="thinking-node" role="group" aria-label="${item.title} ${item.keyword}">
          <span class="thinking-number">${String(index + 1).padStart(2, '0')}</span>
          <i class="thinking-node-icon" data-lucide="${thinkingIcon(item.visual)}" aria-hidden="true"></i>
          <strong>${item.title}</strong>
          <small>${item.keyword}</small>
        </div>
      `).join('')}
    </div>
    <div class="thinking-decision"><span>PRODUCT DECISION</span><strong>${project?.decision || ''}</strong></div>`
}

const renderProject = (index) => {
  currentProjectPosition = (index + featuredProjectIndices.length) % featuredProjectIndices.length
  currentProjectIndex = featuredProjectIndices[currentProjectPosition]
  const project = projects[currentProjectIndex]
  activeCase = project.id
  projectButtons.forEach((button) => {
    const active = Number(button.dataset.projectIndex) === currentProjectIndex
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-pressed', String(active))
  })
  setText('[data-project-count]', String(currentProjectPosition + 1).padStart(2, '0'))
  setText('[data-project-total]', String(featuredProjectIndices.length).padStart(2, '0'))
  setText('[data-case-category]', project.category)
  setText('[data-case-year]', project.year)
  setText('[data-case-title]', project.title)
  setText('[data-case-subtitle]', project.subtitle)
  setText('[data-case-summary]', project.value || project.summary)
  setText('[data-case-role]', project.role)
  setText('[data-case-result-label]', project.resultLabel || 'EVIDENCE')
  setText('[data-case-result]', project.result)
  setText('[data-case-footer-label]', project.footerLabel || project.resultLabel || 'OUTCOME')
  setText('[data-case-footer-value]', project.footerValue || project.result)
  renderThinking(project)
  if (caseVisual) {
    caseVisual.className = `case-visual ${project.visualClass}`
    caseVisual.innerHTML = project.visual
  }
  caseStage?.classList.remove('is-changing')
  window.requestAnimationFrame(() => caseStage?.classList.add('is-changing'))
  refreshIcons()
}

const labIcon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`

const labFlowNode = ({ label, detail, icon }, className = '', number = '') => `
  <div class="lab-flow-node ${className}">
    ${number ? `<b class="lab-flow-number">${number}</b>` : ''}
    <div class="lab-flow-icon">${labIcon(icon)}</div>
    <div class="lab-flow-copy"><span>${label}</span><strong>${detail}</strong></div>
  </div>`

const labSignalList = (signals = []) => signals.map((signal) => {
  const title = typeof signal === 'string' ? signal : signal.title
  const detail = typeof signal === 'string' ? '' : signal.detail
  return `<div class="lab-signal-item"><i></i><div><strong>${title}</strong>${detail ? `<span>${detail}</span>` : ''}</div></div>`
}).join('')

const renderEvaluationDetail = (item) => `
  <div class="lab-detail-grid lab-detail-evaluation">
    <aside class="lab-detail-intro">
      <span class="lab-detail-number">${item.number}</span>
      <small>${item.label}</small>
      <p>${item.intro}</p>
      <span class="lab-detail-link">VIEW DETAILS <b>↗</b></span>
    </aside>
    <div class="lab-detail-flow lab-evaluation-flow">
      ${labFlowNode({ label: 'REAL TASK', detail: item.task, icon: 'clipboard-list' })}
      <span class="lab-flow-arrow" aria-hidden="true">↓</span>
      ${labFlowNode({ label: 'MODEL TEST', detail: item.model, icon: 'box' })}
      <span class="lab-flow-arrow" aria-hidden="true">↓</span>
      <div class="lab-bad-case"><span>BAD CASE</span><strong>${item.badCase}</strong></div>
      <span class="lab-flow-arrow" aria-hidden="true">↓</span>
      ${labFlowNode({ label: 'EVALUATION SET', detail: item.evaluation, icon: 'table-2' })}
      <span class="lab-flow-arrow" aria-hidden="true">↓</span>
      ${labFlowNode({ label: 'NEXT ITERATION', detail: item.iterate, icon: 'refresh-cw' })}
    </div>
    <aside class="lab-signal-column"><small>FAILURE MODES</small>${labSignalList(item.signals)}</aside>
  </div>`

const renderRagDetail = (item) => `
  <div class="lab-detail-grid lab-detail-rag">
    <aside class="lab-detail-intro">
      <span class="lab-detail-number">${item.number}</span>
      <small>${item.label}</small>
      <p>${item.intro}</p>
      <span class="lab-detail-link">VIEW DETAILS <b>↗</b></span>
    </aside>
    <div class="lab-rag-center">
      <div class="rag-pipeline-track">
        ${item.pipeline.map((step, index) => `${labFlowNode(step, 'rag-pipeline-node', String(index + 1).padStart(2, '0'))}${index < item.pipeline.length - 1 ? '<span class="rag-pipeline-arrow" aria-hidden="true">→</span>' : ''}`).join('')}
      </div>
      <div class="rag-gap"><span>RETRIEVAL GAP</span><strong>${item.gap}</strong></div>
    </div>
    <aside class="lab-signal-column"><small>PIPELINE SIGNALS</small>${labSignalList(item.signals)}</aside>
  </div>`

const renderWorkflowDetail = (item) => `
  <div class="lab-detail-grid lab-detail-workflow">
    <aside class="lab-detail-intro">
      <span class="lab-detail-number">${item.number}</span>
      <small>${item.label}</small>
      <p>${item.intro}</p>
      <span class="lab-detail-link">VIEW DETAILS <b>↗</b></span>
    </aside>
    <div class="lab-workflow-center">
      <div class="workflow-row workflow-row-top">
        ${item.workflow.slice(0, 4).map((step, index) => `${labFlowNode(step, 'workflow-node')}${index < 3 ? '<span class="workflow-arrow" aria-hidden="true">→</span>' : ''}`).join('')}
      </div>
      <span class="workflow-down-arrow" aria-hidden="true">↓</span>
      <div class="workflow-row workflow-row-bottom">
        ${labFlowNode(item.workflow[4], 'workflow-node')}
        <span class="workflow-arrow" aria-hidden="true">→</span>
        ${labFlowNode(item.workflow[5], 'workflow-node')}
      </div>
      <span class="workflow-return-line" aria-hidden="true"></span>
    </div>
    <aside class="lab-signal-column"><small>WORKFLOW SIGNALS</small>${labSignalList(item.signals)}</aside>
  </div>`

const renderMicroBuildVisual = (visual) => {
  if (visual === 'expense') return `
    <div class="micro-build-visual micro-build-visual-expense" aria-hidden="true">
      <div class="expense-receipt"><span></span><span></span><span></span><b></b><span></span><span></span></div>
      <div class="expense-camera">${labIcon('camera')}</div>
    </div>`
  if (visual === 'voice') return `
    <div class="micro-build-visual micro-build-visual-voice" aria-hidden="true">
      <div class="voice-wave voice-wave-left"><i></i><i></i><i></i><i></i></div>
      <div class="voice-mic">${labIcon('mic')}</div>
      <div class="voice-wave voice-wave-right"><i></i><i></i><i></i><i></i></div>
    </div>`
  return `
    <div class="micro-build-visual micro-build-visual-notch" aria-hidden="true">
      <div class="notch-tool-panel"><b></b><span></span><span></span><span></span><i></i><i></i></div>
      <div class="notch-cursor">${labIcon('mouse-pointer-2')}</div>
    </div>`
}

const renderMicroBuildDetail = (item) => `
  <div class="lab-micro-builds">
    <div class="micro-build-grid">
      ${item.builds.map((build) => `
        <article class="micro-build-card" aria-label="${build.title}">
          ${renderMicroBuildVisual(build.visual)}
          <div class="micro-build-card-copy">
            <span class="micro-build-number">${build.number}</span>
            <h3>${build.title}</h3>
            <p class="micro-build-positioning">${build.positioning}</p>
            <p class="micro-build-flow">${build.flow}</p>
            <div class="micro-build-tags">${build.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
            <span class="micro-build-status"><i></i>${build.status}</span>
          </div>
        </article>`).join('')}
    </div>
    <div class="micro-build-shelf" aria-label="更多 AI+ 小工具">
      <span class="micro-build-shelf-label">MORE BUILDS</span>
      <div class="micro-build-shelf-items">${item.moreBuilds.map((build) => `<span>${build}</span>`).join('<i aria-hidden="true"></i>')}</div>
      <span class="micro-build-shelf-arrow" aria-hidden="true">→</span>
    </div>
  </div>`

const renderLabContext = (item) => {
  const context = item.context || defaultLabContext
  const copy = document.querySelector('[data-lab-context-copy]')
  const note = document.querySelector('[data-lab-note]')
  const tags = document.querySelector('[data-lab-context-tags]')
  setText('[data-lab-heading-lead]', context.headingLead)
  setText('[data-lab-heading-accent]', context.headingAccent)
  setText('[data-lab-lede]', context.lede)
  setText('[data-lab-note-label]', item.noteLabel || `LAB NOTE / ${item.number}`)
  copy?.classList.toggle('is-micro-builds', item.type === 'micro-builds')
  copy?.classList.toggle('is-evaluation', item.id === 'model-evaluation')
  copy?.classList.toggle('is-rag', item.id === 'rag')
  note?.classList.toggle('is-micro-builds', item.type === 'micro-builds')
  if (!tags) return
  tags.hidden = !context.tags?.length
  tags.innerHTML = context.tags?.map((tag) => `<span>${tag}</span>`).join('') || ''
}

const renderLabBody = (item) => {
  if (item.type === 'micro-builds') return renderMicroBuildDetail(item)
  if (item.type === 'rag') return renderRagDetail(item)
  if (item.type === 'workflow') return renderWorkflowDetail(item)
  return renderEvaluationDetail(item)
}

const renderLab = (requestedExperiment = activeExperiment) => {
  const requestedIndex = typeof requestedExperiment === 'string'
    ? labItems.findIndex((item) => item.id === requestedExperiment)
    : Number(requestedExperiment)
  const activeIndex = requestedIndex >= 0 && requestedIndex < labItems.length ? requestedIndex : 0
  const item = labItems[activeIndex]
  activeExperiment = item.id
  const panel = document.querySelector('[data-lab-device]')
  const body = document.querySelector('[data-lab-device-body]')

  document.querySelectorAll('[data-lab-index]').forEach((button) => {
    const active = button.dataset.labId === activeExperiment
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-selected', String(active))
    button.setAttribute('tabindex', active ? '0' : '-1')
  })
  panel?.classList.toggle('is-micro-builds', item.type === 'micro-builds')
  panel?.setAttribute('aria-labelledby', `lab-tab-${item.id}`)
  setText('[data-lab-experiment-label]', `EXPERIMENT / ${item.number}`)
  setText('[data-lab-status]', item.label)
  setText('[data-lab-footer]', item.label)
  renderLabContext(item)
  setText('[data-lab-title]', item.noteTitle)
  setText('[data-lab-copy]', item.noteCopy)
  if (!body) return
  body.classList.remove('is-switching')
  body.innerHTML = renderLabBody(item)
  window.requestAnimationFrame(() => body.classList.add('is-switching'))
  refreshIcons()
}

const renderJourneyFlow = (flow = []) => flow.length ? `
  <div class="journey-detail-flow" aria-label="${flow.join(' 到 ')}">
    ${flow.map((step, index) => `<span>${step}</span>${index < flow.length - 1 ? '<i aria-hidden="true">→</i>' : ''}`).join('')}
  </div>` : ''

const renderJourneyDetail = (item) => `
  <div class="journey-detail-content">
    <header class="journey-detail-header">
      <div>
        <span>${item.number} / ${item.stage}</span>
        <h3><strong>${item.title}</strong><i>·</i><em>${item.meaning}</em></h3>
      </div>
      <span class="journey-detail-header-icon">${labIcon(item.icon)}</span>
    </header>
    <div class="journey-detail-layout">
      <figure class="journey-detail-visual">
        <span class="journey-detail-blob" aria-hidden="true"></span>
        <img src="journey/claudia-journey.png" alt="Claudia Zhang 卡通人物插画" />
        <span class="journey-detail-visual-mark" aria-hidden="true">${labIcon(item.icon)}</span>
      </figure>
      <div class="journey-detail-grid">
        ${item.blocks.map((block) => `
          <article class="journey-detail-block">
            <span class="journey-detail-block-icon">${labIcon(block.icon)}</span>
            <div class="journey-detail-block-copy">
              <header><strong>${block.label}</strong><span>${block.labelZh}</span></header>
              <p>${block.text}</p>
              ${renderJourneyFlow(block.flow)}
            </div>
          </article>`).join('')}
      </div>
    </div>
  </div>`

const renderJourney = (requestedJourney = activeJourney, animate = true) => {
  const requestedIndex = typeof requestedJourney === 'string'
    ? journeyItems.findIndex((item) => item.id === requestedJourney)
    : Number(requestedJourney)
  const activeIndex = requestedIndex >= 0 && requestedIndex < journeyItems.length ? requestedIndex : 2
  const item = journeyItems[activeIndex]
  const panel = document.querySelector('#journey-detail-panel')
  const body = document.querySelector('[data-journey-detail-body]')
  activeJourney = item.id

  document.querySelectorAll('[data-journey-index]').forEach((button) => {
    const active = button.dataset.journeyId === activeJourney
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-selected', String(active))
    button.setAttribute('tabindex', active ? '0' : '-1')
  })
  if (!panel || !body) return
  panel.className = `journey-detail journey-detail-${item.id}`
  panel.setAttribute('aria-labelledby', `journey-tab-${item.id}`)

  const commit = () => {
    body.innerHTML = renderJourneyDetail(item)
    body.classList.remove('is-leaving')
    body.classList.add('is-entering')
    refreshIcons()
    window.setTimeout(() => body.classList.remove('is-entering'), 280)
  }

  window.clearTimeout(journeyTransitionTimer)
  if (animate && body.innerHTML.trim()) {
    body.classList.remove('is-entering')
    body.classList.add('is-leaving')
    journeyTransitionTimer = window.setTimeout(commit, 135)
  } else {
    commit()
  }
}

const openDialog = () => {
  const project = projects[currentProjectIndex]
  if (!caseDialog) return
  dialogVisual.className = `dialog-visual ${project.visualClass}`
  dialogVisual.innerHTML = project.visual
  setText('[data-dialog-category]', project.category)
  setText('[data-dialog-title]', project.title)
  setText('[data-dialog-lede]', project.summary)
  setText('[data-dialog-role]', project.role)
  setText('[data-dialog-year]', project.year)
  setText('[data-dialog-result]', project.result)
  setText('[data-dialog-friction]', project.friction)
  setText('[data-dialog-approach]', project.approach)
  setText('[data-dialog-solution]', project.solution)
  const dialogLink = document.querySelector('[data-dialog-link]')
  if (dialogLink) {
    dialogLink.href = project.link || 'mailto:claudia_xt@163.com'
    dialogLink.target = project.link ? '_blank' : ''
    dialogLink.rel = project.link ? 'noreferrer' : ''
  }
  if (typeof caseDialog.showModal === 'function') caseDialog.showModal()
  else caseDialog.setAttribute('open', '')
  refreshIcons()
}

const closeDialog = () => {
  if (!caseDialog) return
  if (typeof caseDialog.close === 'function') caseDialog.close()
  else caseDialog.removeAttribute('open')
}

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const position = featuredProjectIndices.indexOf(Number(button.dataset.projectIndex))
    renderProject(position < 0 ? 0 : position)
  })
})
document.querySelector('[data-project-prev]')?.addEventListener('click', () => renderProject(currentProjectPosition - 1))
document.querySelector('[data-project-next]')?.addEventListener('click', () => renderProject(currentProjectPosition + 1))
document.querySelector('[data-open-case]')?.addEventListener('click', () => {
  const project = projects[currentProjectIndex]
  if (project?.detailPath) {
    window.location.href = project.detailPath
    return
  }
  openDialog()
})
document.querySelector('[data-close-dialog]')?.addEventListener('click', closeDialog)
caseDialog?.addEventListener('click', (event) => {
  if (event.target === caseDialog) closeDialog()
})

const labTabs = [...document.querySelectorAll('[data-lab-index]')]
labTabs.forEach((button, index) => {
  button.addEventListener('click', () => renderLab(button.dataset.labId))
  button.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? labTabs.length - 1 : (index + direction + labTabs.length) % labTabs.length
    const nextTab = labTabs[nextIndex]
    renderLab(nextTab.dataset.labId)
    nextTab.focus({ preventScroll: true })
  })
})

const journeyTabs = [...document.querySelectorAll('[data-journey-index]')]
journeyTabs.forEach((button, index) => {
  button.addEventListener('click', () => renderJourney(button.dataset.journeyId))
  button.addEventListener('keydown', (event) => {
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? journeyTabs.length - 1 : (index + direction + journeyTabs.length) % journeyTabs.length
    const nextTab = journeyTabs[nextIndex]
    renderJourney(nextTab.dataset.journeyId)
    nextTab.focus({ preventScroll: true })
  })
})

menuButton?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('is-open')
  menuButton.setAttribute('aria-expanded', String(Boolean(open)))
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航')
})
navLinks?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMobileMenu()
  }
})

const visibleSectionIds = new Set()
primeInitialHashNavigation()
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      visibleSectionIds.add(entry.target.id)
      entry.target.classList.add('is-visible')
    } else {
      visibleSectionIds.delete(entry.target.id)
    }
  })
  const candidates = sections.filter((section) => visibleSectionIds.has(section.id))
  if (!candidates.length) return
  const anchorY = window.innerHeight * .25
  const activeSection = candidates.reduce((closest, section) => {
    const closestDistance = Math.abs(closest.getBoundingClientRect().top - anchorY)
    const sectionDistance = Math.abs(section.getBoundingClientRect().top - anchorY)
    return sectionDistance < closestDistance ? section : closest
  })
  setActiveSection(activeSection.id, true)
}, { rootMargin: '-25% 0px -55% 0px', threshold: 0 })
sections.forEach((section) => sectionObserver.observe(section))

window.addEventListener('hashchange', () => {
  const sectionId = getHashSectionId()
  pendingHashSectionId = document.getElementById(sectionId) ? sectionId : ''
  resolveHash()
})
if (document.readyState === 'complete') resolveHash()
else window.addEventListener('load', resolveHash, { once: true })

let lastScrollY = window.scrollY
const compactLayout = window.matchMedia('(max-width: 820px)').matches
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !compactLayout

const showNavigation = () => nav?.classList.remove('is-hidden')
const hideNavigation = () => {
  if (window.scrollY > 20) nav?.classList.add('is-hidden')
}

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY
  const delta = currentScrollY - lastScrollY
  nav?.classList.toggle('is-scrolled', currentScrollY > 20)

  if (currentScrollY <= 20) showNavigation()
  else if (finePointer || delta > 4) hideNavigation()
  else if (delta < -4) showNavigation()

  lastScrollY = currentScrollY
}, { passive: true })

if (finePointer) {
  topRevealZone?.addEventListener('pointerenter', showNavigation)
  topRevealZone?.addEventListener('pointerleave', (event) => {
    if (event.clientY > 56 && !nav?.matches(':hover')) hideNavigation()
  })
  nav?.addEventListener('pointerenter', showNavigation)
  document.addEventListener('pointermove', (event) => {
    if (event.clientY <= 56) showNavigation()
    else if (!nav?.matches(':hover')) hideNavigation()
  }, { passive: true })
}

const copyButton = document.querySelector('[data-copy-email]')
const copyFeedback = document.querySelector('[data-copy-feedback]')
copyButton?.addEventListener('click', async () => {
  const email = 'claudia_xt@163.com'
  try {
    await navigator.clipboard.writeText(email)
    if (copyFeedback) copyFeedback.textContent = '邮箱已复制：' + email
  } catch {
    if (copyFeedback) copyFeedback.textContent = email
  }
})

renderProject(0)
renderLab(0)
renderJourney('places', false)
refreshIcons()
