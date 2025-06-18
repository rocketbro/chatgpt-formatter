# ChatGPT Formatter

This Google Apps Script automatically formats ChatGPT conversations pasted into in Google Docs by coloring "You said:" sections in red and "ChatGPT said:" sections in blue.

## Setup (One-Time Only)

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Sign in with your Google account

2. **Create a New Project**
   - Click "New project" (+ button)
   - You'll see a blank script editor

3. **Add the Formatter Code**
   - Delete any existing code in the editor
   - Copy and paste the entire conversation formatter script
   - Click the save icon (💾) or press Ctrl+S
   - Give your project a name like "ChatGPT Formatter"

4. **Grant Permissions**
   - Click the "Run" button (▶️) 
   - Google will ask for permissions - click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)" 
   - Click "Allow"
   - This gives the script permission to access your Google Docs

## How to Use It

### Method 1: Format the Currently Open Document
1. **Open your Google Doc** with the conversation you want to format
2. **Go back to your Apps Script tab** (script.google.com)
3. **Make sure "formatActiveDocument" is selected** in the function dropdown
4. **Click the Run button** (▶️)
5. **Check your Google Doc** - it should now be formatted!

### Method 2: Format Any Document by ID
1. **Get the document ID** from the Google Doc URL
   - Example: `https://docs.google.com/document/d/1ABC123XYZ789/edit`
   - The ID is: `1ABC123XYZ789`
2. **In Apps Script**, select "formatDocumentById" from the function dropdown
3. **Click the Run button**
4. **Enter the document ID** when prompted
5. **Check your document** - it should be formatted!

## What It Does

- **"You said:" headers**: Bold red text
- **User messages**: Red text  
- **"ChatGPT said:" headers**: Bold blue text
- **ChatGPT responses**: Blue text

## Troubleshooting

**"No active document found"**
- Make sure you have a Google Doc open in another tab before running `formatActiveDocument`

**"Could not access document"** 
- Check that the document ID is correct
- Make sure you have edit permissions for the document

**Nothing happens**
- Make sure your conversation follows the exact format: "You said:" and "ChatGPT said:" on their own lines
- Check that the script has permissions (re-run and grant permissions if needed)

## Tips

- The script works best with clean ChatGPT exports
- Make sure "You said:" and "ChatGPT said:" are on separate lines
- You can run the script multiple times on the same document safely
- Save your script project so you can reuse it anytime!
