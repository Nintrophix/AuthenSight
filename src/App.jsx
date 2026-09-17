import React, { useState, useRef, useCallback, useEffect } from 'react';

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
const ArrowLeftIcon = (p) => <Icon {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></Icon>;

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
    tech: 'KW Matching + Bounding Boxes',
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

const ReportPage = ({ file, riskScore, onBack }) => {
  if (riskScore === null) {
    return (
      <main className="report-page">
        <div className="container">
          <div className="report-empty">
            <BarChart2Icon size={32} color="var(--blue-bright)" />
            <h1 className="report-title">Your verification report will appear here</h1>
            <p className="report-subtitle">Analyze a document first to see the XGBoost confidence score and the signals behind it.</p>
            <button className="btn-submit report-empty-button" onClick={onBack}>Go to Try it</button>
          </div>
        </div>
      </main>
    );
  }

  const isHighRisk = riskScore >= 40;
  const reasons = isHighRisk
    ? [
      { label: 'Tampering signals', detail: 'Pixel-level inconsistencies were detected in the document image.', value: 'Elevated', tone: 'error' },
      { label: 'Field consistency', detail: 'One or more extracted fields do not match expected document patterns.', value: 'Review', tone: 'warning' },
      { label: 'Duplicate detection', detail: 'No matching document was found in the verification history.', value: 'Clear', tone: 'success' },
    ]
    : [
      { label: 'Tampering signals', detail: 'No meaningful pixel-level manipulation signals were detected.', value: 'Clear', tone: 'success' },
      { label: 'Field consistency', detail: 'Extracted fields match expected document formats and relationships.', value: 'Strong', tone: 'success' },
      { label: 'Duplicate detection', detail: 'No matching document was found in the verification history.', value: 'Clear', tone: 'success' },
    ];
  const reportFields = [
    { label: 'Document type', value: file?.type === 'application/pdf' ? 'PDF document' : 'Image document' },
    { label: 'File size', value: file ? formatBytes(file.size) : 'Unavailable' },
    { label: 'Model', value: 'XGBoost risk classifier' },
    { label: 'Decision threshold', value: '40 / 100' },
    { label: 'Verification status', value: isHighRisk ? 'Manual review recommended' : 'Authenticity signals passed' },
    { label: 'Report ID', value: `AUTH-${String(riskScore).padStart(3, '0')}-LIVE` },
  ];
  const stageResults = PIPELINE_STEPS.map((step, index) => ({
    ...step,
    status: index === 6 && isHighRisk ? 'Review' : 'Passed',
    tone: index === 6 && isHighRisk ? 'warning' : 'success',
  }));

  return (
    <main className="report-page">
      <div className="container">
        <div className="report-heading-row">
          <div>
            <div className="section-label"><BarChart2Icon size={14} color="var(--blue-bright)" /> Verification report</div>
            <h1 className="report-title">Model confidence, explained</h1>
            <p className="report-subtitle">The signals below show what contributed to this document&apos;s XGBoost risk score.</p>
          </div>
          <button className="report-back-button" onClick={onBack}><ArrowLeftIcon size={17} /> Analyze another</button>
        </div>

        <div className="report-grid">
          <section className={`score-panel ${isHighRisk ? 'high-risk' : 'low-risk'}`} aria-label="XGBoost confidence score">
            <div className="score-panel-topline"><span>XGBoost risk score</span><CpuIcon size={18} /></div>
            <div className="score-value">{riskScore}<span>/100</span></div>
            <div className="score-meter"><div className="score-meter-fill" style={{ width: `${riskScore}%` }} /></div>
            <strong>{isHighRisk ? 'Higher risk detected' : 'Low risk detected'}</strong>
            <p>{file?.name || 'Analyzed document'}</p>
          </section>

          <section className="report-reasons" aria-labelledby="reasons-heading">
            <div className="report-section-heading">
              <div><span className="section-label">Decision signals</span><h2 id="reasons-heading">Why the model scored it this way</h2></div>
              <span className={`report-status ${isHighRisk ? 'error' : 'success'}`}>{isHighRisk ? 'Review needed' : 'Looks authentic'}</span>
            </div>
            <div className="reason-list">
              {reasons.map((reason) => (
                <div className="reason-row" key={reason.label}>
                  <div className={`reason-icon ${reason.tone}`}><CheckCircleIcon size={16} /></div>
                  <div className="reason-copy"><strong>{reason.label}</strong><span>{reason.detail}</span></div>
                  <span className={`reason-value ${reason.tone}`}>{reason.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="report-detail-grid" aria-label="Report details">
          <div className="report-detail-panel">
            <div className="report-panel-heading">
              <div><span className="section-label">Document record</span><h2>Analysis details</h2></div>
              <FileTextIcon size={20} color="var(--blue-bright)" />
            </div>
            <div className="report-fields">
              {reportFields.map((field) => (
                <div className="report-field" key={field.label}>
                  <span>{field.label}</span>
                  <strong>{field.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="report-detail-panel">
            <div className="report-panel-heading">
              <div><span className="section-label">Score interpretation</span><h2>How to read this result</h2></div>
              <AlertTriangleIcon size={20} color="var(--warning)" />
            </div>
            <div className="score-scale">
              <div className="scale-track"><span className="scale-marker" style={{ left: `${riskScore}%` }} /></div>
              <div className="scale-labels"><span>0 · Low risk</span><span>40 · Review</span><span>100 · High risk</span></div>
            </div>
            <p className="interpretation-copy">
              {isHighRisk
                ? 'This score is above the review threshold. The document should be checked by an operator before it is accepted.'
                : 'This score is below the review threshold. The available signals are consistent with an authentic document.'}
            </p>
          </div>
        </section>

        <section className="report-detail-panel stage-panel" aria-labelledby="stage-results-heading">
          <div className="report-panel-heading">
            <div><span className="section-label">Pipeline trace</span><h2 id="stage-results-heading">Stage-by-stage results</h2></div>
            <span className="report-status success">10 / 10 complete</span>
          </div>
          <div className="stage-results">
            {stageResults.map((stage) => (
              <div className="stage-result" key={stage.id}>
                <div className="stage-result-number">{String(stage.id).padStart(2, '0')}</div>
                <div className="stage-result-icon" style={{ color: stage.color, background: stage.glow }}>{stage.icon}</div>
                <div className="stage-result-copy"><strong>{stage.label}</strong><span>{stage.tech}</span></div>
                <span className={`stage-result-status ${stage.tone}`}><CheckCircleIcon size={14} /> {stage.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};


// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [file, setFile] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | uploading | done | error
  const [progress, setProgress] = useState(0);
  const [riskScore, setRiskScore] = useState(null);
  const [activeView, setActiveView] = useState(window.location.pathname === '/report' ? 'report' : 'try');

  useEffect(() => {
    const handlePopState = () => setActiveView(window.location.pathname === '/report' ? 'report' : 'try');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
  const showView = (view) => {
    const path = view === 'report' ? '/report' : '/';
    window.history.pushState({}, '', path);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <li><button className={activeView === 'try' ? 'active' : ''} onClick={() => showView('try')}>Try it</button></li>
                <li><a href="#pipeline">Pipeline</a></li>
                <li><button className={activeView === 'report' ? 'active' : ''} onClick={() => showView('report')}>Report</button></li>
              </ul>
              <div className="nav-cta">
                <button id="nav-docs-btn" className="btn-nav-secondary">Documentation</button>
                <button id="nav-getstarted-btn" className="btn-nav-primary">Get Started</button>
              </div>
            </div>
          </div>
        </nav>


        {activeView === 'report' ? <ReportPage file={file} riskScore={riskScore} onBack={() => showView('try')} /> : <>
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
                <div className="result-actions">
                  <button id="upload-report-btn" className="btn-submit" onClick={() => showView('report')}><BarChart2Icon size={18} color="white" /> View Full Report</button>
                  <button id="upload-reset-btn" className="btn-secondary result-reset" onClick={resetAll}>Analyze Another Document</button>
                </div>
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
                10-Stage Automated Document Intelligence
              </h2>
              <p className="section-subtitle" style={{ whiteSpace: 'nowrap' }}>
                Every document passes through each stage sequentially from raw image quality checks to final XGBoost risk scoring with full traceability.
              </p>
            </div>

            <div className="pipeline-grid">
              {PIPELINE_STEPS.map((step, i) => (
                <PipelineCard key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>
        </>}


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
