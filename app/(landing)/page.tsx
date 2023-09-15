import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from "next/link";

const LandingPage = () => {
  return (
      <div>
        <h1>Landing Page</h1>
        <Link href="/sign-in">
          <button>Sign-in</button>
        </Link>
        <Link href="/sign-up">
          <button>Register</button>
        </Link>
      </div>
  )
}

export default LandingPage;
