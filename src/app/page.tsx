import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import GalleryDescrition from '@/components/GalleryDescrition'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <GalleryDescrition />
      <Footer />
    </main>
  )
}
