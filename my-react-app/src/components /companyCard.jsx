import React from 'react';

const CompanyCard = ({ name, category, address, phone, imageUrl }) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <img
                    src={imageUrl}
                    alt={`${name}'s profile`}
                    className="profile-img"
                />
            </div>
            <div className="profile-body">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-category">{category}</p>
                <p className="profile-address">{address}</p>
                <p className="profile-phone">{phone}</p>
            </div>
            <div className="profile-footer">
                <button className="connect-button">Connect</button>
            </div>
        </div>
    );
};

export default CompanyCard;
