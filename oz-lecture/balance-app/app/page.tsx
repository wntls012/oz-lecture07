'use client';

import { useState } from 'react';

export default function Home() {
  const [voted, setVoted] = useState<string | null>(null);

  const question = {
    title: "애인과 1박 2일 여행, 부모님께 솔직히 말하기 vs 친구랑 간다고 거짓말하기",
    optionA: "부모님께 솔직히 말하기",
    optionB: "친구랑 간다고 거짓말하기",
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6 border border-slate-100">
        
        {/* 상단 뱃지 및 질문 */}
        <div className="text-center space-y-2">
          <span className="bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full">
            🔥 오늘의 가치관 토론
          </span>
          <h1 className="text-xl font-bold text-slate-800 leading-snug">
            {question.title}
          </h1>
        </div>

        {/* 투표 전: A vs B 버튼 */}
        {!voted ? (
          <div className="space-y-3">
            <button
              onClick={() => setVoted('A')}
              className="w-full p-4 rounded-xl border-2 border-slate-200 hover:border-rose-500 hover:bg-rose-50/50 font-medium text-slate-700 text-left transition"
            >
              <span className="font-bold text-rose-500 mr-2">A.</span> {question.optionA}
            </button>
            <button
              onClick={() => setVoted('B')}
              className="w-full p-4 rounded-xl border-2 border-slate-200 hover:border-rose-500 hover:bg-rose-50/50 font-medium text-slate-700 text-left transition"
            >
              <span className="font-bold text-rose-500 mr-2">B.</span> {question.optionB}
            </button>
          </div>
        ) : (
          /* 투표 후: 완료 안내 및 매칭 페이지 이동 버튼 */
          <div className="text-center py-6 space-y-4 bg-rose-50/50 rounded-xl p-4 border border-rose-100">
            <p className="text-rose-600 font-bold text-lg">투표 완료! 🎉</p>
            <p className="text-sm text-slate-600">
              내 성향과 토론 코멘트를 남겼습니다.<br />반대 의견을 가진 사람들을 구경해볼까요?
            </p>
            <a
              href="/match"
              className="inline-block w-full bg-rose-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-rose-600 transition text-center"
            >
              토론장 및 매칭 보러 가기 👉
            </a>
          </div>
        )}

      </div>
    </main>
  );
}