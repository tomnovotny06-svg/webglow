/*
 * WEBGLOW ShowcaseCard — Static image card (no slider, no drag)
 * Quiet Luxury Minimalism: clean, precise, no decorative excess
 */

interface BeforeAfterSliderProps {
  imageSrc: string;
  label: string;
}

export default function BeforeAfterSlider({ imageSrc, label }: BeforeAfterSliderProps) {
  return (
    <div className="relative group">
      {/* Label */}
      <div className="mb-3 flex items-center gap-2">
        <span
          className="text-xs font-medium uppercase tracking-widest text-[#888]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {label}
        </span>
        <div className="flex-1 h-px bg-[#E8E8E8]" />
      </div>

      {/* Static image */}
      <div
        className="relative overflow-hidden rounded-sm"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={imageSrc}
          alt={`Ukázka redesignu — ${label}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          draggable={false}
        />
      </div>
    </div>
  );
}
