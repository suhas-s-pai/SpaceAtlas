// SPACE ATLAS Data Store - India's Space Software Ecosystem
// Content compiled for Agnirva Internship Project Synthesis by Suhas S Pai (Computer Science & Engineering)

export const ECOSYSTEM_LAYERS = [
  {
    id: 'flight-software',
    number: '01',
    title: 'Flight Software',
    subtitle: 'Onboard Control & Subsystem Management',
    category: 'Space Segment',
    summary: 'Real-time software operating within spacecraft computers to manage attitude control, power distribution, thermal balance, telemetry generation, and command execution.',
    description: 'Flight software (FSW) forms the digital central nervous system of any spacecraft or satellite. Operating under strict hard real-time constraints, it interfaces directly with hardware sensors (star trackers, gyroscopes, sun sensors) and actuators (reaction wheels, thrusters, solar array drives) to maintain orbital position and orientation.',
    keyFunctions: [
      'Attitude and Orbit Control Software (AOCS)',
      'Autonomous fault detection, isolation, and recovery (FDIR)',
      'Subsystem health monitoring and housekeeping packet generation',
      'Payload mode scheduling and execution management',
      'Onboard time synchronization and command processing'
    ],
    technicalHighlights: [
      'Deterministic real-time operating system (RTOS) kernels',
      'Radiation-tolerant bus interface protocols (MIL-STD-1553, SpaceWire, CAN)',
      'Triple-modular redundancy (TMR) for critical execution paths',
      'Memory management with error correction code (ECC) checks'
    ],
    icon: 'Cpu',
    color: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-500/40',
    accentColor: '#00f0ff'
  },
  {
    id: 'ground-systems',
    number: '02',
    title: 'Ground Systems',
    subtitle: 'Telemetry Acquisition & Command Control',
    category: 'Ground Segment',
    summary: 'Software infrastructure that bridges spacecraft and mission operators, orchestrating tracking, command generation, telemetry demodulation, and orbit determination.',
    description: 'Ground software systems handle ground station operations, antenna positioning, telemetry reception, data de-packetization, and telecommand transmission. They process raw RF downlinks into engineered values and ensure secure, error-free uplinks to active space assets.',
    keyFunctions: [
      'Telemetry reception, de-multiplexing, and engineering value conversion',
      'Telecommand building, validation, cryptographic signing, and transmission',
      'Ground station antenna tracking and pass prediction calculations',
      'Orbit determination and propagation calculations using radar/ranging data',
      'Multi-mission operations scheduling and automation'
    ],
    technicalHighlights: [
      'CCSDS (Consultative Committee for Space Data Systems) standard protocols',
      'High-throughput real-time stream demuxing engines',
      'Distributed ground station network integration APIs',
      'Secure command validation loops with operator sign-off'
    ],
    icon: 'Radio',
    color: 'from-blue-500/20 to-indigo-600/20',
    borderColor: 'border-blue-500/40',
    accentColor: '#3b82f6'
  },
  {
    id: 'navigation-positioning',
    number: '03',
    title: 'Navigation & Positioning',
    subtitle: 'Signal Processing & Timing Architecture',
    category: 'Positioning & PNT',
    summary: 'Algorithms and software engines that translate satellite navigation signals into high-precision location, velocity, and UTC time synchronization services.',
    description: 'Navigation software processes pseudo-range measurements, carrier phase data, and broadcast ephemeris to calculate precise user position, velocity, and time (PVT). In the Indian space ecosystem, this encompasses receiver software, ground reference station differential processing, and service distribution infrastructure.',
    keyFunctions: [
      'Satellite signal acquisition, tracking loops, and bit synchronization',
      'Ephemeris decoding and satellite clock error correction',
      'Multi-frequency ionospheric and tropospheric delay modeling',
      'Receiver position-velocity-time (PVT) state estimation algorithms',
      'Precise Point Positioning (PPP) and differential corrections'
    ],
    technicalHighlights: [
      'Extended Kalman Filtering (EKF) for kinematic state estimation',
      'Dual-frequency (L5 and S-band) ionospheric delay mitigation algorithms',
      'Nanosecond-level UTC time synchronization routines',
      'Integrity monitoring and satellite health flag validation'
    ],
    icon: 'Navigation',
    color: 'from-indigo-500/20 to-violet-600/20',
    borderColor: 'border-indigo-500/40',
    accentColor: '#6366f1'
  },
  {
    id: 'data-processing',
    number: '04',
    title: 'Data Processing',
    subtitle: 'Raw Sensor Ingestion & Radiometric Calibration',
    category: 'Data Infrastructure',
    summary: 'High-throughput pipelines converting raw sensor downlinks into calibrated, georeferenced, standard Level-1/2 data products ready for scientific analysis.',
    description: 'Raw satellite downlinks consist of compressed binary sensor frames. Data processing software ingests these downlinks, corrects for sensor noise, applies radiometric calibration, calculates precise camera geometry, and projects pixels onto geographic grids.',
    keyFunctions: [
      'Automated ingest of raw payload downlinks from ground stations',
      'Radiometric calibration and sensor detector non-uniformity correction',
      'Geometric correction and orthorectification using DEM elevation data',
      'Level-0 to Level-3 standardized space data product generation',
      'Cloud masking, atmospheric correction, and metadata tagging'
    ],
    technicalHighlights: [
      'High-performance parallel tile-processing pipelines',
      'COTG (Continuous Ortho-rectified Tile Generation) algorithms',
      'HDF5 and Cloud-Optimized GeoTIFF (COG) data formatting',
      'Automated spatial index generation and catalog archiving'
    ],
    icon: 'Database',
    color: 'from-cyan-500/20 to-teal-600/20',
    borderColor: 'border-teal-500/40',
    accentColor: '#14b8a6'
  },
  {
    id: 'simulation-testing',
    number: '05',
    title: 'Simulation & Testing',
    subtitle: 'Digital Twins & Hardware-in-the-Loop Validation',
    category: 'Verification & QA',
    summary: 'Software testbeds and digital twin simulators used to model space environments, orbital dynamics, and hardware interfaces before actual mission launch.',
    description: 'Space missions allow zero margin for software failure. Simulation environments create synthetic space physics—gravity harmonics, solar radiation pressure, magnetic fields, atmospheric drag—to stress-test flight software and train flight controllers in realistic anomaly scenarios.',
    keyFunctions: [
      'Full mission scenario modeling and orbit trajectory generation',
      'Hardware-in-the-Loop (HIL) testbed interface emulation',
      'Space environment dynamic simulation (gravity, magnetic, thermal)',
      'Subsystem fault injection for operator contingency training',
      'Monte Carlo trajectory and dispersion analysis runs'
    ],
    technicalHighlights: [
      'High-fidelity orbital propagators (SGP4, Numerical integrators)',
      'Sub-millisecond real-time bus signal emulation',
      'Automated regression testing test harness execution',
      'Virtual satellite digital twin software models'
    ],
    icon: 'FlaskConical',
    color: 'from-violet-500/20 to-purple-600/20',
    borderColor: 'border-violet-500/40',
    accentColor: '#8b5cf6'
  },
  {
    id: 'monitoring-dashboards',
    number: '06',
    title: 'Monitoring & Dashboards',
    subtitle: 'Real-Time Mission Telemetry & Operations Visuals',
    category: 'Operations',
    summary: 'Visual command consoles enabling mission operators to monitor spacecraft health, orbital parameters, power levels, and subsystem telemetry in real-time.',
    description: 'Mission control dashboards convert millions of raw telemetry parameters into intuitive visual status indicators, trend charts, and alert matrices. They enable flight controllers to make split-second operational decisions during critical mission maneuvers.',
    keyFunctions: [
      'Real-time telemetry stream display with color-coded limit checking',
      'Historical parameter trending and limit exceedance alerting',
      'Subsystem health matrices (Battery, Solar Arrays, Propulsion, Thermal)',
      'Orbit pass countdowns, antenna tracking angles, and visibility windows',
      'Event log timeline visualization and anomaly flagging'
    ],
    technicalHighlights: [
      'Low-latency WebSocket and telemetry streaming bus architectures',
      'Custom configurable grid layouts for different control consoles',
      'Audible and visual multi-tier threshold alert engines',
      'Session recording and mission replay capabilities'
    ],
    icon: 'Activity',
    color: 'from-emerald-500/20 to-cyan-600/20',
    borderColor: 'border-emerald-500/40',
    accentColor: '#10b981'
  },
  {
    id: 'analytics',
    number: '07',
    title: 'Analytics & Intelligence',
    subtitle: 'Earth Observation Insights & Pattern Detection',
    category: 'Data Science',
    summary: 'Analytics platforms leveraging computer vision, machine learning, and time-series algorithms to extract actionable insights from earth observation datasets.',
    description: 'Space data achieves maximum impact when transformed into temporal trend analytics. Analytics software processes multi-temporal satellite imagery to monitor agricultural crop health, urban expansion, water body depletion, deforestation, and natural disaster impacts.',
    keyFunctions: [
      'Multi-temporal spectral index computation (NDVI, NDWI, NDBI)',
      'Automated land-use / land-cover (LULC) classification algorithms',
      'Change detection matrices for disaster damage assessment',
      'Feature extraction (roads, water bodies, agricultural parcels, buildings)',
      'Time-series anomaly detection in environmental datasets'
    ],
    technicalHighlights: [
      'Deep learning models for high-resolution satellite imagery',
      'Raster processing engines optimized for multi-spectral bands',
      'Spatial-temporal data cube aggregation structures',
      'Automated report generation for domain decision-makers'
    ],
    icon: 'BarChart3',
    color: 'from-amber-500/20 to-orange-600/20',
    borderColor: 'border-amber-500/40',
    accentColor: '#f59e0b'
  },
  {
    id: 'applications',
    number: '08',
    title: 'Space Applications',
    subtitle: 'User-Facing Portals & National Services',
    category: 'Downstream Services',
    summary: 'Web, mobile, and enterprise applications delivering space-enabled data directly to citizens, farmers, emergency responders, and policy planners.',
    description: 'Space applications form the public-facing touchpoint of the space software ecosystem. They translate complex geospatial analytics into accessible web GIS portals, mobile apps for field data collection, navigation utilities, and emergency response dashboards.',
    keyFunctions: [
      'Public geospatial visualization portals and open data catalogs',
      'Agricultural advisory platforms providing crop status to farmers',
      'Disaster management support system (DMSS) crisis dashboards',
      'Fisheries potential fishing zone (PFZ) advisory transmission tools',
      'Urban planning and infrastructure monitoring GIS services'
    ],
    technicalHighlights: [
      'OGC compliant web map services (WMS, WFS, WMTS)',
      'Responsive mobile GIS clients with offline vector caching',
      'REST API gateways for multi-agency data integration',
      'High-concurrency user handling and cloud CDN delivery'
    ],
    icon: 'Globe',
    color: 'from-blue-500/20 to-cyan-600/20',
    borderColor: 'border-blue-500/40',
    accentColor: '#38bdf8'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    name: 'Space Assets',
    role: 'Sensor Data Generation',
    desc: 'Satellites, payloads, and instruments capture optical imagery, radar data, spectral signatures, or navigation signals in orbit.',
    icon: 'Satellite'
  },
  {
    step: '02',
    name: 'Communication Link',
    role: 'RF Downlink Transmission',
    desc: 'High-frequency X-band / S-band radio links down-convert and transmit raw telemetry frames to ground station antennas.',
    icon: 'Radio'
  },
  {
    step: '03',
    name: 'Ground Systems',
    role: 'Ingest & Telemetry Control',
    desc: 'Ground software receives RF downlinks, validates telemetry checksums, de-multiplexes frames, and routes raw data to processing centers.',
    icon: 'Server'
  },
  {
    step: '04',
    name: 'Data Processing',
    role: 'Calibration & Georeferencing',
    desc: 'Radiometric and geometric correction algorithms project sensor data onto standard coordinate systems, producing clean imagery tiles.',
    icon: 'Database'
  },
  {
    step: '05',
    name: 'Analytics Engine',
    role: 'Pattern & Trend Extraction',
    desc: 'Machine learning algorithms and spatial indices calculate vegetation health, flood extent, land usage, or movement patterns.',
    icon: 'Cpu'
  },
  {
    step: '06',
    name: 'User Applications',
    role: 'Service Delivery',
    desc: 'Web GIS portals, mobile tools, and API endpoints present insights to domain experts, government agencies, and citizens.',
    icon: 'LayoutGrid'
  },
  {
    step: '07',
    name: 'End Users',
    role: 'Informed Decision Making',
    desc: 'Farmers, disaster responders, urban planners, and researchers utilize space insights for real-world impact and policy planning.',
    icon: 'Users'
  }
];

