# 📧 Email Backend Setup Guide

Complete setup guide for the Vercel serverless email backend using nodemailer and Gmail SMTP.

---

## 📦 Step 1: Install Required Dependencies

Run the following command in your project root:

```bash
npm install nodemailer @vercel/node
npm install --save-dev @types/nodemailer
```

### Dependencies Overview:
- **nodemailer**: Node.js module for sending emails
- **@vercel/node**: TypeScript types for Vercel serverless functions
- **@types/nodemailer**: TypeScript type definitions for nodemailer

---

## 🔑 Step 2: Generate Gmail App Password

> [!IMPORTANT]
> You **cannot** use your regular Gmail password for security reasons. You must generate an App Password.

### Prerequisites:
- 2-Step Verification must be enabled on your Google Account

### Steps to Generate App Password:

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Sign in with your Gmail account: `rajeswar00012@gmail.com`

2. **Navigate to Security**
   - Click on **Security** in the left sidebar
   - Scroll down to **How you sign in to Google**

3. **Enable 2-Step Verification** (if not already enabled)
   - Click on **2-Step Verification**
   - Follow the prompts to set it up with your phone number

4. **Generate App Password**
   - After 2-Step Verification is enabled, go back to **Security**
   - Scroll to **How you sign in to Google**
   - Click on **App passwords** (or visit: https://myaccount.google.com/apppasswords)
   - You may need to sign in again

5. **Create App Password**
   - In the "Select app" dropdown, choose **Mail**
   - In the "Select device" dropdown, choose **Other (Custom name)**
   - Enter a name like: `KhetiBharat Website`
   - Click **Generate**

6. **Copy the Password**
   - Google will display a 16-character password (e.g., `abcd efgh ijkl mnop`)
   - **IMPORTANT**: Copy this password immediately - you won't be able to see it again!
   - Remove the spaces when using it: `abcdefghijklmnop`

---

## 🌐 Step 3: Add Environment Variables to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Your Project**
   - Visit: https://vercel.com/dashboard
   - Select your project (KhetiBharat)

2. **Navigate to Settings**
   - Click on **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add Variables**
   
   **First Variable:**
   - **Key**: `EMAIL_USER`
   - **Value**: `rajeswar00012@gmail.com`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Add**

   **Second Variable:**
   - **Key**: `EMAIL_PASS`
   - **Value**: Your 16-character App Password (without spaces)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Add**

4. **Redeploy** (Important!)
   - After adding environment variables, you must redeploy your project
   - Go to **Deployments** tab
   - Click the **three dots** (⋯) on the latest deployment
   - Select **Redeploy**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add EMAIL_USER
# When prompted, enter: rajeswar00012@gmail.com

vercel env add EMAIL_PASS
# When prompted, enter: your-16-char-app-password

# Deploy
vercel --prod
```

---

## 📁 Step 4: Verify Project Structure

Your project structure should look like this:

```
Khetibahrat/
├── api/                              # ✅ At project root (NOT inside src)
│   └── send-email.ts                 # ✅ Vercel serverless function
├── src/
│   └── app/
│       └── pages/
│           └── ContactPage.tsx       # ✅ Updated with async submit
├── node_modules/
├── package.json                      # ✅ Contains nodemailer & @vercel/node
├── vercel.json                       # Optional: Vercel configuration
└── EMAIL_SETUP.md                    # This file
```

> [!WARNING]
> The `/api` folder **MUST** be at the project root, not inside `/src`. Vercel only recognizes serverless functions in the root `/api` directory.

---

## 🚀 Step 5: Deploy to Vercel

### First-time Deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Subsequent Deployments:

```bash
# Simply push to GitHub (if connected)
git add .
git commit -m "Add email backend"
git push origin main

# OR use Vercel CLI
vercel --prod
```

---

## ✅ Step 6: Test Your Email System

### Testing Locally (Development):

1. **Create `.env.local` file** in project root:
   ```env
   EMAIL_USER=rajeswar00012@gmail.com
   EMAIL_PASS=your-16-char-app-password
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Test the form**:
   - Navigate to the Contact page
   - Fill out the form
   - Click "Send Message"
   - Check your Gmail inbox at `rajeswar00012@gmail.com`

### Testing in Production (Vercel):

1. **Visit your deployed site**:
   - Go to your Vercel URL (e.g., `https://khetibharat.vercel.app`)

2. **Fill out the contact form**:
   - Navigate to the Contact page
   - Fill in all required fields
   - Click "Send Message"

3. **Verify email received**:
   - Check inbox at `rajeswar00012@gmail.com`
   - Email should arrive within seconds
   - Check spam folder if not received

---

## 🐛 Troubleshooting

### Issue: "Method not allowed"
**Solution**: Ensure you're sending a POST request, not GET.

### Issue: "Missing required fields"
**Solution**: Verify all required fields (name, email, reason, message) are filled.

### Issue: Email not sending
**Possible Causes**:
1. ❌ Wrong App Password → Regenerate and update environment variable
2. ❌ Environment variables not set → Check Vercel dashboard
3. ❌ 2-Step Verification not enabled → Enable in Google Account
4. ❌ Forgot to redeploy after adding env vars → Redeploy on Vercel

### Issue: "Invalid login" error
**Solution**: 
- Ensure you're using the App Password, not your regular Gmail password
- Remove all spaces from the App Password
- Regenerate a new App Password if needed

### Issue: CORS errors
**Solution**: This shouldn't happen since the API is on the same domain, but if it does:
- Ensure you're calling `/api/send-email` (relative URL)
- Not calling from a different domain

---

## 🔒 Security Best Practices

✅ **DO:**
- Use environment variables for credentials
- Use App Passwords instead of real passwords
- Keep `.env.local` in `.gitignore`
- Validate and sanitize user input
- Use HTTPS in production

❌ **DON'T:**
- Hardcode credentials in source code
- Commit `.env.local` to Git
- Use your real Gmail password
- Skip input validation
- Expose API keys in client-side code

---

## 📧 Email Features

Your serverless function includes:

✅ **Built-in Validation**:
- POST method only
- Required fields checking
- Email format validation

✅ **Professional HTML Email**:
- Beautiful gradient header
- Clean field formatting
- Responsive design
- Reply-to support

✅ **Error Handling**:
- Try/catch blocks
- User-friendly error messages
- Console logging for debugging

✅ **User Experience**:
- Loading state while sending
- Success confirmation
- Form reset after submission
- Error message display

---

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

---

## ✨ You're All Set!

Your contact form is now connected to a production-ready email backend! 🎉

If you encounter any issues, refer to the troubleshooting section above or check the console logs in Vercel.
