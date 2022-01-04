import { v4 as uuidv4 } from 'uuid';

export const DEFAULT_BOOLEAN = false;
export const DEFAULT_NUMBER = 0;
export const DEFAULT_OBJECT: any = {};
export const DEFAULT_STRING = '';

export function newGuid(): string {
  return uuidv4();
}

export function getSizeWithUnits(size: number): string {
  if (size >= 2 ** 50) {
    const num = round(size / 2 ** 50, 2);
    return `${num} PB`;
  }
  if (size >= 2 ** 40) {
    const num = round(size / 2 ** 40, 2);
    return `${num} TB`;
  }
  if (size >= 2 ** 30) {
    const num = round(size / 2 ** 30, 2);
    return `${num} GB`;
  }
  if (size >= 2 ** 20) {
    const num = round(size / 2 ** 20, 2);
    return `${num} MB`;
  }
  if (size >= 2 ** 10) {
    const num = round(size / 2 ** 10, 2);
    return `${num} KB`;
  }
  return `${size} B`;
}

export function round(value: number, decimals: number): number {
  const arg: any = `${value}e${decimals}`;
  const num = Math.round(arg);
  return Number(`${num}e-${decimals}`);
}

export function kabobifySpaces(value: string): string {
  if (isNullOrEmpty(value)) return DEFAULT_STRING;
  // This is a naive implementation that doesn't care about camel or pascal casing...for now:
  return value.toLowerCase().replace(new RegExp(' ', 'g'), '-');
}

export function escapeRegex(value: string): string {
  return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function getBoolean(value: any, defaultValue: boolean = DEFAULT_BOOLEAN): boolean {
  let bool = value != null ? !!value : defaultValue;
  if (value === 'false') {
    bool = false;
  }
  return bool;
}

export function getNumber(value: any, defaultValue: number = DEFAULT_NUMBER): number {
  let num = value != null ? Number(value).valueOf() : defaultValue;
  if (Number.isNaN(num)) {
    num = defaultValue;
  }
  return num;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function getObject(value: any, defaultValue: object = DEFAULT_OBJECT): object {
  return getValueOrDefault(value, defaultValue);
}

export function getString(value: any, defaultValue: string = DEFAULT_STRING): string {
  let str = value != null ? value.toString() : defaultValue;
  if (str != null && str.indexOf('[object Object]') > -1) {
    str = defaultValue;
  }
  return str;
}

export function getOrBuildDefaultValue<T>(defaultValue?: T | (() => T)): T {
  return typeof defaultValue === 'function' ? (<any>defaultValue)() : <any>defaultValue;
}

/** @description use this only for functions or types that don't have an explicit primitive type. You can always pass null as the default value to the proper primitive type function. */
export function getValueOrDefault(value: any, defaultValue: any): any {
  return value != null ? value : getOrBuildDefaultValue(defaultValue);
}

/** @description use this only for functions or types that don't have an explicit primitive type. You can always pass null as the default value to the proper primitive type function. */
export function getValueOrNull(value: any): any {
  return getValueOrDefault(value, null);
}

export function isNullOrEmpty(value: any): boolean {
  return value == null || (value.length != null && value.length === 0);
}
