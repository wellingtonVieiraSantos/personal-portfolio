const rateLimit = new Map<string, { count: number; lastRequest: number }>()

export function checkRateLimit(ip: string) {
  const now = Date.now()
  const windowMs = 60 * 1000
  const maxRequests = 1

  const entry = rateLimit.get(ip)

  if (entry) {
    if (now - entry.lastRequest > windowMs) {
      rateLimit.set(ip, { count: 1, lastRequest: now })
      return true
    } else if (entry.count >= maxRequests) {
      return false
    } else {
      entry.count++
      entry.lastRequest = now
      return true
    }
  } else {
    rateLimit.set(ip, { count: 1, lastRequest: now })
    return true
  }
}
