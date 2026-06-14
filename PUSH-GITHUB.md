# Push to GitHub — step-by-step

Your GitHub username appears to be **Amiros1995**. Follow these steps once per computer.

## 1. Create the repository (if not done)

On GitHub: [github.com/new](https://github.com/new)

- Name: e.g. `digma-medical-website`
- **Do not** add README, .gitignore, or license (this project already has them)
- Click **Create repository**

Copy the repository URL shown, e.g.:

`https://github.com/Amiros1995/digma-medical-website.git`

## 2. Push from your computer

Open **PowerShell** and run (replace the URL with yours):

```powershell
cd c:\Dev\digma-medical-website

git add .
git commit -m "Initial Digma Medical website"

git branch -M main
git remote add origin https://github.com/Amiros1995/digma-medical-website.git
git push -u origin main
```

If `remote origin already exists`, use:

```powershell
git remote set-url origin https://github.com/Amiros1995/digma-medical-website.git
git push -u origin main
```

**Login:** GitHub may ask you to sign in. Use a [Personal Access Token](https://github.com/settings/tokens) as the password if prompted (not your GitHub account password).

**Large video:** The investors video (~119 MB) uses **Git LFS**. The first push may take several minutes.

## 3. Enable GitHub Pages (correct place!)

The screenshot you shared is **account Settings → Pages** (verified domains only). That is **not** where you enable the site.

Do this instead:

1. Open **your repository** on GitHub (not Settings at the top of github.com)
2. Click **Settings** (tab on the repo, not your profile)
3. Left sidebar → **Pages**
4. Under **Build and deployment** → **Source** → choose **GitHub Actions**

After the first push, the **Actions** tab will run a deploy workflow automatically. When it finishes (green checkmark), your site will be at:

`https://amiros1995.github.io/digma-medical-website/`

(Replace with your exact repo name if different.)

## 4. If the deploy fails

- Open the repo **Actions** tab and click the failed run to read the error
- Common fix: ensure **Settings → Pages → Source** is **GitHub Actions**, not “Deploy from a branch”

## 5. Later: custom domain (digmamedical.com)

Repo **Settings → Pages → Custom domain** → enter `www.digmamedical.com` and follow DNS instructions.
