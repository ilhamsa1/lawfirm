import Button from "@/components/core/button";
import Container from "@/components/core/container";
import Typography from "@/components/core/typography";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero text-neutral-content bg-neutral xl:bg-inherit relative">
      <div className="absolute h-128 w-full clip-path-custom bg-neutral z-0"></div>
      <Container gutter>
        <div className="align-middle items-center justify-center flex xl:hidden"  style={{ maxWidth: 159, margin: '0 auto' }}>
          <Image width={159} height={74} layout="responsive"  src="/images/logo.png" alt="logo" className="relative xl:absolute left-0 top-0" />
        </div>
      {/* bg didnt show */}
        <div className="flex lg:flex-row w-full items-center flex-col-reverse xl:flex-row gap-10 relative">
        <Image width={200} height={99} src="/images/logo.png" alt="logo" className="hidden xl:block xl:absolute left-0 top-10" />
          {/* Text Content */}
          <div className="flex-1">
            <div className="max-w-lg">
              <Typography variant="h1" className="text-white text-center md:text-left" >
                Tenang dan nyaman, properti Anda terlindungi.
              </Typography>
              <p className="py-6 text-lg text-center md:text-left">
                Kami berkomitmen membantu Anda melindungi properti Anda. Mulai dari
                perizinan hingga sengketa, Kami akan menemani Anda. Konsultasikan
                dengan Kami.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  // href="https://wa.me/your-number"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  // onClick={() => {
                  //   console.log('ss')
                  // }}
                  variant="contained"
                  size="large"
                  className="w-full md:w-auto"  
                  // className="btn btn-success text-white flex items-center"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-1.52588e-05 32L2.24932 23.7827C0.861318 21.3773 0.131985 18.6507 0.133318 15.8547C0.137318 7.11333 7.25065 0 15.9907 0C20.232 0.00133333 24.2133 1.65333 27.208 4.65067C30.2013 7.648 31.8493 11.632 31.848 15.8693C31.844 24.612 24.7307 31.7253 15.9907 31.7253C13.3373 31.724 10.7227 31.0587 8.40665 29.7947L-1.52588e-05 32ZM8.79598 26.924C11.0307 28.2507 13.164 29.0453 15.9853 29.0467C23.2493 29.0467 29.1667 23.1347 29.1707 15.8667C29.1733 8.584 23.284 2.68 15.996 2.67733C8.72665 2.67733 2.81332 8.58933 2.81065 15.856C2.80932 18.8227 3.67865 21.044 5.13865 23.368L3.80665 28.232L8.79598 26.924ZM23.9787 19.6387C23.88 19.4733 23.616 19.3747 23.2187 19.176C22.8227 18.9773 20.8747 18.0187 20.5107 17.8867C20.148 17.7547 19.884 17.688 19.6187 18.0853C19.3547 18.4813 18.5947 19.3747 18.364 19.6387C18.1333 19.9027 17.9013 19.936 17.5053 19.7373C17.1093 19.5387 15.832 19.1213 14.3187 17.7707C13.1413 16.72 12.3453 15.4227 12.1147 15.0253C11.884 14.6293 12.0907 14.4147 12.288 14.2173C12.4667 14.04 12.684 13.7547 12.8827 13.5227C13.084 13.2933 13.1493 13.128 13.2827 12.8627C13.4147 12.5987 13.3493 12.3667 13.2493 12.168C13.1493 11.9707 12.3573 10.02 12.028 9.22667C11.7053 8.45467 11.3787 8.55867 11.136 8.54667L10.376 8.53333C10.112 8.53333 9.68265 8.632 9.31998 9.02933C8.95732 9.42667 7.93332 10.384 7.93332 12.3347C7.93332 14.2853 9.35332 16.1693 9.55065 16.4333C9.74932 16.6973 12.344 20.7 16.3187 22.416C17.264 22.824 18.0027 23.068 18.5773 23.2507C19.5267 23.552 20.3907 23.5093 21.0733 23.408C21.8347 23.2947 23.4173 22.4493 23.748 21.524C24.0787 20.5973 24.0787 19.804 23.9787 19.6387Z" fill="#25D366"/>
                  </svg>
                  Konsultasi Sekarang
                </Button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className=" mt-8 lg:mt-0">
            {/* <div className="overflow-hidden aspect-auto top-0 right-0 absolute md:static"> */}
            <div className="overflow-hidden aspect-auto top-0 right-0 mt-8 md:static">
              <Image 
                src="/hero.png"
                alt="hero"
                width={531.94}
                height={116}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
