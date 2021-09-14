import { Columns } from 'react-bulma-components';
import InterestCard from './InterestCard';
import './IntroPage.scss';

// Represents my interests, each array is a row, each item in the sub-array is a col
const interests = [
    [
        {
            interestName: "Cyber Security",
            interestDesc: "Generally speaking, my main research interest falls under the field of cybersecurity. Specific areas of cybersecurity that I am interested in are contained in the following cards"
        },
        {
            interestName:"Operating Systems",
            interestDesc:"One of the largest problems with modern day operating systems is their monolithic nature. I am particularly interested in OSes with a microkernel design, although these are esoteric and have not seen wide adoption, microkernels are (in my opinion) the more secure architecture for operating systems."
        },
        {
            interestName:"Internet of Things",
            interestDesc:"In recent years, the large movement of small internet-connected devices have brought up some new interesting security problems. I am particularly interested in secure IoT operating systems, and secure ecosystems of IoT devices."
        }
    ],
    [
        {
            interestName:"Secure Hypervisors",
            interestDesc:"Secure hypervisors are more than just a technology to run a VM on, one way of providing isolation to various components of a monolithic system is through virtualization; however, providing strong security mechanisms in a hypervisor is no easy task."
        },
        {
            interestName:"Data Science",
            interestDesc:"Data science is no longer a current research interest of mine, in my undergrad I wrote a honours thesis <a href=\"https://service.scs.carleton.ca/content/honours-project-2021-winter-ant-72\">Extending Heterogeneous Recommenders Beyond First-Party Datasets</a>. I still plan on learning about data science; however, I see it as a means to an end."
        }
    ]
];

function IntroPage() {
    // Global as in, it influences all cards. It's not truly global.

    return(
        <div className="intro-container">
            <section className="hero">
                <div className="hero-body hero-container">
                    <h2 className="title">
                    Research Interests
                    </h2>

                    <p className="subtitle">Click one of my interest cards to learn more. 
                    </p>

                    {interests.map((row, i) => {
                        // Render each row
                        return (
                            <Columns key={i + "-colset"}>
                                {row.map((col, j) => {
                                    return (
                                        <Columns.Column key={i + "-" + j + "-col"}>
                                            <InterestCard key={i + "-" + j + "-card"} {...col} />
                                        </Columns.Column>
                                    )
                                })}
                            </Columns>   
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default IntroPage;