/**
 * Logging utility for the VZCode extension.
 * Provides consistent, prefixed logging across the extension.
 */

export enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
}

class Logger {
  private static instance: Logger;
  private logLevel: LogLevel = LogLevel.Info;
  private readonly prefix = '[VZCode]';

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Set the minimum log level to output.
   */
  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  /**
   * Log a debug message (lowest priority).
   */
  public debug(message: string, ...args: unknown[]): void {
    if (this.logLevel <= LogLevel.Debug) {
      console.debug(`${this.prefix} [DEBUG]`, message, ...args);
    }
  }

  /**
   * Log an informational message.
   */
  public info(message: string, ...args: unknown[]): void {
    if (this.logLevel <= LogLevel.Info) {
      console.log(`${this.prefix} [INFO]`, message, ...args);
    }
  }

  /**
   * Log a warning message.
   */
  public warn(message: string, ...args: unknown[]): void {
    if (this.logLevel <= LogLevel.Warn) {
      console.warn(`${this.prefix} [WARN]`, message, ...args);
    }
  }

  /**
   * Log an error message (highest priority).
   */
  public error(message: string, ...args: unknown[]): void {
    if (this.logLevel <= LogLevel.Error) {
      console.error(`${this.prefix} [ERROR]`, message, ...args);
    }
  }
}

// Export a singleton instance
export const logger = Logger.getInstance();
