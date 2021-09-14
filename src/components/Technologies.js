import { Columns, Hero, Image } from "react-bulma-components";
import { chunkArray } from "../Utils";
import './Technologies.scss';

const tiles = [
    {
        img: 'tux.svg',
        alt: 'Linux logo',
        href: 'https://www.kernel.org/'
    },
    {
        img: 'fedora.svg',
        alt: 'Fedora logo',
        href: 'https://getfedora.org/'
    },
    {
        img: 'c.svg',
        alt: 'C language logo',
        href: 'https://www.youtube.com/watch?v=Fm5Ust7vEhk' // ;) - for the two people that will click this
    },
    {
        img: 'csharp.svg',
        alt: 'C# language logo',
        href: 'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'
    },
    {
        img: 'git.svg',
        alt: 'Git version control logo',
        href: 'https://git-scm.com/'
    },
    {
        img: 'nodejs.svg',
        alt: 'Node.JS logo',
        href: 'https://nodejs.org/'
    },
    { // icons look like crap
        img: 'react.svg',
        alt: 'ReactJS logo',
        href: 'https://reactjs.org/'
    },
    {
        img: 'angular.svg',
        alt: 'AngularJS logo',
        href: 'https://angular.io'
    },
    {
        img: 'python.svg',
        alt: 'Python logo',
        href: 'https://www.python.org/'
    },
    {
        img: 'scala.png',
        alt: 'Scala logo',
        href: 'https://www.scala-lang.org/'
    },
    {
        img: 'fish.png',
        alt: 'Fish logo',
        href: 'https://fishshell.com/'
    },
    {
        img: 'bash.svg',
        alt: 'Bash logo',
        href: 'https://www.gnu.org/software/bash/'
    },
    {
        img: 'latex.svg',
        alt: 'LaTeX logo',
        href: 'https://www.latex-project.org/'
    }
];

// TODO: A11Y
function Technologies() {
    const KEY = "Tech-";
    function transpose(array) {
        return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
    }

    // Seperate the tiles into smaller rows
    const rows = transpose(chunkArray(tiles, 4));

    // Build the columns
    const columns = rows.map((tiles, i) => {
        return (
            <Columns.Column size={2} key={KEY + "Col" + i}>
                {tiles.map((tile,j) => {
                    if (tile == null) 
                        return (<div key={KEY + "Empty-" + i + "-" + j} />)

                    return(
                        <a href={tile.href} 
                            target="_blank" 
                            rel="noreferrer" 
                            key={KEY + "Tile" + i + "-" + j}>
                            <Image
                                key={KEY + "Img" + i + "-" + j}
                                alt={tile.alt} 
                                src={"assets/" + tile.img} />
                        </a>
                    )
                })}
            </Columns.Column>
        )
    })
    
    return(
        <div className="technologies-container">
            <Hero key="Technologies-Hero">
                <Hero.Body className="hero-container">
                    <Hero.Header>
                        <h2 className="title">Frequently Used Technologies</h2>
                    </Hero.Header>
                    
                    <Columns 
                        centered={true} 
                        className="image-container"
                        key={KEY + "ColContainer"}>
                        {columns}
                    </Columns>
                </Hero.Body>
            </Hero>
        </div>
    );
}

export default Technologies;