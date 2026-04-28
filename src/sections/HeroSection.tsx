import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Bot, Video, Shield, Scale } from 'lucide-react';
import { heroMetrics } from '@/data/features';

const quickNavs = [
  { icon: Bot, label: 'AI助手' },
  { icon: Video, label: '侵权监控' },
  { icon: Shield, label: '版权保护' },
  { icon: Scale, label: '法律合规' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quickNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Title line 1 reveal
      tl.fromTo(
        titleLine1Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, ease: 'power4.out' },
        0.3
      );

      // Title line 2 reveal
      tl.fromTo(
        titleLine2Ref.current,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.2, ease: 'power4.out' },
        0.45
      );

      // Subtitle fade in
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.7
      );

      // Metrics fade in + scale
      tl.fromTo(
        metricsRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        0.9
      );

      // Dashboard image slide in
      tl.fromTo(
        imageRef.current,
        { x: 60, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
        0.6
      );

      // Quick nav fade in
      tl.fromTo(
        quickNavRef.current?.children || [],
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out' },
        1.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center"
    >
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-[55%] px-[6vw] lg:pl-[8vw] lg:pr-0 flex flex-col justify-center pt-[100px] pb-[140px] lg:pb-0">
        {/* Main Title */}
        <h1 className="text-[36px] lg:text-[64px] font-black leading-[1.1] tracking-[-0.02em] text-white mb-6">
          <div className="overflow-hidden">
            <div ref={titleLine1Ref} className="will-change-transform">
              政企民知识产权
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={titleLine2Ref} className="will-change-transform">
              <span className="text-[#e8f3ff]">数字化管理中枢</span>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[15px] leading-[1.6] tracking-[0.01em] text-[rgba(255,255,255,0.6)] max-w-[520px] mb-10 will-change-transform"
        >
          跨平台一站式知识产权解决方案，以 AI 驱动企业级安全合规与高效创新。
          覆盖全范围全领域的AI知识产权一站式服务，打造真正的知产一体通。
        </p>

        {/* Metrics */}
        <div ref={metricsRef} className="flex gap-8 lg:gap-12 mb-auto lg:mb-0">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col will-change-transform">
              <span
                className="font-mono-en text-[28px] lg:text-[36px] font-bold text-white leading-none tracking-tight"
                style={{ textShadow: '0 0 20px rgba(232,243,255,0.15)' }}
              >
                {metric.value}
              </span>
              <span className="text-[11px] lg:text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] mt-1.5 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Nav (Desktop: horizontal at bottom, Mobile: after metrics) */}
        <div
          ref={quickNavRef}
          className="flex gap-6 lg:gap-10 mt-10 lg:mt-auto lg:absolute lg:bottom-[60px]"
        >
          {quickNavs.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-[rgba(255,255,255,0.4)] hover:text-[#e8f3ff] transition-all duration-300 cursor-pointer group"
            >
              <item.icon
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="text-[13px] font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div
        ref={imageRef}
        className="hidden lg:block absolute right-[4vw] top-1/2 -translate-y-1/2 w-[40%] will-change-transform"
      >
        <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a] shadow-2xl">
          <img
            src="/app-dashboard.jpg"
            alt="知产通 Dashboard 界面"
            className="w-full h-auto object-cover"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30" />
        </div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden px-[6vw] pb-6 -mt-8">
        <div className="relative rounded-lg overflow-hidden border border-[#1a1a1a]">
          <img
            src="/app-dashboard.jpg"
            alt="知产通 Dashboard 界面"
            className="w-full h-auto object-cover"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={20} className="text-[rgba(255,255,255,0.3)]" />
      </div>
    </section>
  );
}
