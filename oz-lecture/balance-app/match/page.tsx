'use client';

export default function MatchPage() {
  // 예시 더미 데이터 (나중에 Supabase DB에서 불러올 데이터)
  const users = [
    {
      id: 1,
      nickname: "도토리묵",
      age: 26,
      choice: "친구랑 간다고 거짓말하기",
      comment: "솔직히 말하면 속만 시끄러워짐. 부모님 걱정 끼쳐드리는 것보다 가끔은 거짓말이 편함.",
    },
    {
      id: 2,
      nickname: "젤리몬스터",
      age: 28,
      choice: "친구랑 간다고 거짓말하기",
      comment: "어른들 입장에서는 당연히 오해하시니까 피곤해서라도 숨기는 게 맞음.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto space-y-4">
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg font-bold text-slate-800">💬 반대 성향 토론장</h1>
        <a href="/" className="text-xs text-rose-500 font-semibold hover:underline">← 홈으로</a>
      </div>

      <p className="text-xs text-slate-500">
        나와 다른 선택을 한 사람들이 남긴 코멘트입니다. 마음에 드는 상대에게 대화를 걸어보세요!
      </p>

      {/* 유저 카드 리스트 */}
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-800">{user.nickname} <span className="text-xs font-normal text-slate-400">({user.age})</span></span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                {user.choice}
              </span>
            </div>
            
            <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl italic">
              "{user.comment}"
            </p>

            <button 
              onClick={() => alert(`${user.nickname님에게 대화 요청을 보냈습니다! (채팅방 연동 필요)`)}`)}
              className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-xl text-sm hover:bg-slate-800 transition"
            >
              대화 걸기 (첫마디 보내기)
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}