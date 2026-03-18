
"use client";
import React, { useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState('home');

  return (
    <main className="min-h-screen bg-white text-[#000000] font-sans tracking-tight">
     <nav className="sticky top-0 z-50 bg-white/95 border-b border-gray-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setMode('home')}>
              AI SURVIVAL
            </h1>
            <div className="hidden lg:flex gap-10 text-[15px] font-bold text-[#666666]">
              <a href="#" className="hover:text-black transition-colors">트렌드 리포트</a>
              <a href="#" className="hover:text-black transition-colors">커리어 로드맵</a>
              <a href="#" className="hover:text-black transition-colors">아키텍트 가이드</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setMode('test')} className="text-[14px] font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              테스트 시작
            </button>
          </div>
        </div>
      </nav>

      {/* 홈 모드 리더링 */}
      {mode === 'home' && (
        <div className="animate-in fade-in duration-1000">
         <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 opacity-60">
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
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setMode('test')} className="px-12 py-4 bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all">
                    테스트 시작하기
                  </button>
                  <button className="px-12 py-4 bg-transparent text-white border border-white/30 font-bold text-sm hover:bg-white/10 transition-all">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex justify-between items-end mb-16">
              <h3 className="text-4xl font-bold tracking-tighter">Essential Insight</h3>
              <p className="text-gray-500 font-medium">AI가 바꾸는 개발 생태계의 모든 것</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 그리드 아이템 예시 */}
              <div className="p-10 border border-gray-100 rounded-2xl hover:shadow-xl transition-all">
                <div className="text-blue-600 font-bold mb-4">01</div>
                <h4 className="text-xl font-bold mb-2">AI 아키텍처</h4>
                <p className="text-gray-500">대규모 언어 모델을 서비스에 통합하는 최적의 설계를 배웁니다.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 테스트 모드 렌더링 추가 */}
      {mode === 'test' && (
        <div className="max-w-4xl mx-auto px-8 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">진단 테스트가 준비 중입니다.</h2>
          <button onClick={() => setMode('home')} className="text-blue-600 underline">홈으로 돌아가기</button>
        </div>
      )}
    </main>
  );
}