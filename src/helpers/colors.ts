import { hexToHSL, HSLToHex } from '@/helpers/color';

export function colorToColors(color: string) {
  const [h, s, l] = hexToHSL(color);
  return {
    main: color,
    on: HSLToHex(`hsl(${h}, ${Math.min(s! + 30, 100)}%, ${Math.min(l! + 0, 100)}%)`),
    off: HSLToHex(`hsl(${h}, ${Math.max(s! - 30, 0)}%, ${Math.max(l! - 20, 0)}%)`),
  };
}
