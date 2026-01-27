// JavaScript to handle page navigation and interactive charts

// Global data storage
let unicornsData = [
    { name: "SanDisk", valuation: 19.0, founder: "Sanjay Mehrotra", sector: "Tech/Software" },
    { name: "Swiggy", valuation: 11.0, founder: "Sriharsha Majety", sector: "Food Delivery" },
    { name: "FalconX", valuation: 8.0, founder: "Raghu Yarlagadda", sector: "Fintech" },
    { name: "Postman", valuation: 7.5, founder: "Abhinav Asthana", sector: "Tech/Software" },
    { name: "OfBusiness", valuation: 5.0, founder: "Asish Mohapatra & Bhuvan Gupta", sector: "E-commerce" },
    { name: "Eruditus", valuation: 3.2, founder: "Ashwin Damera", sector: "EdTech" },
    { name: "BigBasket", valuation: 3.0, founder: "Hari Menon", sector: "E-commerce" },
    { name: "Groww", valuation: 3.0, founder: "Lalit Keshre", sector: "Fintech" },
    { name: "MPL", valuation: 2.3, founder: "Sai Srinivas", sector: "Gaming" },
    { name: "Zeta", valuation: 1.45, founder: "Bhavin Turakhia", sector: "Fintech" }
];

let geographicData = { tier1: 7, tier2: 9, tier3: 5 };

let sectorData = [
    { sector: "Fintech", count: 3 },
    { sector: "E-commerce/Food Tech", count: 2 },
    { sector: "SaaS/Enterprise Tech", count: 3 },
    { sector: "EdTech", count: 2 },
    { sector: "B2B Commerce", count: 1 },
    { sector: "Gaming", count: 1 },
    { sector: "Hardware/Manufacturing", count: 2 }
];

let timelineData = [
    { year: 1996, milestone: "Hotmail founded and sold to Microsoft", valuation: 0.4 },
    { year: 2004, milestone: "TBI established at BITS Pilani", valuation: 0 },
    { year: 2006, milestone: "RedBus founded", valuation: 0 },
    { year: 2013, milestone: "RedBus acquired for $138M", valuation: 0.138 },
    { year: 2016, milestone: "SanDisk sold for $19B, Media.net for $900M", valuation: 19.9 },
    { year: 2018, milestone: "Swiggy becomes unicorn", valuation: 1.0 },
    { year: 2021, milestone: "Multiple unicorns: Postman, Eruditus, OfBusiness", valuation: 5.0 },
    { year: 2022, milestone: "BITS allows one-year startup gap", valuation: 0 },
    { year: 2023, milestone: "Rakesh Kapoor Innovation Centre opened", valuation: 0 },
    { year: 2024, milestone: "15 unicorns, $60B+ combined valuation", valuation: 60.0 }
];

let acquisitionsData = [
    { company: "Hotmail", year: 1996, amount: "$400M", acquirer: "Microsoft", founder: "Sabeer Bhatia" },
    { company: "RedBus", year: 2013, amount: "$138M", acquirer: "Ibibo Group", founder: "Phanindra Sama" },
    { company: "SanDisk", year: 2016, amount: "$19B", acquirer: "Western Digital", founder: "Sanjay Mehrotra" },
    { company: "Media.net", year: 2016, amount: "$900M", acquirer: "Chinese Consortium", founder: "Divyank Turakhia" },
    { company: "BigBasket", year: 2021, amount: "Majority Stake", acquirer: "Tata Digital", founder: "Hari Menon" }
];

// Chart instances
let unicornsChart = null;
let diversityChart = null;
let sectorChart = null;
let timelineChart = null;

