import { expect, test } from "vitest";
import { secondsToHms } from "./time_function";

test("Test if secondsToHms function return string", () => {
  expect(secondsToHms(7200)).toBe(
    "Prochain affichage dans 02 Heures et 00 Minutes"
  );
  expect(secondsToHms(600)).toBe(
    "Prochain affichage dans 10 Minutes et 00 Secondes"
  );
  expect(secondsToHms(10)).toBe(
    // "Prochain affichage dans 00 Minutes et 10 Secondes"
    null
  );
});
