import { cn } from "@/lib/utils";
import * as React from "react";

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  aspectRatio?: string;
  hoverScale?: boolean;
}

export const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ className, children, image, aspectRatio = "16/15", hoverScale = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-[0.75vw] border bg-blue-950/30",
        className
      )}
      style={{ aspectRatio }}
      {...props}
    >
      {image && (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-500",
              hoverScale && "group-hover:scale-110"
            )}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
        </>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-[1.5vw] z-10">
        {children}
      </div>
    </div>
  )
);
ImageCard.displayName = "ImageCard";
