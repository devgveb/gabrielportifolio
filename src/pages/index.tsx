import Menu from "@/components/Menu"
import Image from "next/image"
import Profile from "@/assets/img/gabriel_belo.png"


const Home = () =>{
      return(
            <main>
                  <Menu /> 

                  <section className="container mx-auto grid grid-cols-3 pt-6">

                        <div className="col-span-1">
                              <div className="">
                                    <p className="text-sm">Olá, Eu Sou </p>
                                    <h1 className="text-7xl text-blue-800">Gabriel Belo</h1>
                                    <h3 className="pt-4 text-2xl text-sky-600">Analista de TI | Desenvolvedor</h3>
                                    <p className="pt-4 text-md">Atuo na área de tecnologia da comunicação, transformando ideias em soluções reais através da programação. Meu objetivo é simplificar processos, otimizar serviços e criar sistemas dinâmicos que gerem impacto direto no dia a dia.</p>

                                    <div className="pt-6 pb-6 flex items-center">
                                          <a className="flex-1/2 bg-blue-500 rounded p-3 mr-5 text-center">Veja meus Projetos<span><i className="fa-solid fa-chevron-right"></i></span></a>
                                          <a className="flex-1/2 border-solid border-white rounded p-3 ml-5">Entre em contato<span><i className="fa-solid fa-user"></i></span></a>
                                    </div>

                                    <div>
                                          <h3 className="text-lg">Conecte-se comigo</h3>

                                          <div className="grid grid-cols-3 pt-6">

                                                <div><span><i className="fa-brands fa-instagram mr-3 "></i></span><a>Instagram</a></div>
                                                <div><span><i className="fa-brands fa-facebook mr-3"></i></span><a>Facebook</a></div>
                                                <div><span><i className="fa-brands fa-youtube mr-3"></i></span><a>YouTube</a></div>

                                          </div>
                                    </div>

                              </div>
                        </div>
                        <div className="col-span-2 relative">

                              <div className="absolute w-[550px] h-[550px] bg-blue-600  blur-[130px] left-1/2 -translate-x-1/2 -z-10 opacity-50">
                              
                              </div>
                              <div className="relative">
                                    <Image src={Profile} className="relative block mr-auto ml-auto z-10" />
                              </div>
                        </div>

                  </section>

                  <section className="container mx-auto grid grid-cols-3 pt-6">

                        <div className="">
                              <h6 className="text-sky-500 text-lg">Sobre Mim</h6>

                              <p className="text-md pt-3">Atualmente atuo como Técnico em Informática na empresa Asa do Brasil, prestando suporte na área de Tecnologia da Informação. Minhas responsabilidades incluem a implementação de novos processos e a busca contínua por melhorias operacionais, contribuindo para a otimização dos fluxos lógicos e para o aumento da eficiência organizacional. <br /> Paralelamente, atuo como Desenvolvedor Web de forma independente, oferecendo serviços particulares no desenvolvimento de aplicações modernas e escaláveis. Possuo experiência com tecnologias como Node.js, React, Tailwind CSS e TypeORM, criando soluções eficientes e alinhadas às necessidades de cada cliente.</p>

                              <div className="pt-5">
                                    <ul>
                                          <li><span><i className="fa-solid fa-check"></i></span><a className="pl-5">Trabalho em Equipe</a></li>
                                          <li><span><i className="fa-solid fa-check"></i></span><a className="pl-5">Resolução em problemas</a></li>
                                          <li><span><i className="fa-solid fa-check"></i></span><a className="pl-5">Foco em resultados</a></li>
                                    </ul>
                              </div>
                        </div>

                        <div></div>

                        <div></div>

                  </section>
            </main>
      )
}

export default Home