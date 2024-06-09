import React from 'react';
import { PhoneAndroid, PhoneForwarded, PlusOneRounded, UpdateSharp } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddIcon from '@mui/icons-material/Add';
interface Contact {
    name: string;
    role: string;
    phone: string;
    email: string;
    lastSeen: string;
    location: string;
    nps: number;
}

const contacts: Contact[] = [
    {
        name: 'Olive John',
        role: 'Chief Executive',
        phone: '888-625-9-53',
        email: 'olivejohn@flywiresolution.com',
        lastSeen: '2 days ago',
        location: 'New York, US',
        nps: 6.6,
    },
    {
        name: 'Giana Hawkins',
        role: 'CSM',
        phone: '711-1833-76',
        email: 'g.hawkins@random.com',
        lastSeen: '1 day ago',
        location: 'New York, US',
        nps: 8,
    },
    {
        name: 'Jared Daughas',
        role: 'Analyst',
        phone: '789-234-345',
        email: 'jarddauglas@flywiresolution.com',
        lastSeen: '4 days ago',
        location: 'New York, US',
        nps: 2,
    },
];

const UserDashboardContact: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto px-4">
            <div className="p-4 rounded-md">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Contacts</h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <div>
                            <UpdateSharp />
                        </div>
                        <div>
                        <AddIcon />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    {contacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-md p-4"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-lg">{contact.name}</h3>
                                    <p className="text-gray-500">{contact.role}</p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-md font-semibold ${
                                        contact.nps >= 6
                                            ? 'bg-green-100 text-green-800'
                                            : contact.nps >= 4
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    NPS {contact.nps}
                                </span>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-center mt-2">
                                <div className="flex items-center space-x-2">
                                    <LocalPhoneIcon />
                                    <p>{contact.phone}</p>
                                </div>
                                <p>{contact.email}</p>
                            </div>
                            <div className="flex justify-between items-center mt-2 text-gray-600">
                                <p>Last seen {contact.lastSeen}</p>
                                <p>{contact.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserDashboardContact;
