import { GithubIcon, LinkedinIcon } from "@/app/components/Icons/index";

const HomeBanner = () => {
  return (
    <section className="p-6 lg:p-10 border rounded-md  border-blue-100/10 max-xl:mx-3">
      <h1 className="text-3xl font-bold">Hello World !</h1>

      <p className="text-md lg:text-lg text-gray-400 py-4">
        Ben <strong>Muhammed ERDAL</strong>, Yazılım Geliştiricisiyim.
        <br />
        Bu Web sayfasında, Yazılım ve Faydalı Olabilecek birçok içeriği
        barındıran yazılar paylaşıyorum.
      </p>

      <div className="flex text-gray200 max-sm:justify-center max-sm:mt-2">
        <a
          href="https://github.com/coderdal"
          className="mr-3 hover:text-white transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammederdal/"
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
      </div>
    </section>
  );
};

export default HomeBanner;
