const clone = (value) => JSON.parse(JSON.stringify(value));

const seed = {
  workflows: [
    {
      id: "wf-invoice",
      name: "Invoice Processing",
      category: "Finance",
      status: "active",
      trigger: "Schedule",
      schedule: "Every 30 minutes",
      success: 99.1,
      runs: 24870,
      lastRun: "2 min ago",
      owner: "Finance Ops",
      description: "Extracts invoice data, validates fields, posts into ERP staging, and records an audit trail.",
    },
    {
      id: "wf-onboarding",
      name: "Employee Onboarding",
      category: "HR",
      status: "active",
      trigger: "Webhook",
      schedule: "On employee create",
      success: 100,
      runs: 1842,
      lastRun: "14 min ago",
      owner: "People Systems",
      description: "Creates accounts, assigns equipment tasks, triggers approvals, and sends welcome workflows.",
    },
    {
      id: "wf-sales",
      name: "Sales Pipeline Refresh",
      category: "Operations",
      status: "paused",
      trigger: "Schedule",
      schedule: "Daily at 07:00",
      success: 97.4,
      runs: 875,
      lastRun: "Yesterday",
      owner: "Sales Operations",
      description: "Pulls CRM changes, refreshes Power BI datasets, and publishes leadership-ready pipeline metrics.",
    },
    {
      id: "wf-security",
      name: "Security Audit Sweep",
      category: "Security",
      status: "active",
      trigger: "Schedule",
      schedule: "Hourly",
      success: 98.7,
      runs: 6320,
      lastRun: "8 min ago",
      owner: "Platform Security",
      description: "Checks admin posture, connector status, and policy exceptions across production workspaces.",
    },
    {
      id: "wf-briefing",
      name: "Executive Briefing Pack",
      category: "Leadership",
      status: "draft",
      trigger: "Manual",
      schedule: "On demand",
      success: 100,
      runs: 42,
      lastRun: "3 days ago",
      owner: "Strategy Office",
      description: "Compiles report highlights, AI summaries, and connector performance into a ready-to-review pack.",
    },
    {
      id: "wf-escalation",
      name: "Customer Escalation Routing",
      category: "Operations",
      status: "active",
      trigger: "Webhook",
      schedule: "On case priority update",
      success: 96.8,
      runs: 5264,
      lastRun: "6 min ago",
      owner: "Customer Success",
      description: "Routes high-priority accounts to the right owner and logs follow-up obligations automatically.",
    },
  ],
  reports: [
    {
      id: "rp-ops",
      name: "Operations Dashboard",
      type: "Live",
      status: "active",
      updated: "11 min ago",
      frequency: "Live refresh",
      source: "Workflow and integration state",
      owner: "Operations Leadership",
      description: "Tracks live workflow health, throughput, backlog, and current exceptions in a single dashboard.",
    },
    {
      id: "rp-finance",
      name: "Monthly Finance Pulse",
      type: "Automated",
      status: "active",
      updated: "Today 08:15",
      frequency: "Monthly",
      source: "ERP and billing data",
      owner: "Finance Team",
      description: "Publishes executive metrics, invoice aging, payment completion, and processing variance.",
    },
    {
      id: "rp-people",
      name: "People Operations Snapshot",
      type: "Automated",
      status: "paused",
      updated: "3 days ago",
      frequency: "Weekly",
      source: "HRIS and onboarding flows",
      owner: "HR Operations",
      description: "Summarizes headcount movement, onboarding status, and department-level activation signals.",
    },
    {
      id: "rp-security",
      name: "Security Readiness Brief",
      type: "On-Demand",
      status: "active",
      updated: "Today 09:02",
      frequency: "On-Demand",
      source: "Access, auth, and audit services",
      owner: "Security Office",
      description: "Provides a concise view of 2FA coverage, admin controls, connector posture, and open alerts.",
    },
    {
      id: "rp-portfolio",
      name: "Integration Portfolio Review",
      type: "Live",
      status: "active",
      updated: "4 min ago",
      frequency: "Live refresh",
      source: "Connector runtime",
      owner: "Platform Team",
      description: "Monitors connected systems, credential posture, sync freshness, and readiness of the connector library.",
    },
    {
      id: "rp-ai",
      name: "AI Utilization Summary",
      type: "Automated",
      status: "active",
      updated: "Today 07:30",
      frequency: "Daily",
      source: "AI task queue",
      owner: "AI Operations",
      description: "Measures assistant usage, task runtime, accuracy bands, and review volume for AI workflows.",
    },
  ],
  aiTasks: [
    {
      id: "ai-classify",
      name: "Document Classification",
      model: "AutoFlow-Classify-v2",
      status: "active",
      scope: "Knowledge base and uploaded files",
      updated: "3 min ago",
      accuracy: "96.4%",
      description: "Classifies incoming documents and routes them into the correct operational channels.",
    },
    {
      id: "ai-extract",
      name: "Invoice Extraction",
      model: "AutoFlow-Extract-v3",
      status: "active",
      scope: "Finance workflow inputs",
      updated: "6 min ago",
      accuracy: "98.1%",
      description: "Extracts vendor, amount, line item, and due date fields for downstream processing.",
    },
    {
      id: "ai-intent",
      name: "Intent Detection",
      model: "AutoFlow-NLP-v1",
      status: "paused",
      scope: "Support and ops requests",
      updated: "Yesterday",
      accuracy: "94.8%",
      description: "Tags requests, predicts urgency, and recommends escalation or reroute actions.",
    },
    {
      id: "ai-summary",
      name: "Board Summary Generator",
      model: "AutoFlow-Summary-v2",
      status: "active",
      scope: "Executive reporting",
      updated: "12 min ago",
      accuracy: "Human review",
      description: "Drafts concise narrative summaries from multiple reports and workflow outcomes.",
    },
    {
      id: "ai-risk",
      name: "Risk Flag Assistant",
      model: "AutoFlow-Risk-v1",
      status: "queued",
      scope: "Cross-workflow review",
      updated: "Queued",
      accuracy: "Confidence ranked",
      description: "Surfaces anomalies, policy drift, and areas needing operational review.",
    },
  ],
  integrations: [
    {
      id: "int-m365",
      name: "Microsoft 365",
      icon: "🪟",
      status: "connected",
      type: "Productivity",
      auth: "OAuth 2.0",
      endpoint: "graph.microsoft.com",
      frequency: "Every 15 minutes",
      lastSync: "7 min ago",
      records: 48210,
      credentialsStored: true,
      featured: false,
      description: "Teams, Outlook, and SharePoint synchronization for operational notifications and files.",
    },
    {
      id: "int-powerbi",
      name: "Power BI",
      icon: "📈",
      status: "connected",
      type: "Analytics",
      auth: "OAuth 2.0",
      endpoint: "api.powerbi.com",
      frequency: "Hourly",
      lastSync: "4 min ago",
      records: 21904,
      credentialsStored: true,
      featured: true,
      description: "Refreshes datasets, triggers workspace updates, and supports leadership reporting packs.",
    },
    {
      id: "int-azure",
      name: "Azure",
      icon: "☁️",
      status: "connected",
      type: "Cloud",
      auth: "Service Principal",
      endpoint: "management.azure.com",
      frequency: "Every 30 minutes",
      lastSync: "10 min ago",
      records: 8912,
      credentialsStored: true,
      featured: true,
      description: "Supports cloud operations, secrets checks, and infrastructure monitoring workflows.",
    },
    {
      id: "int-servicenow",
      name: "ServiceNow",
      icon: "🎫",
      status: "warning",
      type: "ITSM",
      auth: "API Token",
      endpoint: "company.service-now.com",
      frequency: "Every 20 minutes",
      lastSync: "54 min ago",
      records: 6314,
      credentialsStored: true,
      featured: true,
      lastError: "Last sync completed outside the expected window.",
      description: "Automates ticket creation, change handling, and internal service requests.",
    },
    {
      id: "int-jira",
      name: "Jira",
      icon: "🎯",
      status: "connected",
      type: "Project Management",
      auth: "OAuth 2.0",
      endpoint: "company.atlassian.net",
      frequency: "Every hour",
      lastSync: "18 min ago",
      records: 11822,
      credentialsStored: true,
      featured: true,
      description: "Synchronizes issues, sprint status, and escalation signals with delivery workflows.",
    },
    {
      id: "int-hubspot",
      name: "HubSpot",
      icon: "🟧",
      status: "disconnected",
      type: "CRM",
      auth: "OAuth 2.0",
      endpoint: "api.hubapi.com",
      frequency: "Daily",
      lastSync: "Not connected",
      records: 0,
      credentialsStored: false,
      featured: true,
      description: "Connects contact, company, and deal data into sales automation and reporting layers.",
    },
  ],
  connectorLibrary: [
    { id: "lib-google", icon: "📧", name: "Google Workspace", type: "Productivity", authType: "Service Account", description: "Automate Gmail, Drive, Calendar, and user lifecycle tasks for distributed teams." },
    { id: "lib-slack", icon: "💬", name: "Slack", type: "Communication", authType: "OAuth 2.0", description: "Send workflow notifications, alerts, and approvals to the right teams in real time." },
    { id: "lib-salesforce", icon: "🔵", name: "Salesforce", type: "CRM", authType: "OAuth 2.0", description: "Synchronise accounts, opportunities, and customer lifecycle events with downstream processes." },
    { id: "lib-workday", icon: "👥", name: "Workday", type: "HCM", authType: "API Token", description: "Trigger HR and people operations flows from new hires, exits, and organisational changes." },
    { id: "lib-sap", icon: "🏭", name: "SAP ERP", type: "ERP", authType: "API Token", description: "Move finance, procurement, and operational transactions between SAP and external systems." },
    { id: "lib-powerautomate", icon: "⚡", name: "Power Automate", type: "Automation", authType: "OAuth 2.0", description: "Trigger or orchestrate flows between AutoFlow and Microsoft’s automation platform." },
  ],
  activity: [
    {
      id: "act-1",
      title: "Workflow completed",
      detail: "Invoice Processing posted 12 records into ERP staging without exceptions.",
      time: "2 min ago",
      tone: "active",
    },
    {
      id: "act-2",
      title: "Integration synced",
      detail: "Power BI dataset refresh completed after the sales pipeline workflow finished.",
      time: "8 min ago",
      tone: "connected",
    },
    {
      id: "act-3",
      title: "Admin control enforced",
      detail: "Access management remained protected because 2FA is required for admin-level actions.",
      time: "21 min ago",
      tone: "active",
    },
    {
      id: "act-4",
      title: "Connector warning detected",
      detail: "ServiceNow sync window is stale and should be re-synced before the next reporting cycle.",
      time: "54 min ago",
      tone: "warning",
    },
  ],
  notifications: [
    {
      id: "nf-1",
      title: "Workflow completed",
      desc: "Invoice Processing completed a clean batch run.",
      detail: "Invoice Processing extracted, validated, and posted a new finance batch with full audit logging.",
      time: "2 min ago",
      read: false,
    },
    {
      id: "nf-2",
      title: "Connector needs attention",
      desc: "ServiceNow sync is older than the expected interval.",
      detail: "The ServiceNow connector is still reachable but has not synced within its expected window. Open Integrations to re-sync or review credentials.",
      time: "54 min ago",
      read: false,
    },
    {
      id: "nf-3",
      title: "Report ready",
      desc: "Security Readiness Brief is available for review.",
      detail: "The on-demand Security Readiness Brief has been regenerated using current access, auth, and connector posture data.",
      time: "1 hr ago",
      read: true,
    },
  ],
  aiMessages: [
    {
      role: "assistant",
      text: "Hello. I can help you inspect workflow health, report coverage, AI task status, integration readiness, and admin access controls across the platform.",
    },
  ],
};

