# Deployment Guide - Making Your Website Live

## Option 1: GitHub Pages (Recommended)

### Method A: Using Terminal/Command Line

1. **Create a GitHub repository** at github.com
   - Click "+" → "New repository"
   - Name: `ism-portfolio`
   - Make it Public
   - DO NOT initialize with README
   - Click "Create repository"

2. **In your terminal, run these commands:**

```bash
# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit - ISM Portfolio website"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/ism-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages" (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes

4. **Your website will be live at:**
   ```
   https://YOUR-USERNAME.github.io/ism-portfolio
   ```

### Method B: Upload Files Directly (No Terminal)

1. **Create repository** on GitHub (same as above)

2. **Upload files:**
   - Click "uploading an existing file"
   - Drag ALL your folders and files:
     - All .html files
     - css folder
     - js folder
     - assets folder
     - README.md
   - Commit changes

3. **Enable GitHub Pages** (same as Method A, step 3)

---

## Option 2: Netlify (Easiest - Drag & Drop)

### Steps:

1. **Go to netlify.com**
   - Sign up for free (can use GitHub account)

2. **Deploy your site:**
   - Click "Add new site" → "Deploy manually"
   - Drag your ENTIRE project folder into the browser
   - Wait 30 seconds

3. **Your site is live!**
   - You'll get a URL like: `random-name-123.netlify.app`
   - You can customize this in Site Settings

4. **To update your site:**
   - Just drag and drop your folder again
   - Old version gets replaced instantly

### Custom Domain (Optional):
   - Settings → Domain Management
   - Add your custom domain or change the Netlify subdomain

---

## Option 3: Vercel (Alternative)

1. **Go to vercel.com**
   - Sign up with GitHub

2. **Import your repository:**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Live in seconds:**
   - Automatic HTTPS
   - URL: `your-project.vercel.app`
   - Auto-updates when you push to GitHub

---

## Updating Your Live Website

### If using GitHub Pages:
```bash
# Make your changes to files
# Then run:
git add .
git commit -m "Update: describe what you changed"
git push
```
Wait 1-2 minutes for changes to appear.

### If using Netlify (drag & drop):
- Just drag your updated folder again
- Changes are instant

### If using Vercel:
- Push to GitHub (same as GitHub Pages)
- Vercel auto-deploys

---

## Sharing Your Website

Once deployed, share your URL:
- **On your résumé**
- **LinkedIn profile**
- **College applications**
- **With your ISM mentor**
- **With teachers and counselors**

---

## Troubleshooting

### Site not loading?
- Check that `index.html` is in the root folder (not in a subfolder)
- Make sure all files uploaded correctly
- Clear browser cache (Cmd + Shift + R)

### Images not showing?
- Check file paths are correct
- Make sure images folder uploaded
- File names are case-sensitive!

### CSS not loading?
- Verify `css/styles.css` path is correct
- Check that the css folder uploaded

---

## Quick Comparison

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| Cost | Free | Free | Free |
| Ease | Medium | Easiest | Easy |
| Custom Domain | Yes | Yes | Yes |
| Auto-Deploy | With Git | With Git | With Git |
| Drag & Drop | No | Yes | No |
| Best For | Students | Quick Deploy | Developers |

**Recommendation:** Use Netlify for quickest deployment, or GitHub Pages to learn Git.

---

## Need Help?

If you get stuck:
1. Check the error message
2. Google the error
3. Ask your ISM teacher or mentor
4. Check GitHub/Netlify documentation
