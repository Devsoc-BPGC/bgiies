// BITS Pilani Entrepreneurship App - Complete Implementation

// Startup data from provided JSON
const DATA = {
    "headline_stats": {
        "total_founders": 81,
        "unicorns": 15,
        "combined_valuation": "$60+ Billion",
        "major_acquisitions": 8
    },
    "startups": [
        {
            "name": "RedBus",
            "founders": ["Phanindra Sama", "Charan Padmaraju", "Sudhakar Pasupunuri"],
            "origin_city": "Tadapaikal, Nizamabad",
            "tier": "Tier 3",
            "sector": "TravelTech",
            "valuation": "$138M (exit)",
            "status": "Acquired",
            "exit_details": "Acquired by Ibibo Group, 2013"
        },
        {
            "name": "BigBasket",
            "founders": ["Hari Menon", "V.S. Sudhakar", "Vipul Parekh", "Abhinay Choudhari", "V.S. Ramesh"],
            "origin_city": "Mumbai",
            "tier": "Tier 1",
            "sector": "E-commerce",
            "valuation": "Undisclosed (majority stake)",
            "status": "Acquired",
            "exit_details": "Majority stake acquired by Tata Digital, 2021"
        },
        {
            "name": "Strand Life Sciences",
            "founders": ["Vijay Chandru", "Ramesh Hariharan", "H S Sudarshan"],
            "origin_city": "Bangalore",
            "tier": "Tier 1",
            "sector": "Biotech",
            "valuation": "Not disclosed",
            "status": "Active",
            "exit_details": "-"
        },
        {
            "name": "Sierra Atlantic",
            "founders": ["Raju Reddy"],
            "origin_city": "Nizamabad",
            "tier": "Tier 3",
            "sector": "IT Services",
            "valuation": "Undisclosed",
            "status": "Acquired",
            "exit_details": "Acquired by Hitachi Consulting, 2010"
        },
        {
            "name": "Hotmail",
            "founders": ["Sabeer Bhatia", "Jack Smith"],
            "origin_city": "Chandigarh",
            "tier": "Tier 2",
            "sector": "Email/Internet",
            "valuation": "$400M (exit)",
            "status": "Acquired",
            "exit_details": "Acquired by Microsoft, 1998"
        },
        {
            "name": "i-flex Solutions",
            "founders": ["Rajesh Hukku"],
            "origin_city": "Jaipur/Jodhpur",
            "tier": "Tier 2",
            "sector": "FinTech Software",
            "valuation": "Undisclosed",
            "status": "Acquired",
            "exit_details": "Majority stake acquired by Oracle, 2005"
        },
        {
            "name": "SanDisk",
            "founders": ["Sanjay Mehrotra", "Eli Harari", "Jack Yuan"],
            "origin_city": "Kanpur",
            "tier": "Tier 2",
            "sector": "Semiconductors",
            "valuation": "$19B (exit)",
            "status": "Acquired",
            "exit_details": "Acquired by Western Digital, 2016"
        },
        {
            "name": "Swiggy",
            "founders": ["Sriharsha Majety", "Nandan Reddy", "Rahul Jaimini"],
            "origin_city": "Vijayawada",
            "tier": "Tier 2",
            "sector": "Food Delivery",
            "valuation": "$11B+",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "Groww",
            "founders": ["Ishan Bansal", "Lalit Keshre", "Harsh Jain", "Neeraj Singh"],
            "origin_city": "Noida",
            "tier": "Tier 1",
            "sector": "FinTech",
            "valuation": "$3B+ (est.)",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "Eruditus/Emeritus",
            "founders": ["Ashwin Damera", "Chaitanya Kalipatnapu"],
            "origin_city": "Chennai",
            "tier": "Tier 1",
            "sector": "EdTech",
            "valuation": "$3.2B",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "OfBusiness",
            "founders": ["Asish Mohapatra", "Bhuvan Gupta", "Ruchi Kalra"],
            "origin_city": "Bhubaneswar/Udhampur",
            "tier": "Tier 2/3",
            "sector": "B2B Commerce",
            "valuation": "$5B",
            "status": "Unicorn",
            "exit_details": "IPO planned 2025"
        },
        {
            "name": "Postman",
            "founders": ["Abhinav Asthana", "Ankit Sobti", "Abhijit Kane"],
            "origin_city": "Basti",
            "tier": "Tier 3",
            "sector": "SaaS/API",
            "valuation": "$7.5B",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "MPL",
            "founders": ["Shubham Malhotra", "Sai Srinivas"],
            "origin_city": "Delhi",
            "tier": "Tier 1",
            "sector": "Gaming",
            "valuation": "$2.3B",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "Onida (MIRC Electronics)",
            "founders": ["Gulu Mirchandani", "Vijay Mansukhani"],
            "origin_city": "Delhi",
            "tier": "Tier 1",
            "sector": "Consumer Electronics",
            "valuation": "Public listed",
            "status": "Listed",
            "exit_details": "-"
        },
        {
            "name": "The Hi-Tech Gears",
            "founders": ["Deep Kapuria"],
            "origin_city": "Ajmer",
            "tier": "Tier 2",
            "sector": "Manufacturing",
            "valuation": "Public listed",
            "status": "Listed",
            "exit_details": "-"
        },
        {
            "name": "Thinkerbell Labs",
            "founders": ["Sanskriti Dawle", "Aman Srivastava", "Dilip Ramesh", "Saif Shaikh"],
            "origin_city": "Pune/Lucknow",
            "tier": "Tier 1/2",
            "sector": "Assistive EdTech",
            "valuation": "Undisclosed",
            "status": "Active",
            "exit_details": "-"
        },
        {
            "name": "Zeta",
            "founders": ["Bhavin Turakhia", "Ramki Gaddipati"],
            "origin_city": "Mumbai",
            "tier": "Tier 1",
            "sector": "FinTech",
            "valuation": "$1.45B",
            "status": "Unicorn",
            "exit_details": "-"
        },
        {
            "name": "Media.net",
            "founders": ["Divyank Turakhia"],
            "origin_city": "Mumbai",
            "tier": "Tier 1",
            "sector": "AdTech",
            "valuation": "$900M (exit)",
            "status": "Acquired",
            "exit_details": "Sold to Chinese consortium, 2016"
        },
        {
            "name": "Zivame",
            "founders": ["Richa Kar"],
            "origin_city": "Jamshedpur",
            "tier": "Tier 2",
            "sector": "E-commerce",
            "valuation": "$90M (est.)",
            "status": "Acquired",
            "exit_details": "Minority stake sold to Reliance Retail, 2021"
        },
        {
            "name": "FoodKing",
            "founders": ["Saratbabu Elumalai"],
            "origin_city": "Chennai",
            "tier": "Tier 1",
            "sector": "Food Services",
            "valuation": "Undisclosed",
            "status": "Active",
            "exit_details": "-"
        },
        {
            "name": "MapmyIndia",
            "founders": ["Rakesh Verma", "Rashmi Verma"],
            "origin_city": "Patna",
            "tier": "Tier 2",
            "sector": "Mapping",
            "valuation": "$1B (Listed)",
            "status": "Listed",
            "exit_details": "IPO 2021"
        },
        {
            "name": "Jaypee Group",
            "founders": ["Manoj Gaur"],
            "origin_city": "Meerut",
            "tier": "Tier 2",
            "sector": "Infrastructure",
            "valuation": "Public",
            "status": "Listed",
            "exit_details": "-"
        },
        {
            "name": "GreyOrange",
            "founders": ["Samay Kohli", "Akash Gupta"],
            "origin_city": "Delhi/Jaipur",
            "tier": "Tier 1/2",
            "sector": "Robotics",
            "valuation": "$500M+",
            "status": "Active",
            "exit_details": "-"
        },
        {
            "name": "Akamai Technologies",
            "founders": ["Preetish Nijhawan", "Daniel Lewin", "Tom Leighton", "Jonathan Seelig"],
            "origin_city": "Hyderabad",
            "tier": "Tier 1",
            "sector": "Internet Infrastructure",
            "valuation": "$16B+",
            "status": "Listed",
            "exit_details": "NASDAQ"
        },
        {
            "name": "SemIndia",
            "founders": ["Vinod Agarwal"],
            "origin_city": "Mathura",
            "tier": "Tier 2",
            "sector": "Semiconductor",
            "valuation": "Defunct",
            "status": "Closed",
            "exit_details": "-"
        },
        {
            "name": "LogicVision",
            "founders": ["Vinod Agarwal"],
            "origin_city": "Mathura",
            "tier": "Tier 2",
            "sector": "EDA",
            "valuation": "Acquired",
            "status": "Acquired",
            "exit_details": "Acquired by Synopsys, 2009"
        },
        {
            "name": "Amkette",
            "founders": ["Rajiv Bapna"],
            "origin_city": "Udaipur",
            "tier": "Tier 3",
            "sector": "Consumer Electronics",
            "valuation": "Private",
            "status": "Active",
            "exit_details": "-"
        },
        {
            "name": "Compucom Software",
            "founders": ["Surendra Kumar Surana"],
            "origin_city": "Bihar",
            "tier": "Tier 2",
            "sector": "IT Services",
            "valuation": "Public listed",
            "status": "Listed",
            "exit_details": "-"
        },
        {
            "name": "Jan TV",
            "founders": ["Surendra Kumar Surana"],
            "origin_city": "Bihar",
            "tier": "Tier 2",
            "sector": "Media",
            "valuation": "Private",
            "status": "Active",
            "exit_details": "-"
        },
    {
        "name": "SHREE VATSA TECHNOLOGIES PVT LTD",
        "founders": ["Ramnarayan D.S."],
        "origin_city": "Shivamogga",
        "tier": "Tier 3",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Johari Digital Healthcare Ltd.",
        "founders": ["SATYENDRA A. JOHARI"],
        "origin_city": "Jodhpur",
        "tier": "Tier 2",
        "sector": "Biotech",
        "valuation": "₹229 Cr (51% stake acquisition value, 2023)",
        "status": "Partially Acquired",
        "exit_details": "51% stake acquired by Syrma SGS, 2023"
    },
    {
        "name": "Georgia Institute of Technology, 'EIR'",
        "founders": ["Suresh K. Sharma"],
        "origin_city": "Roswell, Georgia",
        "tier": "International",
        "sector": "EdTech",
        "valuation": "Academic Institution",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Techno India NJR Institute of Technology affiliated to rajasthan technical university",
        "founders": ["RAJ SHEKHAR VYAS"],
        "origin_city": "Udaipur",
        "tier": "Tier 2",
        "sector": "EdTech",
        "valuation": "Educational Institution",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Sentient Solutions for Accounting",
        "founders": ["Venkat Sharma"],
        "origin_city": "Louisville, Kentucky",
        "tier": "International",
        "sector": "FinTech",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Semlux Technologies, Inc.",
        "founders": ["Jagannathan Ravi"],
        "origin_city": "Chennai",
        "tier": "Tier 1",
        "sector": "Semiconductors",
        "valuation": "$55.4M market cap (public company)",
        "status": "Public",
        "exit_details": "IPO on NASDAQ, June 2022"
    },
    {
        "name": "Software Tree, LLC",
        "founders": ["Damodar Periwal"],
        "origin_city": "Campbell, California",
        "tier": "International",
        "sector": "SaaS/API",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "ThinkStreet Technologies",
        "founders": ["NAGENDRA VENKASWAMY"],
        "origin_city": "Bangalore/Bengaluru",
        "tier": "Tier 1",
        "sector": "B2B Commerce",
        "valuation": "₹1 lakh paid-up capital",
        "status": "Strike Off",
        "exit_details": "Company struck off"
    },
    {
        "name": "Zevigo Solutions Pte Ltd",
        "founders": ["Nans Narayanan."],
        "origin_city": "Singapore",
        "tier": "International",
        "sector": "Biotech",
        "valuation": "Seed funded (2023, amount undisclosed)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "7i security solution deccan infotech",
        "founders": ["Amit Gupta"],
        "origin_city": "Vadodara",
        "tier": "Tier 2",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Quantrium Tech Pvt Ltd",
        "founders": ["B Rabindranath"],
        "origin_city": "Chennai",
        "tier": "Tier 1",
        "sector": "SaaS/API",
        "valuation": "Private company (incorporated 2019)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Omang Technolgies LLC",
        "founders": ["Pavan Gupta"],
        "origin_city": "Dubai",
        "tier": "International",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Drsya Technologies Pvt Ltd",
        "founders": ["Ajit Rao"],
        "origin_city": "Bangalore/Bengaluru",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "ISG Software (P) Ltd",
        "founders": ["PAWAN JAIN"],
        "origin_city": "New Delhi",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "₹1.25 lakh paid-up capital",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Extensio Software, Inc.",
        "founders": ["Sangeeta Patni nee Samar"],
        "origin_city": "Nagpur",
        "tier": "Tier 2",
        "sector": "SaaS/API",
        "valuation": "₹9.27 lakh paid-up capital",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Sensorise Digital Services Private Limited",
        "founders": ["Rajeev Arora"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "₹2.72 Cr paid-up capital",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "zesta technology group",
        "founders": ["Atul Saran"],
        "origin_city": "Indore",
        "tier": "Tier 2",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Accrete Solutions",
        "founders": ["Ashish Saxena"],
        "origin_city": "Redmond, Washington",
        "tier": "International",
        "sector": "IT Services",
        "valuation": "$6.7M annual revenue (estimated)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Radiant Consulting Solutions",
        "founders": ["scdiwan"],
        "origin_city": "",
        "tier": "",
        "sector": "B2B Commerce",
        "valuation": "Private consulting firm",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "icamore ventures an investment management venture",
        "founders": ["Ivy Rajesh"],
        "origin_city": "",
        "tier": "",
        "sector": "FinTech",
        "valuation": "Private investment firm",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Altigreen Propulsion Labs",
        "founders": ["Shalendra Gupta"],
        "origin_city": "Dehradun",
        "tier": "Tier 2",
        "sector": "Manufacturing",
        "valuation": "$350M (2023 funding target), $40M raised in 2022",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Stanra Tech Solutions. Cloud Solutions, Digital Integration, Data and AI.",
        "founders": ["Ravinder Gupta (RK)"],
        "origin_city": "Delhi/Noida",
        "tier": "Tier 1",
        "sector": "SaaS/API",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Trifecta Capital Advisors LLP",
        "founders": ["Nilesh Kothari"],
        "origin_city": "Delhi",
        "tier": "Tier 1",
        "sector": "FinTech",
        "valuation": "AUM $567.6M (2024), Fund-IV target ₹2000 Cr",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Flutura Decision Sciences & Analytics",
        "founders": ["Derick Jose"],
        "origin_city": "Trichy, Tamil Nadu",
        "tier": "Tier 2",
        "sector": "SaaS/API",
        "valuation": "$45–47M (2018); undisclosed at acquisition",
        "status": "Acquired",
        "exit_details": "Acquired by Accenture, 2023"
    },
    {
        "name": "Bisquare Systems Pvt. Ltd.",
        "founders": ["Ramendra S. Baoni"],
        "origin_city": "Darjeeling",
        "tier": "Tier 3",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Hearth Ventures LLP",
        "founders": ["Vinayak Kamath"],
        "origin_city": "Mumbai",
        "tier": "Tier 1",
        "sector": "FinTech",
        "valuation": "Private investment firm",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Sruta Digital Solutions",
        "founders": ["ANIL KUMAR MANGALAMPALLI"],
        "origin_city": "Andhra Pradesh",
        "tier": "Tier 2",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "TIBIL Solutions",
        "founders": ["Srihari Allamsetti"],
        "origin_city": "Bengaluru",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "POSIDEX TECHNOLOGIES P LTD",
        "founders": ["Bhavani Shanker Chitoor"],
        "origin_city": "Hyderabad",
        "tier": "Tier 1",
        "sector": "SaaS/API",
        "valuation": "Private company, 31 enterprise customers",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Arani Power Systems Ltd, Hyderabad",
        "founders": ["Ramesh Yerramsetti"],
        "origin_city": "Hyderabad",
        "tier": "Tier 1",
        "sector": "Infrastructure",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Sparksoft Corporation",
        "founders": ["Sundi Natarajan"],
        "origin_city": "Tiruchirappalli",
        "tier": "Tier 2",
        "sector": "IT Services",
        "valuation": "$40.7M annual revenue (estimated)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Oasis Technologies",
        "founders": ["Ajay Kalantri"],
        "origin_city": "Pune",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "Private company (founded 2009)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "JAZZ Solar Solutions",
        "founders": ["Ketan Bhalla"],
        "origin_city": "Canada",
        "tier": "International",
        "sector": "Infrastructure",
        "valuation": "Private company (founded 2009)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "TechAsia Lab Pvt Ltd",
        "founders": ["Amitav Bhattacharjee"],
        "origin_city": "Bengaluru",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "Private company (founded 2020)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "LatentView Analytics Pvt Ltd",
        "founders": ["Pramad Jandhyala"],
        "origin_city": "Chennai",
        "tier": "Tier 1",
        "sector": "SaaS/API",
        "valuation": "IPO 2021, ₹600 Cr issue",
        "status": "Public",
        "exit_details": "IPO on BSE/NSE, November 2021"
    },
    {
        "name": "noah data",
        "founders": ["Ram Sukumar"],
        "origin_city": "Chennai",
        "tier": "Tier 1",
        "sector": "SaaS/API",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Pival Infotech",
        "founders": ["Prashant Rai"],
        "origin_city": "Edison, New Jersey",
        "tier": "International",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "RC2 Pharma Solutions",
        "founders": ["Raghunandan H V"],
        "origin_city": "Mysuru",
        "tier": "Tier 2",
        "sector": "Biotech",
        "valuation": "Private consulting firm",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "tech.powersquare",
        "founders": ["Anandaram Katragadda"],
        "origin_city": "Bengaluru",
        "tier": "Tier 1",
        "sector": "Consumer Electronics",
        "valuation": "$1M funding from founders (2013)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "N-Axis Software Technologies Pvt Ltd",
        "founders": ["Subash Bgk"],
        "origin_city": "Hyderabad",
        "tier": "Tier 1",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "ICC Fintech",
        "founders": ["Amit Goenka"],
        "origin_city": "Dubai/Noida",
        "tier": "International",
        "sector": "FinTech",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "PGR Infotech",
        "founders": ["Panchavarnam Ramasamy"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "SiConTech",
        "founders": ["Naveen Chava"],
        "origin_city": "",
        "tier": "",
        "sector": "Semiconductors",
        "valuation": "Active since 2010",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "TenY Technologies Inc",
        "founders": ["Satish Avuthu"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "area17. \nWe are hiring talented robotics engineers and software developers!",
        "founders": ["Aveek Kumar Das"],
        "origin_city": "",
        "tier": "",
        "sector": "Robotics",
        "valuation": "",
        "status": "",
        "exit_details": ""
    },
    {
        "name": "RainKraft Creative Solutions",
        "founders": ["Subha Chandrasekaran"],
        "origin_city": "",
        "tier": "",
        "sector": "Media",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "AAIS Global LLC (US), AAIS Arabia (Dubai), AAIS India (Arihant Adroit InfoSystems)",
        "founders": ["Amit Jain"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "Private multinational company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Dextara Digital",
        "founders": ["Sreekanth Lapala"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Maapan Labs Private Limited",
        "founders": ["Dr. PBN Prasad"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "resonance data management",
        "founders": ["Shishir Kapoor"],
        "origin_city": "",
        "tier": "",
        "sector": "SaaS/API",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Cardiotrack",
        "founders": ["Ashim Roy", "Avin Agarwal"],
        "origin_city": "Bangalore",
        "tier": "Tier 1",
        "sector": "HealthTech",
        "valuation": "Private company, healthcare IoT startup",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Diligent Mobile",
        "founders": ["Shiva Sharma"],
        "origin_city": "Delhi",
        "tier": "Tier 1",
        "sector": "Mobile Technology",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Eltropy",
        "founders": ["Chandra Bhople", "Ashish Garg", "Ranjith Subramanian"],
        "origin_city": "",
        "tier": "",
        "sector": "FinTech",
        "valuation": "Private company, founded 2013",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Realty Goa (Vistascope Realty LLP)",
        "founders": ["Anondo Barua"],
        "origin_city": "Goa",
        "tier": "Tier 2",
        "sector": "Real Estate",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "TransformWithVA Pte Ltd",
        "founders": ["Virender Aggarwal"],
        "origin_city": "",
        "tier": "",
        "sector": "Consulting",
        "valuation": "Private company, founded 2023",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "PlanetScale",
        "founders": ["Sugu Sougoumarane", "others"],
        "origin_city": "",
        "tier": "",
        "sector": "SaaS/Database",
        "valuation": "Database-as-a-Service platform, significant funding",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Centime Inc",
        "founders": ["B.C. Krishna"],
        "origin_city": "",
        "tier": "",
        "sector": "FinTech",
        "valuation": "Boston-based cash management platform",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Newco, Stealth Mode",
        "founders": ["Ajay Madhok"],
        "origin_city": "",
        "tier": "",
        "sector": "Technology",
        "valuation": "Stealth mode startup",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Mojo Networks",
        "founders": ["Kiran Deshpande", "Dr. Pravin Bhagwat"],
        "origin_city": "Pune",
        "tier": "Tier 1",
        "sector": "Networking/WiFi",
        "valuation": "Cloud-based WiFi intrusion prevention",
        "status": "Acquired",
        "exit_details": "Acquired by Arista Networks"
    },
    {
        "name": "Tripshelf",
        "founders": ["Jai Raj Gupta", "Dhruv Raj Gupta", "Sukhmani Singh"],
        "origin_city": "Delhi",
        "tier": "Tier 1",
        "sector": "Travel Tech",
        "valuation": "$235,000 raised in pre-Series A (2016)",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "People Sculptors",
        "founders": ["Sidharath Tuli"],
        "origin_city": "Gurgaon",
        "tier": "Tier 1",
        "sector": "Consulting",
        "valuation": "Professional training and coaching company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Ritu's Nest",
        "founders": ["Ritu Vaish"],
        "origin_city": "Hyderabad",
        "tier": "Tier 1",
        "sector": "EdTech",
        "valuation": "Educational services company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Garphi Biosciences Private Limited",
        "founders": ["Venkat Kamalakar Bundla"],
        "origin_city": "",
        "tier": "",
        "sector": "Biotech",
        "valuation": "Private company, founded 2007",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Teamium.io",
        "founders": ["Ashok Sharma", "others"],
        "origin_city": "",
        "tier": "",
        "sector": "SaaS/Media Production",
        "valuation": "$5.7M revenue, founded 2017",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "LiveWire Software Pvt Ltd",
        "founders": ["Sunil Jha"],
        "origin_city": "Surat",
        "tier": "Tier 2",
        "sector": "IT Services/ERP",
        "valuation": "ERP products for manufacturing, founded 1995",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "ConnectHub",
        "founders": ["Udayan Dravid"],
        "origin_city": "",
        "tier": "",
        "sector": "Digital Marketing",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "NavaDhiti",
        "founders": ["Bachi Allamsetty", "Achaiah P M"],
        "origin_city": "",
        "tier": "",
        "sector": "IT Services / Social Impact",
        "valuation": "75+ member team, 5 years of operations",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Higher Education Skill Development and Research Center",
        "founders": ["NAGAVI B G"],
        "origin_city": "",
        "tier": "",
        "sector": "EdTech",
        "valuation": "Educational Institution",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Transasia Bio-Medicals Ltd",
        "founders": ["Ashok Pandey"],
        "origin_city": "",
        "tier": "",
        "sector": "Biotech",
        "valuation": "₹250 startup capital, now major diagnostics company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Vatt Vriksh Consultants",
        "founders": ["Mridula Sankhyayan"],
        "origin_city": "Bangalore",
        "tier": "Tier 1",
        "sector": "Consulting",
        "valuation": "Private company",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Avina Holdings",
        "founders": ["Narinder J Singh"],
        "origin_city": "",
        "tier": "",
        "sector": "Investment Management",
        "valuation": "Successful exit from Utopia Global",
        "status": "Active",
        "exit_details": "Utopia Global acquired by Prometheus Group, 2020"
    },
    {
        "name": "Nextuple Inc",
        "founders": ["Laxman Mandayam", "Darpan Seth", "Devadas Pattathil"],
        "origin_city": "",
        "tier": "",
        "sector": "SaaS / E-commerce",
        "valuation": "Omni-channel fulfillment platform",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Posidex Technologies",
        "founders": ["Bhavani S. Chitoor"],
        "origin_city": "Hyderabad",
        "tier": "Tier 1",
        "sector": "SaaS / Data Mgmt",
        "valuation": "Private company, 31 enterprise customers",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "SingX Pte Ltd",
        "founders": ["Atul Garg"],
        "origin_city": "",
        "tier": "",
        "sector": "FinTech",
        "valuation": "P2P Currency Exchange platform",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "100Books Initiative",
        "founders": ["Vijay Mehra"],
        "origin_city": "",
        "tier": "",
        "sector": "EdTech",
        "valuation": "Non-profit educational initiative",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Silicon Road Ventures",
        "founders": ["Sid Mookerji"],
        "origin_city": "",
        "tier": "",
        "sector": "Venture Capital",
        "valuation": "Early-stage VC fund, two funds active",
        "status": "Active",
        "exit_details": "Previous company SPI acquired by Cognizant"
    },
    {
        "name": "Bewgle",
        "founders": ["Ganga Kumar"],
        "origin_city": "",
        "tier": "",
        "sector": "SaaS / AI Analytics",
        "valuation": "SAP.iO Techstars cohort",
        "status": "Acquired",
        "exit_details": "Acquired by Acceldata, 2024"
    },
    {
        "name": "SusaKGjyo",
        "founders": ["Sunil Mudgal"],
        "origin_city": "",
        "tier": "",
        "sector": "Business Services",
        "valuation": "₹70,000 paid-up capital",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "FR&DA University",
        "founders": ["Prof. Balu Prakash"],
        "origin_city": "Campbell Bay",
        "tier": "Tier 3",
        "sector": "EdTech",
        "valuation": "Educational Institution",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "The Wakhlu Advisory",
        "founders": ["Bharat Wakhlu"],
        "origin_city": "",
        "tier": "",
        "sector": "Consulting",
        "valuation": "Strategic consulting firm",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Netskope",
        "founders": ["Krishna Narayanaswamy"],
        "origin_city": "",
        "tier": "",
        "sector": "Cyber-security",
        "valuation": "$7.5B+",
        "status": "Unicorn",
        "exit_details": ""
    },
    {
        "name": "Forus Health",
        "founders": ["Chandrasekhar K"],
        "origin_city": "",
        "tier": "",
        "sector": "HealthTech",
        "valuation": "Marquee investors: Accel, IDG Ventures",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Peer Connexions",
        "founders": ["Shailendra Gupta", "Ramesh Nair", "Jaishankar Krishnan"],
        "origin_city": "",
        "tier": "",
        "sector": "B2B SaaS",
        "valuation": "B2B E-Commerce platform",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "Omega VAS",
        "founders": ["Venkat Annapareddy"],
        "origin_city": "",
        "tier": "",
        "sector": "IoT / Automation",
        "valuation": "IoT-based automation solutions",
        "status": "Active",
        "exit_details": ""
    },
    {
        "name": "tiny magiq",
        "founders": ["Sukumar Rajagopal", "Kumaran Anandan"],
        "origin_city": "",
        "tier": "",
        "sector": "Digital Transformation",
        "valuation": "$40M+ business impact created for clients",
        "status": "Active",
        "exit_details": ""
    }


// Export for use in modules (optional)
// module.exports = companies;

// Export for use in modules (optional)
// module.exports = companies;


    ]
};

// Global variables
let filteredStartups = DATA.startups;
let chart = null;
let showAllStartups = false; // ADD THIS LINE

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initStatsCounter();
    initStartupsTable();
    initFilters();
    initChart();
    initScrollAnimations();
    initMobileMenu();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 50;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Stats counter animation
function initStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card');
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        const statsData = {
            'founders': { target: 1900, suffix: '+' },
            'valuation': { target: 60, suffix: 'B+' },
            'unicorns': { target: 15, suffix: '' },
            'employment' : { target: 113, suffix: 'K+'}
        
        };
        
        statCards.forEach(card => {
            const statType = card.getAttribute('data-stat');
            const numberElement = card.querySelector('.stat-number');
            const data = statsData[statType];
            
            if (data && numberElement) {
                animateNumber(numberElement, 0, data.target, data.suffix, 2000);
            }
        });
        
        hasAnimated = true;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        observer.observe(heroSection);
    }
}

function animateNumber(element, start, end, suffix, duration) {
    const startTime = performance.now();
    const originalText = element.textContent;
    const hasPrefix = originalText.includes('$');
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * easeOutQuart);
        
        element.textContent = (hasPrefix ? '$' : '') + current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Startups table functionality
function initStartupsTable() {
    renderStartupsTable();
    
    // Add event listener for view all button
    const viewAllButton = document.getElementById('viewAllButton');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', toggleViewAll);
    }
}

function renderStartupsTable() {
    const tableBody = document.getElementById('startupsTableBody');
    const resultsCount = document.getElementById('resultsCount');
    const viewAllButton = document.getElementById('viewAllButton');
    
    if (!tableBody || !resultsCount) return;

    tableBody.innerHTML = '';
    
    // Determine how many startups to show
    const startupsToShow = showAllStartups ? filteredStartups : filteredStartups.slice(0, 10);
    
    startupsToShow.forEach(startup => {
        const row = document.createElement('tr');
        // Get tier class for styling
        const tierClass = startup.tier.toLowerCase().replace(/[^a-z0-9]/g, '-');
        row.innerHTML = `
            <td class="company-name">${startup.name}</td>
            <td class="founders">${startup.founders.join(', ')}</td>
            <td class="origin-city">
                ${startup.origin_city} 
                <span class="tier-badge ${tierClass}">${startup.tier}</span>
            </td>
            <td class="sector">${startup.sector}</td>
            <td class="valuation">${startup.valuation}</td>
            <td class="status">
                <span class="status-badge ${startup.status.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${startup.status}</span>
            </td>
            <td class="exit-details">${startup.exit_details}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update results count
    resultsCount.textContent = `Showing ${startupsToShow.length} of ${filteredStartups.length} startups`;
    
    // Update button visibility and text
    if (viewAllButton) {
        if (filteredStartups.length > 10) {
            viewAllButton.style.display = 'block';
            viewAllButton.textContent = showAllStartups ? 'Show Less' : 'View All Directory';
        } else {
            viewAllButton.style.display = 'none';
        }
    }
}
function toggleViewAll() {
    showAllStartups = !showAllStartups;
    renderStartupsTable();
    
    // Scroll to table if showing all
    if (showAllStartups) {
        const tableSection = document.querySelector('#startups');
        if (tableSection) {
            tableSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}


function getStatusClass(status) {
    switch(status) {
        case 'Unicorn': return 'warning';
        case 'Acquired': return 'success';
        case 'Listed': return 'info';
        case 'Active': return 'info';
        case 'Closed': return 'error';
        default: return 'info';
    }
}

// Filter functionality
function initFilters() {
    const searchInput = document.getElementById('searchInput');
    const tierFilter = document.getElementById('tierFilter');
    const sectorFilter = document.getElementById('sectorFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', throttle(applyFilters, 300));
    }
    
    if (tierFilter) {
        tierFilter.addEventListener('change', applyFilters);
    }
    
    if (sectorFilter) {
        sectorFilter.addEventListener('change', applyFilters);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', applyFilters);
    }
}
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const sectorFilter = document.getElementById('sectorFilter').value;
    const tierFilter = document.getElementById('tierFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    filteredStartups = DATA.startups.filter(startup => {
        // Search filter (name, founders, sector, origin city, status, exit details)
        const matchesSearch =
            !searchTerm ||
            (startup.name && startup.name.toLowerCase().includes(searchTerm)) ||
            (startup.founders && startup.founders.some(founder => founder.toLowerCase().includes(searchTerm))) ||
            (startup.sector && startup.sector.toLowerCase().includes(searchTerm)) ||
            (startup.origin_city && startup.origin_city.toLowerCase().includes(searchTerm)) ||
            (startup.status && startup.status.toLowerCase().includes(searchTerm)) ||
            (startup.exit_details && startup.exit_details.toLowerCase().includes(searchTerm));

        // Tier filter
        const matchesTier = !tierFilter || (startup.tier && startup.tier.trim() === tierFilter);
        // Sector filter
        const matchesSector = !sectorFilter || (startup.sector && startup.sector === sectorFilter);
        // Status filter
        const matchesStatus = !statusFilter || (startup.status && startup.status === statusFilter);

        return matchesSearch && matchesTier && matchesSector && matchesStatus;
    });

    renderStartupsTable();
    // Optionally update results count if you have a function for it
    // updateResultsCount();
}


// Chart functionality
function initChart() {
    const canvas = document.getElementById('tierChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Filter out companies without legitimate tier information
    const validTierCompanies = DATA.startups.filter(startup => {
        const tier = startup.tier?.trim();
        return tier && (tier === 'Tier 1' || tier === 'Tier 2' || tier === 'Tier 3');
    });

    // Calculate tier distribution from filtered data
    const tierCounts = validTierCompanies.reduce((acc, startup) => {
        const tier = startup.tier.trim();
        acc[tier] = (acc[tier] || 0) + 1;
        return acc;
    }, {});

    // Prepare chart data
    const chartData = {
        labels: Object.keys(tierCounts),
        datasets: [{
            data: Object.values(tierCounts),
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 0,
            hoverOffset: 4
        }]
    };

    // Create chart
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = validTierCompanies.length;
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} companies (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Update geography statistics after chart is created
    updateGeographyStats();
}

function updateGeographyStats() {
    // Filter companies with valid tier information
    const validTierCompanies = DATA.startups.filter(startup => {
        const tier = startup.tier?.trim();
        return tier && (tier === 'Tier 1' || tier === 'Tier 2' || tier === 'Tier 3');
    });

    const tierStats = validTierCompanies.reduce((acc, startup) => {
        const tier = startup.tier.trim();
        if (!acc[tier]) {
            acc[tier] = {
                count: 0,
                cities: new Set()
            };
        }
        acc[tier].count++;
        if (startup.origin_city && startup.origin_city.trim()) {
            acc[tier].cities.add(startup.origin_city.trim());
        }
        return acc;
    }, {});

    const total = validTierCompanies.length;

    // Update DOM elements for each tier
    Object.keys(tierStats).forEach(tier => {
        const tierData = tierStats[tier];
        const percentage = ((tierData.count / total) * 100).toFixed(1);
        
        const tierClass = tier.toLowerCase().replace(' ', '-');
        const tierElement = document.querySelector(`.tier-card.${tierClass}`);
        
        if (tierElement) {
            // Update count
            const countElement = tierElement.querySelector('.tier-count');
            if (countElement) {
                countElement.textContent = tierData.count;
            }
            
            // Update percentage
            const percentageElement = tierElement.querySelector('.tier-percentage');
            if (percentageElement) {
                percentageElement.textContent = `${percentage}%`;
            }
            
            // Update cities
            const citiesContainer = tierElement.querySelector('.tier-cities');
            if (citiesContainer) {
                citiesContainer.innerHTML = '';
                Array.from(tierData.cities).forEach(city => {
                    const cityTag = document.createElement('span');
                    cityTag.className = 'city-tag';
                    cityTag.textContent = city;
                    citiesContainer.appendChild(cityTag);
                });
            }
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(
        '.unicorn-card, .tier-card, .timeline-item, .ecosystem-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navContent = document.querySelector('.nav-content');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navbar || !navContent || !navMenu) return;
    
    // Create mobile menu toggle button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Add mobile menu styles
    const mobileMenuStyles = `
        .mobile-menu-btn {
            display: none;
            flex-direction: column;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
        }
        
        .mobile-menu-btn span {
            width: 25px;
            height: 3px;
            background: var(--color-bits-primary);
            margin: 2px 0;
            transition: 0.3s;
            border-radius: 3px;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: flex;
            }
            
            .nav-menu {
                position: fixed;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--color-surface);
                border-top: 1px solid var(--color-border);
                flex-direction: column;
                padding: var(--space-20);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                box-shadow: var(--shadow-lg);
            }
            
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-menu li {
                margin: var(--space-8) 0;
            }
            
            .nav-menu a {
                display: block;
                padding: var(--space-12);
                text-align: center;
                border-radius: var(--radius-base);
                transition: all 0.3s ease;
            }
            
            .nav-menu a:hover {
                background: var(--color-secondary);
            }
        }
    `;
    
    // Add styles to document
    const style = document.createElement('style');
    style.textContent = mobileMenuStyles;
    document.head.appendChild(style);
    
    // Add mobile menu button to navbar
    navContent.appendChild(mobileMenuBtn);
    
    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Utility functions
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Enhanced table interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for table rows
    document.addEventListener('click', function(e) {
        if (e.target.closest('.startups-table tr')) {
            const row = e.target.closest('tr');
            if (row && row.parentElement.tagName === 'TBODY') {
                // Add subtle highlight effect
                row.style.backgroundColor = 'var(--color-bits-secondary)';
                row.style.color = 'white';
                
                setTimeout(() => {
                    row.style.backgroundColor = '';
                    row.style.color = '';
                }, 300);
            }
        }
    });
});

// Performance optimization: lazy load chart
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !chart) {
            initChart();
            chartObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const chartSection = document.getElementById('geography');
    if (chartSection) {
        chartObserver.observe(chartSection);
    }
});

// Enhanced accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add aria labels to interactive elements
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.setAttribute('aria-label', 'Search startups by name, founder, or sector');
    }
    
    const filters = document.querySelectorAll('select[id$="Filter"]');
    filters.forEach(filter => {
        const label = filter.id.replace('Filter', '');
        filter.setAttribute('aria-label', `Filter by ${label}`);
    });
    
    // Add keyboard navigation for cards
    const cards = document.querySelectorAll('.unicorn-card, .tier-card, .ecosystem-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Add smooth scrolling fallback for older browsers
if (!CSS.supports('scroll-behavior', 'smooth')) {
    const links = document.querySelectorAll('.nav-menu a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}