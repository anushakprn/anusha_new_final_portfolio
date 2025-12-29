# Formspree Setup Guide (Much Simpler!)

## Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create a New Form
1. In your Formspree dashboard, click "Create a new form"
2. Give it a name like "Portfolio Contact Form"
3. Copy the form endpoint URL (it looks like: https://formspree.io/f/xxxxxxxx)

## Step 3: Update .env File
Replace the placeholder in your `.env` file:

```
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_actual_form_id
```

## Step 4: Test
1. Restart your development server: `npm start`
2. Fill out the contact form
3. Submit and check your email

## That's it! 🎉

Formspree is much simpler than EmailJS - no templates, no services, just one endpoint URL!

## Features
- ✅ Free for up to 50 submissions/month
- ✅ No coding required
- ✅ Automatic email notifications
- ✅ Spam protection
- ✅ Form analytics