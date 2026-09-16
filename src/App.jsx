import React, { useState, useRef, useCallback } from 'react';

// ── SVG Icon Components ──────────────────────────────────────
const Icon = ({ children, size = 24, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const UploadCloudIcon = (p) => (
  <Icon {...p}>
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </Icon>
);

const FileTextIcon = (p) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Icon>
);

const ImageIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </Icon>
);

const ShieldCheckIcon = (p) => (
  <Icon {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </Icon>
);

const ZapIcon = (p) => (
  <Icon {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>
);

const LockIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Icon>
);

const BarChart2Icon = (p) => (
  <Icon {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </Icon>
);

const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Icon>
);

const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Icon>
);

const CheckCircleIcon = (p) => (
  <Icon {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);

const XCircleIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </Icon>
);

const XIcon = (p) => (
  <Icon {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);

const ArrowRightIcon = (p) => (
  <Icon {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
);

const CpuIcon = (p) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </Icon>
);

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

// ── UploadZone Component ──────────────────────────────────────
const UploadZone = ({ file, onFile, onRemove }) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && ACCEPTED_TYPES[dropped.type]) {
      onFile(dropped);
    }
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
          aria-label="Upload file dropzone"
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        >
          <div className="dz-icon-wrap">
            <UploadCloudIcon size={36} className="dz-icon" color="var(--blue-bright)" />
          </div>
          <p className="dz-title">
            Drop your file here, or{' '}
            <span>browse</span>
          </p>
          <p className="dz-subtitle">Supports PDF, PNG, JPG, WEBP, TIFF documents</p>
          <div className="dz-types">
            {Object.values(ACCEPTED_TYPES).map((t) => (
              <span key={t} className="dz-type-tag">{t}</span>
            ))}
          </div>
          <input
            ref={inputRef}
            type="file"
            id="file-input"
            className="file-input-hidden"
            accept=".pdf,image/png,image/jpeg,image/webp,image/tiff"
            onChange={handleChange}
          />
        </div>
      ) : (
        <div id="file-preview-container" className="file-preview">
          <div className={`file-preview-icon ${isPdf ? 'pdf' : 'image'}`}>
            {isPdf
              ? <FileTextIcon size={22} color="white" />
              : <ImageIcon size={22} color="white" />
            }
          </div>
          <div className="file-preview-info">
            <div className="file-preview-name">{file.name}</div>
            <div className="file-preview-meta">
              {ACCEPTED_TYPES[file.type]} · {formatBytes(file.size)}
            </div>
          </div>
          <button
            id="remove-file-btn"
            className="file-preview-remove"
            onClick={onRemove}
            aria-label="Remove file"
          >
            <XIcon size={18} />
          </button>
        </div>
      )}
    </>
  );
};

// ── Progress Bar ──────────────────────────────────────────────
const ProgressBar = ({ pct }) => (
  <div className="upload-progress">
    <div className="progress-label">
      <span>Analyzing document…</span>
      <span className="progress-pct">{pct}%</span>
    </div>
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  </div>
);

