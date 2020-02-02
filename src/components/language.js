import React from "react"
import { changeLocale } from "gatsby-plugin-intl"

const Language = () => {
    return (
        <div>
            <a
                onClick={() => changeLocale('it')}
                style={{cursor: `pointer`, marginRight: 10, fontSize: 14}}
            >
                Italiano
            </a>
            |
            <a
                onClick={() => changeLocale('en')}
                style={{cursor: `pointer`, marginLeft: 10, fontSize: 14}}
            >
                English
            </a>
        </div>
    )
}

export default Language