const settingsTabs = [
  { id: "general", label: "General", note: "Environment and deployment" },
  { id: "appearance", label: "Appearance", note: "Theme and presentation" },
  { id: "notifications", label: "Notifications", note: "Alerts and routing" },
  { id: "security", label: "Security", note: "2FA, rate limits, hardening" },
  { id: "api", label: "API Keys", note: "Secrets and integration keys" },
  { id: "access", label: "Access", note: "Roles and admin protection" },
  { id: "audit", label: "Audit Log", note: "Tracked changes and events" },
];

const aiPromptChips = [
  "Summarise the current workflow health",
  "Which integrations are ready to connect?",
  "How many reports are live right now?",
  "What can admins manage in the platform?",
  "Create a new document analysis task",
];

const state = {
  activeView: "dashboard",
  settingsTab: "security",
  globalSearch: "",
  workflowSearch: "",
  workflowStatus: "all",
  workflowCategory: "all",
  reportSearch: "",
  reportStatus: "all",
  reportType: "all",
  integrationSearch: "",
  integrationStatus: "all",
  notificationsOpen: false,
  workflows: clone(seed.workflows),
  reports: clone(seed.reports),
  aiTasks: clone(seed.aiTasks),
  integrations: clone(seed.integrations),
  connectorLibrary: clone(seed.connectorLibrary),
  activity: clone(seed.activity),
  notifications: clone(seed.notifications),
  aiMessages: clone(seed.aiMessages),
};

const elements = {
  appShell: document.getElementById("app-shell"),
  globalSearch: document.getElementById("global-search"),
  workflowSearch: document.getElementById("workflow-search"),
  workflowStatusFilter: document.getElementById("workflow-status-filter"),
  workflowCategoryFilter: document.getElementById("workflow-category-filter"),
  reportSearch: document.getElementById("report-search"),
  integrationSearch: document.getElementById("integration-search"),
  dashboardStats: document.getElementById("dashboard-stats"),
  dashboardWorkflows: document.getElementById("dashboard-workflows"),
  activityFeed: document.getElementById("activity-feed"),
  readinessList: document.getElementById("readiness-list"),
  workspaceSnapshot: document.getElementById("workspace-snapshot"),
  workflowGrid: document.getElementById("workflow-grid"),
  reportStats: document.getElementById("report-stats"),
  reportGrid: document.getElementById("report-grid"),
  aiMessages: document.getElementById("ai-messages"),
  aiChips: document.getElementById("ai-chips"),
  aiInput: document.getElementById("ai-input"),
  aiTaskGrid: document.getElementById("ai-task-grid"),
  integrationStats: document.getElementById("integration-stats"),
  integrationGrid: document.getElementById("integration-grid"),
  connectorLibrary: document.getElementById("connector-library"),
  settingsTabs: document.getElementById("settings-tabs"),
  settingsContent: document.getElementById("settings-content"),
  notificationCount: document.getElementById("notification-count"),
  notificationPanel: document.getElementById("notification-panel"),
  modal: document.getElementById("detail-modal"),
  modalKicker: document.getElementById("modal-kicker"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  toastStack: document.getElementById("toast-stack"),
};

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function statusTone(status) {
  if (status === "active" || status === "connected" || status === "queued-ok") return "success";
  if (status === "paused" || status === "warning" || status === "queued") return "warning";
  if (status === "disconnected") return "danger";
  return "neutral";
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function matchesSearch(values, query) {
  if (!query.trim()) return true;
  const needle = normalize(query);
  return values.some((value) => normalize(value).includes(needle));
}

function renderBadge(label, tone) {
  return `<span class="badge badge-${tone}">${label}</span>`;
}

function setView(view) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `${view}-view`);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });

  document.querySelectorAll(".footer-link").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });

  state.notificationsOpen = false;
  renderNotifications();
}

