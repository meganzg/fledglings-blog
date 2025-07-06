import React from 'react';
import Footer from '../components/Footer';
import './Art.css';


function About() {
    return (
        <div>
            <div>
            <p className="MainReadHeader">About</p>
            <hr className="my-divider" />
            <div className='text'>
            <p className='heading'>Mission Statement</p>
            <p>fledglings is a kaleidoscopic student-run literary blog dedicated to showcasing and uplifting the work of emerging authors 
                aged 18-25. We hope to craft a space for writers to share their creative work without feeling limited by genre, tradition, 
                or convention. We also aspire to forge, with fledgings, a record of what young people are thinking, feeling, and hoping at 
                this moment in time. Make us cry, make us laugh, make us gasp — give us something to escape into!</p>
            <p>Any bigotry or hateful language towards a targeted group is unacceptable, and will not be published by 
                fledglings. Here at fledglings, our aim is to create a nurturing environment where writers can learn and 
                grow, void of prejudice or discrimination of any kind. If you are concerned that your piece may violate some of 
                these criteria, please reach out to the editorial board at fledglingsmag@gmail.com</p>
            
            <br></br>
            <p className='heading'>Contact</p>
            <p>Please email your work to fledglingsmag@gmail.com with the subject line “Fledglings Submission – [Genre, First Name Last Name]”. Check our “Submit” page for submission guidelines.</p>
            <p>Contact us at fledglingsmag@gmail.com for any questions or issues you may have.</p>
            <p>Feel free to follow us Twitter, Facebook, and Tumblr at @fledglingsmag.</p>
            <p>Please note: We do not accept work that includes machine-generated text.</p>

            <br></br>
            <p className='heading'>Masthead</p>
            <p>Shem is a rising Junior at Rice University currently studying English. He is the Editor-in-Chief for fledglings and will make you a mixtape at the slightest provocation.</p>
            <p>Caitlyn is a rising Junior at Rice University currently studying English. She is a Co-Director of Copy Editing for fledglings and could not tell you the color of anything in The Amazing Spider-Man 2. </p>
            <p>Lana is a rising Junior at Rice University currently studying English and Asian Studies. She is the Director of Communications for fledglings and is the happiest when napping.</p>
            <p>Sarah is a rising Junior at Rice University currently studying English. She is the Layout Editor for fledglings and really hopes there is money in the publishing industry.</p>
            <p>Anna is a rising Junior at Rice University currently studying English. She is a Co-Director of Copy Editing for fledglings and wishes she was a lighthouse keeper.</p>
                
            </div>
        </div>
            <Footer />
        </div>
    );
}

export default About;