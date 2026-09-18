import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    let count = 0;
    const maxAttempts = 30;

    const scrollToTarget = () => {
      const el = document.getElementById(id) || document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (count < maxAttempts) {
        count++;
        setTimeout(scrollToTarget, 40);
      }
    };

    const timer = setTimeout(scrollToTarget, 60);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  useEffect(() => {
    const handleHashClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const targetHash = href.substring(hashIndex);
      const targetId = targetHash.replace("#", "");
      const targetPath = href.substring(0, hashIndex);
      
      const currentPath = window.location.pathname;
      if (targetPath === "" || targetPath === currentPath || currentPath.endsWith(targetPath)) {
        const el = document.getElementById(targetId) || document.querySelector(targetHash);
        if (el) {
          e.preventDefault();
          window.history.pushState(null, "", href);
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleHashClick, true);
    return () => document.removeEventListener("click", handleHashClick, true);
  }, []);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollManager />
      <Navbar />
      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}
