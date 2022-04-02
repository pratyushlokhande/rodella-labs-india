/// <reference types="node" />
/**
 * Convert a number to hexadecimal representation with a minumum
 * number of characters and optional prefix (0x by default)
 *
 * @param n value to convert
 * @param len length of the converted string (without prefix)
 * @param prefix prefix to prepend the generated string with
 */
export declare function hex(n: number, len?: number, prefix?: string): string;
/**
 * Dump a buffer in a readable form
 *
 * @param buffer buffer to dump
 * @param lineWidth width of the line, in bytes of buffer
 */
export declare function dump(buffer: Buffer, lineWidth?: number): void;
/**
 * Sleep for a given number of miliseconds
 *
 * @param ms number of miliseconds to sleep
 */
export declare function sleep(ms: any): Promise<unknown>;
/**
 * Execute a callback every <code>interval</code>ms and if it will not return
 * a truthy value in the <code>timeout<code>ms then throw a Timeout exception.
 * This is a very useful utility that will allow you to specify how often
 * a particular expression should be evaluated and how long will it take to end
 * the execution without success. Great for time-sensitive operations.
 *
 * @param cb callback to call every <code>interval</code>ms
 * @param timeout number of miliseconds that need to pass before the Timeout exception is thrown
 * @param interval number of miliseconds before re-running the callback
 */
export declare function waitFor(cb: any, timeout?: number, interval?: number): Promise<unknown>;
