const configuredBase = import.meta.env.BASE_URL ?? '/';

export const basePath = configuredBase === '/'
  ? ''
  : `/${configuredBase.replace(/^\/+|\/+$/g, '')}`;

export const withBase = (path: string): string => {
  if (!path.startsWith('/') || path.startsWith('//') || !basePath) {
    return path;
  }

  if (path === basePath || path.startsWith(`${basePath}/`) || path.startsWith(`${basePath}#`)) {
    return path;
  }

  return `${basePath}${path}`;
};
