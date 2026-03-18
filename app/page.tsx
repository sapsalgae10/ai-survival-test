"use client";
import React, { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState('start'); // 화면 상태: 시작(start), 테스트(test), 결과(result)
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  // 아까 함께 만든 질문들 중 일부를 먼저 넣었습니다.
  const questions = [
    { q: "내 업무의 70% 이상이 기존 가이드를 따라 코딩하는 일이다.", type: "coder" },
    { q: "새 기능을 만들 때 비즈니스 가치와 설계 구조를 먼저 고민한다.", type: "architect" },
    { q: "GitHub Copilot 같은 AI 도구를 매일 업무에 활용하고 있다.", type: "ai" },
    { q: "복잡한 시스템의 전체 흐름을 다이어그램으로 그려낼 수 있다.", type: "architect" },
    { q: "단순 코딩 기술보다 문제 해결을 위한 논리력 강화에 투자한다.", type: "future" },
  ];

  const handleNext = (point: number) => {
    setScore(score + point);
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep('result');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-2xl text-center">
        {step === 'start' && (
          <>
            <h1 className="text-4xl font-black text-slate-900 mb-4">AI 시대, 나의 생존력은?</h1>
            <p className="text-slate-600 mb-10 text-lg">신입 채용 77% 감소 시대, 당신의 위치를 진단해보세요.</p>
            <button onClick={() => setStep('test')} className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">테스트 시작하기</button>
          </>
        )}

        {step === 'test' && (
          <div className="text-left">
            <div className="w-full bg-slate-100 h-2 rounded-full mb-8">
              <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}></div>
            </div>
            <span className="text-blue-600 font-bold">질문 {currentIdx + 1} / {questions.length}</span>
            <h2 className="text-2xl font-bold mt-2 mb-10 text-slate-800">{questions[currentIdx].q}</h2>
            <div className="grid gap-4">
              {[5, 4, 3, 2, 1].map(num => (
                <button key={num} onClick={() => handleNext(num)} className="w-full text-left p-4 border-2 border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700">
                  {num === 5 ? "매우 그렇다" : num === 1 ? "전혀 아니다" : `${num}점`}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && (
          <>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">진단 결과</h2>
            <div className="text-7xl font-black text-blue-600 my-8">{Math.round((score / (questions.length * 5)) * 100)}점</div>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed whitespace-pre-wrap">
              {score > 18 ? "축하합니다! 당신은 AI를 부리는 '아키텍트' 성향이 강합니다. 시스템 설계와 비즈니스 통찰력을 계속 키워보세요." : "위험합니다! 단순 코더 단계에 머물러 있습니다. AI가 대체하기 가장 좋은 영역이니, 설계 역량을 키우는 데 집중하세요."}
            </p>
            <button onClick={() => window.location.reload()} className="bg-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-300">다시 하기</button>
          </>
        )}
      </div>
    </main>
  );
}