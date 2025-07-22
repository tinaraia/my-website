# EmailJS Setup Instructions

To complete the PDF download email notification setup, you need to configure EmailJS:

## 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

## 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Add a new service (Gmail, Outlook, etc.)
- Note your **Service ID**

## 3. Create Email Template
Create a template with these variables:
- `{{user_email}}` - The user's email address
- `{{download_item}}` - Name of the downloaded item
- `{{download_date}}` - Date of download
- `{{download_time}}` - Time of download
- `{{to_email}}` - Your notification email (hello@tinapeng.ca)

Example template:
```
Subject: New PDF Download - {{download_item}}

Someone just downloaded your guide!

Details:
- Email: {{user_email}}
- Guide: {{download_item}}
- Date: {{download_date}}
- Time: {{download_time}}

You can follow up with this lead at: {{user_email}}
```

Note your **Template ID**

## 4. Get Public Key
- Go to "Account" > "General"
- Copy your **Public Key**

## 5. Update the Code
In `src/components/PDFDownload.jsx`, replace:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

## 6. Test the Integration
- Fill out the form on your website
- Check that the PDF downloads
- Verify you receive the email notification

## Security Note
The public key is safe to use in frontend code as it's designed for client-side use.