export const STAKEHOLDERS = [
  {
    title: 'Students & Beginners',
    badge: 'Education',
    desc: 'Learners seeking to understand how software powers space missions, moving beyond rocket hardware to explore coding roles in aerospace.',
    needs: ['Clear conceptual diagrams', 'Standard terminology explanations', 'Career pathway awareness in space software']
  },
  {
    title: 'Educators & Professors',
    badge: 'Academia',
    desc: 'Faculty structuring computer science, aerospace engineering, or GIS coursework needing reliable reference frameworks for Indian space systems.',
    needs: ['Structured curriculum materials', 'System-level flowcharts', 'Verified reference sources']
  },
  {
    title: 'Researchers & Analysts',
    badge: 'Research',
    desc: 'Academic and industry researchers studying satellite data pipelines, flight software architectures, or space application trends.',
    needs: ['Technical categorization', 'Methodological breakdowns', 'Linkages between ground and space software']
  },
  {
    title: 'Technical Teams',
    badge: 'Engineering',
    desc: 'Software engineers, system architects, and developers building aerospace tools, GIS applications, or ground station utilities.',
    needs: ['Architecture patterns', 'Standard protocol descriptions (CCSDS, OGC)', 'Interoperability insights']
  },
  {
    title: 'Project Partners & Startups',
    badge: 'Industry',
    desc: 'Private space sector entrepreneurs and technical partners navigating India’s space software landscape under IN-SPACe initiatives.',
    needs: ['Ecosystem landscape overview', 'Regulatory and interface standards awareness', 'Service integration patterns']
  },
  {
    title: 'Interested Learners',
    badge: 'General Public',
    desc: 'Space enthusiasts and technology readers wanting to appreciate India’s space software achievements in a clear, responsible format.',
    needs: ['Jargon-free summaries', 'Visually engaging workflows', 'Factually verified claims']
  }
];

