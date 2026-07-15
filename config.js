// ============================================================
//  [테스트 분리 운영용] config.js  — 장기자랑 전용 테스트 사이트
//  (실제 배포 시 파일명은 config.js 로 올리세요)
//  ※ 기존 운영(idolcamp)과 "완전히 다른" 값으로 채웁니다.
//     - 새로 만든 테스트 Supabase 프로젝트의 URL / anon key
//     - 테스트용 Turnstile 사이트키(호스트명에 테스트 도메인 등록)
//  ※ 운영과 절대 같은 프로젝트를 쓰지 마세요(분리 운영 목적).
// ============================================================
window.MUNIVERSE_CONFIG = {
  // ▼ 새 "테스트" Supabase 프로젝트 값으로 교체
  supabaseUrl: "https://mkmxshljipykeghbzhcv.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbXhzaGxqaXB5a2VnaGJ6aGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MzExMjEsImV4cCI6MjA5OTQwNzEyMX0.OxgUZs245lzbOb1xuaQYnKTB9gpvuRX3TU6d8je6SpI",

  shareUrl: "https://sanbital.github.io/idolcamp-talent-test/",
  gisu: 1, maxShown: 1000,

  // 테스트 페이지의 점수판은 실DB 대신 아래 샘플을 사용합니다.
  // 장기자랑 점수가 기존 다짐·좋아요·공유 점수와 합산되는 모습을 확인할 수 있습니다.
  scoreboardDemo: true,
  scoreboardDemoRows: [
    { team_id:"ahof",          team_name:"AHOF",             pledge_score:126400, like_score:84210, share_score:186500, meme_score:1450000, worldcup_score:0, bonus_score:0, penalty_score:0 },
    { team_id:"closeyoureyes",team_name:"CLOSE YOUR EYES",  pledge_score:139800, like_score:91340, share_score:201000, meme_score:1210000, worldcup_score:0, bonus_score:0, penalty_score:0 },
    { team_id:"flareu",       team_name:"FLARE U",          pledge_score:151200, like_score:99780, share_score:214500, meme_score:980000,  worldcup_score:0, bonus_score:0, penalty_score:0 },
    { team_id:"idntt",        team_name:"idntt",            pledge_score:118600, like_score:77950, share_score:173000, meme_score:730000,  worldcup_score:0, bonus_score:0, penalty_score:0 }
  ],

  // ▼ 테스트용 Turnstile Site Key(공개키). Cloudflare에서 테스트 도메인으로 새로 발급 권장.
  turnstileSiteKey: "0x4AAAAAAD0Ey7nrVqGnKma-",

  // ── 짤 장기자랑 ───────────────────────────────────────────
  talent: {
    enabled: true,
    previewBeforeStart: true,   // 테스트: 시작일 전에도 탭 보이게
    testRegistrationOpen: true, // 테스트: 표시 일정과 무관하게 등록 폼을 지금 엽니다.
    pageSize: 30,
    maxEntriesPerAuthor: 3,
    maxFinalistsPerAuthor: 1,
    registrationScore: 10000,
    likeScore: 100,
    finalWinnerScore: 10000000,
    leaderboardRefreshMs: 300000,

    // 실제 운영 일정은 그대로 표시됩니다. 서버 등록 개방은 DB의
    // meme_event_settings.registration_open_override 값으로 제어합니다.
    preliminaryStart: "2026-07-17T18:00:00+09:00",
    preliminaryEnd:   "2026-08-07T23:59:59+09:00",
    preliminaryCountEnd: "2026-08-10T11:59:59+09:00",
    finalStart:       "2026-08-11T10:00:00+09:00",
    finalEnd:         "2026-08-17T17:00:00+09:00",

    submitFunction: "submit-meme",
    leaderboardRpc: "meme_leaderboard_public",
    requiredHashtags: ["#아이돌수련회", "#짤장기자랑"]
  }
};
