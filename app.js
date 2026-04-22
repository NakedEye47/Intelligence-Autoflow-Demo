const workflows = [
  {
    title: "Invoice Processing",
    meta: "Finance · Schedule trigger · 99.1% success",
    tags: ["ERP sync", "Validation", "Audit trail"],
  },
  {
    title: "Employee Onboarding",
    meta: "HR · Webhook trigger · 100% success",
    tags: ["Directory", "ITSM", "Welcome flow"],
  },
  {
    title: "Sales Pipeline Refresh",
    meta: "Sales · Daily refresh · 847 records",
    tags: ["CRM", "Power BI", "Forecasting"],
  },
  {
    title: "Customer Success Alerts",
    meta: "Operations · Manual review · 26 flagged accounts",
    tags: ["Support", "Risk scoring", "Escalation"],
  },
  {
    title: "Data Compliance Review",
    meta: "Governance · Hourly · 0 unresolved exceptions",
    tags: ["Security", "Logs", "Retention"],
  },
  {
    title: "Executive Briefing Pack",
    meta: "Leadership · Weekly bundle · Auto-generated",
    tags: ["Reporting", "PDF export", "Distribution"],
  },
];

const reports = [
  {
    title: "Operations Dashboard",
    meta: "Live report · Updated 11 minutes ago",
    tags: ["System health", "Throughput", "Exceptions"],
  },
  {
    title: "Quarterly Revenue Pulse",
    meta: "Automated PDF · 2.4 MB",
    tags: ["Salesforce", "Forecast", "Executive pack"],
  },
  {
    title: "People Operations Snapshot",
    meta: "Weekly deck · 1.3 MB",
    tags: ["Headcount", "Hiring", "Department trends"],
  },
  {
    title: "Security Readiness Brief",
    meta: "On-demand · Generated from audit state",
    tags: ["2FA", "Admin controls", "Connector posture"],
  },
  {
    title: "Integration Portfolio Review",
    meta: "Monthly export · 14 connected systems",
    tags: ["Connectors", "Sync windows", "Credential rotation"],
  },
  {
    title: "AI Utilization Summary",
    meta: "Automated CSV · 18 active automations",
    tags: ["Models", "Accuracy", "Volume"],
  },
];

const aiTasks = [
  {
    title: "Document Classification",
    meta: "AutoFlow-Classify-v2 · 4,812 files processed",
    tags: ["94-99% accuracy", "Batch inference", "Manual review"],
  },
  {
    title: "Invoice Extraction",
    meta: "AutoFlow-Extract-v3 · Finance stack",
    tags: ["Vendor capture", "Amounts", "ERP-ready fields"],
  },
  {
    title: "Intent Detection",
    meta: "AutoFlow-NLP-v1 · Support and ops",
    tags: ["Routing", "Priority scoring", "Escalation labels"],
  },
  {
    title: "Board Summary Generator",
    meta: "Summarization chain · Multi-source reporting",
    tags: ["Narrative outputs", "Briefings", "Human approval"],
  },
  {
    title: "Risk Flag Assistant",
    meta: "Cross-workflow AI review",
    tags: ["Anomaly hints", "Policy reminders", "Confidence score"],
  },
  {
    title: "Knowledge Pack Drafting",
    meta: "Structured content support",
    tags: ["Docs", "Runbooks", "Change notes"],
  },
];

const integrations = [
  {
    title: "Microsoft 365",
    meta: "OAuth 2.0 · Secure credential storage",
    tags: ["Outlook", "Teams", "SharePoint"],
  },
  {
    title: "Power BI",
    meta: "Analytics connector · Dataset refreshes",
    tags: ["Executive reporting", "Workspace deploy", "KPIs"],
  },
  {
    title: "Azure",
    meta: "Service principal · Cloud orchestration",
    tags: ["Resources", "Secrets", "Monitor alerts"],
  },
  {
    title: "ServiceNow",
    meta: "ITSM bridge · Ticket automation",
    tags: ["Incidents", "Changes", "Onboarding tasks"],
  },
  {
    title: "Jira",
    meta: "Engineering workflow connector",
    tags: ["Issues", "Sprint updates", "Escalation"],
  },
  {
    title: "HubSpot",
    meta: "Revenue operations sync",
    tags: ["Contacts", "Deals", "Lifecycle events"],
  },
];

