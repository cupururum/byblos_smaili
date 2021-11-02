import {useState} from 'react'
import 'animate.css'

import cookiesPolish from './translation/pl.js'
import cookiesEnglish from './translation/en.js'


function CookiesPolicy() {

    const [ language, setLanguage ] = useState(cookiesPolish)

    const [ isPrivacyDropdownActive, setPrivacyDropdown] = useState(false)
    const [ isCookiesDropdownActive, setCookiesDropdown] = useState(false)

    function chooseLanguageOnClick(language) {
        setLanguage(language)
    }

    function privacyOnClick() {
        setPrivacyDropdown(!isPrivacyDropdownActive)
    }

    function cookiesOnClick() {
        setCookiesDropdown(!isCookiesDropdownActive)
    }
    

    return (
        <div className="pt-52 px-7 mb-16 h-full xsm:px-10 2xl:px-36 4xl:mb-32 ">
            <div className="w-16">    
                <button className="focus:outline-none" onClick={() => chooseLanguageOnClick(cookiesEnglish)}> EN &rarr; </button>
                <button className="focus:outline-none" onClick={() => chooseLanguageOnClick(cookiesPolish)}> PL &rarr; </button>
            </div>
            <div className="overflow-hidden ">
                <button className="focus:outline-none" onClick={privacyOnClick}>
                    <h1 className={`inline-block py-4 text-introTextDesk text-left transition text-black  duration-700 ease-in-out transform ${isPrivacyDropdownActive ? 'text-btn-color-hover' : ''} `}> {language.privacyPolicy.header}</h1>
                    <div className={`inline-block w-4 h-4 ml-5  border-b-2 border-l-2 mb-2 border-black  transition duration-700 ease-in-out  transform ${isPrivacyDropdownActive ? 'border-btn-color-hover mb-0 translate-y-2 rotate-135' : '-rotate-45'}  `}></div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${isPrivacyDropdownActive ? 'h-216' : 'h-0'}`}>

                        {isPrivacyDropdownActive ? 
                                
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
            <div className="overflow-hidden ">
                <button className="focus:outline-none" onClick={cookiesOnClick}>
                    <h1 className={`inline-block py-4 text-introTextDesk text-left transition text-black  duration-700 ease-in-out transform ${isCookiesDropdownActive ? 'text-btn-color-hover' : ''} `}> {language.cookiesPolicy.header}</h1>
                    <div className={`inline-block w-4 h-4 ml-5  border-b-2 border-l-2 mb-2 border-black  transition duration-700 ease-in-out  transform ${isCookiesDropdownActive ? 'border-btn-color-hover mb-0 translate-y-2 rotate-135' : '-rotate-45'}  `}></div>
                </button>
                <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${isCookiesDropdownActive ? 'h-216' : 'h-0'}`}>

                            {isCookiesDropdownActive ? 
                                
                                <div className="animate__animated animate__slideInDown"> 
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
                            : 
                                
                                    <div className=" animate__animated animate__slideOutUp "> 
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
                        
                            }



                </div>

            </div>

        </div>
    )
}

export default CookiesPolicy
