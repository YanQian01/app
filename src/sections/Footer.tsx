import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  { icon: Monitor, label: 'Windows', href: '#' },
  { icon: Monitor, label: 'Linux', href: '#' },
  { icon: Monitor, label: 'macOS', href: '#' },
  { icon: Smartphone, label: 'Android', href: '#' },
  { icon: Smartphone, label: 'iOS', href: '#' },
  { icon: Globe, label: 'Web', href: '#' },
];

const productLinks = [
  'AI助手', '侵权监控', '版权保护', '法律合规', '数据分析', '会员系统',
];

const platformLinks = [
  'Android', 'iOS', 'Windows', 'Linux', 'macOS', 'Web', '鸿蒙OS',
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} id="download" className="w-full bg-[#0f0f0f]">
      {/* CTA Section */}
      <div className="border-t border-[#1a1a1a] px-[6vw] lg:px-[8vw] py-[60px] lg:py-[100px]">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="text-[28px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-4">
            全平台覆盖，<span className="text-[#e8f3ff]">即刻部署</span>
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-8">
            知产通支持 Android、iOS、Windows、Linux、macOS、Web 及鸿蒙OS，
            一次开发，多端运行，让企业知识产权管理无边界。
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1a1a1a] rounded text-[rgba(255,255,255,0.6)] hover:text-white hover:border-[rgba(232,243,255,0.3)] transition-all duration-300 text-[13px] font-medium"
              >
                <platform.icon size={16} />
                {platform.label}
                <ArrowUpRight size={12} className="opacity-50" />
              </a>
            ))}
          </div>

          <a
            href="https://gitee.com/xzljx/zctupdata/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e8f3ff] text-[#0a0a0a] rounded font-semibold text-[15px] hover:bg-white transition-colors duration-300"
          >
            立即体验知产通
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div
        ref={contentRef}
        className="border-t border-[#1a1a1a] px-[6vw] lg:px-[8vw] py-[60px] lg:py-[80px] will-change-transform"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Brand */}
          <div className="lg:w-[60%]">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/知产通.png"
                alt="知产通"
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-white font-extrabold text-xl tracking-tight">
                知产通
              </span>
            </div>
            <p className="text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-[480px] mb-6">
              知产通，以技术守护创新，让知识产权管理更智能、更安全、更高效。
            </p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart SDK', 'AI Ready', '全平台适配'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#1a1a1a] rounded text-[12px] text-[rgba(255,255,255,0.5)] hover:border-[rgba(232,243,255,0.3)] hover:text-[rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="lg:w-[40%] flex gap-10 lg:gap-16">
            <div>
              <h4 className="text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] font-medium mb-4">
                产品功能
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.08em] font-medium mb-4">
                支持平台
              </h4>
              <ul className="space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
            © 2025 知产通. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[12px] text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-[12px] text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.6)] transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
