//IMPORTS
    import app from '../styles/app.module.css'
    import Image from 'next/image'
    import kelson_photo from '../assets/kelson_photo.svg'
//IMPORTS

export default function App(){
    return(
        <div id={app.body}>
            <header id={app.header}>
                <h1 id={app.title}>PORTFOLIO</h1>
                <nav>
                    <div id={app.burger}>
                        <div id={app.burger1}></div>
                        <div id={app.burger2}></div>
                        <div id={app.burger3}></div>
                    </div>
                </nav>
            </header>
            <main id={app.main}>
                <CardPerson
                    personPhoto={kelson_photo}
                    idBoxContent={app.boxContent}
                    idPhotonPerson={app.kelsonPhoto}
                    idTitleName={app.titleKeslon}
                    idTitleDescriotion={app.descriotionKelson}
                />
            </main>
        </div>
    )
}


interface CardPenson{
    personPhoto: any
    idBoxContent: string
    idPhotonPerson: string
    idTitleName: string
    idTitleDescriotion: string
}

export function CardPerson(CardPerson: CardPenson){
    return(
        <div id={app.card}>
            <Image
                id={CardPerson.idPhotonPerson}
                src={CardPerson.personPhoto}
                alt='Photon Kelson'
            />
            <div id={CardPerson.idBoxContent}>
                <h1 id={CardPerson.idTitleName}>Kelson Camargo</h1>
                <h4 id={CardPerson.idTitleDescriotion}>Programmer / network administrator</h4>
            </div>
        </div>
    )
}