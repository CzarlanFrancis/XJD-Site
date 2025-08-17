# XJD Financial Website (Next.js + Vercel)

**What this is:** your website, ready to upload and deploy.

## Super Simple Steps

1) Make 2 free accounts: **GitHub.com** and **Vercel.com**.

2) Download this project: click the zip I gave you, unzip it to a folder called `xjd-site`.

3) Put the folder on GitHub:
   - On GitHub, click **New repository** → name it `xjd-site` → **Create**.
   - Click **Upload files** → drag the **contents** of the `xjd-site` folder in → **Commit**.

4) Go to **Vercel** → **New Project** → pick `xjd-site` → click **Deploy**.
   - After 1–2 minutes, Vercel shows a live link like `https://xjd-site.vercel.app`.

5) Hook up your domain **xjdfinance.com** in Vercel:
   - Project → **Settings → Domains → Add** `xjdfinance.com` and `www.xjdfinance.com`.
   - Vercel shows two DNS records to add.

6) In **Square** (where your domain lives): add those DNS records.
   - A record for the main name (xjdfinance.com) → value Vercel shows.
   - CNAME for **www** → value Vercel shows.
   - Save. Wait a little. Vercel turns green. Done.

### Optional
- To edit text, open `app/page.jsx` and change the words.
- When you push changes to GitHub, Vercel updates the live site automatically.

