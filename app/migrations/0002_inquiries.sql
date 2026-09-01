CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  shop TEXT NOT NULL,
  city TEXT NOT NULL,
  has_site TEXT NOT NULL,
  booking TEXT NOT NULL,
  plan TEXT NOT NULL,
  reach TEXT NOT NULL,
  message TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL
);
