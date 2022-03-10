import generateRandomHexColor from "./generate-random-hex-color";

describe("Generate Random Hex Color", () => {
  const sixCharactersRegex: RegExp = /^#[0-9A-F]{6}$/i;

  it("should return a valid six string hex color", () => {
    const color = generateRandomHexColor();
    expect(sixCharactersRegex.test(color)).toBe(true);
  });
});
