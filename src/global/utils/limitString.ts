export function limitString(value: string): string {
  if (value.length > 200) {
    return value.substring(0, 200) + "...";
  } else {
    return value;
  }
}
