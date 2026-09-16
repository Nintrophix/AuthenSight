import React, { useState, useRef, useCallback } from 'react';

// ── SVG Icon Components ──────────────────────────────────────
const Icon = ({ children, size = 24, color = 'currentColor', style, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    style={style} className={className}>
    {children}
  </svg>
);

const UploadCloudIcon = (p) => <Icon {...p}><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></Icon>;
const FileTextIcon = (p) => <Icon {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></Icon>;
const ImageIcon = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></Icon>;
const ShieldCheckIcon = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></Icon>;
const ZapIcon = (p) => <Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>;
const LockIcon = (p) => <Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></Icon>;
const CheckCircleIcon = (p) => <Icon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Icon>;
const XCircleIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></Icon>;
const XIcon = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Icon>;
const ArrowRightIcon = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Icon>;
const ChevronRightIcon = (p) => <Icon {...p}><polyline points="9 18 15 12 9 6" /></Icon>;
const EyeIcon = (p) => <Icon {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></Icon>;
const CpuIcon = (p) => <Icon {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></Icon>;
const SearchIcon = (p) => <Icon {...p}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Icon>;
const LayersIcon = (p) => <Icon {...p}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></Icon>;
const DatabaseIcon = (p) => <Icon {...p}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></Icon>;
const AlertTriangleIcon = (p) => <Icon {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Icon>;
const BarChart2Icon = (p) => <Icon {...p}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></Icon>;
const LayoutDashboardIcon = (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></Icon>;
const ServerIcon = (p) => <Icon {...p}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></Icon>;
const ScanIcon = (p) => <Icon {...p}><polyline points="4 7 4 4 7 4" /><polyline points="17 4 20 4 20 7" /><line x1="4" y1="12" x2="20" y2="12" /><polyline points="4 17 4 20 7 20" /><polyline points="17 20 20 20 20 17" /></Icon>;
const GridIcon = (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></Icon>;
const CopyIcon = (p) => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Icon>;

// ── Utility ──────────────────────────────────────────────────
const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const ACCEPTED_TYPES = {
  'application/pdf': 'PDF',
  'image/png': 'PNG',
  'image/jpeg': 'JPG',
  'image/webp': 'WEBP',
  'image/tiff': 'TIFF',
};

// ── Pipeline Steps Data ───────────────────────────────────────
const PIPELINE_STEPS = [
  {
    id: 1,
    label: 'Image Quality Gate',
    tech: 'OpenCV',
    icon: <EyeIcon size={20} color="var(--blue-bright)" />,
    color: '#0a84ff',
    glow: 'rgba(10,132,255,0.25)',
    desc: 'Resolution, blur, brightness & contrast checks before processing begins.',
  },
  {
    id: 2,
    label: 'Document Type Detection',
    tech: 'MobileNetV3-Small',
    icon: <LayersIcon size={20} color="#a259ff" />,
    color: '#a259ff',
    glow: 'rgba(162,89,255,0.25)',
    desc: 'Lightweight CNN classifies document category — ID, invoice, certificate, contract.',
  },
  {
    id: 3,
    label: 'OCR Extraction',
    tech: 'PaddleOCR PP-OCRv6',
    icon: <ScanIcon size={20} color="#32d7c8" />,
    color: '#32d7c8',
    glow: 'rgba(50,215,200,0.25)',
    desc: 'State-of-art multilingual OCR with bounding-box coordinates for every token.',
  },
  {
    id: 4,
    label: 'Structured Extraction',
    tech: 'Regex + KW Matching + Bounding Boxes',
    icon: <GridIcon size={20} color="#ff9f0a" />,
    color: '#ff9f0a',
    glow: 'rgba(255,159,10,0.25)',
    desc: 'Extracts named fields: name, DOB, ID number, dates, issuer — spatially aware.',
  },
  {
    id: 5,
    label: 'Field Consistency Check',
    tech: 'Rule-Based Verification Engine',
    icon: <CheckCircleIcon size={20} color="#30d158" />,
    color: '#30d158',
    glow: 'rgba(48,209,88,0.25)',
    desc: 'Cross-validates extracted fields against format rules, date logic & issuer patterns.',
  },
  {
    id: 6,
    label: 'Duplicate Detection',
    tech: 'SQLite + Field Matching + pHash',
    icon: <CopyIcon size={20} color="#ff6b6b" />,
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.25)',
    desc: 'Perceptual hashing + field fingerprinting detects resubmitted or cloned documents.',
  },
  {
    id: 7,
    label: 'Tampering Detection',
    tech: 'OpenCV · ORB · ELA',
    icon: <AlertTriangleIcon size={20} color="#ff453a" />,
    color: '#ff453a',
    glow: 'rgba(255,69,58,0.25)',
    desc: 'Forensic analysis: ELA error-level, ORB copy-move, and pixel-level manipulation flags.',
  },
  {
    id: 8,
    label: 'Risk & Anomaly Scoring',
    tech: 'XGBoost',
    icon: <BarChart2Icon size={20} color="#bf5af2" />,
    color: '#bf5af2',
    glow: 'rgba(191,90,242,0.25)',
    desc: 'Gradient-boosted model aggregates all signals into a 0–100 fraud risk score.',
  },
  {
    id: 9,
    label: 'Verification Dashboard',
    tech: 'React + Tailwind CSS',
    icon: <LayoutDashboardIcon size={20} color="#0a84ff" />,
    color: '#0a84ff',
    glow: 'rgba(10,132,255,0.25)',
    desc: 'Interactive report with annotated document view, field table, and timeline.',
  },
  {
    id: 10,
    label: 'Backend Integration',
    tech: 'FastAPI + SQLite',
    icon: <ServerIcon size={20} color="#32d7c8" />,
    color: '#32d7c8',
    glow: 'rgba(50,215,200,0.25)',
    desc: 'RESTful API serving async pipeline jobs with persistent result storage.',
  },
];


// ── UploadZone Component ──────────────────────────────────────
const UploadZone = ({ file, onFile, onRemove }) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && ACCEPTED_TYPES[dropped.type]) onFile(dropped);
  }, [onFile]);

  const handleDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);
  const handleChange = (e) => {
    const f = e.target.files[0];
    if (f) onFile(f);
    e.target.value = '';
  };

  const isPdf = file?.type === 'application/pdf';

  return (
    <>
      {!file ? (
        <div
          id="upload-dropzone"
          className={`dropzone ${dragging ? 'dragging' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          aria-label="Upload document dropzone"
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        >
          <div className="dz-icon-wrap">
            <UploadCloudIcon size={36} className="dz-icon" color="var(--blue-bright)" />
          </div>
          <p className="dz-title">Drop your document here, or <span>browse</span></p>
          <p className="dz-subtitle">Runs through all 10 pipeline stages automatically</p>
          <div className="dz-types">
            {Object.values(ACCEPTED_TYPES).map((t) => (
              <span key={t} className="dz-type-tag">{t}</span>
            ))}
          </div>
          <input ref={inputRef} type="file" id="file-input" className="file-input-hidden"
            accept=".pdf,image/png,image/jpeg,image/webp,image/tiff" onChange={handleChange} />
        </div>
      ) : (
        <div id="file-preview-container" className="file-preview">
          <div className={`file-preview-icon ${isPdf ? 'pdf' : 'image'}`}>
            {isPdf ? <FileTextIcon size={22} color="white" /> : <ImageIcon size={22} color="white" />}
          </div>
          <div className="file-preview-info">
            <div className="file-preview-name">{file.name}</div>
            <div className="file-preview-meta">{ACCEPTED_TYPES[file.type]} · {formatBytes(file.size)}</div>
          </div>
          <button id="remove-file-btn" className="file-preview-remove" onClick={onRemove} aria-label="Remove file">
            <XIcon size={18} />
          </button>
        </div>
      )}
    </>
  );
};

// ── Animated Processing Steps ─────────────────────────────────
const ProcessingSteps = ({ progress }) => {
  // Each step spans ~10% of progress
  const activeStep = Math.floor(progress / 10);

  return (
    <div className="processing-steps">
      {PIPELINE_STEPS.map((step, i) => {
        const done = i < activeStep;
        const active = i === activeStep && progress < 100;
        return (
          <div key={step.id} className={`ps-item ${done ? 'done' : ''} ${active ? 'active' : ''}`}>
            <div className="ps-dot" style={done || active ? { background: step.color, boxShadow: `0 0 8px ${step.glow}` } : {}}>
              {done ? <CheckCircleIcon size={10} color="white" strokeWidth={2.5} /> : <span>{step.id}</span>}
            </div>
            <div className="ps-text">
              <span className="ps-label">{step.label}</span>
              <span className="ps-tech">{step.tech}</span>
            </div>
            {active && <div className="ps-spinner" />}
          </div>
        );
      })}
    </div>
  );
};

// ── Progress Bar ──────────────────────────────────────────────
const ProgressBar = ({ pct }) => (
  <div className="upload-progress">
    <div className="progress-label">
      <span>Running pipeline — Stage {Math.min(Math.ceil(pct / 10), 10)}/10</span>
      <span className="progress-pct">{pct}%</span>
    </div>
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
    <ProcessingSteps progress={pct} />
  </div>
);

// ── Pipeline Card (long-form) ─────────────────────────────────
const PipelineCard = ({ step, index }) => (
  <div className="pipeline-card" style={{ '--step-color': step.color, '--step-glow': step.glow, animationDelay: `${index * 0.05}s` }}>
    <div className="pc-number" style={{ color: step.color }}>
      {String(step.id).padStart(2, '0')}
    </div>
    <div className="pc-icon-wrap" style={{ background: `${step.glow}`, border: `1px solid ${step.color}33` }}>
      {step.icon}
    </div>
    <div className="pc-content">
      <div className="pc-header">
        <h3 className="pc-title">{step.label}</h3>
        <span className="pc-tech-badge" style={{ color: step.color, borderColor: `${step.color}44`, background: `${step.color}14` }}>
          {step.tech}
        </span>
      </div>

    </div>
    <div className="pc-arrow">
      <ChevronRightIcon size={16} color="var(--silver)" />
    </div>
  </div>
);


// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [file, setFile] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | uploading | done | error
  const [progress, setProgress] = useState(0);
  const [riskScore, setRiskScore] = useState(null);

  const handleFile = (f) => { setFile(f); setPhase('idle'); setProgress(0); setRiskScore(null); };
  const handleRemove = () => { setFile(null); setPhase('idle'); setProgress(0); setRiskScore(null); };

  const handleSubmit = () => {
    if (!file || phase === 'uploading') return;
    setPhase('uploading');
    setProgress(0);

    // Simulate 10-stage pipeline progression
    const milestones = [
      { pct: 5,  delay: 300  },
      { pct: 15, delay: 800  },
      { pct: 25, delay: 1400 },
      { pct: 35, delay: 2000 },
      { pct: 45, delay: 2600 },
      { pct: 55, delay: 3100 },
      { pct: 65, delay: 3700 },
      { pct: 77, delay: 4200 },
      { pct: 88, delay: 4700 },
      { pct: 100, delay: 5200 },
    ];

    milestones.forEach(({ pct, delay }) => {
      setTimeout(() => {
        setProgress(pct);
        if (pct === 100) {
          const score = Math.floor(Math.random() * 100);
          setRiskScore(score);
          setTimeout(() => setPhase(score < 40 ? 'done' : 'error'), 400);
        }
      }, delay);
    });
  };

  const resetAll = () => { setFile(null); setPhase('idle'); setProgress(0); setRiskScore(null); };

  return (
    <>
      {/* ── Ambient Background ── */}
      <div className="bg-scene" aria-hidden="true">
        <div className="bg-gradient" />
        <div className="bg-grid" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-particles" />
      </div>

      <div className="page-wrapper">
        {/* ── Navbar ── */}
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="container">
            <div className="navbar-inner">
              <a href="/" className="nav-logo" aria-label="AuthenSite home">
                <img src="/logo.jpg" alt="AuthenSite logo" className="nav-logo-img" />
                <span className="nav-logo-text">AuthenSite</span>
              </a>
              <ul className="nav-links">
                <li><a href="#upload">Try it</a></li>
                <li><a href="#pipeline">Pipeline</a></li>
              </ul>
              <div className="nav-cta">
                <button id="nav-docs-btn" className="btn-nav-secondary">Documentation</button>
                <button id="nav-getstarted-btn" className="btn-nav-primary">Get Started</button>
              </div>
            </div>
          </div>
        </nav>


        {/* ── Upload / Try It ── */}
        <section className="upload-section" id="upload" aria-labelledby="upload-heading">
          <div className="container">
            <div className="upload-card">
              <div className="upload-card-header">
                <div className="upload-card-header-icon">
                  <ShieldCheckIcon size={22} color="white" />
                </div>
                <div>
                  <h2 className="upload-card-title" id="upload-heading">Run the Pipeline</h2>
                  <p className="upload-card-subtitle">Upload a PDF or image — all 10 stages run automatically</p>
                </div>
              </div>

              <UploadZone file={file} onFile={handleFile} onRemove={handleRemove} />

              {phase === 'uploading' && <ProgressBar pct={progress} />}

              {phase === 'done' && riskScore !== null && (
                <div id="upload-status-success" className="upload-status success">
                  <CheckCircleIcon size={20} color="var(--success)" />
                  <div>
                    <strong>Verified — Document Authentic</strong>
                    <div style={{ fontSize: '12px', marginTop: '2px', opacity: 0.8 }}>
                      XGBoost Risk Score: {riskScore}/100 · No tampering detected · No duplicate found
                    </div>
                  </div>
                </div>
              )}

              {phase === 'error' && riskScore !== null && (
                <div id="upload-status-error" className="upload-status error">
                  <XCircleIcon size={20} color="var(--error)" />
                  <div>
                    <strong>High Risk — Verification Failed</strong>
                    <div style={{ fontSize: '12px', marginTop: '2px', opacity: 0.8 }}>
                      XGBoost Risk Score: {riskScore}/100 · Anomalies detected — review full report
                    </div>
                  </div>
                </div>
              )}

              {phase === 'done' || phase === 'error' ? (
                <button id="upload-reset-btn" className="btn-submit" onClick={resetAll}>
                  Analyze Another Document
                </button>
              ) : (
                <button
                  id="upload-submit-btn"
                  className="btn-submit"
                  onClick={handleSubmit}
                  disabled={!file || phase === 'uploading'}
                >
                  {phase === 'uploading' ? (
                    <><span className="spinner" /> Running Pipeline…</>
                  ) : (
                    <><ShieldCheckIcon size={18} color="white" /> Run Verification Pipeline</>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>


        {/* ── Full Pipeline Section ── */}
        <section className="pipeline-section" id="pipeline" aria-labelledby="pipeline-heading">
          <div className="container">
            <div className="features-header">
              <div className="section-label">
                <CpuIcon size={14} color="var(--blue-bright)" />
                Verification Pipeline
              </div>
              <h2 className="section-title" id="pipeline-heading">
                10-Stage Automated<br />Document Intelligence
              </h2>
              <p className="section-subtitle">
                Every document passes through each stage sequentially — from raw image
                quality checks to final XGBoost risk scoring — with full traceability.
              </p>
            </div>

            <div className="pipeline-grid">
              {PIPELINE_STEPS.map((step, i) => (
                <PipelineCard key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>


        {/* ── Footer ── */}
        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-logo">
                <img src="/logo.jpg" alt="AuthenSite" className="footer-logo-img" />
                <span className="footer-logo-text">AuthenSite</span>
              </div>
              <ul className="footer-links">
                <li><a href="#pipeline">Pipeline</a></li>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <p className="footer-copy">© 2025 AuthenSite Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
