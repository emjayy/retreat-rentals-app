import Link from 'next/link';
import { MdHolidayVillage } from "react-icons/md";
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <MdHolidayVillage  className='!w-6 !h-6' />
      </Link>
    </Button>
  );
}
export default Logo;
