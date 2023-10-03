import { Button } from '@/common/Button'
import { Container } from '@/common/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-daintree-800">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-daintree-800 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-daintree-800">
          Sorry, we couldn't find this page for you.
        </p>
        <Button href="/" variant="primary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
