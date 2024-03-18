import Image from "next/image";
import Link from 'next/link';
import Platform_section from './components/Platform_section';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Platform_section />
    </main>
  );
}
