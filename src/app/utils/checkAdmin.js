
export function isAdmin(email) {
  if (!process.env.ALLOWED_ADMINS) return false;
  const allowedEmails = process.env.NEXT_PUBLIC_ALLOWED_ADMINS.split(",");
  return allowedEmails.includes(email);
}