// ── Feature Card ──────────────────────────────────────────────
const FeatureCard = ({ icon, iconClass, title, desc, delay }) => (
  <div className="feature-card" style={{ animationDelay: `${delay}s` }}>
    <div className={`feature-icon-wrap ${iconClass}`}>{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{desc}</p>
  </div>
);

// ── Step Card ─────────────────────────────────────────────────
const StepCard = ({ num, title, desc }) => (
  <div className="step-card">
    <div className="step-number">{num}</div>
    <h3 className="step-title">{title}</h3>
    <p className="step-desc">{desc}</p>
  </div>
);

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [file, setFile] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | uploading | done | error
  const [progress, setProgress] = useState(0);

  const handleFile = (f) => {
    setFile(f);
    setPhase('idle');
    setProgress(0);
  };

  const handleRemove = () => {
    setFile(null);
    setPhase('idle');
    setProgress(0);
  };

  const handleSubmit = () => {
    if (!file || phase === 'uploading') return;
    setPhase('uploading');
    setProgress(0);

    // Simulate realistic processing progress
    const milestones = [
      { pct: 12, delay: 300 },
      { pct: 28, delay: 700 },
      { pct: 45, delay: 1300 },
      { pct: 63, delay: 1900 },
      { pct: 79, delay: 2500 },
      { pct: 91, delay: 3100 },
      { pct: 100, delay: 3700 },
    ];

    milestones.forEach(({ pct, delay }) => {
      setTimeout(() => {
        setProgress(pct);
        if (pct === 100) {
          setTimeout(() => {
            // Randomly succeed (90%) or error (10%) for demo
            setPhase(Math.random() > 0.1 ? 'done' : 'error');
          }, 400);
        }
      }, delay);
    });
  };

  const resetAll = () => {
    setFile(null);
    setPhase('idle');
    setProgress(0);
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
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#upload">Upload</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="nav-cta">
                <button id="nav-signin-btn" className="btn-nav-secondary">Sign In</button>
                <button id="nav-getstarted-btn" className="btn-nav-primary">Get Started</button>
              </div>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              AI-Powered Document Intelligence
            </div>
            <h1 className="hero-title">
              <span className="hero-title-line1">Verify Any Document.</span>
              <span className="hero-title-line2">Trust Every Result.</span>
            </h1>
            <p className="hero-subtitle">
              AuthenSite uses advanced AI to authenticate PDFs and images in seconds.
              Enterprise-grade fraud detection trusted by 3,500+ organizations worldwide.
            </p>
            <div className="hero-actions">
              <a href="#upload" className="btn-primary" id="hero-upload-cta">
                Upload for Analysis
                <ArrowRightIcon size={18} color="white" />
              </a>
              <button id="hero-demo-btn" className="btn-secondary">
                View Demo Report
              </button>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircleIcon size={16} className="trust-icon" color="var(--success)" />
                SOC 2 Type II Certified
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <CheckCircleIcon size={16} className="trust-icon" color="var(--success)" />
                GDPR Compliant
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <CheckCircleIcon size={16} className="trust-icon" color="var(--success)" />
                256-bit Encryption
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <CheckCircleIcon size={16} className="trust-icon" color="var(--success)" />
                99.97% Uptime SLA
              </div>
            </div>
          </div>
        </section>

        {/* ── Upload Section ── */}
        <section className="upload-section" id="upload" aria-labelledby="upload-heading">
          <div className="container">
            <div className="upload-card">
              <div className="upload-card-header">
                <div className="upload-card-header-icon">
                  <ShieldCheckIcon size={22} color="white" />
                </div>
                <div>
                  <h2 className="upload-card-title" id="upload-heading">
                    Document Authentication
                  </h2>
                  <p className="upload-card-subtitle">
                    Upload a PDF or image — results in under 10 seconds
                  </p>
                </div>
              </div>

              <UploadZone file={file} onFile={handleFile} onRemove={handleRemove} />

              {/* Progress */}
              {phase === 'uploading' && <ProgressBar pct={progress} />}

              {/* Success */}
              {phase === 'done' && (
                <div id="upload-status-success" className="upload-status success">
                  <CheckCircleIcon size={20} color="var(--success)" />
                  Document verified — No anomalies detected. Authentication score: 98.4%
                </div>
              )}

              {/* Error */}
              {phase === 'error' && (
                <div id="upload-status-error" className="upload-status error">
                  <XCircleIcon size={20} color="var(--error)" />
                  Potential tampering detected — Review flagged regions in the full report.
                </div>
              )}

              {/* Submit or Reset */}
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
                    <>
                      <span className="spinner" />
                      Analyzing…
                    </>
                  ) : (
                    <>
                      <ShieldCheckIcon size={18} color="white" />
                      Authenticate Document
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="stats-section" aria-label="Platform statistics">
          <div className="container">
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-value">12M+</div>
                <div className="stat-label">Documents Verified</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">99.8%</div>
                <div className="stat-label">Detection Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3,500+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">&lt;8s</div>
                <div className="stat-label">Avg. Verification Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="features-section" id="features" aria-labelledby="features-heading">
          <div className="container">
            <div className="features-header">
              <div className="section-label">
                <ZapIcon size={14} color="var(--blue-bright)" />
                Capabilities
              </div>
              <h2 className="section-title" id="features-heading">
                Everything you need to<br />authenticate with confidence
              </h2>
              <p className="section-subtitle">
                Our platform combines computer vision, NLP, and behavioral analytics
                to deliver the most thorough document verification available.
              </p>
            </div>
            <div className="features-grid">
              <FeatureCard
                icon={<CpuIcon size={24} color="var(--blue-bright)" />}
                iconClass="feature-icon-blue"
                title="AI Forgery Detection"
                desc="Multi-layer neural networks detect pixel-level manipulations, metadata inconsistencies, and font anomalies invisible to the human eye."
                delay={0}
              />
              <FeatureCard
                icon={<ShieldCheckIcon size={24} color="#a259ff" />}
                iconClass="feature-icon-purple"
                title="Digital Signature Verification"
                desc="Validate PKI-based digital signatures, certificate chains, and timestamps to confirm document integrity and signer identity."
                delay={0.05}
              />
              <FeatureCard
                icon={<ZapIcon size={24} color="#32d7c8" />}
                iconClass="feature-icon-teal"
                title="Instant Results"
                desc="Average analysis completes in under 8 seconds — from upload to a full, actionable authentication report with confidence scoring."
                delay={0.1}
              />
              <FeatureCard
                icon={<LockIcon size={24} color="var(--warning)" />}
                iconClass="feature-icon-gold"
                title="Bank-Grade Security"
                desc="End-to-end AES-256 encryption, zero-retention document processing, and SOC 2 Type II compliance for enterprise peace of mind."
                delay={0.15}
              />
              <FeatureCard
                icon={<BarChart2Icon size={24} color="var(--success)" />}
                iconClass="feature-icon-green"
                title="Detailed Audit Trail"
                desc="Every verification produces an immutable, timestamped audit log — ready for legal, compliance, and regulatory review."
                delay={0.2}
              />
              <FeatureCard
                icon={<GlobeIcon size={24} color="var(--error)" />}
                iconClass="feature-icon-red"
                title="Global ID Recognition"
                desc="Supports passports, driver's licenses, and official documents from 190+ countries with MRZ and barcode validation built in."
                delay={0.25}
              />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="how-section" id="how-it-works" aria-labelledby="how-heading">
          <div className="container">
            <div className="features-header">
              <div className="section-label">
                <ClockIcon size={14} color="var(--blue-bright)" />
                Process
              </div>
              <h2 className="section-title" id="how-heading">How It Works</h2>
              <p className="section-subtitle">
                Three simple steps to complete authentication — no integration required to get started.
              </p>
            </div>
            <div className="steps-grid">
              <StepCard
                num="1"
                title="Upload Your Document"
                desc="Drag-and-drop or select a PDF, image scan, or photo of any official document. We accept all major formats."
              />
              <StepCard
                num="2"
                title="AI Deep Analysis"
                desc="Our 47-layer model scans metadata, pixel data, font consistency, digital signatures, and behavioral patterns simultaneously."
              />
              <StepCard
                num="3"
                title="Receive Instant Report"
                desc="Get a confidence score, flagged regions, signature validity, and a full audit-ready PDF report — in seconds."
              />
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
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#terms">Terms</a></li>
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
