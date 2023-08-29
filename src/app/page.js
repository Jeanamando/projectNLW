import { title } from "process"
import Header from "./components/header"
import Section from "./components/sections"
export default function Home() {
  return (
    <div className="w-auto h-auto">
      <Header/>
    <main className="w-max-[580px] w-[90%] my-[32px] mx-auto">
    <Section 
    title="Meus jogos"
    subtitle="Games que eu curto jogar"/>
    <Section 
    title="Canais e Streamers"
    subtitle="Lives que não perco"/>
    </main>
    
    
    </div>
    
  )
}
