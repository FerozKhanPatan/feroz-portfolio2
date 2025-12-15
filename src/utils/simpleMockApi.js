// Simple mock for resume verification only
export const simpleMockApi = {
  sendVerificationCode: async (method, value) => {
    console.log(`[DEMO] Sending code to ${value}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  },
  
  verifyCode: async (method, value, code) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Demo: Always accept 123456
    if (code === '123456') {
      return { 
        success: true, 
        message: 'Verified! Resume access granted for 1 hour.' 
      };
    }
    
    throw new Error('Invalid code. Try: 123456');
  }
};