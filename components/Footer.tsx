import { LOGO_WHITE } from "@/lib/mentoring";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-meta">
        <p>
          &copy; 2026 AI Powered &middot;{" "}
          <a href="mailto:ross@aipowered.xyz">ross@aipowered.xyz</a> &middot;{" "}
          <a href="https://claude.aipowered.xyz">claude.aipowered.xyz</a>
        </p>
      </div>
      <div className="site-footer-mark">
        <img src={LOGO_WHITE} alt="AI Powered" />
      </div>
    </footer>
  );
}
