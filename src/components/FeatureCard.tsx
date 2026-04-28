import { useRef, useCallback } from 'react';
import {
  Shield, RefreshCw, BarChart3, HardDrive, Sparkles, Video,
  HeartPulse, Database, ShoppingCart, Copyright, Scale, Globe,
  ScanLine, ScanFace, Crown, MessageSquare,
} from 'lucide-react';
import type { FeatureItem } from '@/types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, RefreshCw, BarChart3, HardDrive, Sparkles, Video,
  HeartPulse, Database, ShoppingCart, Copyright, Scale, Globe,
  ScanLine, ScanFace, Crown, MessageSquare,
};

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[feature.icon] || Sparkles;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!decorRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    decorRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (decorRef.current) {
      decorRef.current.style.transform = 'translate(0, 0)';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="feature-card group relative bg-[#0f0f0f] border border-[#1a1a1a] p-6 lg:p-8 flex flex-col aspect-[1/1.1] overflow-hidden transition-all duration-300 hover:bg-[#151515] hover:border-[rgba(232,243,255,0.15)] cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-index={index}
    >
      {/* Top: Icon + Name */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col gap-3">
          <Icon
            size={32}
            className="text-[#e8f3ff] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(232,243,255,0.4)]"
          />
          <div>
            <h3 className="text-[18px] lg:text-[20px] font-semibold text-white leading-[1.4] mb-0.5">
              {feature.name}
            </h3>
            <span className="text-[11px] lg:text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] font-medium font-mono-en">
              {feature.nameEn}
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Description */}
      <p className="text-[14px] lg:text-[15px] leading-[1.6] text-[rgba(255,255,255,0.6)] flex-grow">
        {feature.description}
      </p>

      {/* Bottom: Decoration Image */}
      {feature.decorationImage && (
        <div className="relative mt-4 h-[80px] lg:h-[100px] overflow-hidden rounded">
          <div
            ref={decorRef}
            className="absolute inset-[-10px] transition-transform duration-300 ease-out will-change-transform"
          >
            <img
              src={feature.decorationImage}
              alt=""
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              loading="lazy"
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        </div>
      )}
    </div>
  );
}
