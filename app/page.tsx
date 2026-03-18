"use client";
import React, { useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState('home'); // home, test, result
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  // ... (기존 질문 데이터 생략, 나중에 30개로 확장)
  const questions = [
    { q: "내 업무의 70% 이상이 기존 가이드를 따라 코딩하는 일이다.", type: "coder" },
    { q: "새 기능을 만들 때 비즈니스 가치와 설계 구조를 먼저 고민한다.", type: "architect" },
    { q: "GitHub Copilot 같은 AI 도구를 매일 업무에 활용하고 있다.", type: "ai" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* GNB (상단 네비게이션) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl text-blue-600 cursor-pointer" onClick={() => setMode('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">AI</div>
            SURVIVAL
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a href="#trend" className="hover:text-blue-600 transition-colors">시장 트렌드</a>
            <a href="#roadmap" className="hover:text-blue-600 transition-colors">로드맵</a>
            <a href="#tools" className="hover:text-blue-600 transition-colors">AI 도구</a>
          </div>
          <button onClick={() => setMode('test')} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
            테스트 시작
          </button>
        </div>
      </nav>

      {mode === 'home' && (
        <div className="animate-in fade-in duration-700">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
              코더의 시대는 갔다.<br/>
              <span className="text-blue-600">아키텍트의 시대</span>가 왔다.
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              AI가 코드를 짜주는 시대, 당신은 대체될 준비가 되었나요?<br/>
              나의 생존 지수를 확인하고 살아남는 전략을 세우세요.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={() => setMode('test')} className="px-10 py-5 bg-blue-600 text-white rounded-2xl text-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95">
                생존력 테스트 시작하기
              </button>
              <button className="px-10 py-5 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all">
                로드맵 보러가기
              </button>
            </div>
          </section>

          {/* Trend Section (추가 컨텐츠) */}
          <section id="trend" className="bg-white py-24 border-y border-slate-200">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-4xl font-black text-blue-600 mb-2">77%</div>
                  <div className="text-lg font-bold text-slate-800 mb-4 text-left">주요 기업 신입 채용 감소</div>
                  <p className="text-slate-500 text-sm leading-relaxed text-left">단순 코딩 업무가 AI로 대체되면서 기업들은 더 이상 주니어 코더를 대량 채용하지 않습니다.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-left">
                  <div className="text-4xl font-black text-blue-600 mb-2">320%</div>
                  <div className="text-lg font-bold text-slate-800 mb-4">AI 숙련자 연봉 상승</div>
                  <p className="text-slate-500 text-sm leading-relaxed">AI를 도구로 사용하여 생산성을 높인 개발자들의 가치는 시장에서 폭발적으로 상승하고 있습니다.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-left">
                  <div className="text-4xl font-black text-blue-600 mb-2">Top 5</div>
                  <div className="text-lg font-bold text-slate-800 mb-4">필수 생존 역량</div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">#아키텍처설계 #프롬프트엔지니어링 #비즈니스통찰 #문제정의력 #풀스택이해력</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 테스트 모드 (기존 UI 유지하되 컨테이너 안에 배치) */}
      {mode === 'test' && (
        <div className="max-w-2xl mx-auto px-6 py-20">
          {/* ... (기존 테스트 UI 코드) ... */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl">
             <h2 className="text-2xl font-bold mb-10">{questions[currentIdx].q}</h2>
             {/* 버튼들... */}
             <button onClick={() => setMode('home')} className="mt-8 text-slate-400 underline text-sm w-full">테스트 중단하고 홈으로</button>
          </div>
        </div>
      )}
    </main>
  );
}