import React from "react";
// import postgresLogo from "../public/images/png-transparent-postgresql-object-relational-database-oracle-database-freebsd-icon-text-logo-head.png";

export default function Skill({ skillObj }) {
    return (
        <div>
            <div className='skill'>
                {skillObj.skillItems.map((item, idx) => (
                    <ul key={idx}>
                        <li className='skill--item-name'>{item.name}</li>
                        <div className='skill--logo-bar'>
                            <img
                                src={item.logoURL}
                                alt={item.name}
                                className='technology-logo'
                            />
                            <progress
                                max='10'
                                value={item.proficiencyLevel}></progress>
                        </div>
                        {item.other ? (
                            <li className='skill--item-other'>{item.other}</li>
                        ) : null}
                    </ul>
                ))}
            </div>
        </div>
    );
}
