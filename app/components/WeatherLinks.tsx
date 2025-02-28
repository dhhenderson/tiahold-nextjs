import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

// TODO: put in DB
const links = [
    {
        name: 'usairnet',
        href: 'https://www.usairnet.com/cgi-bin/launch/code.cgi?sta=KCHA&state=TN',
        icon: PaperAirplaneIcon,
    },
    { 
        name: 'LMFP ramp', 
        href: 'https://www.wunderground.com/dashboard/pws/KGARISIN10', 
        icon: PaperAirplaneIcon
    },
    { 
        name: 'nws ramp', 
        href: 'https://forecast.weather.gov/MapClick.php?lat=34.893&lon=-85.4452&unit=0&lg=english&FcstType=graphical', 
        icon: PaperAirplaneIcon
    },
    { 
        name: 'nws lz', 
        href: 'https://forecast.weather.gov/MapClick.php?lat=34.893&lon=-85.4452&unit=0&lg=english&FcstType=graphical', 
        icon: PaperAirplaneIcon
    },
];

export function WeatherLinks() {
  return (
    <div className="flex py-1 gap-x-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex gap-x-1"
          >
            <LinkIcon className="w-3" />
            <p className="text-sm">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}