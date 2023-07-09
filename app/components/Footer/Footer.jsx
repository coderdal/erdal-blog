import { TailwindLogo, NextjsLogo } from "@/app/components/Footer/icons";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto min-h-full flex flex-col mt-10 px-2 py-6">
      <div className="bg-zinc-950 rounded-md py-2 text-center">
        <div className="flex justify-center items-center m-3 font-bold">
          Made with
          <span className="mx-2">
            <TailwindLogo className="max-md:h-4 max-md:w-50" />
          </span>
          &
          <span className="mx-2">
            <NextjsLogo className="max-md:h-3 max-md:w-22" />
          </span>
        </div>
        <a
          href="mailto:erdalcodes@gmail.com"
          className="text-gray-400 font-semibold"
        >
          erdalcodes@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
