export function ServerContent({ children }) {
  console.log('Rendering ServerContent. This should only happen during build or in SPA mode.')

  return <div>{children}</div>
}
