import { Footer } from 'components/footer'
import { Header } from 'components/header'
import 'public/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-fit">
      <Header/>
      <div className="h-fit">{children}</div>
      <Footer/>
    </div>
  )
}

