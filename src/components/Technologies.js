import { Columns, Container, Heading, Hero, Image } from "react-bulma-components";
import './Technologies.scss';

const tiles = [
    {
        img: 'tux.svg',
        href: 'https://www.kernel.org/'
    },
    {
        img: 'fedora.svg',
        href: 'https://getfedora.org/'
    },
    {
        img: 'c.svg',
        href: 'https://www.youtube.com/watch?v=Fm5Ust7vEhk' // ;) - for the two people that will click this
    },
    {
        img: 'csharp.svg',
        href: 'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'
    },
    {
        img: 'git.svg',
        href: 'https://git-scm.com/'
    },
    {
        img: 'nodejs.svg',
        href: 'https://nodejs.org/'
    },
/*    {
        img: 'react.svg',
        href: 'https://reactjs.org/'
    },
    {
        img: 'angular.svg',
        href: 'https://angular.io'
    },*/
    {
        img: 'python.svg',
        href: 'https://www.python.org/'
    },
    {
        img: 'scala.png',
        href: 'https://www.scala-lang.org/'
    },
    {
        img: 'fish.png',
        href: 'https://fishshell.com/'
    },
    {
        img: 'bash.svg',
        href: 'https://www.gnu.org/software/bash/'
    }
]

// TODO: A11Y
function Technologies() {
    return(
        <div className="technologies-container">
            <Hero>
                <Hero.Body className="hero-container">
                    <Hero.Header>
                        <h2 className="title">Frequently Used Technologies</h2>
                    </Hero.Header>
                    <Columns>
                        {tiles.map((tile,i) => {
                            return(
                                <Columns.Column key={i + "-TechnologyColumn"}>
                                    <a href={tile.href} target="_blank">
                                        <Image className="image-container" 
                                            src={'assets/' + tile.img} 
                                            size="96"/>
                                    </a>
                                </Columns.Column>
                            )
                        })}
                    </Columns>
                </Hero.Body>
            </Hero>
        </div>
    );
}

export default Technologies;