import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request) {
  try {
    const { formData, sessionId, isComplete } = await request.json();
    
    // Initialize Google Sheets authentication
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0]; // First sheet
    await sheet.loadCells(); // Load all cells for searching
    
    let targetRowIndex = null;
    
    // If we have a sessionId, try to find existing row
    let existingRow = null;
    if (sessionId) {
      const rows = await sheet.getRows();
      existingRow = rows.find(row => row.get('Session ID') === sessionId);
      console.log(`Session: ${sessionId}, Found: ${!!existingRow}`);
    }
    
    // Prepare the row data
    const rowData = {
      'Timestamp': new Date().toISOString(),
      'Session ID': sessionId || `session_${Date.now()}`,
      'Restaurant Name': formData.restaurantName || '',
      'Business Category': formData.businessCategory || '',
      'Contact Name': formData.contactName || '',
      'Contact Email': formData.contactEmail || '',
      'Contact Phone': formData.contactPhone || '',
      'Contact Role': formData.contactRole || '',
      'Business Address': formData.businessAddress || '',
      'City': formData.businessCity || '',
      'State': formData.businessState || '',
      'ZIP': formData.businessZip || '',
      'Number of Locations': formData.numberOfLocations || '',
      'Website': formData.website || '',
      'Social Media': formData.socialMedia || '',
      'Operating Hours': formData.operatingHours ? JSON.stringify(formData.operatingHours) : '',
      'Holiday Hours': formData.holidayHours ? JSON.stringify(formData.holidayHours) : '',
      'Special Event Hours': formData.specialEventHours || '',
      'Allergen Options': formData.allergenOptions ? JSON.stringify(formData.allergenOptions) : '',
      'Dietary Options': formData.dietaryOptions ? JSON.stringify(formData.dietaryOptions) : '',
      'Dietary Handling': formData.dietaryHandling || '',
      'Daily Order Volume': formData.dailyOrderVolume || '',
      'Peak Hours': formData.peakHours ? JSON.stringify(formData.peakHours) : '',
      'Common Questions': formData.commonQuestions ? JSON.stringify(formData.commonQuestions) : '',
      'Complaint Handling': formData.complaintHandling || '',
      'Pickup Instructions': formData.pickupInstructions || '',
      'Pickup Policies': formData.pickupPolicies || '',
      'Pickup Lead Time': formData.pickupLeadTime || '',
      'Catering Available': formData.cateringAvailable || '',
      'Catering Requirements': formData.cateringRequirements || '',
      'Catering Lead Time': formData.cateringLeadTime || '',
      'Brand Voice': formData.brandVoice || '',
      'Upselling Approach': formData.upsellingApproach || '',
      'Payment Policies': formData.paymentPolicies || '',
      'Current POS': formData.currentPOS || '',
      'Online Platforms': formData.onlinePlatforms ? JSON.stringify(formData.onlinePlatforms) : '',
      'Kitchen Capacity': formData.kitchenCapacity || '',
      'Business Goals': formData.businessGoals ? JSON.stringify(formData.businessGoals) : '',
      'Expansion Plans': formData.expansionPlans ? JSON.stringify(formData.expansionPlans) : '',
      'Reporting Priorities': formData.reportingPriorities ? JSON.stringify(formData.reportingPriorities) : '',
      'Uploaded Files': formData.uploadedFiles ? JSON.stringify(formData.uploadedFiles) : '',
      'Document Description': formData.documentDescription || '',
      'Status': isComplete ? 'Complete' : 'In Progress',
      'Full JSON Backup': JSON.stringify(formData)
    };
    
    let newSessionId = sessionId;
    
    if (existingRow) {
      // Check if the existing row is already completed
      if (existingRow.get('Status') === 'Complete' && !isComplete) {
        // Don't allow updates to completed surveys unless it's the final submission
        console.log('Attempted to update completed survey - creating new row instead');
        newSessionId = `session_${Date.now()}`;
        rowData['Session ID'] = newSessionId;
        await sheet.addRow(rowData);
      } else {
        // Update existing row
        Object.keys(rowData).forEach(key => {
          existingRow.set(key, rowData[key]);
        });
        
        await existingRow.save();
      }
    } else {
      // Create new row
      newSessionId = `session_${Date.now()}`;
      rowData['Session ID'] = newSessionId;
      await sheet.addRow(rowData);
    }
    
    return Response.json({ 
      success: true, 
      sessionId: newSessionId,
      message: existingRow ? 'Progress updated' : 'New survey started'
    });
    
  } catch (error) {
    console.error('Google Sheets error:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
