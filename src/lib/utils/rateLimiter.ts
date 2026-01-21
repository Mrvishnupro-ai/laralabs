/**
 * In-memory rate limiter for controlling user message limits
 * In production, use Redis or similar distributed cache
 */

interface RateLimitData {
  count: number;
  resetTime: number;
}

interface RateLimitResult {
  allowed: boolean;
  currentCount: number;
  limit: number;
  resetTime?: number;
}

class RateLimiter {
  private store: Map<string, RateLimitData>;
  private readonly MESSAGE_LIMIT = 5;
  private readonly RESET_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

  constructor() {
    this.store = new Map();
    // Clean up old entries every hour
    setInterval(() => this.cleanup(), 60 * 60 * 1000);
  }

  /**
   * Check if user has exceeded message limit
   */
  async checkLimit(userId: string): Promise<RateLimitResult> {
    const now = Date.now();
    const userData = this.store.get(userId);

    if (!userData) {
      return {
        allowed: true,
        currentCount: 0,
        limit: this.MESSAGE_LIMIT
      };
    }

    // Reset if window has passed
    if (now > userData.resetTime) {
      this.store.delete(userId);
      return {
        allowed: true,
        currentCount: 0,
        limit: this.MESSAGE_LIMIT
      };
    }

    // Check if limit exceeded
    if (userData.count >= this.MESSAGE_LIMIT) {
      return {
        allowed: false,
        currentCount: userData.count,
        limit: this.MESSAGE_LIMIT,
        resetTime: userData.resetTime
      };
    }

    return {
      allowed: true,
      currentCount: userData.count,
      limit: this.MESSAGE_LIMIT
    };
  }

  /**
   * Increment message count for user
   */
  async incrementCount(userId: string): Promise<void> {
    const now = Date.now();
    const userData = this.store.get(userId);

    if (!userData || now > userData.resetTime) {
      // Create new entry
      this.store.set(userId, {
        count: 1,
        resetTime: now + this.RESET_WINDOW_MS
      });
    } else {
      // Increment existing count
      userData.count++;
      this.store.set(userId, userData);
    }
  }

  /**
   * Get remaining messages for user
   */
  async getRemainingMessages(userId: string): Promise<number> {
    const result = await this.checkLimit(userId);
    return Math.max(0, result.limit - result.currentCount);
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [userId, data] of this.store.entries()) {
      if (now > data.resetTime) {
        this.store.delete(userId);
      }
    }
  }

  /**
   * Reset user limit (admin function)
   */
  async resetUser(userId: string): Promise<void> {
    this.store.delete(userId);
  }
}

// Singleton instance
export const rateLimiter = new RateLimiter();
