import {useState} from 'react'
import 'animate.css'

import cookiesPolish from './translation/pl.js'
import cookiesEnglish from './translation/en.js'


function CookiesPolicy() {

    const [ language, setLanguage ] = useState(cookiesPolish)

    const [ isPolicyDropdownActive, setPolicyDropdown] = useState(false)

    function chooseLanguageOnClick(language) {
        setLanguage(language)
    }

    function privacyPolicyOnClick() {
        setPolicyDropdown(!isPolicyDropdownActive)
    }

    let arrowStyle
    let headerStyle
    let styleHidden = "h-0"

    if (isPolicyDropdownActive ) {
        arrowStyle = "group-focus:mb-0 group-focus:translate-y-2 group-focus:rotate-135"
        headerStyle = ""
        
    } 

    return (
        <div className="pt-52 px-7 mb-16 xsm:px-10 2xl:px-36 4xl:mb-32 ">
            <div className="w-16">    
                <button className="focus:outline-none" onClick={() => chooseLanguageOnClick(cookiesEnglish)}> EN &rarr; </button>
                <button className="focus:outline-none" onClick={() => chooseLanguageOnClick(cookiesPolish)}> PL &rarr; </button>
            </div>
            <div className="overflow-hidden ">
                <button className="group focus:outline-none" onClick={privacyPolicyOnClick}>
                    <h1 className={`inline-block py-4 text-introTextDesk text-left transition duration-700 ease-in-out text-black transform group-focus:text-btn-color-hover `}> {language.privacyPolicy.header}</h1>
                    <div className={`inline-block w-4 h-4 ml-5  border-b-2 border-l-2 transition duration-700 ease-in-out mb-2 border-black group-focus:border-btn-color-hover transform -rotate-45 group-focus:mb-0 group-focus:translate-y-2 group-focus:rotate-135`}></div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${isPolicyDropdownActive ? 'h-224' : 'h-0'}`}>
                {isPolicyDropdownActive ? 
                
                    <div className="animate__animated animate__slideInDown"> 
                            <ol className="ml-4 list-decimal text-justify">
                            {language.privacyPolicy.policyItems.map((policy) => 
                                    <li className="mb-8" key={policy.id} >
                                        { Array.isArray(policy.content) ? (
                                            <div>
                                                <p> {policy.description} </p>
                                                <ul>
                                                    {policy.content.map((item) =>
                                                        <li key={item.id}> {item.id}. {item.text} </li>
                                                    )}
                                                </ul>
                                            </div>


                                        ) : (
                                            policy.content
                                        )
                                    }
                                    </li>
                            )}
                        </ol>
                    </div>
                   : 
                    
                    <div className=" animate__animated animate__slideOutUp "> 
                    <ol className="ml-4 list-decimal text-justify ">
                    {language.privacyPolicy.policyItems.map((policy) => 
                            <li className="mb-8" key={policy.id} >
                                { Array.isArray(policy.content) ? (
                                    <div>
                                        <p> {policy.description} </p>
                                        <ul>
                                            {policy.content.map((item) =>
                                                <li key={item.id}> {item.id}. {item.text} </li>
                                            )}
                                        </ul>
                                    </div>


                                ) : (
                                    policy.content
                                )
                            }
                            </li>
                    )}
                </ol>
            </div>
           
                }
                </div>
               
                
            </div>
            <h1 className="py-4 text-introTextDesk text-btn-color-hover">{language.cookiesPolicy.header}</h1>
            <p className="text-justify mb-4"> {language.cookiesPolicy.description} </p>
            <ul>
                {language.cookiesPolicy.policyParagraphs.map((paragraph) => 
                    <div className="mb-8" key={paragraph.id}>
                        <p className="font-bold">{paragraph.header}</p>
                        { paragraph.description ? (
                            <p className="text-justify"> {paragraph.description} </p>
                        ): (
                            null
                        )}
                        <ul className=" text-justify ">
                            {paragraph.paragraphItems.map((paragraphItem) => 
                                <li key={paragraphItem.id}>
                                    {paragraphItem.text}
                                 </li>
                            )}
                        </ul>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default CookiesPolicy
