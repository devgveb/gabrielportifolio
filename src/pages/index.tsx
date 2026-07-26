import Menu from "@/components/Menu"
import Image from "next/image"
import Profile from "@/assets/img/gabriel_belo.png"
import Head from "next/head"
import Link from "next/link"


const Home = () =>{
      return(
            <main>
                  <>
                        <Head>
                              <title>Gabriel Belo | Meu Portifolio</title>
                              <link type="description" content="Bem-vindo ao meu portfólio! Aqui você conhece um pouco sobre mim, minha trajetória e meus trabalhos na área de tecnologia." />
                              <meta name="robots" content="index,follow"/>
                        </Head>
                  
                  </>
                  <Menu /> 

                  <section className="container mx-auto grid grid-cols-1 pt-6 lg:grid-cols-3 pt-6">

                        <div className="col-span-1 md:order-first">
                              <div className="">
                                    <p className="text-sm">Olá, Eu Sou </p>
                                    <h1 className="text-7xl text-blue-800">Gabriel Belo</h1>
                                    <h3 className="pt-4 text-2xl text-blue-600">Desenvolvedor Full Stack</h3>
                                    <p className="pt-4 text-md">Transformo ideias em aplicações web modernas,eficientes e escaláveis utilizando as melhores tecnologias do mercado.</p>

                                    <div className="pt-6 pb-6 flex items-center">
                                          <a className="flex-1/2 bg-blue-500 rounded p-3 mr-5 text-center">Veja meus Projetos<span><i className="fa-solid fa-chevron-right"></i></span></a>
                                          <a className="flex-1/2 border-solid border-white rounded p-3 ml-5">Entre em contato<span><i className="fa-solid fa-user"></i></span></a>
                                    </div>

                                    <div className="grid grid-cols-3 pt-6">
                                          
                                          <div className="flex items-center">
                                                <section><i className="fa-solid fa-code fa-2x"></i></section>
                                                <section className="pl-4">
                                                      <h3 className="text-xl text-blue-500">1+</h3>
                                                      <p className="text-sm">Ano de Experiência</p>
                                                </section>
                                          </div>

                                          <div className="flex items-center">
                                                <section><i className="fa-brands fa-connectdevelop fa-2x"></i></section>
                                                <section className="pl-4">
                                                      <h3 className="text-xl text-blue-500">8+</h3>
                                                      <p className="text-sm">Tecnologias</p>
                                                </section>
                                          </div>

                                          <div className="flex items-center">
                                                <section><i className="fa-solid fa-handshake-angle fa-2x"></i></section>
                                                <section className="pl-4">
                                                      <h3 className="text-xl text-blue-500">100%</h3>
                                                      <p className="text-sm">Comprometimento</p>
                                                </section>
                                          </div>


                                    </div>

                                    <div>
                                          <h3 className="text-ms pt-10">Conecte-se comigo</h3>

                                          <div className="grid grid-cols-3 pt-6">

                                                <div className="flex items-center"><span><i className="fa-brands fa-github mr-4 fa-2x"></i></span><a>GitHub</a></div>
                                                <div className="flex items-center"><span><i className="fa-brands fa-linkedin mr-4 fa-2x"></i></span><a>Linkedin</a></div>
                                                <div className="flex items-center"><span><i className="fa-brands fa-instagram mr-4 fa-2x"></i></span><Link href="https://www.instagram.com/gaobr2026/">Instagram</Link></div>

                                          </div>
                                    </div>

                              </div>
                        </div>
                        <div className="order-first col-span-2 relative">

                              <div className="absolute w-[550px] h-[550px] bg-blue-600  blur-[130px] left-1/2 -translate-x-1/2 -z-10 opacity-50">
                              
                              </div>
                              <div className="relative">
                                    <Image src={Profile} alt="foto_apresentação" className="relative block mr-auto ml-auto z-10" />
                              </div>
                        </div>

                  </section>

                  <section className="container mx-auto grid  grid-cols-1 lg:grid-cols-3 pt-6">

                        <div className="pr-6">
                              <h6 className="text-sky-500 text-lg">Sobre Mim</h6>

                              <p className="text-md pt-3">Sou Técnico em Informática na empresa Asa do Brasil e Desenvolvedor Web. Tenho paixão por tecnologia e por criar soluções que realmente fazem a diferença.<br/>Atuo com foco em performancer, experiência do usuario e codigo de qualidade.</p>

                              <div className="pt-10">
                                    <a className="p-4 rounded bg-sky-500 text-white">Saiba mais sobre mim</a>
                              </div>
                        </div>

                        <div className="col-span-2 pl-10">

                              <h3>Tecnologias</h3>

                              <section className="grid grid-cols-5 pt-6">

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-react fa-4x text-blue-500 z-10"></i>
                                          <p className="z-10">React</p>
                                    </div>

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-node-js fa-4x text-lime-500"></i>
                                          <p>Node.Js</p>
                                    </div>

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-typescript fa-4x"></i>
                                          <p>Typescript</p>
                                    </div>

                                    <div className="flex flex-col items-center  p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-tailwind-css fa-4x z-10 text-sky-500"></i>
                                          <p>Tailwind Css</p>
                                    </div>

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-git-alt fa-4x text-orange-500"></i>
                                          <p>Git</p>
                                    </div>

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-html5 fa-4x z-10"></i>
                                          <p>Html</p>
                                    </div>

                                    <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                          <i className="fa-brands fa-css fa-4x z-10"></i>
                                          <p>Css</p>
                                    </div>

                              </section>
                             
                        </div>

                        <div className="pl-6">
                              <h6 className="text-sky-500 text-lg">SERVIÇOS</h6>

                              <div className="flex items-center">

                                    <section>
                                          <i className="fa-solid fa-screwdriver-wrench text-sky-600 fa-2x m-6"></i>
                                    </section>
                                    <section>
                                          <h6 className="text-white text-md">Manutenção e Suporte</h6>
                                          <p>Suporte técnico e manutenção para garantir a performance do seu sistema.</p>                                    
                                    </section>
                              </div>

                              <div className="flex items-center">

                                    <section>
                                          <i className="fa-brands fa-whmcs text-sky-500 fa-2x m-6"></i>
                                    </section>
                                    <section>
                                          <h6 className="text-white text-md">Integrações & APIs</h6>
                                          <p>Suporte técnico e manutenção para garantir a performance do seu sistema.</p>                                    
                                    </section>
                              </div>

                              <div className="flex items-center">

                                    <section>
                                          <i className="fa-solid fa-terminal text-sky-500 fa-2x m-6"></i>
                                    </section>
                                    <section>
                                          <h6 className="text-white text-md">Desenvolvimento Web</h6>
                                          <p>Criação de sites e aplicações web modernas e responsivas.</p>                                    
                                    </section>
                              </div>


                        </div>

                  </section>
            </main>
      )
}

export default Home
