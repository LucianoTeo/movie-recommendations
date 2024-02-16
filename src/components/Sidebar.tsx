import { NavLink } from "./NavLink";
import { SignIn } from '@/components/icons';

import { ChartPie, Binoculars } from '@/components/icons'

export default function Sidebar() {
  return (
    <aside className="m-5 rounded-xl flex-col w-fit hidden sm:flex p-8 bg-blue-100">
      <header>
        <h1>Movies Recomendation!</h1>
      </header>

      <nav className="mt-8 flex flex-col gap-y-4">
        <NavLink label="Home" href="/" icon={<ChartPie size={20} />} />
        <NavLink label="Discover" href="/discover" icon={<Binoculars size={20} />} />
      </nav>
      
      <footer className='mt-auto'>
        <button className="flex items-center gap-4">
          Sign in
          <SignIn size={20} />
        </button>
      </footer>
    </aside>
  )
}