export const INTERNSHIP_JOURNEY = [
  {
    week: 'WEEK 2',
    code: 'BRD',
    title: 'Business Requirements Document',
    tagline: 'Project Scoping & Objective Alignment',
    summary: 'Defined the primary purpose, audience scope, non-functional requirements, and system boundaries for India’s Space Software Ecosystem platform.',
    highlights: ['Problem statement definition for space software literacy', 'Target persona identification', 'Non-functional constraints & scope boundaries']
  },
  {
    week: 'WEEK 3',
    code: 'RLD',
    title: 'Research & Landscape Document',
    tagline: 'Ecosystem Mapping & Technical Survey',
    summary: 'Mapped out the 8 primary software layers connecting spacecraft operations, ground infrastructure, positioning, data analytics, and user services.',
    highlights: ['Comprehensive survey of space software layers', 'Analysis of official ISRO & IN-SPACe public literature', 'Structural taxonomy of space software']
  },
  {
    week: 'WEEK 4',
    code: 'VQRD',
    title: 'Verification & Quality Requirements',
    tagline: 'Fact Checking & Credibility Framework',
    summary: 'Established rigorous evidence verification guidelines to ensure every technical claim on the platform is factually supported and free from hyperbole.',
    highlights: ['5-stage verification workflow', 'Distinction rules: Fact vs Interpretation vs Unsupported claim', 'Citation integrity protocol']
  },
  {
    week: 'WEEK 5',
    code: 'PRD',
    title: 'Product Requirements Document',
    tagline: 'User Journey & Platform Features',
    summary: 'Designed the functional structure, search mechanisms, content hierarchy, navigation rules, and conceptual user flow for the web portal.',
    highlights: ['Search & discovery module architecture', 'Information architecture map', 'User journey flow (Open → Search → Understand → Verify)']
  },
  {
    week: 'WEEK 6',
    code: 'SCRP',
    title: 'Stakeholder Communication Plan',
    tagline: 'Targeted Messaging & Feedback Loops',
    summary: 'Formulated audience-specific communication channels and messaging strategies tailored for students, researchers, educators, and general readers.',
    highlights: ['Audience-to-channel mapping matrix', 'Feedback collection mechanics', 'Responsible science communication guidelines']
  },
  {
    week: 'WEEK 7',
    code: 'LAAP',
    title: 'Localization & Accessibility Plan',
    tagline: 'Inclusion & Trilingual Framework',
    summary: 'Designed strategies for clear technical English, Indian language support frameworks (Kannada & Hindi), screen reader friendliness, and high-contrast visuals.',
    highlights: ['Simple English readability guidelines', 'Kannada & Hindi terminology dictionary template', 'WCAG 2.1 contrast & motion compliance']
  },
  {
    week: 'WEEK 8',
    code: 'FINAL',
    title: 'SPACE ATLAS Platform Synthesis',
    tagline: 'Complete Interactive Web Release',
    summary: 'Synthesized all 6 project artifacts into a unified, high-performance, cinematic space knowledge web application.',
    highlights: ['Interactive 3D/Canvas ecosystem node explorer', 'Command-center telemetry visualization dashboard', 'Production-ready web platform deployment']
  }
];