const activity = [
  {
    title: "Workflow completed",
    copy: "Invoice Processing posted 12 records into the ERP staging ledger without exceptions.",
    time: "09:12 local time",
  },
  {
    title: "Integration synced",
    copy: "Power BI dataset refresh completed after the CRM aggregation workflow finished.",
    time: "08:58 local time",
  },
  {
    title: "Administrator control enforced",
    copy: "Access management stayed locked until app-level two-factor authentication was enabled.",
    time: "08:40 local time",
  },
  {
    title: "Readiness check updated",
    copy: "Deployment health confirmed company domains, connector secret encryption, and runtime checks.",
    time: "08:15 local time",
  },
];

const readinessChecks = [
  {
    title: "Static demo delivery",
    copy: "This folder is fully standalone and can be published directly to GitHub Pages.",
    status: "ready for GitHub Live",
  },
  {
    title: "Production feature story",
    copy: "Dashboard, workflows, reports, AI, integrations, and deployment posture are represented in one walkthrough.",
    status: "stakeholder-ready",
  },
  {
    title: "Design presentation",
    copy: "Responsive layout works on desktop and mobile and does not depend on any backend API.",
    status: "demo-safe",
  },
  {
    title: "Implementation handoff",
    copy: "The README in this folder includes GitHub Pages publishing steps and customization notes.",
    status: "delivery-ready",
  },
];

function createTile(item) {
  const tile = document.createElement("article");
  tile.className = "tile-card";
  tile.innerHTML = `
    <div class="tile-top">
      <div>
        <div class="tile-title">${item.title}</div>
        <p class="tile-meta">${item.meta}</p>
      </div>
    </div>
    <div class="tile-tags">
      ${item.tags.map((tag) => `<span class="tile-tag">${tag}</span>`).join("")}
    </div>
  `;
  return tile;
}

function createTimelineItem(item) {
  const node = document.createElement("article");
  node.className = "timeline-item";
  node.innerHTML = `
    <strong>${item.title}</strong>
    <p>${item.copy}</p>
    <span>${item.time}</span>
  `;
  return node;
}

function createCheckItem(item) {
  const node = document.createElement("article");
  node.className = "check-item";
  node.innerHTML = `
    <strong>${item.title}</strong>
    <p>${item.copy}</p>
    <span>${item.status}</span>
  `;
  return node;
}

function renderCollection(targetId, items, factory) {
  const target = document.getElementById(targetId);
  items.forEach((item) => target.appendChild(factory(item)));
}

function activateView(view) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `${view}-view`);
  });
}

renderCollection("workflow-grid", workflows, createTile);
renderCollection("report-grid", reports, createTile);
renderCollection("ai-grid", aiTasks, createTile);
renderCollection("integration-grid", integrations, createTile);
renderCollection("activity-timeline", activity, createTimelineItem);
renderCollection("readiness-checks", readinessChecks, createCheckItem);

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => activateView(button.dataset.view));
});

const demoModal = document.getElementById("demo-modal");
const launchButton = document.getElementById("launch-demo");
const enterButton = document.getElementById("enter-demo");
const openReadinessButton = document.getElementById("open-readiness");

launchButton.addEventListener("click", () => {
  demoModal.classList.remove("hidden");
  demoModal.setAttribute("aria-hidden", "false");
});

enterButton.addEventListener("click", () => {
  demoModal.classList.add("hidden");
  demoModal.setAttribute("aria-hidden", "true");
  activateView("dashboard");
});

openReadinessButton.addEventListener("click", () => {
  activateView("readiness");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

demoModal.addEventListener("click", (event) => {
  if (event.target === demoModal) {
    demoModal.classList.add("hidden");
    demoModal.setAttribute("aria-hidden", "true");
  }
});
