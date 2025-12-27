import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";

export default function ProjectGallery({ project }) {
  const { screenshots = [], youtube } = project;

  const slides = [
    ...(youtube ? [{ type: "video", src: youtube }] : []),
    ...screenshots.map((s) => ({ type: "image", src: s })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div className="project-gallery">
      <h2 className="project-gallery-title">Gallery</h2>

      <div className="project-gallery-wrapper">
        <div className="project-gallery-slide">
          {slides[currentIndex].type === "video" && (
            <iframe
              src={slides[currentIndex].src}
              title="Project Video"
              allowFullScreen
            />
          )}

          {slides[currentIndex].type === "image" && (
            <img
              src={slides[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              onClick={() =>
                window.open(slides[currentIndex].src, "_blank")
              }
            />
          )}
        </div>

        {slides.length > 1 && (
          <>
            <button
              className="gallery-arrow left"
              onClick={prevSlide}
            >
              <ChevronLeft />
            </button>

            <button
              className="gallery-arrow right"
              onClick={nextSlide}
            >
              <ChevronRight />
            </button>

            <div className="gallery-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`gallery-dot ${
                    idx === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