export const VQRD_STEPS = [
  {
    num: '01',
    title: 'TECHNICAL CLAIM',
    desc: 'Identify specific claims regarding software capabilities, bandwidths, protocols, or mission roles.'
  },
  {
    num: '02',
    title: 'SOURCE SELECTION',
    desc: 'Cross-reference claim against official publications (ISRO annual reports, IN-SPACe guidelines, peer-reviewed literature).'
  },
  {
    num: '03',
    title: 'EVIDENCE VERIFICATION',
    desc: 'Verify if the claim is an established fact, a technical interpretation, or an unsupported assumption.'
  },
  {
    num: '04',
    title: 'EDITORIAL REVIEW',
    desc: 'Refine phrasing to eliminate hyperbolic language, fake statistics, or invented technical names.'
  },
  {
    num: '05',
    title: 'PUBLISH TO ATLAS',
    desc: 'Integrate verified information into the SPACE ATLAS knowledge base with appropriate citation tags.'
  }
];

export const LAAP_DICTIONARY = [
  {
    en: 'Flight Software',
    kn: 'ಫ್ಲೈಟ್ ಸಾಫ್ಟ್‌ವೇರ್ (ಗಗನನೌಕೆ ತಂತ್ರಾಂಶ)',
    hi: 'फ्लाइट सॉफ्टवेयर (अंतरिक्ष यान सॉफ्टवेयर)',
    def: 'Software operating inside spacecraft to control subsystems and attitude.'
  },
  {
    en: 'Ground Systems',
    kn: 'ಗ್ರೌಂಡ್ ಸಿಸ್ಟಮ್ಸ್ (ನೆಲದ ನಿಲ್ದಾಣ ವ್ಯವಸ್ಥೆ)',
    hi: 'ग्राउंड सिस्टम (भू-नियंत्रण प्रणाली)',
    def: 'Software managing ground stations, tracking antennas, and telecommands.'
  },
  {
    en: 'Navigation & Positioning',
    kn: 'ನ್ಯಾವಿಗೇಷನ್ ಮತ್ತು ಪೊಸಿಷನಿಂಗ್',
    hi: 'नेविगेशन एवं पोजिशनिंग',
    def: 'Algorithms calculating location, velocity, and UTC time synchronization.'
  },
  {
    en: 'Telemetry',
    kn: 'ಟೆಲಿಮೆಟ್ರಿ (ದೂರಮಾಪನ)',
    hi: 'टेलीमीटरी (दूरमापन)',
    def: 'Automated communication process by which measurements are transmitted to ground receivers.'
  },
  {
    en: 'Satellite Data Processing',
    kn: 'ಉಪಗ್ರಹ ದತ್ತಾಂಶ ಸಂಸ್ಕರಣೆ',
    hi: 'उपग्रह डेटा प्रसंस्करण',
    def: 'Converting raw payload downlinks into calibrated geographic image products.'
  }
];

