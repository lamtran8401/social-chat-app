import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

type fallbackRenderProps = {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

const Fallback = ({ error, resetErrorBoundary }: fallbackRenderProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  )
}

const onError = (error: Error, info: { componentStack: string }) => {
  console.log(error, info)
}

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={Fallback}
      onError={onError}
      resetKeys={[children]}>
      {children}
    </ReactErrorBoundary>
  )
}

export { ErrorBoundary }
