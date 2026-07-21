import Profile from "@/assets/img/gabriel_belo.png"
import Image from "next/image";
import Menu from "@/components/Menu";

const Home = () =>{

  return (
                  <>
            <Menu />
            <section className="grid grid-cols-3 container-content mx-auto">

              <div className="p-10">
                    <li className="text-lg">Olá eu sou</li>
                    <h1 className="text-6xl">Gabriel Belo</h1>
                    <h3 className="text-2xl text-sky-300">Analista de TI | Desenvolvedor</h3>
                    <p className="pb-10 pt-6">Atuo na área de tecnologia da comunicação, transformando ideias em soluções reais através da programação. Meu objetivo é simplificar processos, otimizar serviços e criar sistemas dinâmicos que gerem impacto direto no dia a dia. </p>
                    <a className="bg-red-500 w-auto p-3 rounded">Veja meus projetos<span><i className="fa-solid fa-chevron-right"></i></span></a>

                    <section className="pt-10">
                        <p className="">Conecte-se comigo</p>
                        <div className="grid grid-cols-3">
                              <div><li className="flex items-center pt-5"><span><i className="fa-brands fa-instagram"></i></span><a>Instagram</a></li></div>
                              <div><li className="flex items-center pt-5"><span><i className="fa-brands fa-facebook"></i></span><a>Facebook</a></li></div>
                              <div><li className="flex items-center pt-5"><span><i className="fa-brands fa-youtube"></i></span><a>YouTube</a></li></div>
                        </div>

                    </section>

                    <section className="pt-15">
                        <h3 className="text-2xl text-sky-300">Sobre Mim</h3>

                        <p className="pt-3">Atualmente atuo como Técnico em Informática na empresa Asa do Brasil, prestando suporte na área de Tecnologia da Informação. Minhas responsabilidades incluem a implementação de novos processos e a busca contínua por melhorias operacionais, contribuindo para a otimização dos fluxos lógicos e para o aumento da eficiência organizacional. <br /> Paralelamente, atuo como Desenvolvedor Web de forma independente, oferecendo serviços particulares no desenvolvimento de aplicações modernas e escaláveis. Possuo experiência com tecnologias como Node.js, React, Tailwind CSS e TypeORM, criando soluções eficientes e alinhadas às necessidades de cada cliente.</p>
                    </section>
              </div>

            <div className="col-span-2 relative "><div className="
            absolute
            w-[400px]
            h-[600px]
            bg-blue-500
            rounded-full
            -z-10
            blur-3xl
            left-50
            top-10
            opacity-50
            "></div>
            

            <img src={Profile.src} className="relative z-10 block left-50"/></div>

            
         <div class="w-80 bg-gray-800 p-3 rounded-lg">
  <div class="flex items-center justify-between mb-1">
    <div class="flex items-center gap-2">
      <div class="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
        TS
      </div>
      <span class="text-white text-sm">TypeScript</span>
    </div>
    <span class="text-white text-sm">90%</span>
  </div>

  <div class="w-full bg-gray-700 h-2 rounded-full">
    <div class="bg-red-500 h-2 rounded-full w-[60%]"></div>
  </div>
</div>
        </section>
        </>
  )

}

export default Home