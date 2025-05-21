"use client";
import { useState, useEffect } from "react";
import { getAllCategories } from "./lib/api";
import { Preloader } from "../components/ui/Preloader";
import { CategoryList } from "../components/category/CategoryList";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  const filteredCategory = catalog.filter((category) =>
    category.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <>
          <div className="input-search-wrapper mb-5">
            <svg viewBox="0 0 24 24">
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
            </svg>
            <input
              type="text"
              placeholder="Поиск по категориям"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search categories"
            />
          </div>
          <CategoryList catalog={filteredCategory} />
        </>
      )}
    </>
  );
}