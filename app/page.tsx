import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 pt-10 p-2 sm:p-14">

      <section className="relative bg-cover bg-center bg-no-repeat text-center"
        style={{backgroundImage: `url('/A_detailed_image_of_a_handgun_with_intricate_engra.jpg')`}}>
        <div className="relative z-10 flex flex-col justify-center items-center p-16">
          <svg width="213" height="31" viewBox="0 0 213 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8 30.6C11.9867 30.6 10.26 30.28 8.62 29.64C6.98 28.9867 5.52667 28.0267 4.26 26.76C3.00667 25.4933 2.01333 23.9267 1.28 22.06C0.56 20.1933 0.2 18.04 0.2 15.6C0.2 12.4133 0.806667 9.70667 2.02 7.48C3.24667 5.24 4.88667 3.53333 6.94 2.36C9.00667 1.18667 11.2933 0.599999 13.8 0.599999C17.5067 0.599999 20.42 1.46 22.54 3.18C24.66 4.9 26.08 7.33333 26.8 10.48L21.24 11.28C20.72 9.6 19.8667 8.26 18.68 7.26C17.5067 6.24667 16 5.73333 14.16 5.72C12.3333 5.69333 10.8133 6.08666 9.6 6.9C8.38667 7.71333 7.47333 8.86666 6.86 10.36C6.26 11.8533 5.96 13.6 5.96 15.6C5.96 17.6 6.26 19.3333 6.86 20.8C7.47333 22.2667 8.38667 23.4067 9.6 24.22C10.8133 25.0333 12.3333 25.4533 14.16 25.48C15.4 25.5067 16.52 25.2933 17.52 24.84C18.5333 24.3867 19.3867 23.6733 20.08 22.7C20.7733 21.7267 21.2667 20.48 21.56 18.96H17V14.76H27.36C27.3867 14.9333 27.4067 15.24 27.42 15.68C27.4333 16.12 27.44 16.3733 27.44 16.44C27.44 19.2 26.88 21.6467 25.76 23.78C24.64 25.9133 23.06 27.5867 21.02 28.8C18.98 30 16.5733 30.6 13.8 30.6ZM29.4484 30V1.2H48.2484V6.28H34.8884V12.44H45.8484V17.52H34.8884V24.92H48.2484V30H29.4484ZM51.0422 30V1.2H56.5622L69.0822 20.4V1.2H74.6022V30H69.0822L56.5622 10.8V30H51.0422ZM90.5428 30.6C87.6628 30.6 85.1761 29.9733 83.0828 28.72C81.0028 27.4667 79.3961 25.7133 78.2628 23.46C77.1428 21.2067 76.5828 18.5867 76.5828 15.6C76.5828 12.6133 77.1428 9.99333 78.2628 7.74C79.3961 5.48667 81.0028 3.73333 83.0828 2.48C85.1761 1.22667 87.6628 0.599999 90.5428 0.599999C93.8495 0.599999 96.6228 1.42 98.8628 3.06C101.116 4.7 102.703 6.92 103.623 9.72L98.1428 11.24C97.6095 9.49333 96.7095 8.14 95.4428 7.18C94.1761 6.20667 92.5428 5.72 90.5428 5.72C88.7161 5.72 87.1895 6.12667 85.9628 6.94C84.7495 7.75333 83.8361 8.9 83.2228 10.38C82.6095 11.86 82.3028 13.6 82.3028 15.6C82.3028 17.6 82.6095 19.34 83.2228 20.82C83.8361 22.3 84.7495 23.4467 85.9628 24.26C87.1895 25.0733 88.7161 25.48 90.5428 25.48C92.5428 25.48 94.1761 24.9933 95.4428 24.02C96.7095 23.0467 97.6095 21.6933 98.1428 19.96L103.623 21.48C102.703 24.28 101.116 26.5 98.8628 28.14C96.6228 29.78 93.8495 30.6 90.5428 30.6ZM106.027 30V1.2H111.467V14.48L122.427 1.2H129.067L117.027 15.4L129.827 30H122.947L111.467 16.88V30H106.027ZM130.628 30V1.2H142.788C143.068 1.2 143.441 1.21333 143.908 1.24C144.388 1.25333 144.815 1.29333 145.188 1.36C146.908 1.62667 148.315 2.19333 149.408 3.06C150.515 3.92666 151.328 5.02 151.848 6.34C152.368 7.64667 152.628 9.10667 152.628 10.72C152.628 13.1333 152.028 15.2 150.828 16.92C149.628 18.6267 147.748 19.68 145.188 20.08L142.788 20.24H136.068V30H130.628ZM146.868 30L141.188 18.28L146.788 17.2L153.028 30H146.868ZM136.068 15.16H142.548C142.828 15.16 143.135 15.1467 143.468 15.12C143.801 15.0933 144.108 15.04 144.388 14.96C145.121 14.76 145.688 14.4267 146.088 13.96C146.488 13.48 146.761 12.9533 146.908 12.38C147.068 11.7933 147.148 11.24 147.148 10.72C147.148 10.2 147.068 9.65333 146.908 9.08C146.761 8.49333 146.488 7.96667 146.088 7.5C145.688 7.02 145.121 6.68 144.388 6.48C144.108 6.4 143.801 6.34667 143.468 6.32C143.135 6.29333 142.828 6.28 142.548 6.28H136.068V15.16ZM167.785 30.6C164.905 30.6 162.418 29.9733 160.325 28.72C158.245 27.4667 156.638 25.7133 155.505 23.46C154.385 21.2067 153.825 18.5867 153.825 15.6C153.825 12.6133 154.385 9.99333 155.505 7.74C156.638 5.48667 158.245 3.73333 160.325 2.48C162.418 1.22667 164.905 0.599999 167.785 0.599999C170.665 0.599999 173.145 1.22667 175.225 2.48C177.318 3.73333 178.925 5.48667 180.045 7.74C181.178 9.99333 181.745 12.6133 181.745 15.6C181.745 18.5867 181.178 21.2067 180.045 23.46C178.925 25.7133 177.318 27.4667 175.225 28.72C173.145 29.9733 170.665 30.6 167.785 30.6ZM167.785 25.48C169.612 25.5067 171.132 25.1133 172.345 24.3C173.558 23.4867 174.465 22.3333 175.065 20.84C175.678 19.3467 175.985 17.6 175.985 15.6C175.985 13.6 175.678 11.8667 175.065 10.4C174.465 8.93333 173.558 7.79333 172.345 6.98C171.132 6.16667 169.612 5.74667 167.785 5.72C165.958 5.69333 164.438 6.08666 163.225 6.9C162.012 7.71333 161.098 8.86666 160.485 10.36C159.885 11.8533 159.585 13.6 159.585 15.6C159.585 17.6 159.885 19.3333 160.485 20.8C161.098 22.2667 162.012 23.4067 163.225 24.22C164.438 25.0333 165.958 25.4533 167.785 25.48ZM183.738 30V1.2H188.618L198.138 20.32L207.658 1.2H212.538V30H207.458V12.8L199.098 30H197.178L188.818 12.8V30H183.738Z"
              fill="url(#paint0_linear_211_602)" />
            <defs>
              <linearGradient id="paint0_linear_211_602"
                x1="107.5"
                y1="-13"
                x2="107.5"
                y2="42"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stopColor="white" />
                <stop offset="0.5" stopColor="#D6D6D6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-10 space-y-4 text-zinc-300">
            <p>Mekanik ile kimyanın, el işçiliği ile makine sisteminin buluştuğu bir ortamda, 2013 yılında Cengiz Genç
              tarafından İstanbul’da kurulan Genç Krom Kaplama, yaklaşık 20 yıllık sektörel deneyimi ile parlak sert
              krom,
              delik içi sert krom, siyah krom, akımsız nikel kaplama ve silah tamir & bakım hizmetleri sunmaktadır.</p>
            <p>Atölyemizde, yerli ve yabancı üretim ruhsatlı silahlarınız, markası ve modeli ne olursa olsun, mesleğinde
              uzman ekibimiz tarafından tamir edilip, çalışır hale getirilmektedir. Bu sayede silahlarınızın performansı
              en
              üst seviyeye çıkartılmaktadır.</p>
            <p>Genç Krom Kaplama, Türkiye&apos;de bilinen en iyi firmalar arasında yer alma vizyonuyla, müşterilerinin
              kaplama
              ihtiyaçlarına özel çözümler üreterek hizmet vermektedir. Firmamızın önceliği, kaliteli hammadde ile
              nitelikli
              işçiliği buluşturarak yüksek müşteri memnuniyeti sağlamaktır.</p>
            <blockquote className="pt-10 pl-4 text-yellow-300 italic">
              <p>Genç Krom Kaplama, müşteri memnuniyetini ön planda tutarak, yüksek kaliteli hizmet sunmayı ilke
                edinmiştir.
                Siz de bizimle iletişime geçerek, krom kaplama, nikel kaplama ve silah tamir & bakım hizmetlerimizden
                faydalanabilirsiniz.</p>
            </blockquote>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-90"></div>
      </section>

      <div className="grid grid-cols-2 w-full gap-3">
        <Image className="w-full h-full"
          src="/WhatsApp Image 2024-05-23 at 22.31.13.jpeg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/WhatsApp Image 2024-05-23 at 22.31.13 (1).jpeg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/WhatsApp Image 2024-05-23 at 22.31.14.jpeg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/WhatsApp Image 2024-05-23 at 22.31.14 (1).jpeg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/WhatsApp Image 2024-05-23 at 22.31.24.jpeg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/An_image_of_metal_rods_with_chrome_plating,_arrang.jpg"
          alt="GencKrom"
          width={600}
          height={600} />
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.9627152203038!2d28.80834774245209!3d41.082030935406166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf7eb126720b%3A0x7e4afe6253c09319!2sGen%C3%A7%20Krom%20Kaplama!5e0!3m2!1sen!2sus!4v1716678915277!5m2!1sen!2sus"
        style={{
          border: 0,
          width: '100%',
          height: '600px'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="flex flex-wrap w-full text-center">
        <div className="w-full p-5 sm:w-2/6">
          <p className="uppercase"><strong>Adres</strong></p>
          <p>İOSB Galvanoteknik San. Sit. E/1 Blok Krom Sk. NO:7 BAŞAKŞEHİR/İST.</p>
        </div>
        <div className="w-full p-5 sm:w-2/6">
          <p className="uppercase"><strong>Telefon</strong></p>
          <a href="tel:+905366098496">+90 (536) 609 84 96</a>
        </div>
        <div className="w-full p-5 sm:w-2/6">
          <p className="uppercase"><strong>Mail</strong></p>
          <p><a href="mailto:info@genckromkaplama.com">info@genckromkaplama.com</a></p>
        </div>
      </div>
      <div className="p-6 border border-gray-800 shadow-sm rounded-md space-y-4 text-zinc-300">
        <h1 className="text-2xl font-semibold mb-1">Cengiz Genç Kimdir?</h1>
        <p>Genç Krom Kaplama’nın kurucusu Cengiz Genç, 1994 yılında Bartın Ulus Endüstri Meslek Lisesi Tesviye
          bölümünden mezun oldu. Askerlik görevinden önce dört yıl boyunca özel bir şirkette silah tamiri ve imalatı
          yaptı. 1999 yılında İstanbul’da özel bir firmada krom kaplamacı ve silah tamircisi olarak çalışmaya başladı ve
          burada 15 yıl boyunca aralıksız hizmet verdi.</p>
        <p>19 yıllık bilgi birikimi ve tecrübesiyle, 2013 yılında kendi atölyesini kurarak “Bismillah” dedi. Şu anda
          parlak sert krom, delik içi sert krom, siyah krom, akımsız nikel ve silah tamir & bakım hizmetleri
          vermektedir.</p>
        <p>Genç Krom Kaplama, her zaman müşteri memnuniyetini ön planda tutarak, sektöründe en iyiler arasında yer
          almayı hedeflemektedir. Sizleri de hizmetlerimizden yararlanmak üzere atölyemize bekliyoruz.</p>
      </div>
      <div className="grid grid-cols-2 w-full gap-3">
        <Image className="w-full h-full"
          src="/A_close-up_image_of_a_different_ring_with_a_black_.jpg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/A_close-up_image_of_a_ring_with_black_stone_and_in.jpg"
          alt="GencKrom"
          width={600}
          height={600} />
        <Image className="w-full h-full"
          src="/Close-up_image_of_metal_cylinders_with_chrome_plat.jpg"
          alt="GencKrom"
          width={600}
          height={600} />
      </div>
    </main>
  )
    ;
}
