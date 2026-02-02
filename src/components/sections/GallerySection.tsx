import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Transformer Installation", category: "Installation" },
  { src: gallery2, alt: "Modern Substation", category: "Substation" },
  { src: gallery3, alt: "Engineering Team", category: "Team" },
  { src: gallery4, alt: "Power Transmission", category: "Infrastructure" },
  { src: gallery5, alt: "Control Room", category: "Operations" },
  { src: gallery6, alt: "Power Transformer", category: "Equipment" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground">
              A glimpse into our completed projects showcasing transformer installations, 
              substation works, and infrastructure development across India.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group",
                  "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-primary-foreground font-semibold">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="corporateOutline" size="lg" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-900/90 to-transparent rounded-b-lg">
              <span className="text-xs text-accent font-medium uppercase tracking-wider">
                {galleryImages[selectedImage].category}
              </span>
              <h3 className="text-primary-foreground font-display font-bold text-lg">
                {galleryImages[selectedImage].alt}
              </h3>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === selectedImage
                    ? "w-8 bg-accent"
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
