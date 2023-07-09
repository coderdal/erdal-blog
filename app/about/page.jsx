import React from "react";
import SocialLink from "@/app/components/Contact/SocialLink";
import { MailIcon, GithubIcon, LinkedinIcon } from "@/app/components/Icons";

const Contact = () => {
  return (
    <main className="w-full max-w-7xl mx-auto min-h-full  flex flex-col mt-4">
      <section className="w-full max-w-7xl mx-auto py-5 lg:py-6 max-xl:px-6 max-sm:px-4 bg-gray-950 rounded px-5">
        <h1 className="font-bold text-3xl max-md:text-2xl">About</h1>

        <p className="text-gray-400 mt-1 text-lg max-md:text-base">
          Merhaba Muhammed ERDAL, yıllardır Yazılım geliştirme ile
          ilgileniyorum.
        </p>

        <p className="text-gray-400 mt-1 text-lg max-md:text-base">
          Bu süreçte Web tenkolojileri başta olmak üzere birçok farklı teknoloji
          ile çalışma deneyimi kazandım.
        </p>

        <p className="text-gray-400 mt-1 text-lg max-md:text-base">
          Güncel & Geçerli Türkçe kaynak bulmanın zor olması ve Open-source
          dünyasına katkı yapmak istememden dolayı bu blog sitesini oluşturdum.
        </p>

        <p className="text-gray-400 mt-1 text-lg max-md:text-base">
          Yeni paylaşımlarda görüşmek üzere :)
        </p>

        <p className="mt-6 text-gray-500 mt-1 text-lg max-md:text-base">
          Aşağıdaki bağlantılardan bana ulaşabilirsiniz !
        </p>

        <div className="mt-6 flex flex-wrap justify-center items-center">
          <SocialLink href="mailto:erdalcodes@gmail.com" className="mr-4">
            <MailIcon size={26} />
          </SocialLink>
          <SocialLink href="https://github.com/coderdal" className="mr-4">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/muhammederdal/">
            <LinkedinIcon />
          </SocialLink>
        </div>
      </section>
    </main>
  );
};

export default Contact;
