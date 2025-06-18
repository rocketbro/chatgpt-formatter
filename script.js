function formatActiveDocument() {
  // Get the currently active Google Document
  const doc = DocumentApp.getActiveDocument();
  
  if (!doc) {
    throw new Error('No active document found. Please open a Google Doc first.');
  }
  
  formatConversationInDocument(doc);
}

function formatDocumentById(docId) {
  // Format a specific document by its ID
  try {
    const doc = DocumentApp.openById(docId);
    formatConversationInDocument(doc);
  } catch (error) {
    throw new Error('Could not access document. Make sure the document ID is correct and you have permission to edit it.');
  }
}

function formatConversationInDocument(doc) {
  const body = doc.getBody();
  const paragraphs = body.getParagraphs();
  
  let currentSpeaker = null; // Track who's currently speaking
  let formattedCount = 0;
  
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
      formattedCount++;
    } 
    else if (text === 'ChatGPT said:') {
      currentSpeaker = 'chatgpt';
      // Format the header itself
      paragraph.editAsText().setForegroundColor('#1976d2'); // Dark blue text
      paragraph.editAsText().setBold(true);
      formattedCount++;
    }
    else {
      // This is content under a speaker - apply formatting based on current speaker
      if (currentSpeaker === 'user') {
        paragraph.editAsText().setForegroundColor('#d32f2f'); // Dark red text
        formattedCount++;
      } 
      else if (currentSpeaker === 'chatgpt') {
        paragraph.editAsText().setForegroundColor('#1976d2'); // Dark blue text
        formattedCount++;
      }
    }
  }
  
  // Log results
  console.log(`Formatting complete! Processed ${formattedCount} paragraphs in document: ${doc.getName()}`);
  return `Formatting complete! Processed ${formattedCount} paragraphs.`;
}
