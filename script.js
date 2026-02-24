const jobsData = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: null
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: null
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",        
        salary: "$125,000 - $165,000",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: null
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: null
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: null
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: null
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: null
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: null
    }
];
let jobs = JSON.parse(JSON.stringify(jobsData));
let activeTab = "all";
const cardsContainer = document.getElementById("cardsContainer");
const emptyState = document.getElementById("emptyState");
const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const jobsCountEl = document.getElementById("jobsCount");
const tabButtons = document.querySelectorAll(".tab");

function init() {
    renderCards();
    updateDashboard();
    bindTabs();
}

function renderCards() {
    const filtered = getFilteredJobs();

    if (filtered.length === 0) {
        cardsContainer.classList.add("hidden");
        emptyState.classList.remove("hidden");
    } else {
        cardsContainer.classList.remove("hidden");
        emptyState.classList.add("hidden");
    }

    cardsContainer.innerHTML = filtered.map(job => createCardHTML(job)).join("");


    updateVisibleCount();
}

function getFilteredJobs() {
    if (activeTab === "all") return jobs;
    return jobs.filter(job => job.status === activeTab);
}

function createCardHTML(job) {
    const interviewActive = job.status === "interview" ? "active" : "";
    const rejectedActive = job.status === "rejected" ? "active" : "";

    let statusBadge = "";
    if (job.status === "interview") {
        statusBadge = `<span class="status-badge interview">Interview</span>`;
    } else if (job.status === "rejected") {
        statusBadge = `<span class="status-badge rejected">Rejected</span>`;
    } else {
        statusBadge = `<span class="status-badge not-applied">Not Applied</span>`;
    }

    return `
    <div class="job-card" data-id="${job.id}">
      <div class="card-top">
        <div>
          <div class="company-name">${job.companyName}</div>
          <div class="position">${job.position}</div>
        </div>
        <button class="btn-delete" onclick="deleteJob(${job.id})" title="Delete job">
          <img src="assets/Trash.png" alt="Delete" />
        </button>
      </div>
      <div class="card-meta">
        <span class="meta-tag location">${job.location}</span>
        <span class="meta-tag type">${job.type}</span>
        <span class="meta-tag salary">${job.salary}</span>
      </div>
      <div class="status-row">${statusBadge}</div>
      <p class="card-desc">${job.description}</p>
      <div class="card-actions">
        <button class="btn btn-interview ${interviewActive}" onclick="setStatus(${job.id}, 'interview')">Interview</button>
        <button class="btn btn-rejected ${rejectedActive}" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
      </div>
    </div>
  `;
}
function setStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;
    if (job.status === newStatus) {
        job.status = null;
    } else {
        job.status = newStatus;
    }

    renderCards();
    updateDashboard();
}
function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderCards();
    updateDashboard();
}
function updateDashboard() {
    const totalJobs = jobs.length;
    const interviewJobs = jobs.filter(j => j.status === "interview").length;
    const rejectedJobs = jobs.filter(j => j.status === "rejected").length;

    totalCountEl.textContent = totalJobs;
    interviewCountEl.textContent = interviewJobs;
    rejectedCountEl.textContent = rejectedJobs;
}
function updateVisibleCount() {
    const filtered = getFilteredJobs();
    const label = filtered.length === 1 ? "job" : "jobs";
    jobsCountEl.textContent = `${filtered.length} ${label}`;
}

function bindTabs() {
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeTab = btn.dataset.tab;
            renderCards();
        });
    });
}

init();