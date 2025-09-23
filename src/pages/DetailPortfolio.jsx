import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortfolio.css";
import "../styles/StatusBadges.css"
import { portfolioList } from "../data/DataPortfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { FiExternalLink, FiCode, FiTag } from "react-icons/fi";

function StatusBadge({ status }) {
  if (!status) return null;
  const label =
    status === "completed" ? "Completed" :
    status === "in-progress" ? "In Progress" : 
    status === "not-completed" ? "Not Completed" :status;
  return <span className={`status-badge ${status}`}>{label}</span>;
}
function CategoryPill({ category }) {
  if (!category) return null;
  return <span className="category-pill">{category}</span>;
}

export default function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => String(item.id) === String(id));
  if (!data) return <Navigate to="/page-not-found" />;

  const tech = Array.isArray(data.tech) && data.tech.length
    ? data.tech
    : (data.skill || "").split(",").map(s => s.trim()).filter(Boolean);

  const repoUrl = data.repo || data.code || data.github || "";
  const demoUrl = data.demo || data.live || data.link || "";

  return (
    <>
      <Navbar />

      <section id="detail-portfolio">
        <div className="dp-wrapper">
          <h1 className="dp-title">{data.title}</h1>

          <div className="dp-grid">
            {/* KIRI: gambar + badge + technologies */}
            <div className="dp-left">
              <div className="dp-media">
                <img src={data.image} alt={data.title} draggable="false" />
              </div>

              {/* badge berjejer */}
              <div className="dp-chips">
                <CategoryPill category={data.category} />
                <StatusBadge status={data.status} />
              </div>

              {/* technologies moved dekat badge */}
              {tech.length > 0 && (
                <section className="dp-tech in-left">
                  <div className="dp-tech-title">
                    <FiTag className="dp-tech-icon" />
                    <span><b>Technologies Used</b></span>
                  </div>
                  <div className="dp-tags">
                    {tech.map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* KANAN: description (+ optional features) + actions tepat di bawah teks */}
            <div className="dp-right">
              <section className="dp-section is-first">
                <h3><b>Project Description</b></h3>
                <p>{data.description}</p>
              </section>

              {Array.isArray(data.features) && data.features.length > 0 && (
                <section className="dp-section">
                  <h3><b>Key Features</b></h3>
                  <ul className="dp-list">
                    {data.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </section>
              )}

              {(repoUrl || demoUrl) && (
                <div className="dp-actions under-text">
                  {repoUrl && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dp-btn primary"
                    >
                      <FiCode />
                      <span>View Code</span>
                    </a>
                  )}
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dp-btn"
                    >
                      <FiExternalLink />
                      <span>View</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}
