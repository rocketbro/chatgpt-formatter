function formatConversation() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const paragraphs = body.getParagraphs();
  
  let currentSpeaker = null; // Track who's currently speaking
  
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    const text = paragraph.getText().trim();
    
    // Skip empty paragraphs
    if (text === '') {
      continue;
    }
    
    // Check for speaker headers
    if (text === 'You said:') {
      currentSpeaker = 'user';
      // Format the header itself
      paragraph.editAsText().setForegroundColor('#d32f2f'); // Dark red text
      paragraph.editAsText().setBold(true);
    } 
    else if (text === 'ChatGPT said:') {
      currentSpeaker = 'chatgpt';
      // Format the header itself
      paragraph.editAsText().setForegroundColor('#1976d2'); // Dark blue text
      paragraph.editAsText().setBold(true);
    }
    else {
      // This is content under a speaker - apply formatting based on current speaker
      if (currentSpeaker === 'user') {
        paragraph.editAsText().setForegroundColor('#d32f2f'); // Dark red text
      } 
      else if (currentSpeaker === 'chatgpt') {
        paragraph.editAsText().setForegroundColor('#1976d2'); // Dark blue text
      }
    }
  }
  
  // Show completion message
  DocumentApp.getUi().alert('Conversation formatting complete!');
}

// Optional: Add a menu item to run the script
function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu('Conversation Formatter')
    .addItem('Format Conversation', 'formatConversation')
    .addToUi();
}
