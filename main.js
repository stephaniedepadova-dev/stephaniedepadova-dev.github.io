
:root{
--bg:#0b1120;--text:#f8fafc;--card:#172033;--accent:#3b82f6;
}
.light{
--bg:#ffffff;--text:#111827;--card:#f3f4f6;
}
body{margin:0;font-family:Inter,Arial,sans-serif;background:var(--bg);color:var(--text);transition:.3s}
nav{display:flex;justify-content:space-between;padding:20px 10%;position:sticky;top:0;background:var(--bg)}
.hero{min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center}
.hero h1{font-size:4rem}
.btn{background:var(--accent);padding:12px 20px;border-radius:8px;color:white;text-decoration:none}
section{max-width:1100px;margin:auto;padding:80px 20px}
.card{background:var(--card);padding:20px;border-radius:12px;margin:12px 0}
.grid{display:flex;flex-wrap:wrap;gap:12px}
.grid span{background:var(--card);padding:10px 16px;border-radius:30px}
footer{text-align:center;padding:40px}
