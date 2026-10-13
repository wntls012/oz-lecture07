document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const messageContainer = document.getElementById('message-container');
    const chatScrollArea = document.getElementById('chat-scroll-area');
    const suggestBtn = document.getElementById('suggest-btn');
    const creditCountSpan = document.getElementById('credit-count');
    const chargeBtn = document.getElementById('charge-btn');

    let currentCredits = 1250;

    // 메시지 추가 함수 (유저 / 캐릭터 공용)
    function appendMessage(sender, text) {
        const isUser = sender === 'user';
        const wrapper = document.createElement('div');
        wrapper.className = `max-w-2xl mx-auto flex items-start space-x-3 ${isUser ? 'justify-end' : ''}`;

        if (isUser) {
            wrapper.innerHTML = `
                <div class="bg-pink-600 text-white p-3.5 rounded-2xl rounded-tr-none text-sm max-w-lg leading-relaxed">
                    ${escapeHTML(text)}
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs shrink-0">나</div>
            `;
        } else {
            wrapper.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center font-bold text-xs shrink-0">서린</div>
                <div class="bg-cardBg p-3.5 rounded-2xl rounded-tl-none border border-gray-800 text-sm max-w-lg leading-relaxed">
                    ${escapeHTML(text)}
                </div>
            `;
        }

        messageContainer.appendChild(wrapper);
        scrollToBottom();
    }

    // 채팅창 맨 아래로 스크롤 이동
    function scrollToBottom() {
        chatScrollArea.scrollTop = chatScrollArea.scrollHeight;
    }

    // 메시지 전송 핸들러
    function handleSendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        // 1. 유저 메시지 화면 표시
        appendMessage('user', text);
        userInput.value = '';

        // 2. 크레딧 차감 시뮬레이션 (예: 1메시지당 5크레딧)
        if (currentCredits >= 5) {
            currentCredits -= 5;
            creditCountSpan.textContent = currentCredits.toLocaleString();
        }

        // 3. AI 캐릭터 응답 시뮬레이션 (추후 백엔드 스트리밍 API로 대체될 부분)
        setTimeout(() => {
            const replies = [
                "정말 그렇게 생각해? 난 네가 그렇게 말해주니까 조금 서운한데...",
                "피식... 그래, 네 말이 맞다 치자. 오늘 저녁은 네가 사는 거지?",
                "내 인터뷰 영상 봤어? ...거기서 네 얘기 안 하려고 엄청 참았거든.",
                "다른 팀으로 가라니 무슨 소리야. 난 오직 너랑만 움직일 거야."
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            appendMessage('character', randomReply);
        }, 1000);
    }

    // 이벤트 리스너 연결
    sendBtn.addEventListener('click', handleSendMessage);
    
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    // 추천 답변 버튼 클릭 시 입력창에 자동 완성
    suggestBtn.addEventListener('click', () => {
        userInput.value = "방송에서 왜 우리 관계를 그렇게 짧게 말했어?";
        userInput.focus();
    });

    // 충전 버튼 클릭 시뮬레이션
    chargeBtn.addEventListener('click', () => {
        currentCredits += 500;
        creditCountSpan.textContent = currentCredits.toLocaleString();
        alert('테스트용 크레딧 500포인트가 충전되었습니다!');
    });

    // XSS 방지용 HTML Escape 헬퍼 함수
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});