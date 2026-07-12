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

  // ▼ 테스트용 Turnstile Site Key(공개키). Cloudflare에서 테스트 도메인으로 새로 발급 권장.
  turnstileSiteKey: "<테스트-turnstile-site-key>",

  // ── 짤 장기자랑 ───────────────────────────────────────────
  talent: {
    enabled: true,
    previewBeforeStart: true,   // 테스트: 시작일 전에도 탭 보이게
    pageSize: 30,
    maxEntriesPerAuthor: 3,
    maxFinalistsPerAuthor: 1,
    registrationScore: 10000,
    likeScore: 100,
    finalWinnerScore: 1000000,

    // ★ 테스트 기간: "지금"을 포함하도록 열어둡니다.
    //   실제 등록 검증(X API)까지 테스트하려면 아래 세 곳의 기간이 서로 같아야 합니다.
    //     1) 이 config 의 preliminaryStart/End
    //     2) Edge Function Secret 의 MEME_PRELIM_START / MEME_PRELIM_END
    //     3) DB meme_event_settings 의 preliminary_start / preliminary_end
    //   ※ 운영 전환 시 실제 일정(2026-07-17 18:00 ~ 08-07 23:59)으로 되돌리세요.
    preliminaryStart: "2026-07-12T00:00:00+09:00",
    preliminaryEnd:   "2026-08-14T23:59:59+09:00",
    finalStart:       "2026-08-10T00:00:00+09:00",
    finalEnd:         "2026-08-14T23:59:59+09:00",

    submitFunction: "submit-meme",
    leaderboardRpc: "meme_leaderboard_public",
    requiredHashtags: ["#아이돌수련회", "#짤장기자랑"]
  }
};