export const OFFICIAL_SOURCES = [
  {
    title: 'ISRO Official Portal',
    org: 'Indian Space Research Organisation',
    desc: 'Official updates, mission overview documents, annual reports, and technical summaries on Indian space missions.',
    url: 'https://www.isro.gov.in',
    type: 'Official Portal'
  },
  {
    title: 'IN-SPACe Portal',
    org: 'Indian National Space Promotion and Authorization Centre',
    desc: 'Guidelines, policy documents, and technology transfer frameworks for India private space ecosystem.',
    url: 'https://www.inspace.gov.in',
    type: 'Government Regulatory'
  },
  {
    title: 'Department of Space (DOS)',
    org: 'Government of India',
    desc: 'Official policies, space sector reform documents, and annual budgetary reports.',
    url: 'https://www.dos.gov.in',
    type: 'Policy & Governance'
  },
  {
    title: 'Bhuvan Indian Geo-Platform',
    org: 'NRSC / ISRO',
    desc: 'Public geoportal for satellite imagery, thematic maps, and disaster management services.',
    url: 'https://bhuvan.nrsc.gov.in',
    type: 'Application Platform'
  },
  {
    title: 'MOSDAC Meteorological Data Center',
    org: 'SAC / ISRO',
    desc: 'Meteorological and oceanographic satellite data archival and distribution portal.',
    url: 'https://www.mosdac.gov.in',
    type: 'Data Center'
  }
];

export const RESEARCH_SOURCES = [
  {
    title: 'CCSDS Space Communications Standards',
    org: 'Consultative Committee for Space Data Systems',
    desc: 'International standard specifications for telemetry packetization, command formats, and space link protocols.',
    url: 'https://public.ccsds.org',
    type: 'Technical Standard'
  },
  {
    title: 'OGC Open Geospatial Standards',
    org: 'Open Geospatial Consortium',
    desc: 'Standard specifications for Web Map Services (WMS), Web Feature Services (WFS), and raster metadata.',
    url: 'https://www.ogc.org',
    type: 'Geospatial Standard'
  },
  {
    title: 'Agnirva Software Internship Project Material',
    org: 'Agnirva Internship Program',
    desc: 'Internal project artifacts (BRD, RLD, VQRD, PRD, SCRP, LAAP) compiled during the 8-week software synthesis.',
    url: '#project-journey',
    type: 'Internship Portfolio'
  }
];
