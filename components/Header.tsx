import { getServerSession } from 'next-auth';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';
import UserButton from './UserButton';
import { authOptions } from '@/auth';
import Link from 'next/link';
import { MessageSquareIcon, MessagesSquareIcon } from 'lucide-react';
import CreateChatIcon from './CreateChatIcon';


async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />

        <div className='flex flex-1 items-center justify-end space-x-4'>
          {/* LanguageSelect */}
{/*           if logged in should have a link to the chat and the provision to make a new chat */}
          {session ? (
            <>
            <Link href={'/chat'} prefetch={false}>
              <MessagesSquareIcon className='text-black dark:text-white'/>
            </Link>
            <CreateChatIcon />
            </>
          ): (
            <Link href={'/pricing'}>
              Pricing
            </Link>
          )}

          <DarkModeToggle />

          <UserButton session={session}/>
        </div>

        {/* Upgrade banner  */}
      </nav>
    </header>
  )
}

export default Header
