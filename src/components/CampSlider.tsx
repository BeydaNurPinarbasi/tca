// src/components/CampSlider.tsx
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

function AutoplayPlugin(slider: any) {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function CampSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl"
    >
      {[
        "src/assets/bg-fashion.webp",
        "src/assets/logo.webp",
        "src/assets/bg-fashion.webp",
      ].map((src, i) => (
        <div className="keen-slider__slide" key={i}>
          <img
            src={src}
            alt={`Camp ${i + 1}`}
            className="w-full h-[400px] object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}
