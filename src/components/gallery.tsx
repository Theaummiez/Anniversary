"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from "@/lib/constants";
import type { GalleryCategory } from "@/types";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.85, y: -10 },
};

export function Gallery() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () =>
      filter === "all"
        ? GALLERY_PHOTOS
        : GALLERY_PHOTOS.filter((p) => p.category === filter),
    [filter],
  );

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    [],
  );
  const nextPhoto = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < filtered.length - 1 ? i + 1 : i,
      ),
    [filtered.length],
  );

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  }, []);

  const currentPhoto =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative z-[1] min-h-svh flex flex-col items-center justify-center px-4 py-24"
      style={{
        background: "linear-gradient(180deg, #080114 0%, #130230 100%)",
      }}
    >
      <SectionHeader
        tag="📸 Des instants précieux"
        title="Nos"
        highlight="Souvenirs"
        description="Chaque photo raconte une partie de notre histoire 🌟"
      />

      {/* Filter tabs — horizontally scrollable on mobile */}
      <div className="w-full max-w-2xl mb-8 overflow-x-auto scrollbar-none">
        <motion.div
          className="flex justify-center gap-2 min-w-max px-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          role="tablist"
          aria-label="Filtrer les photos par catégorie"
        >
          {GALLERY_CATEGORIES.map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => setFilter(key as "all" | GalleryCategory)}
              role="tab"
              aria-selected={filter === key}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 ${
                filter === key
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_4px_16px_rgba(255,107,157,0.4)]"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-pink-500/30"
              }`}
            >
              <span aria-hidden="true">{emoji}</span> {label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Photo grid — masonry columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-6xl w-full">
        <AnimatePresence mode="popLayout">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.src}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, delay: i * 0.03 }}
              layout
              className="break-inside-avoid mb-3"
            >
              <button
                onClick={() => openLightbox(i)}
                className="group relative w-full block rounded-xl overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080114]"
                aria-label={`Voir : ${photo.alt}`}
              >
                {/* Skeleton placeholder — reserves space to prevent CLS */}
                <div
                  className={`w-full ${
                    photo.aspect === "landscape"
                      ? "aspect-[4/3]"
                      : "aspect-[3/4]"
                  }`}
                >
                  {!loadedImages.has(photo.src) && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse rounded-xl" />
                  )}

                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    onLoad={() => handleImageLoad(photo.src)}
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3">
                  <p className="text-white text-xs font-medium line-clamp-2">
                    {photo.alt}
                  </p>
                </div>

                {/* Featured badge */}
                {photo.featured && (
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[0.6rem] font-bold px-2 py-0.5 rounded-full">
                    ⭐ Coup de cœur
                  </span>
                )}
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-pink-200/40 text-sm italic mt-8">
          Aucune photo dans cette catégorie 📸
        </p>
      )}

      <motion.p
        className="mt-8 text-pink-200/40 text-xs italic text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {filtered.length} souvenirs · Clique sur une photo pour l&apos;agrandir
        ✨
      </motion.p>

      {/* Lightbox */}
      <PhotoLightbox
        src={currentPhoto?.src ?? null}
        alt={currentPhoto?.alt ?? ""}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
        hasPrev={lightboxIndex !== null && lightboxIndex > 0}
        hasNext={lightboxIndex !== null && lightboxIndex < filtered.length - 1}
      />
    </section>
  );
}
