type AuthErrorFragment =
  | 'auth/invalid-credential'
  | 'auth/wrong-password'
  | 'auth/user-not-found'
  | 'auth/email-already-in-use'
  | 'auth/too-many-requests'
  | 'auth/network-request-failed';

const errorMap: Record<AuthErrorFragment, string> = {
  'auth/invalid-credential': 'Invalid email or password.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/network-request-failed': 'Network error. Please check your connection.',
};

export const getErrorMessage = (message: string): string => {
  const normalized = message.toLowerCase();

  const matchedCode = (Object.keys(errorMap) as AuthErrorFragment[]).find((code) =>
    normalized.includes(code),
  );

  if (matchedCode) {
    return errorMap[matchedCode];
  }

  return 'Something went wrong. Please try again.';
};
