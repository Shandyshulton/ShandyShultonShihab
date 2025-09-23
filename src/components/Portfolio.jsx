import { useState } from "react";
import { portfolioList } from "../data/DataPortfolio";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Portfolio.css";
import "../styles/StatusBadges.css";
import { FiExternalLink } from "react-icons/fi";

function StatusBadge({ status }) {
  const label =
    status === "completed"
      ? "Completed"
      : status === "in-progress"
      ? "In Progress"
      : status === "not-completed"
      ? "Not Completed"
      : status;
  return <span className={`status-badge ${status}`}>{label}</span>;
}

function CategoryPill({ category }) {
  return <span className="category-pill">{category}</span>;
}

/** TechTags dengan expand/collapse animasi */
function TechTags({ tech = [] }) {
  const [expanded, setExpanded] = useState(false);
  const max = 3;
  const head = tech.slice(0, max);
  const tail = tech.slice(max);
  const remain = Math.max(tech.length - max, 0);

  return (
    <motion.div
      className="card-tags"
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {head.map((t, i) => (
        <motion.span
          key={`head-${i}`}
          className="tag"
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          {t}
        </motion.span>
      ))}

      {expanded &&
        tail.map((t, i) => (
          <motion.span
            key={`tail-${i}`}
            className="tag"
            layout
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t}
          </motion.span>
        ))}

      {!expanded && remain > 0 && (
        <motion.span
          className="tag more"
          layout
          role="button"
          tabIndex={0}
          onClick={() => setExpanded(true)}
          onKeyDown={(e) => e.key === "Enter" && setExpanded(true)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
          title="Show all technologies"
        >
          +{remain} more
        </motion.span>
      )}

      {expanded && remain > 0 && (
        <motion.span
          className="tag less"
          layout
          role="button"
          tabIndex={0}
          onClick={() => setExpanded(false)}
          onKeyDown={(e) => e.key === "Enter" && setExpanded(false)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
          title="Show fewer"
        >
          show less
        </motion.span>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = ["All", ...new Set(portfolioList.map((i) => i.category))];

  const filteredList =
    filter === "all"
      ? portfolioList
      : portfolioList.filter((item) => item.category === filter);

  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3 className="portfolio-title">Portfolio</h3>

        {/* Filter buttons */}
        <div style={{ marginBottom: "16px", display: "flex", gap: "12px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                border: filter === cat ? "2px solid #3730a3" : "1px solid #ccc",
                background: filter === cat ? "#eef2ff" : "#fff",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1280: { slidesPerView: 3 },
            900: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredList.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.article
                  className="pf-card"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="pf-media">
                    <Link to={`/portfolio/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable="false"
                      />
                    </Link>
                    <StatusBadge status={item.status} />
                  </div>

                  <div className="pf-body">
                    <div className="pf-headline">
                      <h4 className="pf-title">
                        <Link to={`/portfolio/${item.id}`}>{item.title}</Link>
                      </h4>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="pf-ext"
                          aria-label="Open external link"
                          title="Open external link"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>

                    <CategoryPill category={item.category} />
                    <p className="pf-desc">{item.description}</p>
                    <TechTags tech={item.tech} />
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>
      </div>
    </section>
  );
}
