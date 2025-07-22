import React from 'react';
import Footer from '../components/Footer';


function Submit() {
    return (
        <div>
            <p className="MainReadHeader">Submit</p>
            <hr className="my-divider" />
            <div className='text'>
                <p>Please email your work to fledglingsmag@gmail.com with the subject line “Fledglings Submission – [Genre, First Name Last Name]”. One candidate may submit up to 3 pieces per genre, but guidelines for word count vary based on the category:</p>
                <p>Fiction: 5000 words maximum per piece</p>
                <p>Poetry: no word limit</p>
                <p>Nonfiction: 2000 words maximum per piece</p>
                <p>Art: no word limit</p>

                <p>For art pieces, please submit a .jpg. For all other genres, please submit a .pdf or Word doc.</p>

                <p>Submissions will be reviewed on a rolling basis, and we’ll email you within 2-3 weeks if your work has been accepted. Thank you for your submissions!</p>

                <p>Please note: We do not accept work that includes machine-generated text.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Submit;