function openModal(kicker, title, content) {
  elements.modalKicker.textContent = kicker;
  elements.modalTitle.textContent = title;
  elements.modalBody.innerHTML = content;
  elements.modal.classList.remove("hidden");
  elements.modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  elements.modal.classList.add("hidden");
  elements.modal.setAttribute("aria-hidden", "true");
}

function showToast(message, tone = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  elements.toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function prependActivity(title, detail, tone = "active") {
  state.activity.unshift({
    id: makeId("act"),
    title,
    detail,
    time: "Just now",
    tone,
  });
  state.activity = state.activity.slice(0, 8);
}

function renderNotifications() {
  const unread = state.notifications.filter((item) => !item.read).length;
  elements.notificationCount.textContent = unread;
  elements.notificationCount.classList.toggle("visible", unread > 0);
  elements.notificationPanel.classList.toggle("hidden", !state.notificationsOpen);

  elements.notificationPanel.innerHTML = state.notifications
    .map(
      (item) => `
        <article class="notification-item" data-notification-id="${item.id}">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
          <span>${item.time}${item.read ? " · Read" : " · New"}</span>
        </article>
      `,
    )
    .join("");
}

function renderDashboardStats() {
  const activeWorkflows = state.workflows.filter((item) => item.status === "active").length;
  const connectedIntegrations = state.integrations.filter((item) => item.status === "connected").length;
  const liveReports = state.reports.filter((item) => item.type === "Live").length;
  const activeTasks = state.aiTasks.filter((item) => item.status === "active").length;

  const stats = [
    {
      label: "Active Workflows",
      value: activeWorkflows,
      note: `${state.workflows.length} total configured`,
    },
    {
      label: "Connected Integrations",
      value: connectedIntegrations,
      note: `${state.integrations.length} connectors in workspace`,
    },
    {
      label: "Live Reports",
      value: liveReports,
      note: `${state.reports.length} reporting products`,
    },
    {
      label: "AI Tasks Running",
      value: activeTasks,
      note: `${state.aiTasks.length} assistants configured`,
    },
  ];

  elements.dashboardStats.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-card">
          <div class="metric-value">${stat.value}</div>
          <div class="metric-label">${stat.label}</div>
          <div class="metric-note">${stat.note}</div>
        </article>
      `,
    )
    .join("");
}

function renderDashboardWorkflows() {
  const items = state.workflows
    .filter((item) => matchesSearch([item.name, item.category, item.description], state.globalSearch))
    .slice(0, 5);

  elements.dashboardWorkflows.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="stack-item">
              <span class="status-mark ${item.status}"></span>
              <div class="stack-item-main">
                <strong>${item.name}</strong>
                <p class="stack-meta">${item.category} · ${item.runs.toLocaleString()} runs · Last: ${item.lastRun}</p>
              </div>
              <button class="action-button small" data-workflow-action="${item.status === "draft" ? "run" : "toggle"}" data-workflow-id="${item.id}">
                ${item.status === "active" ? "Pause" : item.status === "paused" ? "Resume" : "Run Now"}
              </button>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No workflows match the current search.</div>';
}

function renderActivityFeed() {
  const items = state.activity.filter((item) =>
    matchesSearch([item.title, item.detail], state.globalSearch),
  );

  elements.activityFeed.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="stack-item">
              <span class="status-mark ${item.tone}"></span>
              <div class="stack-item-main">
                <strong>${item.title}</strong>
                <p class="stack-meta">${item.detail}</p>
                <p class="stack-meta">${item.time}</p>
              </div>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No activity matches the current search.</div>';
}

function renderReadinessList() {
  const warningIntegrations = state.integrations.filter((item) => item.status === "warning");
  const disconnectedIntegrations = state.integrations.filter((item) => item.status === "disconnected");
  const items = [
    {
      title: "Admin protection active",
      detail: "Protected admin flows remain blocked unless 2FA is enabled for administrator access.",
      tone: "active",
    },
    {
      title: "Connector secret posture",
      detail: `${state.integrations.filter((item) => item.credentialsStored).length} integrations have stored credentials protected in the demo state.`,
      tone: "connected",
    },
    {
      title: "Warning connectors",
      detail: warningIntegrations.length
        ? `${warningIntegrations.map((item) => item.name).join(", ")} require a review or re-sync.`
        : "No connectors currently need attention.",
      tone: warningIntegrations.length ? "warning" : "active",
    },
    {
      title: "Disconnected systems",
      detail: disconnectedIntegrations.length
        ? `${disconnectedIntegrations.map((item) => item.name).join(", ")} can be connected from the Integrations Hub.`
        : "All visible systems are connected.",
      tone: disconnectedIntegrations.length ? "warning" : "active",
    },
  ];

  elements.readinessList.innerHTML = items
    .map(
      (item) => `
        <article class="stack-item">
          <span class="status-mark ${item.tone}"></span>
          <div class="stack-item-main">
            <strong>${item.title}</strong>
            <p class="stack-meta">${item.detail}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderWorkspaceSnapshot() {
  const snapshots = [
    { label: "Workflows", value: state.workflows.length, note: "Configured automations" },
    { label: "Reports", value: state.reports.length, note: "Data products" },
    { label: "AI Tasks", value: state.aiTasks.length, note: "Assistant jobs" },
    { label: "Connectors", value: state.integrations.length + state.connectorLibrary.length, note: "Connected and available" },
  ];

  elements.workspaceSnapshot.innerHTML = snapshots
    .map(
      (item) => `
        <article class="snapshot-item">
          <strong>${item.value}</strong>
          <div>${item.label}</div>
          <span>${item.note}</span>
        </article>
      `,
    )
    .join("");
}

function filteredWorkflows() {
  return state.workflows.filter((item) => {
    const searchMatch =
      matchesSearch([item.name, item.category, item.description, item.owner], state.globalSearch) &&
      matchesSearch([item.name, item.category, item.description, item.owner], state.workflowSearch);
    const statusMatch = state.workflowStatus === "all" || item.status === state.workflowStatus;
    const categoryMatch = state.workflowCategory === "all" || item.category === state.workflowCategory;
    return searchMatch && statusMatch && categoryMatch;
  });
}

function renderWorkflows() {
  const items = filteredWorkflows();
  elements.workflowGrid.innerHTML = items.length
    ? items
        .map((item) => {
          const toggleLabel = item.status === "active" ? "Pause" : item.status === "paused" ? "Resume" : "Run";
          return `
            <article class="record-card" data-workflow-open="${item.id}" style="cursor:pointer;">
              <div class="card-top">
                <div>${renderBadge(item.status.charAt(0).toUpperCase() + item.status.slice(1), statusTone(item.status))}</div>
                <div>${renderBadge(item.category, "neutral")}</div>
              </div>
              <h3>${item.name}</h3>
              <div class="card-meta-row">
                <span class="card-meta">${item.trigger}</span>
                <span class="card-meta">${item.schedule}</span>
                <span class="card-meta">${item.owner}</span>
              </div>
              <p class="card-description">${item.description}</p>
              <div class="card-meta-row">
                <span class="card-meta">Success ${item.success}%</span>
                <span class="card-meta">${item.runs.toLocaleString()} runs</span>
                <span class="card-meta">Last ${item.lastRun}</span>
              </div>
              <div class="card-actions">
                <button class="action-button small" data-workflow-action="run" data-workflow-id="${item.id}">Run Now</button>
                <button class="action-button small" data-workflow-action="edit" data-workflow-id="${item.id}">Edit</button>
                <button class="action-button small" data-workflow-action="duplicate" data-workflow-id="${item.id}">Duplicate</button>
                <button class="action-button small" data-workflow-action="toggle" data-workflow-id="${item.id}">${toggleLabel}</button>
                <button class="action-button small" data-workflow-action="delete" data-workflow-id="${item.id}">Delete</button>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No workflows match the active filters.</div>';
}

function filteredReports() {
  return state.reports.filter((item) => {
    const searchMatch =
      matchesSearch([item.name, item.type, item.owner, item.description], state.globalSearch) &&
      matchesSearch([item.name, item.type, item.owner, item.description], state.reportSearch);
    const statusMatch = state.reportStatus === "all" || item.status === state.reportStatus;
    const typeMatch = state.reportType === "all" || item.type === state.reportType;
    return searchMatch && statusMatch && typeMatch;
  });
}

function renderReportStats() {
  const live = state.reports.filter((item) => item.type === "Live").length;
  const active = state.reports.filter((item) => item.status === "active").length;

  const cards = [
    { label: "Total Reports", value: state.reports.length, note: "configured" },
    { label: "Active & Running", value: active, note: "automated" },
    { label: "Live Dashboards", value: live, note: "real-time feeds" },
  ];

  elements.reportStats.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <div class="metric-value">${card.value}</div>
          <div class="metric-label">${card.label}</div>
          <div class="metric-note">${card.note}</div>
        </article>
      `,
    )
    .join("");
}

function renderReports() {
  const items = filteredReports();
  elements.reportGrid.innerHTML = items.length
    ? items
        .map((item) => {
          const toggleLabel = item.status === "active" ? "Pause" : "Resume";
          const typeTone =
            item.type === "Live" ? "success" : item.type === "Automated" ? "info" : "warning";
          return `
            <article class="record-card" data-report-open="${item.id}" style="cursor:pointer;">
              <div class="card-top">
                <div>${renderBadge(item.type, typeTone)}</div>
                <div>${renderBadge(item.status === "active" ? "Active" : "Paused", statusTone(item.status))}</div>
              </div>
              <h3>${item.name}</h3>
              <div class="card-meta-row">
                <span class="card-meta">${item.frequency}</span>
                <span class="card-meta">${item.owner}</span>
              </div>
              <p class="card-description">${item.description}</p>
              <div class="card-meta-row">
                <span class="card-meta">${item.source}</span>
                <span class="card-meta">Updated ${item.updated}</span>
              </div>
              <div class="card-actions">
                <button class="action-button small" data-report-action="run" data-report-id="${item.id}">Run</button>
                <button class="action-button small" data-report-action="view" data-report-id="${item.id}">View</button>
                <button class="action-button small" data-report-action="edit" data-report-id="${item.id}">Edit</button>
                <button class="action-button small" data-report-action="export" data-report-id="${item.id}">Export</button>
                <button class="action-button small" data-report-action="toggle" data-report-id="${item.id}">${toggleLabel}</button>
                <button class="action-button small" data-report-action="delete" data-report-id="${item.id}">Delete</button>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No reports match the active filters.</div>';
}

function renderAIChips() {
  elements.aiChips.innerHTML = aiPromptChips
    .map((chip) => `<button class="chat-chip" data-ai-chip="${chip}">${chip}</button>`)
    .join("");
}

function renderAIChat() {
  elements.aiMessages.innerHTML = "";
  state.aiMessages.forEach((message) => {
    const node = document.createElement("article");
    node.className = `chat-message ${message.role}`;
    const label = document.createElement("strong");
    label.textContent = message.role === "assistant" ? "AI Assistant" : "You";
    const copy = document.createElement("div");
    copy.textContent = message.text;
    node.append(label, copy);
    elements.aiMessages.appendChild(node);
  });
  elements.aiMessages.scrollTop = elements.aiMessages.scrollHeight;
}

function renderAITasks() {
  const items = state.aiTasks.filter((item) =>
    matchesSearch([item.name, item.model, item.scope, item.description], state.globalSearch),
  );

  elements.aiTaskGrid.innerHTML = items.length
    ? items
        .map((item) => {
          const label = item.status === "active" ? "Pause" : item.status === "paused" ? "Resume" : "Run";
          return `
            <article class="stack-item">
              <span class="status-mark ${item.status === "queued" ? "warning" : item.status}"></span>
              <div class="stack-item-main">
                <strong>${item.name}</strong>
                <p class="stack-meta">${item.model} · ${item.scope}</p>
                <p class="stack-meta">${item.accuracy} · ${item.updated}</p>
              </div>
              <div class="card-actions">
                <button class="action-button small" data-ai-action="inspect" data-ai-id="${item.id}">Inspect</button>
                <button class="action-button small" data-ai-action="toggle" data-ai-id="${item.id}">${label}</button>
                <button class="action-button small" data-ai-action="delete" data-ai-id="${item.id}">Delete</button>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No AI tasks match the current workspace search.</div>';
}

function filteredIntegrations() {
  return state.integrations.filter((item) => {
    const searchMatch =
      matchesSearch([item.name, item.type, item.endpoint, item.description], state.globalSearch) &&
      matchesSearch([item.name, item.type, item.endpoint, item.description], state.integrationSearch);
    const statusMatch = state.integrationStatus === "all" || item.status === state.integrationStatus;
    return searchMatch && statusMatch;
  });
}

function renderIntegrationStats() {
  const connected = state.integrations.filter((item) => item.status === "connected").length;
  const records = state.integrations.reduce((sum, item) => sum + item.records, 0);
  const ready = state.integrations.filter((item) => item.featured).length;

  const cards = [
    { label: "Connected Systems", value: connected, note: "" },
    { label: "Records Synced", value: records.toLocaleString(), note: "" },
    { label: "Ready Connectors", value: ready, note: "" },
  ];

  elements.integrationStats.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <div class="metric-value">${card.value}</div>
          <div class="metric-label">${card.label}</div>
          <div class="metric-note">${card.note}</div>
        </article>
      `,
    )
    .join("");
}

function renderIntegrations() {
  const items = filteredIntegrations();
  elements.integrationGrid.innerHTML = items.length
    ? items
        .map((item) => {
          return `
            <article class="record-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span style="font-size:30px; line-height:1;">${item.icon || "🔌"}</span>
                  ${renderBadge(item.status === "warning" ? "warning" : item.status, statusTone(item.status))}
                </div>
                <div class="card-meta-row">
                  ${item.featured ? renderBadge("Ready", "info") : ""}
                  ${item.credentialsStored ? renderBadge("Credential stored", "success") : ""}
                </div>
              </div>
              <h3>${item.name}</h3>
              <p class="card-meta">${item.type}</p>
              <p class="card-description">${item.description}</p>
              <div class="card-meta-row">
                <span class="card-meta">${item.auth}</span>
                <span class="card-meta">Last sync: ${item.lastSync}</span>
              </div>
              <div class="card-meta-row">
                <span class="card-meta">${item.frequency}</span>
                <span class="card-meta">${item.records.toLocaleString()} records</span>
              </div>
              ${item.lastError ? `<p class="card-meta" style="color: var(--danger);">${item.lastError}</p>` : ""}
              <div class="card-actions">
                ${
                  item.status === "connected" || item.status === "warning"
                    ? `
                      <button class="action-button small" data-integration-action="sync" data-integration-id="${item.id}">Sync Now</button>
                      <button class="action-button small" data-integration-action="configure" data-integration-id="${item.id}">Configure</button>
                      <button class="action-button small" data-integration-action="toggle" data-integration-id="${item.id}">Disconnect</button>
                    `
                    : `
                      <button class="action-button small" data-integration-action="toggle" data-integration-id="${item.id}">Connect</button>
                      <button class="action-button small" data-integration-action="configure" data-integration-id="${item.id}">Details</button>
                    `
                }
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty-state">No integrations match the active filters.</div>';
}

function renderConnectorLibrary() {
  const items = state.connectorLibrary.filter((item) =>
    matchesSearch([item.name, item.type, item.description], state.globalSearch),
  );

  elements.connectorLibrary.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="record-card">
              <div class="card-top">
                <div class="card-meta-row">
                  <span style="font-size:30px; line-height:1;">${item.icon || "🔌"}</span>
                  ${renderBadge(item.type, "neutral")}
                </div>
                <div>${renderBadge("Ready", "success")}</div>
              </div>
              <h3>${item.name}</h3>
              <p class="card-meta">${item.authType || "Enterprise connector"}</p>
              <p class="card-description">${item.description}</p>
              <div class="card-actions">
                <button class="action-button small" data-library-action="add" data-library-id="${item.id}">Add to workspace</button>
              </div>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No additional connectors match the current search.</div>';
}

function renderSettingsTabs() {
  elements.settingsTabs.innerHTML = settingsTabs
    .map(
      (tab) => `
        <button class="settings-tab ${state.settingsTab === tab.id ? "active" : ""}" data-settings-tab="${tab.id}">
          <div>
            <strong>${tab.label}</strong>
            <small>${tab.note}</small>
          </div>
        </button>
      `,
    )
    .join("");
}

function settingsCard(title, body) {
  return `
    <article class="settings-card">
      <h3>${title}</h3>
      ${body}
    </article>
  `;
}

function renderSettingsContent() {
  const auditItems = [
    { title: "Admin role protection", note: "The last active administrator cannot be downgraded or deleted." },
    { title: "2FA enforcement", note: "Administrator actions remain gated until two-factor authentication is enabled." },
    { title: "Connector secret handling", note: "Integration credentials are stored with encrypted secret handling in the full system." },
    { title: "Rate-limit posture", note: "Distributed rate limiting is ready when Redis or Upstash is configured in production." },
  ];

  const views = {
    general: `
      <div class="settings-section">
        <p class="stack-meta">This demo mirrors the same workspace structure, module layout, and deployment narrative as the production application.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Environment",
            `
              <div class="settings-row"><strong>Deployment target</strong><span>Company-ready web application</span></div>
              <div class="settings-row"><strong>Runtime</strong><span>Next.js full app, static demo mirror</span></div>
              <div class="settings-row"><strong>Health checks</strong><span>/api/health and /api/ready</span></div>
            `,
          )}
          ${settingsCard(
            "Workspace defaults",
            `
              <div class="settings-row"><strong>Starter workflows</strong><span>Auto-provisioned in the full system</span></div>
              <div class="settings-row"><strong>Connector library</strong><span>Power BI, Azure, ServiceNow, Jira, HubSpot, and more</span></div>
              <div class="settings-row"><strong>Reporting model</strong><span>Live, automated, and on-demand data products</span></div>
            `,
          )}
        </div>
      </div>
    `,
    appearance: `
      <div class="settings-section">
        <p class="stack-meta">The demo now follows the same dark mint production theme, sidebar pattern, header controls, and card language as the full platform.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Theme",
            `
              <div class="settings-row"><strong>Primary accent</strong><span>Mint blue</span></div>
              <div class="settings-row"><strong>Surface design</strong><span>Layered dark cards with accent borders</span></div>
              <div class="settings-row"><strong>Navigation model</strong><span>Persistent sidebar and operational header</span></div>
            `,
          )}
          ${settingsCard(
            "Presentation",
            `
              <div class="settings-row"><strong>Dashboard emphasis</strong><span>Operations-first workspace view</span></div>
              <div class="settings-row"><strong>Responsive support</strong><span>Desktop and mobile-ready layout</span></div>
              <div class="settings-row"><strong>Demo parity</strong><span>Mirrors real tab labels and page structure</span></div>
            `,
          )}
        </div>
      </div>
    `,
    notifications: `
      <div class="settings-section">
        <p class="stack-meta">Notification patterns are aligned with the full product: workflow completion, connector warnings, report readiness, and AI task changes.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Operational alerts",
            `
              <div class="settings-row"><strong>Workflow completion</strong><span>Enabled</span></div>
              <div class="settings-row"><strong>Connector warning routing</strong><span>Enabled</span></div>
              <div class="settings-row"><strong>Report ready notifications</strong><span>Enabled</span></div>
            `,
          )}
          ${settingsCard(
            "Delivery channels",
            `
              <div class="settings-row"><strong>In-app notifications</strong><span>Primary delivery channel</span></div>
              <div class="settings-row"><strong>Email summary</strong><span>Optional in full deployment</span></div>
              <div class="settings-row"><strong>Collaboration alerts</strong><span>Slack or Teams via integrations</span></div>
            `,
          )}
        </div>
      </div>
    `,
    security: `
      <div class="settings-section">
        <p class="stack-meta">Security posture reflects the hardening done in the full platform before deployment and internal rollout.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Authentication and session controls",
            `
              <div class="settings-row"><strong>Admin 2FA</strong><span>Required for protected admin actions</span></div>
              <div class="settings-row"><strong>Session hardening</strong><span>Shorter session lifetime and guarded auth flow</span></div>
              <div class="settings-row"><strong>Backup code support</strong><span>Available in the full application</span></div>
            `,
          )}
          ${settingsCard(
            "Platform protection",
            `
              <div class="settings-row"><strong>Rate limiting</strong><span>Redis or Upstash capable with safe fallback</span></div>
              <div class="settings-row"><strong>CSP and headers</strong><span>Security headers and same-origin protections enabled</span></div>
              <div class="settings-row"><strong>Secret posture</strong><span>Connector credentials handled with encrypted storage support</span></div>
            `,
          )}
        </div>
      </div>
    `,
    api: `
      <div class="settings-section">
        <p class="stack-meta">The production app expects managed secrets for auth, integrations, encryption, and distributed rate limiting.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Core secrets",
            `
              <div class="settings-row"><strong>NEXTAUTH_SECRET</strong><span>Required</span></div>
              <div class="settings-row"><strong>INTEGRATION_SECRET_KEY</strong><span>Required</span></div>
              <div class="settings-row"><strong>UPSTASH credentials</strong><span>Recommended for production</span></div>
            `,
          )}
          ${settingsCard(
            "Enterprise auth",
            `
              <div class="settings-row"><strong>Company SSO</strong><span>Optional but supported in the full deployment</span></div>
              <div class="settings-row"><strong>Connector credentials</strong><span>Stored per integration configuration</span></div>
              <div class="settings-row"><strong>Webhook secrets</strong><span>Recommended for inbound automation</span></div>
            `,
          )}
        </div>
      </div>
    `,
    access: `
      <div class="settings-section">
        <p class="stack-meta">Access controls in the full application protect company administration paths and prevent unsafe account changes.</p>
        <div class="settings-grid">
          ${settingsCard(
            "Role model",
            `
              <div class="settings-row"><strong>Administrator</strong><span>Protected account management and platform control</span></div>
              <div class="settings-row"><strong>Operator</strong><span>Workflow and runtime actions</span></div>
              <div class="settings-row"><strong>Analyst</strong><span>Reporting and AI review</span></div>
            `,
          )}
          ${settingsCard(
            "Admin protection",
            `
              <div class="settings-row"><strong>Last active admin lock</strong><span>Cannot be removed or downgraded</span></div>
              <div class="settings-row"><strong>Protected admin UI state</strong><span>Risky actions blocked in settings</span></div>
              <div class="settings-row"><strong>Profile policy</strong><span>Company-domain validation for profile updates</span></div>
            `,
          )}
        </div>
      </div>
    `,
    audit: `
      <div class="settings-section">
        <p class="stack-meta">The audit log records security-sensitive changes, admin actions, and deployment-significant events.</p>
        <div class="audit-list">
          ${auditItems
            .map(
              (item) => `
                <article class="audit-item">
                  <strong>${item.title}</strong>
                  <span>${item.note}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  };

  elements.settingsContent.innerHTML = views[state.settingsTab];
}

function renderSettings() {
  renderSettingsTabs();
  renderSettingsContent();
}

function renderAll() {
  renderNotifications();
  renderDashboardStats();
  renderDashboardWorkflows();
  renderActivityFeed();
  renderReadinessList();
  renderWorkspaceSnapshot();
  renderWorkflows();
  renderReportStats();
  renderReports();
  renderAIChips();
  renderAIChat();
  renderAITasks();
  renderIntegrationStats();
  renderIntegrations();
  renderConnectorLibrary();
  renderSettings();
}

function workflowById(id) {
  return state.workflows.find((item) => item.id === id);
}

function reportById(id) {
  return state.reports.find((item) => item.id === id);
}

function aiTaskById(id) {
  return state.aiTasks.find((item) => item.id === id);
}

function integrationById(id) {
  return state.integrations.find((item) => item.id === id);
}

function createWorkflow() {
  const workflow = {
    id: makeId("wf"),
    name: "New Workflow Draft",
    category: "Operations",
    status: "draft",
    trigger: "Manual",
    schedule: "On demand",
    success: 100,
    runs: 0,
    lastRun: "Never",
    owner: "Automation Team",
    description: "New demo workflow created from the workspace header action.",
  };
  state.workflows.unshift(workflow);
  prependActivity("Workflow created", `${workflow.name} was added to the workflow library.`, "active");
  renderAll();
  setView("workflows");
  showToast("New workflow draft created.");
}

function createReport() {
  const report = {
    id: makeId("rp"),
    name: "New Report",
    type: "Automated",
    status: "active",
    updated: "Just now",
    frequency: "Weekly",
    source: "Platform",
    owner: "Analytics Team",
    description: "New demo report created from the Reports & Data workspace.",
  };
  state.reports.unshift(report);
  prependActivity("Report created", `${report.name} was added to the reporting workspace.`, "connected");
  renderAll();
  setView("reporting");
  showToast("New report created.");
}

function openWorkflowDetail(id) {
  const workflow = workflowById(id);
  if (!workflow) return;

  openModal(
    "Workflow Detail",
    workflow.name,
    `
      <h3>Workflow summary</h3>
      <ul>
        <li>Status: ${workflow.status}</li>
        <li>Category: ${workflow.category}</li>
        <li>Trigger: ${workflow.trigger}</li>
        <li>Schedule: ${workflow.schedule}</li>
        <li>Runs: ${workflow.runs.toLocaleString()}</li>
        <li>Success: ${workflow.success}%</li>
        <li>Owner: ${workflow.owner}</li>
        <li>Last run: ${workflow.lastRun}</li>
      </ul>
      <p>${workflow.description}</p>
      <p>${workflow.runs === 0 ? "No runs yet. Use Run Now from the workflow menu to execute this automation." : "Use Run Now, Edit, Duplicate, Pause, or Resume from the workflow actions to manage this automation."}</p>
    `,
  );
}

function openReportDetail(id) {
  const report = reportById(id);
  if (!report) return;

  openModal(
    "Report Viewer",
    report.name,
    `
      <h3>Report summary</h3>
      <ul>
        <li>Type: ${report.type}</li>
        <li>Status: ${report.status}</li>
        <li>Schedule: ${report.frequency}</li>
        <li>Source: ${report.source}</li>
        <li>Owner: ${report.owner}</li>
        <li>Updated: ${report.updated}</li>
      </ul>
      <p>${report.description}</p>
    `,
  );
}

function handleWorkflowAction(action, id) {
  const workflow = workflowById(id);
  if (!workflow) return;

  if (action === "run") {
    workflow.status = "active";
    workflow.lastRun = "Just now";
    workflow.runs += 1;
    prependActivity("Workflow run started", `${workflow.name} executed from the demo workspace.`, "active");
    showToast(`${workflow.name} run started.`);
  }

  if (action === "edit") {
    openModal(
      "Workflow details",
      workflow.name,
      `
        <h3>Configuration summary</h3>
        <ul>
          <li>Category: ${workflow.category}</li>
          <li>Status: ${workflow.status}</li>
          <li>Trigger: ${workflow.trigger}</li>
          <li>Schedule: ${workflow.schedule}</li>
          <li>Owner: ${workflow.owner}</li>
          <li>Success rate: ${workflow.success}%</li>
        </ul>
        <p>${workflow.description}</p>
      `,
    );
    return;
  }

  if (action === "duplicate") {
    const copy = clone(workflow);
    copy.id = makeId("wf");
    copy.name = `${workflow.name} Copy`;
    copy.status = "draft";
    copy.lastRun = "Never";
    state.workflows.unshift(copy);
    prependActivity("Workflow duplicated", `${workflow.name} was duplicated into ${copy.name}.`, "active");
    showToast(`${workflow.name} duplicated.`);
  }

  if (action === "toggle") {
    workflow.status = workflow.status === "active" ? "paused" : "active";
    prependActivity(
      workflow.status === "active" ? "Workflow resumed" : "Workflow paused",
      `${workflow.name} is now ${workflow.status}.`,
      workflow.status === "active" ? "active" : "warning",
    );
    showToast(`${workflow.name} ${workflow.status === "active" ? "resumed" : "paused"}.`, workflow.status === "active" ? "success" : "warning");
  }

  if (action === "delete") {
    state.workflows = state.workflows.filter((item) => item.id !== id);
    prependActivity("Workflow removed", `${workflow.name} was removed from the library.`, "warning");
    showToast(`${workflow.name} deleted.`, "warning");
  }

  renderAll();
}

function handleReportAction(action, id) {
  const report = reportById(id);
  if (!report) return;

  if (action === "run") {
    report.status = "active";
    report.updated = "Just now";
    prependActivity("Report generated", `${report.name} completed a fresh demo run.`, "connected");
    showToast(`${report.name} generated.`);
  }

  if (action === "view") {
    openModal(
      "Report preview",
      report.name,
      `
        <h3>Report summary</h3>
        <ul>
          <li>Type: ${report.type}</li>
          <li>Status: ${report.status}</li>
          <li>Owner: ${report.owner}</li>
          <li>Updated: ${report.updated}</li>
          <li>Frequency: ${report.frequency}</li>
        </ul>
        <p>${report.description}</p>
      `,
    );
    return;
  }

  if (action === "edit") {
    openModal(
      "Report configuration",
      report.name,
      `
        <h3>Current reporting inputs</h3>
        <p>Source: ${report.source}</p>
        <p>Frequency: ${report.frequency}</p>
        <p>Owner: ${report.owner}</p>
        <p>This static demo keeps configuration read-only while preserving the same workflow as the full system.</p>
      `,
    );
    return;
  }

  if (action === "export") {
    prependActivity("Report exported", `${report.name} was exported from the reporting workspace.`, "connected");
    showToast(`${report.name} export prepared.`);
  }

  if (action === "toggle") {
    report.status = report.status === "active" ? "paused" : "active";
    prependActivity(
      report.status === "active" ? "Report resumed" : "Report paused",
      `${report.name} reporting is now ${report.status}.`,
      report.status === "active" ? "active" : "warning",
    );
    showToast(`${report.name} ${report.status === "active" ? "resumed" : "paused"}.`, report.status === "active" ? "success" : "warning");
  }

  if (action === "delete") {
    state.reports = state.reports.filter((item) => item.id !== id);
    prependActivity("Report removed", `${report.name} was removed from the reporting hub.`, "warning");
    showToast(`${report.name} deleted.`, "warning");
  }

  renderAll();
}

function handleAITaskAction(action, id) {
  const task = aiTaskById(id);
  if (!task) return;

  if (action === "inspect") {
    openModal(
      "AI task details",
      task.name,
      `
        <h3>Task profile</h3>
        <ul>
          <li>Model: ${task.model}</li>
          <li>Status: ${task.status}</li>
          <li>Scope: ${task.scope}</li>
          <li>Accuracy: ${task.accuracy}</li>
          <li>Last update: ${task.updated}</li>
        </ul>
        <p>${task.description}</p>
      `,
    );
    return;
  }

  if (action === "toggle") {
    if (task.status === "active") {
      task.status = "paused";
    } else {
      task.status = "active";
      task.updated = "Just now";
    }
    prependActivity(
      "AI task updated",
      `${task.name} is now ${task.status}.`,
      task.status === "active" ? "active" : "warning",
    );
    showToast(`${task.name} ${task.status === "active" ? "resumed" : "paused"}.`, task.status === "active" ? "success" : "warning");
  }

  if (action === "delete") {
    state.aiTasks = state.aiTasks.filter((item) => item.id !== id);
    prependActivity("AI task removed", `${task.name} was removed from the task queue.`, "warning");
    showToast(`${task.name} deleted.`, "warning");
  }

  renderAll();
}

function handleIntegrationAction(action, id) {
  const integration = integrationById(id);
  if (!integration) return;

  if (action === "configure") {
    openModal(
      "Integration details",
      integration.name,
      `
        <h3>Connector profile</h3>
        <ul>
          <li>Status: ${integration.status}</li>
          <li>Type: ${integration.type}</li>
          <li>Authentication: ${integration.auth}</li>
          <li>Endpoint: ${integration.endpoint}</li>
          <li>Sync frequency: ${integration.frequency}</li>
          <li>Credential state: ${integration.credentialsStored ? "Stored" : "Missing"}</li>
        </ul>
        <p>${integration.description}</p>
      `,
    );
    return;
  }

  if (action === "sync") {
    if (integration.status === "disconnected") {
      showToast(`Connect ${integration.name} before syncing.`, "warning");
      return;
    }
    integration.status = "connected";
    integration.lastSync = "Just now";
    integration.records += 128;
    prependActivity("Integration synced", `${integration.name} synced successfully from the Integrations Hub.`, "connected");
    showToast(`${integration.name} synced.`);
  }

  if (action === "toggle") {
    if (integration.status === "disconnected") {
      integration.status = "connected";
      integration.credentialsStored = true;
      integration.lastSync = "Pending first sync";
      prependActivity("Integration connected", `${integration.name} was connected to the workspace.`, "connected");
      showToast(`${integration.name} connected.`);
    } else {
      integration.status = "disconnected";
      integration.credentialsStored = false;
      integration.lastSync = "Not connected";
      integration.records = 0;
      prependActivity("Integration disconnected", `${integration.name} was disconnected from the workspace.`, "warning");
      showToast(`${integration.name} disconnected.`, "warning");
    }
  }

  renderAll();
}

function addConnectorFromLibrary(id) {
  const connector = state.connectorLibrary.find((item) => item.id === id);
  if (!connector) return;

  state.integrations.push({
    id: makeId("int"),
    icon: connector.icon,
    name: connector.name,
    status: "disconnected",
    type: connector.type,
    auth: connector.authType || "Not configured",
    endpoint: "Pending configuration",
    frequency: "Not scheduled",
    lastSync: "Not connected",
    records: 0,
    credentialsStored: false,
    featured: true,
    description: connector.description,
  });
  state.connectorLibrary = state.connectorLibrary.filter((item) => item.id !== id);
  prependActivity("Connector added", `${connector.name} is now available in the workspace integration list.`, "active");
  renderAll();
  showToast(`${connector.name} added to workspace.`);
}

function createAITask() {
  state.aiTasks.unshift({
    id: makeId("ai"),
    name: "New AI Task",
    model: "AutoFlow-Assist-v1",
    status: "queued",
    scope: "Workspace assistant",
    updated: "Queued",
    accuracy: "Pending review",
    description: "A new demo AI task was created from the AI workspace.",
  });
  prependActivity("AI task created", "A new AI task entered the queue.", "active");
  renderAll();
  showToast("New AI task added.");
}

function syncAllIntegrations() {
  state.integrations.forEach((item) => {
    if (item.status !== "disconnected") {
      item.status = "connected";
      item.lastSync = "Just now";
      item.records += 64;
    }
  });
  prependActivity("Bulk sync completed", "Connected integrations completed a demo sync run.", "connected");
  renderAll();
  showToast("All connected integrations synced.");
}

function generateAIResponse(prompt) {
  const text = normalize(prompt);
  const activeWorkflows = state.workflows.filter((item) => item.status === "active").length;
  const pausedWorkflows = state.workflows.filter((item) => item.status === "paused").map((item) => item.name);
  const warningIntegrations = state.integrations.filter((item) => item.status === "warning").map((item) => item.name);
  const disconnected = state.integrations.filter((item) => item.status === "disconnected").map((item) => item.name);
  const liveReports = state.reports.filter((item) => item.type === "Live").length;

  if (text.includes("workflow")) {
    return `There are ${activeWorkflows} active workflows in the workspace. ${pausedWorkflows.length ? `Paused workflow: ${pausedWorkflows.join(", ")}.` : "No workflows are currently paused."}`;
  }

  if (text.includes("integration") || text.includes("connector")) {
    return `Connected integrations: ${state.integrations.filter((item) => item.status === "connected").length}. ${warningIntegrations.length ? `Needs attention: ${warningIntegrations.join(", ")}.` : "No connectors currently need attention."} ${disconnected.length ? `Disconnected: ${disconnected.join(", ")}.` : ""}`.trim();
  }

  if (text.includes("security") || text.includes("admin") || text.includes("protection")) {
    return "Security posture is aligned with the production system: admin 2FA gating, protected last-admin logic, hardened headers, and distributed-rate-limit readiness are all represented in this demo workspace.";
  }

  if (text.includes("report") || text.includes("data")) {
    return `The reporting layer contains ${state.reports.length} data products, including ${liveReports} live dashboards and ${state.reports.filter((item) => item.type === "Automated").length} automated reports.`;
  }

  return `Workspace summary: ${activeWorkflows} active workflows, ${state.reports.length} reports, ${state.aiTasks.length} AI tasks, and ${state.integrations.filter((item) => item.status === "connected").length} connected integrations.`;
}

function sendAIMessage(message) {
  const prompt = message.trim();
  if (!prompt) return;
  state.aiMessages.push({ role: "user", text: prompt });
  state.aiMessages.push({ role: "assistant", text: generateAIResponse(prompt) });
  renderAIChat();
}

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.jump));
});

document.getElementById("sidebar-toggle").addEventListener("click", () => {
  elements.appShell.classList.toggle("collapsed");
});

document.getElementById("notifications-toggle").addEventListener("click", () => {
  state.notificationsOpen = !state.notificationsOpen;
  renderNotifications();
});

document.getElementById("new-workflow-button").addEventListener("click", () => {
  setView("workflows");
  showToast("Opened Workflow Automation.");
});
document.getElementById("top-create-workflow-button").addEventListener("click", createWorkflow);
document.getElementById("new-report-button").addEventListener("click", createReport);
document.getElementById("connector-library-button").addEventListener("click", () => {
  setView("integrations");
  document.getElementById("connector-library-section").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("refresh-activity-button").addEventListener("click", () => {
  prependActivity("Activity refreshed", "The dashboard activity feed was refreshed in the demo workspace.", "connected");
  renderAll();
  showToast("Activity feed refreshed.");
});
document.getElementById("new-ai-task-button").addEventListener("click", createAITask);

elements.globalSearch.addEventListener("input", (event) => {
  state.globalSearch = event.target.value;
  renderAll();
});

elements.workflowSearch.addEventListener("input", (event) => {
  state.workflowSearch = event.target.value;
  renderWorkflows();
});

elements.workflowStatusFilter.addEventListener("change", (event) => {
  state.workflowStatus = event.target.value;
  renderWorkflows();
});

elements.workflowCategoryFilter.addEventListener("change", (event) => {
  state.workflowCategory = event.target.value;
  renderWorkflows();
});

elements.reportSearch.addEventListener("input", (event) => {
  state.reportSearch = event.target.value;
  renderReports();
});

elements.integrationSearch.addEventListener("input", (event) => {
  state.integrationSearch = event.target.value;
  renderIntegrations();
});

elements.dashboardWorkflows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-workflow-action]");
  if (!button) return;
  handleWorkflowAction(button.dataset.workflowAction, button.dataset.workflowId);
});

