import { GithubIcon, LinkedinIcon } from "@/app/components/Home/icons";

const HomeBanner = () => {
  return (
    <section className="p-6 lg:p-10 border rounded-md bg-blue-300/5 border-blue-100/10">
      <h1 className="text-3xl font-bold">Bloguma Hoşgeldin !</h1>

      <p className="text-md lg:text-lg text-gray-400 py-4">
        Ben <strong>Muhammed ERDAL</strong>, Yazılım Geliştiricisiyim. Front-end
        ve Back-end uygulamaları geliştirme konusunda deneyimliyim.
        <br />
        Bu Web sayfasında, kodlama ve faydalı bulduğum birçok içeriği barındıran
        yazılar paylaşıyorum.
      </p>

      <div className="flex text-gray-300">
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
