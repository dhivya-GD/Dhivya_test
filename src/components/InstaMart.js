import {useState} from "react";

const Section = ({title,description,section,isVisible,setisVisible}) => {
    
    return(
        <div className="border border-black p-2 ,m-2">
            <h1>{title}</h1>
            {!isVisible ? (
               <button className="underline font-medium text-lg text-lime-800"
            onClick={()=>{setisVisible(section)}}
            >Show</button>
            
            ) : (
                <div>
                <button className="underline font-medium text-lg text-lime-800"
                onClick={()=>{setisVisible(null)}}
                >Hide</button>
                <div>{description}</div> 
                </div>
            )}
            
        </div>
    );
}


const InstaMart = () => {
    const [visiblesection, setvisiblesection] = useState("about");
    return(
        <div>Instamart page 
        <Section
               title={"About Instamart"}
              
                description={
                    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                }
                isVisible ={visiblesection == "about"}
                section="about"
                setisVisible ={setvisiblesection}
        />
        <Section
               title={"Contact Instamart"}
               
                description={
                    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                }
                isVisible ={visiblesection == "contact"}
                section="contact"
                setisVisible ={setvisiblesection}
        />
        <Section
               title={"Suprise Instamart"}
               
                description={
                    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                }
                isVisible ={visiblesection == "suprise"}
                section="suprise"
                setisVisible ={setvisiblesection}
        />
        </div>
    );
}

export default InstaMart;