// Wait for DOM content loaded
window.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    function changePage(targetId) {
        pages.forEach((page) => {
            if (page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        navButtons.forEach((btn) => {
            if (btn.dataset.page === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Initialize charts when switching to relevant pages
        if (targetId === 'page1') {
            setTimeout(() => {
                initUnicornsChart();
                renderAcquisitionsTimeline();
            }, 100);
        } else if (targetId === 'page2') {
            setTimeout(() => {
                initDiversityChart();
                initSectorChart();
                initTimelineChart();
            }, 100);
        } else if (targetId === 'admin') {
            updateAdminLists();
        }

        // Scroll to top when page switches
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navButtons.forEach((btn) => {
        btn.addEventListener('click', () => changePage(btn.dataset.page));
    });

    // Initialize with page1
    changePage('page1');
});

// 1. Unicorns Chart
function initUnicornsChart() {
    const ctx = document.getElementById('unicornsChart');
    if (!ctx) return;

    if (unicornsChart) {
        unicornsChart.destroy();
    }

    const sortedData = [...unicornsData].sort((a, b) => b.valuation - a.valuation);
    
    const sectorColors = {
        'Tech/Software': '#3b82f6',
        'Food Delivery': '#f59e0b',
        'Fintech': '#10b981',
        'E-commerce': '#6b7280',
        'EdTech': '#8b5cf6',
        'Gaming': '#ef4444'
    };

    unicornsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(item => item.name),
            datasets: [{
                label: 'Valuation (Billions USD)',
                data: sortedData.map(item => item.valuation),
                backgroundColor: sortedData.map(item => sectorColors[item.sector] || '#6b7280'),
                borderColor: sortedData.map(item => sectorColors[item.sector] || '#6b7280'),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const company = sortedData[context.dataIndex];
                            return [
                                `Valuation: $${company.valuation}B`,
                                `Founder: ${company.founder}`,
                                `Sector: ${company.sector}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valuation (Billions USD)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Companies'
                    }
                }
            }
        }
    });
}

// 2. Geographic Diversity Chart
function initDiversityChart() {
    const ctx = document.getElementById('diversityChart');
    if (!ctx) return;

    if (diversityChart) {
        diversityChart.destroy();
    }

    const total = geographicData.tier1 + geographicData.tier2 + geographicData.tier3;
    
    diversityChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Tier 1 Cities', 'Tier 2 Cities', 'Tier 3 Cities'],
            datasets: [{
                data: [geographicData.tier1, geographicData.tier2, geographicData.tier3],
                backgroundColor: ['#3b82f6', '#f59e0b', '#10b981'],
                borderColor: ['#2563eb', '#d97706', '#059669'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    updateDiversityStats();
}

function updateDiversityStats() {
    const total = geographicData.tier1 + geographicData.tier2 + geographicData.tier3;
    const statsContainer = document.getElementById('diversityStats');
    
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="tier-card tier-1">
                <h3>Tier 1 Cities</h3>
                <div class="tier-percentage">${((geographicData.tier1 / total) * 100).toFixed(1)}%</div>
                <div class="tier-count">${geographicData.tier1} founders</div>
                <div class="tier-cities">Mumbai, Bangalore, Pune, Delhi</div>
            </div>
            <div class="tier-card tier-2">
                <h3>Tier 2 Cities</h3>
                <div class="tier-percentage">${((geographicData.tier2 / total) * 100).toFixed(1)}%</div>
                <div class="tier-count">${geographicData.tier2} founders</div>
                <div class="tier-cities">Chandigarh, Vijayawada, Kanpur, Lucknow</div>
            </div>
            <div class="tier-card tier-3">
                <h3>Tier 3 Cities</h3>
                <div class="tier-percentage">${((geographicData.tier3 / total) * 100).toFixed(1)}%</div>
                <div class="tier-count">${geographicData.tier3} founders</div>
                <div class="tier-cities">Nizamabad, Basti, Udhampur</div>
            </div>
        `;
    }
}

// 3. Sector Chart
function initSectorChart() {
    const ctx = document.getElementById('sectorChart');
    if (!ctx) return;

    if (sectorChart) {
        sectorChart.destroy();
    }

    const colors = ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444', '#6b7280', '#06b6d4'];
    
    sectorChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: sectorData.map(item => item.sector),
            datasets: [{
                data: sectorData.map(item => item.count),
                backgroundColor: colors,
                borderColor: colors.map(color => color + '80'),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed} companies`;
                        }
                    }
                }
            }
        }
    });
}

// 4. Timeline Chart with Logarithmic Scale
function initTimelineChart() {

    const ctx = document.getElementById('timelineChart').getContext('2d');

new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Company Valuations',
            data: [
                {x: 1998, y: 0.4, company: 'Hotmail'},
                {x: 2016, y: 19.0, company: 'SanDisk'},
                {x: 2021, y: 11.0, company: 'Swiggy'},
                {x: 2021, y: 7.5, company: 'Postman'},
                {x: 2021, y: 5.0, company: 'OfBusiness'},
                // Add more data points from the CSV file
            ],
            backgroundColor: '#21808D',
            borderColor: '#1a6b75'
        }]
    },
    options: {
        scales: {
            y: {
                type: 'logarithmic',
                title: {
                    display: true,
                    text: 'Valuation (USD Billions)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        }
    }
});

    if (!ctx) return;

    if (timelineChart) {
        timelineChart.destroy();
    }

    const chartData = timelineData.map(item => ({
        x: item.year,
        y: item.valuation > 0 ? item.valuation : 0.01
    }));

    timelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Valuation (Billions USD)',
                data: chartData,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Year'
                    },
                    min: 1995,
                    max: 2025
                },
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Valuation (Billions USD) - Log Scale'
                    },
                    min: 0.01,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            if (value === 0.01) return '0';
                            if (value === 0.1) return '0.1B';
                            if (value === 1) return '1B';
                            if (value === 10) return '10B';
                            if (value === 100) return '100B';
                            return value + 'B';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const dataPoint = timelineData[context.dataIndex];
                            return [
                                `Year: ${dataPoint.year}`,
                                `Milestone: ${dataPoint.milestone}`,
                                `Valuation: $${dataPoint.valuation}B`
                            ];
                        }
                    }
                }
            }
        }
    });
}

// 5. Acquisitions Timeline
function renderAcquisitionsTimeline() {
    const container = document.getElementById('acquisitionsTimeline');
    if (!container) return;

    container.innerHTML = '';

    acquisitionsData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h3>${item.company}</h3>
                <p><strong>Amount:</strong> ${item.amount}</p>
                <p><strong>Acquirer:</strong> ${item.acquirer}</p>
                <p><strong>Founder:</strong> ${item.founder}</p>
            </div>
        `;
        container.appendChild(timelineItem);
    });
}

// Admin Functions
function addUnicorn() {
    const name = document.getElementById('unicornName').value;
    const valuation = parseFloat(document.getElementById('unicornValuation').value.replace('$', '').replace('B', ''));
    const founder = document.getElementById('unicornFounder').value;
    const sector = document.getElementById('unicornSector').value;

    if (name && valuation && founder) {
        unicornsData.push({ name, valuation, founder, sector });
        updateAdminLists();
        initUnicornsChart();
        
        // Clear form
        document.getElementById('unicornName').value = '';
        document.getElementById('unicornValuation').value = '';
        document.getElementById('unicornFounder').value = '';
    }
}

function removeUnicorn(index) {
    unicornsData.splice(index, 1);
    updateAdminLists();
    initUnicornsChart();
}

function updateGeographicChart() {
    geographicData.tier1 = parseInt(document.getElementById('tier1Count').value);
    geographicData.tier2 = parseInt(document.getElementById('tier2Count').value);
    geographicData.tier3 = parseInt(document.getElementById('tier3Count').value);
    
    initDiversityChart();
}

function addSector() {
    const sector = document.getElementById('sectorName').value;
    const count = parseInt(document.getElementById('sectorCount').value);

    if (sector && count) {
        sectorData.push({ sector, count });
        updateAdminLists();
        initSectorChart();
        
        // Clear form
        document.getElementById('sectorName').value = '';
        document.getElementById('sectorCount').value = '';
    }
}

function removeSector(index) {
    sectorData.splice(index, 1);
    updateAdminLists();
    initSectorChart();
}

function addTimelineEvent() {
    const year = parseInt(document.getElementById('timelineYear').value);
    const milestone = document.getElementById('timelineMilestone').value;
    const valuation = parseFloat(document.getElementById('timelineValuation').value) || 0;

    if (year && milestone) {
        timelineData.push({ year, milestone, valuation });
        timelineData.sort((a, b) => a.year - b.year);
        updateAdminLists();
        initTimelineChart();
        
        // Clear form
        document.getElementById('timelineYear').value = '';
        document.getElementById('timelineMilestone').value = '';
        document.getElementById('timelineValuation').value = '';
    }
}

function removeTimelineEvent(index) {
    timelineData.splice(index, 1);
    updateAdminLists();
    initTimelineChart();
}

function updateAdminLists() {
    // Update unicorns list
    const unicornsList = document.getElementById('unicornsList');
    if (unicornsList) {
        unicornsList.innerHTML = '<h4>Current Unicorns:</h4>';
        unicornsData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `
                <span>${item.name} - $${item.valuation}B (${item.founder})</span>
                <button onclick="removeUnicorn(${index})">Remove</button>
            `;
            unicornsList.appendChild(div);
        });
    }

    // Update sectors list
    const sectorsList = document.getElementById('sectorsList');
    if (sectorsList) {
        sectorsList.innerHTML = '<h4>Current Sectors:</h4>';
        sectorData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `
                <span>${item.sector} - ${item.count} companies</span>
                <button onclick="removeSector(${index})">Remove</button>
            `;
            sectorsList.appendChild(div);
        });
    }

    // Update timeline list
    const timelineList = document.getElementById('timelineList');
    if (timelineList) {
        timelineList.innerHTML = '<h4>Current Timeline Events:</h4>';
        timelineData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `
                <span>${item.year} - ${item.milestone} ($${item.valuation}B)</span>
                <button onclick="removeTimelineEvent(${index})">Remove</button>
            `;
            timelineList.appendChild(div);
        });
    }
}