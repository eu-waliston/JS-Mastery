describe("email validation", () => {
  test("this is an email", () => {
    const email = "wesantos@email.com";

    expect(email).toMatch(/\S+@\S+\.\S+/);
  });
  test("this is not an email", () => {
    const email = "wesantosemail.com";

    expect(email).not.toMatch(/\S+@\S+\.\S+/);
  });
});
