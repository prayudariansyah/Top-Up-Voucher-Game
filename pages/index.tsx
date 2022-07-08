import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import styles from '../styles/Home.module.css';
import Navbar from '../components/organisms/navbar';
import MainBanner from '../components/organisms/MainBanner/mainBanner';import Transactions from './member/transactions';
import TransactionStep from '../components/organisms/TransactionStep/transactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story/inde';
import Footer from '../components/organisms/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
