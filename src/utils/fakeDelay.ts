/**
 * Does just what it says on the tin
 * @param {int} duration Time to delay for
 * @returns a promise that always resolves after duration
 */
export const fakeDelay = (duration: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
