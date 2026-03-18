"use client";
import React, { useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState('home');

  return (
    <main className="min-h-screen bg-white text-[#000000] font-sans tracking-tight">
      
      {/* 현대 스타일 GNB */}
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-gray-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setMode('home')}>
              AI SURVIVAL
            </h1>
            <div className="hidden lg:flex gap-10 text-[15px] font-bold text-[#666666]">
              <a href="#" className="hover:text-black">트렌드 리포트</a>
              <a href="#" className="hover:text-black">커리어 로드맵</a>
              <a href="#" className="hover:text-black">아키텍트 가이드</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setMode('test')} className="text-[14px] font-bold border-b-2 border-black pb-1">
              테스트 시작
            </button>
          </div>
        </div>
      </nav>

      {mode === 'home' && (
        <div className="animate-in fade-in duration-1000">
          {/* Hero Section: 현대차 메인 화면 느낌 */}
          <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 opacity-60">
                {/* 여기에 멋진 AI 관련 배경 이미지가 들어갈 자리입니다 */}
                <div className="w-full h-full bg-gradient-to-r from-black to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-8 w-full">
              <div className="max-w-2xl">
                <span className="text-blue-400 font-bold tracking-[0.2em] mb-4 block">PREVIEW THE FUTURE</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                  인공지능 시대를<br/>주도하는 아키텍트
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  단순한 코딩을 넘어 시스템을 설계하고 가치를 창출합니다.<br/>
                  당신의 개발자로서의 현재와 미래를 진단해 보세요.
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setMode('test')} className="px-12 py-4 bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all">
                    테스트 시작하기
                  </button>
                  <button className="px-12 py-4 bg-transparent text-white border border-white/30 font-bold text-sm hover:bg-white/10 transition-all">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Content: 정보 카드 섹션 */}
          <section className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex justify-between items-end mb-16">
              <h3 className="text-4xl font-bold tracking-tighter">Essential Insight</h3>
              <p className="text-gray-500 font-medium">AI가 바꾸는 개발 생태계의 모든 것</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "채용 트렌드", desc: "코딩 테스트의 종말과 설계 역량의 부상" },
                { title: "AI 도구 가이드", desc: "생산성을 300% 높이는 핵심 툴 셋" },
                { title: "로드맵", desc: "시니어 아키텍트로 가는 단계별 학습법" },
                { title: "포트폴리오", desc: "AI 활용 능력을 증명하는 방법론" },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                    <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* 테스트 화면 UI도 현대적으로 변경 */}
      {mode === 'test' && (
        <div className="max-w-4xl mx-auto px-8 py-32 animate-in slide-in-from-bottom duration-700">
           <div className="mb-20">
              <p className="text-sm font-bold text-gray-400 tracking-widest mb-4">QUESTION 01 / 30</p>
              <h2 className="text-4xl font-bold tracking-tighter leading-tight">
                내 업무의 70% 이상이 기존 가이드를 따라 코딩하는 일이다.
              </h2>
           </div>
           <div className="grid gap-4">
              {["매우 그렇다", "그렇다", "보통이다", "아니다", "전혀 아니다"].map((text, idx) => (
                <button key={idx} className="w-full text-left py-6 px-10 border border-gray-200 text-lg font-bold hover:bg-black hover:text-white transition-all">
                  {text}
                </button>
              ))}
           </div>
           <button onClick={() => setMode('home')} className="mt-12 text-gray-400 font-bold border-b border-gray-200 pb-1 text-sm hover:text-black">
              메인으로 돌아가기
           </button>
        </div>
      )}
    </main>
  );
}