import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBg from './components/ParticleBg'

export const metadata = {
  title: 'Prottoy Modak — CSE Student & Aspiring Software Developer',
  description: 'Portfolio of Prottoy Modak, CSE student at East West University, Dhaka.',
  openGraph: {
    title: 'Prottoy Modak — Portfolio',
    description: 'CSE Student & Aspiring Software Developer.',
    type: 'website',
  },
}
export const viewport = { themeColor: '#161616' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ParticleBg />
        <a className="skip" href="#main">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}