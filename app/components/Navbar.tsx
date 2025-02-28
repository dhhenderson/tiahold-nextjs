import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { LifebuoyIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    // lg:container lg:mx-auto - sets max-width (and centers the container on larger screens?)
    // px-[20px] - sets padding for smaller screens
    // w-full - sets width to 100% - but is this needed? is it default already?
    // items-center - centers items vertically
    // justify-between - spaces items out evenly
    <nav className="flex w-full items-center justify-between px-5 py-[16px] lg:container lg:mx-auto">

      <div className="flex items-center gap-x-2">
        <GlobeAltIcon className="size-6 text-blue-500" />
        <span>TIAHOLD</span>
      </div>

      <div>
        <LifebuoyIcon className="size-6 text-blue-500" />
      </div>

    </nav>
  );
}