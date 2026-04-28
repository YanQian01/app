import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from '@/components/FeatureCard';
import { featureData } from '@/data/features';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureMatrix() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger reveal
      const cards = gridRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: {
              amount: 0.6,
              from: 'start',
            },
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full bg-[#111111] py-[80px] lg:py-[120px]"
    >
      {/* Section Header */}
      <div ref={titleRef} className="px-[6vw] lg:px-[8vw] mb-12 lg:mb-16 will-change-transform">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <span className="text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] font-medium font-mono-en block mb-3">
              [ CORE FEATURES ]
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight">
              24+ 核心功能模块
            </h2>
          </div>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] max-w-[480px] leading-[1.6]">
            模块化架构设计，从 AI 智能到安全合规，从数据洞察到资产管理，构建完整知识产权生态闭环。
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="px-[6vw] lg:px-[8vw]">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px', backgroundColor: '#1a1a1a' }}
        >
          {featureData.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Architecture Section */}
      <div id="architecture" className="px-[6vw] lg:px-[8vw] mt-[80px] lg:mt-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/tech-architecture.jpg"
              alt="技术架构示意图"
              className="w-full h-auto rounded-lg border border-[#1a1a1a]"
              loading="lazy"
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] font-medium font-mono-en block mb-3">
              [ TECH ARCHITECTURE ]
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight mb-6">
              Flutter 跨平台
              <br />
              <span className="text-[#e8f3ff]">模块化架构</span>
            </h2>
            <div className="space-y-4">
              {[
                { title: '框架', desc: 'Flutter (Dart SDK >=3.4.0 <4.0.0)，一套代码，七平台运行' },
                { title: '状态管理', desc: '自定义控制器模式，结合 Provider 和 InheritedWidget' },
                { title: 'UI 设计', desc: '现代化 Material Design，支持 Indigo/Coral 主题，含交互组件与转场动画' },
                { title: '数据与通信', desc: 'SharedPreferences + 本地文件存储，HTTP 客户端支持 API 调用与数据同步' },
                { title: '多媒体与 AI', desc: 'Mobile Scanner 二维码扫描、图片处理、AI 面部识别、云端推理' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e8f3ff] mt-2.5 shrink-0" />
                  <div>
                    <span className="text-white font-semibold text-[15px]">{item.title}：</span>
                    <span className="text-[rgba(255,255,255,0.6)] text-[15px]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
