export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '10px' }}>{children}</h1>,
    ...components
  }
}
