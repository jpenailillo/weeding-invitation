import React, { StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './style'
import './index.css';
import mapImage from './map.jpeg';
import header1 from './header-bg.jpg';
import headerBg from './header.png';
import calendar from './calendar.png';

import gallery1 from './assets/galley/1.jpg';
import gallery2 from './assets/galley/2.jpg';
import gallery3 from './assets/galley/3.jpg';
import gallery4 from './assets/galley/4.jpg';
import gallery5 from './assets/galley/5.jpg';
import gallery6 from './assets/galley/6.jpg';
import gallery7 from './assets/galley/7.jpg';
import gallery8 from './assets/galley/8.jpg';
import gallery9 from './assets/galley/9.jpg';
import gallery10 from './assets/galley/15.jpg';
import gallery11 from './assets/galley/11.jpg';
import gallery12 from './assets/galley/12.jpg';


import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './components/ui/drawer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { BookHeart, Building, Gift, MessageCircleHeart, CalendarArrowDown, PartyPopper } from 'lucide-react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const gifts = [
  {
    name: 'Construir nuestro futuro',
    price: 30_000,
		icon: <Building size={60} />,
  },
  {
    name: 'Celebrar nuestro amor',
    price: 40_000,
		icon: <PartyPopper size={60} />,
  },
  {
    name: 'Seguir escribiendo nuestra historia',
    price: 50_000,
		icon: <BookHeart size={60} />,
  },
  {
    name: 'Un regalo especial para nosotros',
    price: 0,
		icon: <MessageCircleHeart size={60} />,
  },
];

const bankAccount = {
	name: 'Yoanalet Godoy',
	accountNumber: '111118658042',
	rut: '18.658.042-7',
	bank: 'TENPO',
	accountType: 'Cuenta vista',
	email: 'juliojaavier@gmail.com'
};

const galleryImages = [
	{ src: gallery1, aspect: '3/2', date: '2024-01-01' },
	{ src: gallery2, aspect: 'square', date: '2024-01-02' },
	{ src: gallery3, aspect: 'square', date: '2024-01-03' },
	{ src: gallery4, aspect: 'square', date: '2024-01-04' },
	{ src: gallery5, aspect: 'square', date: '2024-01-05' },
	{ src: gallery6, aspect: 'square', date: '2024-01-06' },
	{ src: gallery7, aspect: '3/2', date: '2024-01-07' },
	{ src: gallery8, aspect: 'square', date: '2024-01-08' },
	{ src: gallery9, aspect: 'square', date: '2024-01-09' },
	{ src: gallery10, aspect: 'square', date: '2024-01-10' },
	{ src: gallery11, aspect: 'square', date: '2024-01-11' },
	{ src: gallery12, aspect: '3/2', date: '2024-01-12' },
];

const App: React.FC = () => {
	const [gifted, setGifted] = useState(false);
	const [gift, setGift] = useState<typeof gifts[0]>();
	const main = useRef<HTMLDivElement>(null);
	const smoother = useRef<ScrollSmoother>(undefined);

  const scrollTo = () => {
    smoother.current?.scrollTo('.our-story', true, 'top');
  };

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 1.5, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      // ScrollTrigger.create({
      //   trigger: '.box-c',
      //   pin: true,
      //   start: 'center center',
      //   end: '+=300',
      //   markers: true,
      // });
    },
    { scope: main }
  );

	return (
    <div ref={main} id='smooth-wrapper'>
      <div id='smooth-content'>
        <GlobalStyles />
        <div
          className={`h-screen overflow-hidden flex justify-center items-center relative bg-size-[110%] bg-center md:bg-cover bg-position-[center_top_-32vw] md:bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${headerBg})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          data-speed={0.4}
        >
          {/* <img src={headerBg} alt='Map' className='object-cover absolute w-full h-full' /> */}
          <div className='max-w-[1024px] flex flex-col md:flex-row w-full h-full relative z-10'>
            <div className='flex-1'></div>
            <div className='bg-gray-100 pb-10 pt-2 md:py-2 flex-1 flex flex-column justify-center items-center text-[#05685e]'>
              <h1 className='font-[Playfair_Display] font-bold text-5xl'>
                SHE SAID
              </h1>
              <h2 className='font-[Great_Vibes] text-7xl mt-2'>Yes!</h2>
              <img
                src='https://we.shyamjos.com/images/fprint.png'
                alt='Fingerprint'
                className='size-20 md:size-30 mt-2 md:mt-5 mb-4 md:mb-20'
              />

              <div className='flex items-center gap-2 font-bold text-[3.2rem] h-12'>
                <p className='font-[Sacramento]'>Camila</p>
                <p className='font-[Sacramento] text-[4rem]'>&</p>
                <p className='font-[Sacramento]'>Julio</p>
              </div>
              <div className='flex gap-2 border-b-3 border-slate-700 pb-2 text-xl'>
                <p className='font-[Playfair_Display]'>15 NOVIEMBRE 2025</p>
                <div className='border-r-2 border-slate-700'></div>
                <p className='font-[Playfair_Display]'>16:00 PM</p>
              </div>
              <div className='flex gap-2 pb-2 text-2xl'>
                <p className='font-[Playfair_Display]'>RECINTO SOFO, TEMUCO</p>
              </div>
              <button
                onClick={scrollTo}
                className='mt-2 md:mt-6 px-6 text-bold py-4 bg-[#05685e] text-white hover:bg-white hover:text-[#05685e] active:scale-95 transition cursor-pointer rounded-full font-[Playfair_Display] text-xl'
              >
                <span>VER INVITACIÓN</span>
                <CalendarArrowDown className='inline ml-2 mb-1' size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Our Story */}
        <div className='lg:px-10 px-2 our-story relative z-2 bg-white overflow-hidden'>
          <div className='lg:flex lg:items-center lg:py-30 pt-20 pb-5 w-full max-w-[1180px] mx-auto'>
            <div className='flex-1 text-center lg:px-10 px-4'>
              <h1 className='text-[3.2rem] font-bold font-[Sacramento] leading-[1]'>
                Camila & Julio
              </h1>
              <h2 className='text-[1.2rem] font-[Playfair_Display]'>
                NUESTRA HISTORIA DE AMOR
              </h2>
              <p className='text-xl mt-6 font-[Playfair_Display]'>
                Nos conocimos siendo solo unos niños, en 4º básico, compartiendo
                días de colegio sin saber que, entre juegos y sonrisas
                inocentes, ya comenzaba a escribirse algo mucho más grande:
                nuestro destino. <br />
                <br />
                La vida nos llevó por caminos distintos, pero jamás logró
                separarnos del todo. Años después, cuando menos lo esperábamos y
                cuando más lo necesitábamos, nuestros corazones se
                reencontraron... y esta vez, fue para siempre.
                <br />
                <br />
                Desde aquel día, todo cobró sentido. Nos miramos con otros ojos,
                con la madurez de quienes han vivido, pero con la misma ternura
                de aquellos niños que alguna vez compartieron un salón de
                clases. Descubrimos que el amor no siempre llega cuando uno lo
                planea, pero siempre llega en el momento perfecto.
              </p>
            </div>
            <div data-speed={0.85} className='mt-4 lg:mt-0'>
              <div className='lg:aspect-2/3 aspect-square w-100 bg-gray-200 rounded-lg max-w-[100%]'>
                <img
                  className='w-full h-full object-cover rounded-lg'
                  src={header1}
                  alt='Couple'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className='lg:px-10 px-2 pt-14 relative z-3 bg-white'>
          <h1 className='text-[3.2rem] font-bold text-center font-[Sacramento] leading-[0.9] lg:mb-2'>
            Nuestras Aventuras
          </h1>
          <h2
            className='text-[1.2rem] font-[Playfair_Display] text-center mb-10'
            style={{ textTransform: 'uppercase' }}
          >
            Dicen que el amor verdadero siempre encuentra su camino,
            <br /> y nuestra historia es prueba de ello.
          </h2>
          <div
						data-speed={0.95}
						className='relative columns-2 sm:columns-3 gap-4 *:mb-4 @sm:-mb-8 @sm:columns-3 @sm:gap-8 @sm:*:mb-8 max-w-[1180px] mx-auto'>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                className={`aspect-${image.aspect} rounded-lg bg-black/5 object-cover outline -outline-offset-1 outline-black/10 dark:outline-0`}
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Event Details */}
        <div className='lg:px-10 px-2 pt-14 relative z-4 bg-white'>
          <h1 className='text-[3.2rem] font-bold text-center font-[Sacramento] h-17'>
            ¡Acompáñanos!
          </h1>
          <h2 className='text-[1.2rem] font-[Playfair_Display] text-center mb-10'>
            A VIVIR ESTE MOMENTO ESPECIAL
          </h2>
          <div className='lg:flex lg:items-center lg:justify-center gap-10'>
            <div className='w-110 max-w-[100%] text-center'>
              <h2 className='font-[Sacramento] text-[2.5rem] h-9 font-bold'>
                Cuándo
              </h2>
              <p className='text-xl mt-4 font-[Playfair_Display]'>
                EL DÍA SÁBADO, 15 DE NOVIEMBRE DE 2025
              </p>
              <p className='text-lg mt-2 font-[Playfair_Display]'>
                A LAS 16:00 PM
              </p>
              <div className='mt-4 bg-gray-200 rounded-lg lg:h-55'>
                <img
                  className='w-full h-full object-cover rounded-lg'
                  src={calendar}
                />
              </div>
            </div>
            <div className='lg:h-100 lg:bg-gray-200 lg:w-[2px]'></div>
            <div className='w-110 max-w-[100%] text-center mt-10 lg:mt-0'>
              <h2 className='font-[Sacramento] text-[2.5rem] h-9 font-bold'>
                Dónde
              </h2>
              <p className='text-xl mt-4 font-[Playfair_Display]'>
                RECINTO SOFO, TEMUCO
              </p>
              <p className='text-lg mt-2 font-[Playfair_Display]'>
                Av. Alemania 1234, Temuco, Chile
              </p>
              <div className='mt-4 bg-gray-200 rounded-lg overflow-hidden h-55 relative'>
                <a
                  className='relative'
                  target='_blank'
                  href='https://maps.app.goo.gl/KU2CHbWTsySNpALy5'
                >
                  <img
                    className='w-full h-full object-cover rounded-lg'
                    src={mapImage}
                  />
                </a>
                <div className='absolute bottom-0 py-2 left-0 right-0 text-center text-white bg-black/50 px-2 py-1'>
                  Haz click sobre la imagen para ver el mapa
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gifts Section */}
        <div className='pt-6 px-4 lg:p-10 flex flex-column items-center relative z-5 bg-white'>
          <p className='lg:mt-4 text-xl font-[Playfair_Display] text-center w-180 max-w-[100%]'>
            Que sea Dios quien guíe nuestros pasos y bendiga cada instante de
            este amor que nació en la infancia…{' '}
            <span className='font-bold text-xl'>
              y que durará por toda la vida.
            </span>
            <br />
            <br />
            Su presencia en este día tan importante significa mucho para
            nosotros. <br />
            Si además desean tener un detalle, lo recibiremos con todo el cariño
            y agradecimiento del corazón. <br />
            <br />
            ¡Gracias por acompañarnos en este momento tan especial!
          </p>

          <Drawer>
            <DrawerTrigger asChild>
              <button
                onClick={() => {
                  setGifted(false);
                  setGift(undefined);
                }}
                className='my-5 px-6 py-4 bg-[#05685e] text-white hover:bg-white hover:text-[#05685e] active:scale-95 transition cursor-pointer rounded-full font-[Playfair_Display] text-xl'
              >
                LISTA DE REGALOS
              </button>
            </DrawerTrigger>
            <DrawerContent className='font-[Playfair_Display]'>
              {!gifted && (
                <DrawerHeader>
                  <DrawerTitle className='text-[2.4rem] h-11 font-[Sacramento]'>
                    Selecciona un regalo
                  </DrawerTitle>
                  <DrawerDescription className='text-[1.1rem]'>
                    Aquí puedes elegir un regalo para nosotros. ¡Gracias por ser
                    parte de nuestro día especial!
                  </DrawerDescription>
                </DrawerHeader>
              )}
              {gifted && (
                <DrawerHeader>
                  <DrawerTitle className='text-[2.4rem] h-11 font-[Sacramento]'>
                    ¡Muchas gracias!
                  </DrawerTitle>
                </DrawerHeader>
              )}

              <div className='flex flex-column items-center'>
                {gifted && (
                  <div className='flex gap-4 md:flex-row flex-column items-center justify-center w-full max-w-[600px]'>
                    <div className='w-[180px]'>
                      <GiftCard gift={gift!} active={true} onClick={() => {}} />
                    </div>
                    <div className='bg-gray-200 px-6 py-4 rounded-lg w-100 font-[Playfair_Display]'>
                      <h2 className='text-[1.4rem] font-[Playfair_Display] font-bold text-center mb-2'>
                        CUENTA BANCARIA
                      </h2>
                      <p className='text-lg'>
                        <span className='font-bold mr-1'>Nombre:</span>{' '}
                        <span className='font-[Consolas]'>
                          {bankAccount.name}
                        </span>
                      </p>
                      <p className='text-lg'>
                        <span className='font-bold mr-1'>RUT:</span>
                        <span className='font-[Consolas]'>
                          {bankAccount.rut}
                        </span>
                      </p>

                      <p className='text-lg'>
                        <span className='font-bold mr-1'>Banco:</span>
                        <span className='font-[Consolas]'>
                          {bankAccount.bank}
                        </span>
                      </p>
                      <p className='text-lg'>
                        <span className='font-bold mr-1'>Tipo de cuenta:</span>
                        <span className='font-[Consolas]'>
                          {bankAccount.accountType}
                        </span>
                      </p>
                      <p className='text-lg'>
                        <span className='font-bold mr-1'>N de cuenta:</span>
                        <span className='font-[Consolas]'>
                          {bankAccount.accountNumber}
                        </span>
                      </p>
                      <p className='text-lg'>
                        <span className='font-bold mr-1'>Email:</span>
                        <span className='font-[Consolas]'>
                          {bankAccount.email}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                {!gifted && (
                  <Carousel
                    opts={{
                      align: 'center',
                    }}
                    className='w-full max-w-[600px]'
                  >
                    <CarouselContent>
                      {gifts.map((item, index) => (
                        <CarouselItem
                          key={index}
                          className='basis-1/2 lg:basis-1/3 cursor-pointer'
                        >
                          <GiftCard
                            gift={item}
                            active={gift === item}
                            onClick={setGift}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                )}
              </div>

              <DrawerFooter>
                <div className='flex justify-center gap-2'>
                  {!gifted && (
                    <button
                      onClick={() => setGifted(true)}
                      className={`mt-2 w-45 px-4 py-2 flex items-center justify-center ${
                        gift ? 'bg-[#05685e]' : 'bg-gray-400'
                      } text-white rounded-full font-[Playfair_Display] text-bold text-[1.1rem]`}
                    >
                      <span>REGALAR</span>
                      <Gift className='inline ml-2' size={20} />
                    </button>
                  )}
                  {gifted && (
                    <DrawerClose asChild>
                      <button className='my-2 w-60 px-6 py-4 bg-[#05685e] text-white hover:bg-white hover:text-[#05685e] active:scale-95 transition cursor-pointer rounded-full font-[Playfair_Display] text-bold text-[1.1rem]'>
                        LISTO
                      </button>
                    </DrawerClose>
                  )}
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

const GiftCard: React.FC<{
	gift: typeof gifts[0];
	active: boolean;
	onClick: (gift: typeof gifts[0]) => void;
}> = ({ gift, active, onClick }) => {
	return (
    <div
      className={`p-1 ${
        active ? 'bg-[#05685e] text-white' : 'bg-gray-200'
      } rounded-lg shadow-md cursor-pointer px-[4px]`}
      onClick={() => onClick(gift)}
    >
      <div className='flex flex-column aspect-2/3 items-center justify-center'>
        <div className={active ? 'text-white' : 'text-gray-700'}>
          {gift.icon}
        </div>
        <p className='text-[1.2rem] mt-4 text-center font-semibold'>
          {gift.name}
        </p>
        <div
          className={`text-[0.9rem] mt-2 text-center font-semibold font-[Menlo] font-[Consolas] rounded-full ${
            active ? 'bg-white' : 'bg-gray-300'
          } px-3 py-2 text-[#05685e]`}
        >
          {gift.price === 0 ? '?' : `$${gift.price.toLocaleString('es-CL')}`}
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
