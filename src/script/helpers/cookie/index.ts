export function readCookie(name: string): string {
  const cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookie ? cookie[2] : null;
  }
  
export function createCookie(name: string, value: string, days: number = 1): void {
  let expires;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  } else {
    expires = '';
  }
  
  document.cookie = `${name}=${value}${expires};`;
}
  
export function eraseCookie(name: string): void {
  createCookie(name, "", -1);
}
  