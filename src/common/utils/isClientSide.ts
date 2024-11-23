/**
 * Determines if the code is running on the client side.
 *
 * This function checks if the `window` object is defined,
 * which is only available in the browser environment.
 *
 * @returns {boolean} - `true` if the code is running on the client side, `false` otherwise.
 */
export const isClientSide = (): boolean => typeof window !== 'undefined';
