type Props = (string | false | undefined)[];

/**
 * Joins class names
 * @param classNames
 * @returns String
 * @example clsx('class1', 'class2', 'class3')
 */
const classJoin = (...args: Props): string =>
  args
    .filter((cls) => typeof cls === 'string' && !!cls)
    .map((cls) => (cls ? cls.trim() : ''))
    .join(' ');

export { classJoin as cj };
