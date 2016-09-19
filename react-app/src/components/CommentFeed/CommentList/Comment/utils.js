import md5 from 'js-md5';

export function getGravatarUrlByEmail(email, size) {
  // See https://en.gravatar.com/site/implement/hash/
  const gravatarHash = email ? md5(email.trim().toLowerCase()) : 'placeholder';

  return `https://www.gravatar.com/avatar/${gravatarHash}?s=${size}`;
}
