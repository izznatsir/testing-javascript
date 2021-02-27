export async function test(name, fn) {
  try {
    await fn()

    console.log(`[SUCCESS] ${name}`);
  } catch {
    console.error(`[FAILED] ${name}`)
  }
}

export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal ${expected}`);
      }
    }
  }
}
