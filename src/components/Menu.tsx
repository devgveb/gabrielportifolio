const Menu = () =>{
    return(
        <nav className="w-full">
            <div className="container mx-auto flex items-center justify-between border-bottom">
                <div className="pt-5 pb-5">
                    <a>Gabriel Belo</a>
                    <p>Analista de TI | Desenvolvedor</p>
                </div>

                <nav className="pl-5 pr-5">
                    <ul className="flex items-center pt-5 pb-5 ">
                        <li className="pr-10"><a>Início</a></li>
                        <li className="pr-10"><a>Sobre Min</a></li>
                        <li className="pr-10"><a>Serviços</a></li>
                        <li className="pr-10"><a>Projetos</a></li>
                        <li className="pr-10"><a>Tecnologias</a></li>
                        <li className="pr-10"><a>Contato</a></li>
                    </ul>
                </nav>


            </div>
        </nav>
    )
}

export default Menu