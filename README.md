# ChatGPT Conversation Formatter

This script automatically formats ChatGPT conversation exports by coloring "You said:" sections in red and "ChatGPT said:" sections in blue. **You'll need to add this script to each Google Doc individually.**

## Step-by-Step Setup

### 1. Open Your Google Doc
- Open the Google Doc that contains your conversation
- Make sure it has the format with "You said:" and "ChatGPT said:" headers

### 2. Access Apps Script
- In your Google Doc, go to **Extensions** → **Apps Script**
- This opens the Google Apps Script editor in a new tab

### 3. Add the Formatter Code
- You'll see a default function called `myFunction()` 
- **Delete all the existing code** in the editor
- **Copy and paste the entire conversation formatter script** (the code provided)
- Click the **Save** button (💾) or press Ctrl+S
- Give your project a name like "Conversation Formatter" when prompted

### 4. Grant Permissions (First Time Only)
- Click the **Run** button (▶️) 
- Google will show a permission dialog
- Click **Review permissions**
- Choose your Google account
- Click **Advanced** → **Go to [Project Name] (unsafe)**
- Click **Allow**
- This lets the script modify your Google Doc

### 5. Run the Formatter
You now have two ways to run it:

**Option A: Use the Custom Menu**
- Go back to your Google Doc
- You should see a new menu called **"Conversation Formatter"**
- Click **Conversation Formatter** → **Format Conversation**
- Your text will be formatted instantly!

**Option B: Run from Apps Script**
- In the Apps Script tab, make sure `formatConversation` is selected in the function dropdown
- Click the **Run** button (▶️)
- Go back to your Google Doc to see the results

## What It Does

- **"You said:" headers**: Bold red text
- **User messages**: Red text  
- **"ChatGPT said:" headers**: Bold blue text
- **ChatGPT responses**: Blue text

## Important Notes

- **You must add this script to each Google Doc individually** - it doesn't work across all your documents automatically
- The script works best when "You said:" and "ChatGPT said:" are on separate lines
- You can run the formatter multiple times on the same document safely
- Make sure your conversation follows the exact format for best results

## Troubleshooting

**No custom menu appears:**
- Refresh your Google Doc and wait a few seconds
- The menu should appear after the script loads

**"Authorization required" error:**
- Go back to Apps Script and run the function manually to grant permissions
- Then try using the menu again

**Nothing happens when I run it:**
- Check that your conversation uses exactly "You said:" and "ChatGPT said:" (with the colon)
- Make sure these headers are on their own lines

**Need to format another document?**
- Repeat this entire process for each new Google Doc
- Copy and paste the same script code into each document's Apps Script

## Pro Tip
Save the script code somewhere handy so you can quickly copy-paste it into new documents!
