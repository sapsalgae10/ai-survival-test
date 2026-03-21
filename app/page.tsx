"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// 이미지 에셋 임포트 (경로가 올바른지 확인하세요)
//import logo from '/public/logo.png'; // 실제 로고 이미지로 교체 필요
//import survivalIllustration from '/public/logo.png'; // 실제 일러스트 이미지로 교체 필요

export default function Home() {
  const [mode, setMode] = useState('home'); // home, test, result
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ coder: 0, arch: 0, ai: 0, future: 0 });

  // --- [진단 문항 데이터] ---
  const questions = [
    { q: "나는 코드의 한 줄보다 전체 시스템의 구조(Architecture)를 먼저 생각한다.", type: "arch" },
    { q: "GitHub Copilot이나 ChatGPT 없이 코딩하는 것이 이제는 매우 불편하다.", type: "ai" },
    { q: "새로운 기술이 나오면 기술적 호기심보다 '어디에 써먹을지' 비즈니스 가치를 먼저 따진다.", type: "future" },
    { q: "나는 주어진 요구사항대로 '구현'만 할 때 가장 마음이 편하다.", type: "coder" }, 
    { q: "복잡한 에러가 발생했을 때 AI에게 질문하는 요령(Prompt)을 스스로 터득하고 있다.", type: "ai" },
    { q: "나는 특정 언어나 프레임워크에 종속되지 않고 문제 해결 자체에 집중한다.", type: "arch" },
    { q: "AI가 내 일자리를 뺏을까 봐 걱정하기보다, AI를 어떻게 부릴지 고민한다.", type: "future" },
    { q: "코드 리뷰를 할 때 가독성이나 성능보다 '돌아가느냐'가 가장 중요하다.", type: "coder" }, 
    { q: "클라우드 서비스(AWS, Vercel 등)를 활용해 서비스를 직접 배포해본 경험이 즐겁다.", type: "arch" },
    { q: "AI가 생성한 코드의 오류를 잡아내는 것이 직접 처음부터 짜는 것보다 빠르다.", type: "ai" },
   { q: "나는 반복적인 코딩 작업에서 지루함을 크게 느낀다.", type: "future" },
    { q: "문서화보다는 일단 코드를 치기 시작하는 편이다.", type: "coder" }, 
    { q: "API 설계 시 확장성과 재사용성을 최우선으로 고려한다.", type: "arch" },
    { q: "AI 도구 유료 결제 비용을 아깝다고 생각하지 않는다.", type: "ai" },
    { q: "나는 개발자이자 기획자의 마인드를 동시에 갖고 있다.", type: "future" },
    { q: "코딩할 때 AI가 제안하는 솔루션이 마음에 들지 않아도, 일단 받아들이고 고쳐 나가는 편이다.", type: "coder" }, 
  ];

  // 다음 문항 핸들러
  const handleNext = (point: number) => {
    const type = questions[currentIdx].type as keyof typeof scores;
    
    // coder 문항은 역배점 처리 (낮은 점수일수록 생존 확률 상승)
    const actualPoint = type === 'coder' ? (6 - point) : point;

    setScores(prev => ({ ...prev, [type]: prev[type] + actualPoint }));

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setMode('result');
    }
  };

  const resetTest = () => {
    setMode('home');
    setCurrentIdx(0);
    setScores({ coder: 0, arch: 0, ai: 0, future: 0 });
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const survivalRate = Math.min(100, Math.round((totalScore / (questions.length * 5)) * 100));

  return (
    <main className="min-h-screen bg-white text-black font-sans tracking-tight">
      {/* GNB */}
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-gray-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <img src="/logo.png" alt="" />
          <button onClick={() => setMode('test')} className="text-sm font-bold border-b-2 border-black pb-1">
            진단하기
          </button>
        </div>
      </nav>

      {/* [1] 메인 홈 모드: 이미지 및 그리드 레이아웃 적용 */}
      {mode === 'home' && (
        <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white px-8 py-16">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            
            {/* 왼쪽: 텍스트 및 로고 영역 */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="w-16 h-16 relative mb-4">
                <Image 
                  src={'/logo.png'} 
                  alt="SICAS 로고"
                  fill 
                  style={{ objectFit: 'contain' }} 
                  priority 
                />
              </div>
              
              <span className="text-blue-400 font-bold tracking-[0.3em] block underline underline-offset-8">
                2026 SPECIAL REPORT
              </span>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
                당신은 AI에 대체될 것인가,<br/>AI를 지배할 것인가.
              </h2>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                앞으로의 개발자 생존은 '코드'가 아닌 '설계'와 'AI 활용력'에 달려있습니다. 
                당신의 현재 위치를 진단하고 미래를 준비하세요.
              </p>
              <button 
                onClick={() => setMode('test')} 
                className="px-12 py-5 bg-white text-black font-bold hover:bg-gray-200 transition-all text-lg"
              >
                지금 바로 진단 시작
              </button>
            </div>
            
            {/* 오른쪽: 메인 일러스트레이션 */}
            <div className="w-full h-auto aspect-square relative rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000">
              <Image 
                src={'/logo.png'} 
                alt="AI 시대 서바이벌 가이드 디지털 일러스트레이션"
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </section>
      )}

      {/* [2] 테스트 모드 */}
      {mode === 'test' && (
        <section className="max-w-4xl mx-auto px-8 py-32 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="mb-16">
            <p className="text-sm font-bold text-gray-400 tracking-[0.2em] mb-4">
              QUESTION {String(currentIdx + 1).padStart(2, '0')} / {questions.length}
            </p>
            <div className="w-full bg-gray-100 h-1 mb-12">
              <div 
                className="bg-black h-full transition-all duration-500" 
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter leading-tight min-h-[8rem]">
              {questions[currentIdx].q}
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              { label: "매우 그렇다", p: 5 }, 
              { label: "그렇다", p: 4 }, 
              { label: "보통이다", p: 3 }, 
              { label: "아니다", p: 2 }, 
              { label: "전혀 아니다", p: 1 }
            ].map((opt) => (
              <button 
                key={opt.p} 
                onClick={() => handleNext(opt.p)} 
                className="w-full text-left py-6 px-10 border border-gray-200 text-lg font-bold hover:bg-black hover:text-white transition-all"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* [3] 결과 모드 */}
      {mode === 'result' && (
        <section className="max-w-4xl mx-auto px-8 py-32 text-center animate-in zoom-in duration-700">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Diagnosis Complete</span>
          <h2 className="text-7xl font-black my-10 tracking-tighter">{survivalRate}%</h2>
          <p className="text-2xl font-bold mb-12">당신의 AI 시대 생존 확률입니다.</p>
          <div className="bg-gray-50 p-10 text-left border-l-4 border-black mb-12">
            <h4 className="font-bold text-xl mb-4">아키텍트의 분석 결과:</h4>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              {survivalRate > 80 ? "경이로운 수준입니다. 당신은 이미 AI를 도구로 부리며 전체를 설계하는 '슈퍼 아키텍트'의 길을 걷고 있습니다." : 
               survivalRate > 50 ? "안정적인 생존권입니다. 다만 특정 기술에 안주하기보다 비즈니스 설계 능력을 더 키울 필요가 있습니다." : 
               "경고 단계입니다. 단순 구현 위주의 업무 스타일은 AI에 의해 가장 먼저 대체될 위험이 있습니다. 설계 중심으로 사고를 전환하세요."}
            </p>
          </div>
          <button onClick={resetTest} className="px-12 py-4 bg-black text-white font-bold text-sm">
            테스트 다시하기
          </button>
        </section>
      )}
    </main>
  );
}