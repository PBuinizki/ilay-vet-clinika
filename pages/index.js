import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import {
  ArrowDown,

  ArrowUpRight,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Star,
  Heart,
  Stethoscope,
  Microscope,
  Syringe,
  Hospital,
  HeartPulse,
  Scan,
  ShieldCheck,
  Pill,
  Check,
  PawPrint
} from 'lucide-react';

import clinic from '@/data/clinic';

const iconMap = {
  stethoscope: Stethoscope,
  microscope: Microscope,
  syringe: Syringe,
  hospital: Hospital,
  'heart-pulse': HeartPulse,
  scan: Scan,
  'shield-check': ShieldCheck,
  pill: Pill
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ['О клинике', '#about'],
    ['Услуги', '#services'],
    ['Галерея', '#gallery'],
    ['Контакты', '#contacts']
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-symbol">
            <PawPrint size={23} strokeWidth={1.7} />
          </span>
          <span className="logo-text">
            ИЛАЙ
            <small>ВЕТЕРИНАРНАЯ КЛИНИКА</small>
          </span>
        </a>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="mobile-phone" href={`tel:${clinic.phones.mainLink}`}>
            Позвонить
          </a>
        </nav>

        <a
          className="header-phone"
          href={`tel:${clinic.phones.mainLink}`}
        >
          <Phone size={16} />
          <span>{clinic.phones.main}</span>
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            ВЕТЕРИНАРНАЯ КЛИНИКА · ОРЁЛ
          </div>

          <h1>
            Здоровье питомца —
            <span> наша общая забота.</span>
          </h1>

          <p className="hero-description">
            Ветеринарная помощь, диагностика и забота
            о тех, кто делает нашу жизнь счастливее.
          </p>

          <div className="hero-actions">
            <a href={`tel:${clinic.phones.mainLink}`} className="button button-primary">
              Записаться на приём
              <ArrowUpRight size={19} />
            </a>

            <a href="#services" className="button button-outline">
              Наши услуги
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <div className="rating-block">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={15} fill="currentColor" />
                ))}
              </div>
              <div>
                <strong>{clinic.rating.value}</strong>
                <span> / 5 на Яндекс Картах</span>
              </div>
            </div>

            <div className="hero-divider" />

            <div className="hero-note">
              <Clock size={18} />
              <div>
                <strong>24/7</strong>
                <span>Стационар</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            <Image
              src="/images/patient-dog.jpg"
              alt="Собака — пациент ветеринарной клиники Илай"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="cover-image"
            />
          </div>

          <div className="hero-image-label">
            <div className="label-icon">
              <Heart size={19} />
            </div>
            <div>
              <strong>С любовью к животным</strong>
              <span>Каждый питомец важен</span>
            </div>
          </div>

          <div className="hero-number">01 / 04</div>
          <div className="hero-decoration" />
        </div>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <Reveal className="section-heading">
          <span className="eyebrow">01 — О КЛИНИКЕ</span>
          <h2>
            Забота, которая
            <span> начинается с внимания.</span>
          </h2>
        </Reveal>

        <Reveal className="about-text">
          <p>
            «Илай» — ветеринарная клиника в Орловской области.
            Здесь можно получить ветеринарную помощь,
            пройти лабораторную диагностику и воспользоваться
            профилактическими услугами для домашних животных.
          </p>

          <p>
            Для питомцев также предусмотрен круглосуточный стационар.
          </p>

          <a href="#contacts" className="text-link">
            Найти клинику
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>

      <div className="container about-image-wrap">
        <div className="about-image">
          <Image
            src="/images/clinic-entrance.jpg"
            alt="Вход в ветеринарную клинику Илай"
            fill
            sizes="100vw"
            className="cover-image"
          />
        </div>
        <div className="about-image-caption">
          <span>ИЛАЙ</span>
          <span>ОРЛОВСКАЯ ОБЛАСТЬ</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-heading section-heading-row">
          <div>
            <span className="eyebrow">02 — НАПРАВЛЕНИЯ РАБОТЫ</span>
            <h2>
              Всё необходимое
              <span> для здоровья питомца.</span>
            </h2>
          </div>
          <p>
            Основные направления ветеринарной помощи
            и профилактики для домашних животных.
          </p>
        </Reveal>

        <div className="services-grid">
          {clinic.services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal key={service.id} className="service-card">
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href={`tel:${clinic.phones.mainLink}`}
                  aria-label={`Уточнить информацию: ${service.title}`}
                  className="service-link"
                >
                  <ArrowUpRight size={19} />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Price() {
  return (
    <section className="price-section">
      <div className="container price-grid">
        <Reveal>
          <span className="eyebrow eyebrow-light">03 — СТОИМОСТЬ</span>
          <h2>
            Начните с
            <span> первичного приёма.</span>
          </h2>
          <p>
            Позвоните нам, чтобы уточнить подробности
            и узнать о стоимости необходимых процедур.
          </p>
        </Reveal>

        <Reveal className="price-card">
          <span className="price-label">ПЕРВИЧНЫЙ ПРИЁМ</span>
          <div className="price-value">
            {clinic.price.value.toLocaleString('ru-RU')} <small>₽</small>
          </div>
          <div className="price-line" />
          <div className="price-description">
            <Check size={18} />
            Стоимость согласно карточке клиники
          </div>
          <a href={`tel:${clinic.phones.mainLink}`} className="button button-light">
            Уточнить и записаться
            <ArrowUpRight size={19} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="section advantages-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">04 — НАШ ПОДХОД</span>
          <h2>
            Важные детали
            <span> имеют значение.</span>
          </h2>
        </Reveal>

        <div className="advantages-list">
          {clinic.advantages.map((item) => (
            <Reveal className="advantage-item" key={item.number}>
              <span className="advantage-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight className="advantage-arrow" size={22} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <Reveal className="section-heading section-heading-row">
          <div>
            <span className="eyebrow">05 — ГАЛЕРЕЯ</span>
            <h2>
              Наши маленькие
              <span> пациенты.</span>
            </h2>
          </div>
          <p>
            Несколько фотографий клиники и её четвероногих пациентов.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {clinic.gallery.map((item, index) => (
            <Reveal
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.src}
            >
              <div className="gallery-image">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="gallery-caption">
                <span>{item.title}</span>
                <span>0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const el = mapRef.current;
    if (el === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section contacts-section" id="contacts">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">06 — КОНТАКТЫ</span>
          <h2>
            Мы рядом,
            <span> когда это важно.</span>
          </h2>
        </Reveal>

        <div className="contacts-grid">
          <div className="contacts-info">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <span>АДРЕС КЛИНИКИ</span>
                <p>{clinic.address.full}</p>
                <a href={clinic.address.mapUrl} target="_blank" rel="noreferrer">
                  Построить маршрут <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <span>ВЕТЕРИНАРНАЯ КЛИНИКА</span>
                <a href={`tel:${clinic.phones.mainLink}`}>
                  {clinic.phones.main}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Hospital />
              </div>
              <div>
                <span>СТАЦИОНАР · КРУГЛОСУТОЧНО</span>
                <a href={`tel:${clinic.phones.hospitalLink}`}>
                  {clinic.phones.hospital}
                </a>
                <p>{clinic.schedule.hospital}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock />
              </div>
              <div>
                <span>РЕЖИМ РАБОТЫ</span>
                <p>Стационар работает круглосуточно.</p>
                <p>График приёма уточняйте по телефону.</p>
              </div>
            </div>
          </div>

          <div className="map-wrapper" ref={mapRef}>
            {mapVisible && (
              <iframe
                title="Расположение ветеринарной клиники Илай"
                src="https://yandex.ru/map-widget/v1/?ll=36.062424%2C52.942052&z=15&pt=36.062424%2C52.942052%2Cpm2rdm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            )}
            <a
              href={clinic.address.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="map-open"
            >
              Открыть Яндекс Карты
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <a href="#home" className="logo footer-logo">
          <span className="logo-symbol">
            <PawPrint size={23} />
          </span>
          <span className="logo-text">
            ИЛАЙ
            <small>ВЕТЕРИНАРНАЯ КЛИНИКА</small>
          </span>
        </a>

        <p>
          Забота о здоровье тех,
          кто нам дорог.
        </p>

        <a href={`tel:${clinic.phones.mainLink}`} className="footer-call">
          Связаться с нами <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ветеринарная клиника «Илай»</span>
        <a href="#home">Наверх ↑</a>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (window.location.hash === '') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ветеринарная клиника «Илай» — Орловская область</title>
        <meta
          name="description"
          content="Ветеринарная клиника Илай. Первичный приём, вакцинация, лабораторная диагностика, стационар 24/7. Телефон: +7 (920) 806-72-67."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f7f2" />
        <meta property="og:title" content="Ветеринарная клиника Илай" />
        <meta
          property="og:description"
          content="Ветеринарная помощь и круглосуточный стационар."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Price />
        <Advantages />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: clinic
    }
  };
}
