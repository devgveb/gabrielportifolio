import Menu from "@/components/Menu"
import Image from "next/image"
import Profile from "@/assets/img/gabriel_belo.png"
import Projecta from "@/assets/img/portifolio_pizzaria.png"
import Projectb from "@/assets/img/portifolio_pessoal.png"
import Projectc from "@/assets/img/auth_login.png"
import Head from "next/head"
import Link from "next/link"


const Home = () =>{
      return(    
            <main>
                  <>
                        <Head>
                              
                              <title>Gabriel Belo | Meu Portifolio</title>
                              <meta name="description" content="Bem-vindo ao meu portfólio! Aqui você conhece um pouco sobre mim, minha trajetória e meus trabalhos na área de tecnologia." />
                              <meta name="robots" content="index,follow"/>
                              <meta name="author" content="Gabriel Belo, Gveb Networs"/>
                              <meta name="viewport" content="width=device-width, initial-scale=1"/>
                              
                        </Head>
                  
                  </>
                  <Menu /> 

                  <section className="mainContainer mx-auto">
                        <section className="w-full flex items-center flex-wrap flex-row pt-6">

                              <div className="basis-full lg:basis-1/3 lg:order-first ">
                                    
                                          <p className="text-sm">Olá, Eu Sou </p>
                                          <h1 className="text-7xl text-blue-800">Gabriel Belo</h1>
                                          <h3 className="pt-4 text-2xl text-blue-600">Desenvolvedor Full Stack</h3>
                                          <p className="pt-4 text-md">Transformo ideias em aplicações web modernas,eficientes e escaláveis utilizando as melhores tecnologias do mercado.</p>

                                          <div className="pt-6 pb-6 grid grid-cols-2 gap-4">
                                                <a className="bg-blue-500 rounded p-3 mr-5 text-center text-sm lg:text-md">Veja meus Projetos<span><i className="fa-solid fa-chevron-right"></i></span></a>
                                                <a className="border-solid border-white rounded p-3 ml-5">Entre em contato<span><i className="fa-solid fa-user"></i></span></a>
                                          </div>

                                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

                                                      <div className="flex flex-row items-center">
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

                                                <div className="flex flex-row flex-wrap pt-6">

                                                      <div className="basis-1/3 flex items-center"><span><i className="fa-brands fa-github mr-4 fa-2x"></i></span><a>GitHub</a></div>
                                                      <div className="basis-1/3 flex items-center"><span><i className="fa-brands fa-linkedin mr-4 fa-2x"></i></span><a>Linkedin</a></div>
                                                      <div className="basis-1/3 flex items-center"><span><i className="fa-brands fa-instagram mr-4 fa-2x"></i></span><Link href="https://www.instagram.com/gaobr2026/">Instagram</Link></div>

                                                </div>
                                          </div>

                                    
                              </div>
                              <div className="basis-full order-first lg:basis-2/3 relative">

                                    <div className="absolute w-[400px] lg:w-[550px] h-[550px] bg-blue-600  blur-[130px] left-1/2 -translate-x-1/2 -z-10 opacity-50">
                                    
                                    </div>
                                    <div className="relative">
                                          <Image src={Profile} alt="foto_apresentação" className="relative block mr-auto ml-auto z-10 " />
                                    </div>
                              </div>

                        </section>
                  </section>
                  <section className="mainContainer mx-auto flex flex-row flex-wrap pt-6 pb-6">

                        <div className="pr-6 lg:basis-1/3">
                              <h6 className="text-sky-500 text-lg">Sobre Mim</h6>

                              <p className="text-md pt-3">Sou Técnico em Informática na empresa Asa do Brasil e Desenvolvedor Web. Tenho paixão por tecnologia e por criar soluções que realmente fazem a diferença.<br/>Atuo com foco em performancer, experiência do usuario e codigo de qualidade.</p>

                              <div className="pt-10">
                                    <a className="p-4 rounded bg-sky-500 text-white">Saiba mais sobre mim</a>
                              </div>
                        </div>

                        <div className="lg:basis-2/3 pl-10 pt-10">

                              <h3>Tecnologias</h3>

                              <section className="flex flex-row items-center flex-wrap pt-6">

                                    <div className="basis-1/2 lg:basis-1/5">     
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-react fa-4x text-blue-500 z-10"></i>
                                                <p className="z-10">React</p>
                                          </div>
                                    </div>

                                    <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-node-js fa-4x text-lime-500"></i>
                                                <p>Node.Js</p>
                                          </div>
                                    </div>

                                    <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-typescript fa-4x"></i>
                                                <p>Typescript</p>
                                          </div>
                                    </div>

                                    <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center  p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-tailwind-css fa-4x z-10 text-sky-500"></i>
                                                <p>Tailwind Css</p>
                                          </div>
                                    </div>

                                     <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-git-alt fa-4x text-orange-500"></i>
                                                <p>Git</p>
                                          </div>
                                    </div>

                                    <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-html5 fa-4x z-10"></i>
                                                <p>Html</p>
                                          </div>
                                    </div>

                                    <div className="basis-1/2 lg:basis-1/5"> 
                                          <div className="flex flex-col items-center p-5 m-3 bg-gray-500/20 rounded">
                                                <i className="fa-brands fa-css fa-4x z-10"></i>
                                                <p>Css</p>
                                          </div>
                                    </div>

                              </section>
                             
                        </div>

                        
                  </section>

                  <section className="mainContainer pb-6">
                        <h3 className="text-4xl pb-6">Projetos em destaque</h3>

                        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">

                              <section className="shadow-[0_0_6px] shadow-gray rounded">
                                    <div className="w-full">
                                          <Image src={Projecta} alt="Projeto Site de Pizzas" className="rounded w-full object-cover"/>
                                    </div>

                                    <div className="p-5">
                                          <h5 className="text-xl text-bold">Projeto Pizzaria Sabor & Arte</h5>
                                          <p className="text-md pt-3">Site institucional estático moderno para pizzaria com cardápio online e opção de contato.</p>
                                    </div>
                              </section>

                              <section className="shadow-[0_0_6px] shadow-gray rounded">

                                    <div className="w-full">
                                          <Image src={Projectb} alt="Projeto de Site Pessoal" className="rounded w-full object-cover" />
                                    </div>

                                    <div className="p-5">
                                          <h5 className="text-xl text-bold">Portifólio Pessoal</h5>
                                          <p className="text-md pt-3">Site pessoal desenvolvido para apresentar projetos, habilidades e serviços.</p>
                                    </div>

                              </section>

                              <section className="shadow-[0_0_6px] shadow-gray rounded ">
                                    <div className="w-full">
                                          <Image src={Projectc} className="rounded w-full object-cover"  alt="Projeto Sistema de Login" />
                                    </div>

                                    <div className="p-5">
                                          <h5 className="text-xl text-bold">Sistema de Autenticação</h5>
                                          <p className="text-md pt-3">Projeto desenvolvido para demonstrar alguns metodos de autenticação e permissão de usuario.</p>
                                    </div>
                              </section>


                        </div>

                  </section>

                  <footer className="mainContainer border-t-2 border-solid border-gray-500/50">
                              <p className="text-center p-4">© 2026 Gabriel Belo. Todos os direitos reservados.</p>
                  </footer>
            </main>
      )
}

export default Home
