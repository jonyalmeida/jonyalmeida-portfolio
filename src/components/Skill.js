import React from "react";
// import postgresLogo from "../public/images/png-transparent-postgresql-object-relational-database-oracle-database-freebsd-icon-text-logo-head.png";

export default function Skill({ skillObj }) {
    return (
        <div>
            <div className='skill'>
                {skillObj.skillItems.map((item, idx) => (
                    <div key={idx}>
                        <div className='skill--item-name'>{item.name}</div>
                        {item.other ? (
                            <div className='skill--item-other'>
                                {item.other}
                            </div>
                        ) : null}
                        <div className='skill--logo-bar'>
                            <img
                                src={item.logoURL}
                                alt={item.name}
                                className='technology-logo'
                            />
                            {/* <progress
                                max='10'
                                value={item.proficiencyLevel}></progress> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
