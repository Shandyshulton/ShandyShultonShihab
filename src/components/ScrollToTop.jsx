import { useEffect } from "react";

function ScrollToTop({ smooth = false }) {
  useEffect(() => {
    // Menghapus hash dari URL
    window.history.replaceState(null, "", window.location.pathname);
    
    // Scroll ke atas saat halaman dimuat
    window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
  }, [smooth]);

  return null;
}

export default ScrollToTop;
