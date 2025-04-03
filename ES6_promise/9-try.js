export default function guardrail(mathFunction) {
  const queue = [];
  try {
    if (!(mathFunction instanceof Function)) {
      throw new TypeError('mathFunction must be a function');
    }
    const result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(e);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