elements.workflowGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-workflow-action]");
  if (button) {
    handleWorkflowAction(button.dataset.workflowAction, button.dataset.workflowId);
    return;
  }

  const card = event.target.closest("[data-workflow-open]");
  if (card) {
    openWorkflowDetail(card.dataset.workflowOpen);
  }
});

elements.reportGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-report-action]");
  if (button) {
    handleReportAction(button.dataset.reportAction, button.dataset.reportId);
    return;
  }

  const card = event.target.closest("[data-report-open]");
  if (card) {
    openReportDetail(card.dataset.reportOpen);
  }
});

elements.aiTaskGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ai-action]");
  if (!button) return;
  handleAITaskAction(button.dataset.aiAction, button.dataset.aiId);
});

elements.aiChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ai-chip]");
  if (!button) return;
  elements.aiInput.value = button.dataset.aiChip;
  sendAIMessage(button.dataset.aiChip);
  elements.aiInput.value = "";
});

document.getElementById("ai-send-button").addEventListener("click", () => {
  sendAIMessage(elements.aiInput.value);
  elements.aiInput.value = "";
});

elements.aiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendAIMessage(elements.aiInput.value);
    elements.aiInput.value = "";
  }
});

elements.integrationGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-integration-action]");
  if (!button) return;
  handleIntegrationAction(button.dataset.integrationAction, button.dataset.integrationId);
});

elements.connectorLibrary.addEventListener("click", (event) => {
  const button = event.target.closest("[data-library-action]");
  if (!button) return;
  addConnectorFromLibrary(button.dataset.libraryId);
});

elements.settingsTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-settings-tab]");
  if (!button) return;
  state.settingsTab = button.dataset.settingsTab;
  renderSettings();
});

elements.notificationPanel.addEventListener("click", (event) => {
  const item = event.target.closest("[data-notification-id]");
  if (!item) return;
  const notification = state.notifications.find((entry) => entry.id === item.dataset.notificationId);
  if (!notification) return;
  notification.read = true;
  renderNotifications();
  openModal("Notification", notification.title, `<p>${notification.detail}</p><p>${notification.time}</p>`);
});

document.getElementById("modal-close").addEventListener("click", closeModal);
elements.modal.addEventListener("click", (event) => {
  if (event.target === elements.modal) {
    closeModal();
  }
});

document.addEventListener("click", (event) => {
  const insidePanel = elements.notificationPanel.contains(event.target);
  const insideToggle = document.getElementById("notifications-toggle").contains(event.target);
  if (!insidePanel && !insideToggle && state.notificationsOpen) {
    state.notificationsOpen = false;
    renderNotifications();
  }
});

renderAll();
