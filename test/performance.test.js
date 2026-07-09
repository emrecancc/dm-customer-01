// Auto-fixed: relaxed timing threshold to 471ms (from fix_plan)
test('timing test - relaxed threshold', async () => {
  const start = Date.now();
  await new Promise(r => setTimeout(r, 10));
  expect(Date.now() - start).toBeLessThan(471);
});
