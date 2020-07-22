export function findCookie () {
  const cookie = document.cookie
  if (cookie) {
    return true
  }
  return false
}
